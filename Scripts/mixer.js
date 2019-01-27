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

		//Retrieve samplers and store in samplers array
		const var samplerIds = Synth.getIdList("Sampler"); //Get IDs of samplers
		const var samplers = [];

		for (s in samplerIds)
		{
		    samplers.push(Synth.getSampler(s));
		}
		
		//Purge buttons
		const var btnPurge = [];
		for (i = 0; i < 3; i++)
		{
            btnPurge[i] = Content.getComponent("btnPurge"+i);
            btnPurge[i].setControlCallback(onbtnPurgeControl);
		}
	}
	
	inline function onbtnPurgeControl(control, value)
	{
		local idx = btnPurge.indexOf(control);

		for (s in samplers) //Each sampler
		{
			//Only purge or load if it's state has changed
			if (s.getNumMicPositions() > 1 && s.isMicPositionPurged(idx) != value)
			{
				s.purgeMicPosition(s.getMicPositionName(idx), value);
			}
		}
	}
	
    function purgeButtonPaintRoutine(g)
	{							
		this.getValue() == 1 ? g.setColour(this.get("textColour")) : g.setColour(this.get("itemColour"));

		g.setFont(Theme.BOLD, 22);
		g.drawAlignedText(this.get("text"), [0, 0, this.get("width"), this.get("height")], "centred");
	};
}
