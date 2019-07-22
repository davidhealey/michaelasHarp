/*
    Copyright 2018, 2019 David Healey

    This file is part of Michaela's Harp.

    Michaela's Harp is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    Michaela's Harp is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with Michaela's Harp. If not, see <http://www.gnu.org/licenses/>.
*/

include("manifest.js");
include("presetHandler.js");
include("mixer.js");
include("settings.js");

Content.makeFrontInterface(800, 581);

//Loop iterators
reg i;
reg j;

//Includes initialisation
PresetHandler.onInitCB();
Mixer.onInitCB();

//Value popup styling
Content.setValuePopupData(
{
    "fontName": "Oxygen",
    "fontSize": 18,
    "itemColour": 0xC9877559,
    "itemColour2": 0xC9877559,
    "borderSize": 0
});

//Page handling
const var pnlPage = [];
const var btnPage = [];

for (i = 0; i < 3; i++)
{
    pnlPage[i] = Content.getComponent("pnlPage"+i);
    btnPage[i] = Content.getComponent("btnPage"+i);
    btnPage[i].setControlCallback(onbtnPageControl);
}

inline function onbtnPageControl(control, value)
{
    local idx = btnPage.indexOf(control);

    for (i = 0; i < btnPage.length; i++)
    {
        pnlPage[i].showControl(false);
        btnPage[i].setValue(1);
    }

    pnlPage[idx].showControl(true);
    btnPage[idx].setValue(0);
}

//Key switches
const var ks = [24, 25, 26];

for (i = 0; i < ks.length; i++)
{
    Engine.setKeyColour(ks[i], Colours.withAlpha(Colours.red, 0.2));
}
Engine.setKeyColour(ks[0], Colours.withAlpha(Colours.red, 0.5));function onNoteOn()
{
    //If KS triggered callback, change key colour
	if (ks.indexOf(Message.getNoteNumber()) != -1)
    {
        for (i = 0; i < ks.length; i++)
        {
            Engine.setKeyColour(ks[i], Colours.withAlpha(Colours.red, 0.3));
        }
        Engine.setKeyColour(ks[ks.indexOf(Message.getNoteNumber())], Colours.withAlpha(Colours.red, 0.5));
    }
}
function onNoteOff()
{
	
}
 function onController()
{
	
}
 function onTimer()
{
	
}
 function onControl(number, value)
{
	
}
 