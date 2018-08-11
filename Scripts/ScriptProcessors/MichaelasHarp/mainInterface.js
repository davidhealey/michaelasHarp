/*
    Copyright 2018 David Healey

    This file is part of Libre Winds.

    Libre Winds is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    Libre Winds is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with Libre Winds. If not, see <http://www.gnu.org/licenses/>.
*/

include("HISE-Scripting-Framework/libraries/uiFactory.js");

include("manifest.js");
include("theme.js");
include("paintRoutines.js");
include("presetHandler.js");
include("pageHandler.js");
include("header.js");
include("mixer.js");
include("controllerHandler.js");
include("performance.js");
include("settingsWindowJson.js");

Content.makeFrontInterface(650, 375);

reg patchName = "";

//Loop iterators
reg i;
reg j;

//Page background
Content.setPropertiesFromJSON("pnlMain", {itemColour:Theme.PAGE, itemColour2:Theme.PAGE});

//*** GUI ***
Content.setPropertiesFromJSON("pnlMain", {itemColour:Theme.PAGE, itemColour2:Theme.PAGE}); //Main tab background panel

//Settings tab
const var fltSettings = Content.getComponent("fltSettings");
fltSettings.setContentData(SettingsJson.settings);

//Includes initialisation
Header.onInitCB();
PresetHandler.onInitCB();
PageHandler.onInitCB();
Mixer.onInitCB();
ControllerHandler.onInitCB();
Performance.onInitCB();function onNoteOn()
{
    if (Message.getNoteNumber() < Manifest.patches[patchName].range[0] || Message.getNoteNumber() > Manifest.patches[patchName].range[1])
    {
        Message.ignoreEvent(true);
    }    
}
function onNoteOff()
{
	
}
function onController()
{      
    if (Message.getControllerNumber() == 14) //Controls RR on/off
    {
        Footer.onControllerCB();
    }
}
function onTimer()
{
	
}
function onControl(number, value)
{
	
}
