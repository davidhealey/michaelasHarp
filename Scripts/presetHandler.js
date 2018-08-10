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

    const var presetNames = ui.getPresetNames(); //Get array of preset names

    //Persistent panel for loading preset data
    //const var pnlPreset = ui.setupControl("pnlPreset", {itemColour:Theme.PRESET, itemColour2:Theme.PRESET});
    const var pnlPreset = Content.getComponent("pnlPreset");
    pnlPreset.setControlCallback(pnlPresetCB);

    //Preset menu - not persistent
    const var cmbPreset = ui.comboBoxPanel("cmbPreset", paintRoutines.comboBox, Theme.CONTROL_FONT_SIZE, presetNames);
    //Content.setPropertiesFromJSON("cmbPreset", {itemColour:Theme.CONTROL1, textColour:Theme.CONTROL_TEXT});
    cmbPreset.setControlCallback(cmbPresetCB);

    //Preset save button
    const var btnSavePreset = ui.momentaryButtonPanel("btnSavePreset", paintRoutines.disk);
    btnSavePreset.setControlCallback(btnSavePresetCB);
  }

  //UI Callbacks
  inline function pnlPresetCB(control, value)
  {
    //Get the internal instrumentName from the preset name
    if (cmbPreset.getValue() < 1) cmbPreset.setValue(1); //Min cmbPreset value is 1
    local presetName = presetNames[cmbPreset.getValue()-1];
    patchName = presetName.substring(presetName.lastIndexOf(": ")+2, presetName.length); //Set global variable

    //Load the preset settings
    loadSampleMaps(patchName); //Load sample maps for current preset
    colourKeys(patchName);
  }

  inline function cmbPresetCB(control, value)
  {
     Engine.loadUserPreset(Engine.getUserPresetList()[value-1]);
  }

  inline function btnSavePresetCB(control, value)
  {
    local presetList = Engine.getUserPresetList();
      
    //Save the current user preset
    if (value == 1)
    {
        Engine.saveUserPreset(presetList[cmbPreset.getValue()-1]);
    }
  }

  //Functions
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
  
    inline function loadSampleMaps(patchName)
    {
        local sampleMap = Manifest.patches[patchName].sampleMap;
        childSynths["sustain"].asSampler().loadSampleMap(sampleMap);
    }
}
