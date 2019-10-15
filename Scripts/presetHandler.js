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
    //Preset name label
    const var lblPreset = Content.getComponent("lblPreset");

    //Previous and Next preset buttons
    const var btnPreset = [];
    for (i = 0; i < 2; i++)
    {
        btnPreset[i] = Content.getComponent("btnPreset"+i);
        btnPreset[i].setControlCallback(onbtnPresetControl);
    }

    //UI Callbacks
    inline function onbtnPresetControl(control, value)
    {
        local idx = btnPreset.indexOf(control);
        idx == 0 ? Engine.loadPreviousUserPreset(false) : Engine.loadNextUserPreset(false);
    }
}
