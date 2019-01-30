/*
    Copyright 2018, 2019 David Healey

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
        const var patchNames = [];
        for (k in Manifest.patches)
        {
            patchNames.push(k);
        }

        //Preset name label
        const var lblPreset = Content.getComponent("lblPreset");

        //Patch selection dropdown - hidden from user
        const var cmbPatch = Content.getComponent("cmbPatch");
        cmbPatch.set("items", patchNames.join("\n"));
        cmbPatch.setControlCallback(oncmbPatchControl);

        //Previous and Next preset buttons
        const var btnPreset = [];
        for (i = 0; i < 2; i++)
        {
            btnPreset[i] = Content.getComponent("btnPreset"+i);
            btnPreset[i].setControlCallback(onbtnPresetControl);
        }
    }

    //UI Callbacks
    inline function oncmbPatchControl(control, value)
    {
        local patchName = control.getItemText();
        lblPreset.set("text", Engine.getCurrentUserPresetName());
        loadSampleMaps(patchName);
        colourKeys(patchName);
    }

    inline function onbtnPresetControl(control, value)
    {
        local idx = btnPreset.indexOf(control);
        idx == 0 ? Engine.loadPreviousUserPreset(false) : Engine.loadNextUserPreset(false);
    }

    //Functions
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
                Engine.setKeyColour(i, Colours.withAlpha(Colours.black, 0.5)); //Clear key colour
            }
            else
            {
                Engine.setKeyColour(i, Colours.withAlpha(Colours.white, 0.0)); //Set key colour
            }
        }
        Engine.setKeyColour(24, Colours.withAlpha(Colours.red, 0.3));
        Engine.setKeyColour(26, Colours.withAlpha(Colours.red, 0.3));
    }
}
