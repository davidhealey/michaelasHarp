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
		//Labels
        Content.setPropertiesFromJSON("lblAtk", {fontName:Theme.BOLD, fontSize:22, textColour:Theme.C1});
        Content.setPropertiesFromJSON("lblRel", {fontName:Theme.BOLD, fontSize:22, textColour:Theme.C1});
        Content.setPropertiesFromJSON("lblRR", {fontName:Theme.BOLD, fontSize:22, textColour:Theme.C1});
        Content.setPropertiesFromJSON("lblVelo", {fontName:Theme.BOLD, fontSize:22, textColour:Theme.C1});
		
        //Envelope knobs
        Content.setPropertiesFromJSON("sliAtk", {bgColour:Theme.C2, itemColour:Theme.F});
        Content.setPropertiesFromJSON("sliRelease", {bgColour:Theme.C2, itemColour:Theme.F});
                
        //Round robin button		
	    Content.setPropertiesFromJSON("btnRR", {bgColour:Theme.C5, itemColour:Theme.C4, itemColour2:Theme.C2, textColour:Theme.C6});
	    ui.buttonPanel("btnRR", paintRoutines.onOffButton);
	    
	    //Velocity curve table
	    const var tblVelocity = ui.setupControl("tblVelocity", {});
	}
}
