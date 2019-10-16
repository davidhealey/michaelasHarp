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

include("presetHandler.js");
include("mixer.js");
include("settings.js");
include("paths.js");

Content.makeFrontInterface(800, 581);

Synth.deferCallbacks(true);

//Loop iterators
reg i;
reg j;

//Includes initialisation
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

for (i = 0; i < 4; i++)
{
    pnlPage[i] = Content.getComponent("pnlPage"+i);
    btnPage[i] = Content.getComponent("btnPage"+i);
    btnPage[i].setControlCallback(onbtnPageControl);
}

inline function onbtnPageControl(control, value)
{
    local idx = btnPage.indexOf(control);
    changePage(idx);
}

inline function changePage(idx)
{
    for (i = 0; i < btnPage.length; i++)
    {
        pnlPage[i].showControl(false);
        btnPage[i].setValue(1);
    }

    pnlPage[idx].showControl(true);
    btnPage[idx].setValue(0);   
}

//Open documentation button
btnPage[3].setPaintRoutine(function(g){
    this.data.hover == 0 ? g.setColour(0x99D7B882) : g.setColour(0xFFD7B882);
    g.fillPath(Paths.help, [0, 0, this.getWidth(), this.getHeight()]);
});

btnPage[3].setMouseCallback(function(e){
    
    if (e.mouseUp)
        this.changed();
    else
    {
        this.data.hover = e.hover;
        this.repaint();
    }
});

//Close documentation button
const var btnCloseDocs = Content.getComponent("btnCloseDocs");
btnCloseDocs.setControlCallback(onbtnCloseDocsControl);

inline function onbtnCloseDocsControl(component, value)
{
	changePage(0);
};

btnCloseDocs.setPaintRoutine(function(g){
    this.data.hover == 0 ? g.setColour(0x99D7B882) : g.setColour(0xFFD7B882);
    g.fillPath(Paths.close, [0, 0, this.getWidth(), this.getHeight()]);    
});

btnCloseDocs.setMouseCallback(function(e)
{
    if (e.mouseUp)
        this.changed();
    else
    {
        this.data.hover = e.hover;
        this.repaint();
    }
});

//Documentation panel
pnlPage[3].setPaintRoutine(function(g){
   
    g.setColour(0xFF222222);    
    g.fillRect([0, 0, 205, this.getHeight()]);    
    g.setColour(0xEE100B07);
    g.fillRect([205, 0, this.getWidth(), this.getHeight()]);
    
});function onNoteOn()
{
	
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
 