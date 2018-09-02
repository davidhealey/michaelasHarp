/*
    Copyright 2018 David Healey

    This file is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program. If not, see <http://www.gnu.org/licenses/>.
*/

namespace PresetHandler
{
  inline function onInitCB()
  {    
    //Get samplers as child synths
    const var samplerIds = Synth.getIdList("Sampler");
    const var childSynths = {};

    for (id in samplerIds)
    {
      childSynths[id] = Synth.getChildSynth(id);
    }

    //Get array of preset names from manifest
    const var presetNames = [];
    for (k in Manifest.patches)
    {
        presetNames.push(k);
    }

    //Persistent panel for loading preset data
    const var pnlPreset = Content.getComponent("pnlPreset");
    pnlPreset.setControlCallback(pnlPresetCB);
    
    //Preset selection dropdown
    const var cmbPreset = Content.getComponent("cmbPreset");
    Content.setPropertiesFromJSON("cmbPreset", {itemColour:Theme.C4, itemColour2:Theme.C4, textColour:Theme.C6, items:presetNames.join("\n")});
    cmbPreset.setControlCallback(cmbPresetCB);
  }

    //UI Callbacks
    inline function pnlPresetCB(control, value)
    {  
        loadPreset(presetNames[cmbPreset.getValue()-1]);
    }
  
    inline function cmbPresetCB(control, value)
    {
        loadPreset(presetNames[value-1]);
    }
    
    //Functions
    
    /*Function wrapper*/
    inline function loadPreset(name)
    {
        patchName = name; //Set global variable
        loadSampleMaps(patchName); //Load sample maps for current preset
        colourKeys(patchName);        
    }
    
    inline function loadSampleMaps(patchName)
    {
        local sampleMap = Manifest.patches[patchName].sampleMap;
        childSynths["sustain"].asSampler().loadSampleMap(sampleMap);
    }
    
    inline function colourKeys(patchName)
    {
        local range = Manifest.patches[patchName].range;
        
        for (i = 0; i < 128; i++) //Every MIDI note
        {
            if (i < range[0] || i > range[1]) //i is outside max playable range
            {
                Engine.setKeyColour(i, Colours.withAlpha(Colours.white, 0.0)); //Clear key colour
            }
            else
            {
                Engine.setKeyColour(i, Colours.withAlpha(Colours.blue, 0.3)); //Set key colour    
            }
        }
    }
}
