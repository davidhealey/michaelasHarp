/*
    Copyright 2018 David Healey

    This file is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This file is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this file. If not, see <http://www.gnu.org/licenses/>.
*/

namespace Mixer
{
	inline function onInitCB()
	{
		const var purge = [];
	
		//Retrieve samplers and store in samplers array
		const var samplerIds = Synth.getIdList("Sampler"); //Get IDs of samplers
		const var samplers = [];

		for (s in samplerIds)
		{
		    samplers.push(Synth.getSampler(s));
		}

		//Labels	
		Content.setPropertiesFromJSON("lblVol", {fontName:Theme.BOLD, fontSize:Theme.H2});
		Content.setPropertiesFromJSON("lblPan", {fontName:Theme.BOLD, fontSize:Theme.H2});
		Content.setPropertiesFromJSON("lblWidth", {fontName:Theme.BOLD, fontSize:Theme.H2});
		Content.setPropertiesFromJSON("lblDelay", {fontName:Theme.BOLD, fontSize:Theme.H2});
	
		for (i = 0; i < 3; i++)
		{
			Content.setPropertiesFromJSON("sliPan"+i, {bgColour:Theme.CONTROL1, itemColour:Theme.CONTROL2});
			ui.sliderPanel("sliPan"+i, paintRoutines.knob, 0, 0.5); //Set up for pan slider

            Content.setPropertiesFromJSON("sliWidth"+i, {bgColour:Theme.CONTROL1, itemColour:Theme.CONTROL2});
			ui.sliderPanel("sliWidth"+i, paintRoutines.knob, 0, 0.5); //Set up for pan slider
			
			Content.setPropertiesFromJSON("sliVol"+i, {bgColour:Theme.CONTROL1, itemColour:Theme.CONTROL2});			
			Content.setPropertiesFromJSON("sliDelay"+i, {bgColour:Theme.CONTROL1, itemColour:Theme.CONTROL2});

			Content.setPropertiesFromJSON("btnPurge"+i, {textColour:Theme.BUTTON_OFF, itemColour:Theme.CONTROL1});
			purge[i] = ui.buttonPanel("btnPurge"+i, paintRoutines.textButton); //Set up callbacks for purge button
			purge[i].setControlCallback(btnPurgeCB);
		}
	}
	
	inline function btnPurgeCB(control, value)
	{
		local idx = purge.indexOf(control);

		for (s in samplers) //Each sampler
		{
			//Only purge or load if it's state has changed
			if (s.getNumMicPositions() > 1 && s.isMicPositionPurged(idx) != 1-value)
			{
				s.purgeMicPosition(s.getMicPositionName(idx), 1-value);
			}
		}
	}
}
