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

namespace Performance
{
	inline function onInitCB()
	{
        //Background panel
		Content.setPropertiesFromJSON("pnlPerformance", {itemColour:Theme.C3, itemColour2:Theme.C3});
	    
		//Labels
        Content.setPropertiesFromJSON("lblAtk", {fontName:Theme.BOLD, fontSize:20, textColour:Theme.C6});
        Content.setPropertiesFromJSON("lblRel", {fontName:Theme.BOLD, fontSize:20, textColour:Theme.C6});
        Content.setPropertiesFromJSON("lblRR", {fontName:Theme.BOLD, fontSize:20, textColour:Theme.C6});
		
        //Envelope knobs
        const var sliEnv = [];
        sliEnv[0] = ui.setupControl("sliAtk", {bgColour:Theme.C2, itemColour:Theme.F});
        ui.sliderPanel("sliAtk", paintRoutines.knob, 0, 0.2);
        sliEnv[0].setControlCallback(sliEnvCB);
        
        
        sliEnv[1] = ui.setupControl("sliRel", {bgColour:Theme.C2, itemColour:Theme.F});
        ui.sliderPanel("sliRel", paintRoutines.knob, 0, 0.03);
        sliEnv[1].setControlCallback(sliEnvCB);
	
        //Value labels
        const var lblEnv = [];
		lblEnv[0] = ui.setupControl("lblAtkVal", {fontName:Theme.REGULAR, fontSize:16, textColour:Theme.C6});
		lblEnv[1] = ui.setupControl("lblRelVal", {fontName:Theme.REGULAR, fontSize:16, textColour:Theme.C6});
        
        //Round robin button		
	    Content.setPropertiesFromJSON("btnRR", {bgColour:Theme.C5, itemColour:Theme.C4, itemColour2:Theme.C2, textColour:Theme.C6});
	    ui.buttonPanel("btnRR", paintRoutines.onOffButton);
	}
	
	inline function sliEnvCB(control, value)
    {
        local idx = sliEnv.indexOf(control);
        
        lblEnv[idx].set("text", value + "ms");
        lblEnv[idx].changed();
    }
}
