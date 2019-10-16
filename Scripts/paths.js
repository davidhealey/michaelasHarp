/*
    Copyright 2019 David Healey

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

namespace Paths 
{
    //------------------ HELP ICON -----------------------
    //Font Awesome Free License. - https://fontawesome.com/license/free
    
    const var help_icon_path = Content.createPath();
    const var help_icon_svg_data = [110,109,0,0,252,67,0,0,128,67,98,0,0,252,67,158,127,196,67,127,122,196,67,0,0,252,67,0,0,128,67,0,0,252,67,98,4,22,238,66,0,0,252,67,0,0,0,65,158,127,196,67,0,0,0,65,0,0,128,67,98,0,0,0,65,127,42,238,66,4,22,238,66,0,0,0,65,0,0,128,67,0,0,0,65,98,127,
    122,196,67,0,0,0,65,0,0,252,67,127,42,238,66,0,0,252,67,0,0,128,67,99,109,215,83,131,67,0,0,180,66,98,114,40,80,67,0,0,180,66,102,102,45,67,252,233,225,66,34,27,18,67,12,194,25,67,98,235,145,14,67,67,11,31,67,196,192,15,67,73,44,38,67,44,210,20,67,24,
    4,42,67,108,30,133,55,67,116,83,68,67,98,153,185,60,67,227,69,72,67,24,36,68,67,128,85,71,67,92,47,72,67,57,52,66,67,98,139,12,90,67,198,139,43,67,74,76,102,67,49,104,30,67,119,190,128,67,49,104,30,67,98,96,245,138,67,49,104,30,67,207,151,151,67,20,142,
    43,67,207,151,151,67,112,93,63,67,98,207,151,151,67,75,87,78,67,88,105,145,67,48,8,86,67,117,83,135,67,75,87,97,67,98,197,32,119,67,43,135,110,67,0,0,88,67,229,240,126,67,0,0,88,67,0,0,148,67,108,0,0,88,67,0,0,150,67,98,0,0,88,67,66,80,153,67,125,95,
    93,67,0,0,156,67,0,0,100,67,0,0,156,67,108,0,0,142,67,0,0,156,67,98,66,80,145,67,0,0,156,67,0,0,148,67,66,80,153,67,0,0,148,67,0,0,150,67,108,0,0,148,67,96,85,149,67,98,0,0,148,67,61,26,135,67,207,151,189,67,143,130,134,67,207,151,189,67,0,0,64,67,98,
    207,151,189,67,125,255,5,67,176,130,159,67,0,0,180,66,215,83,131,67,0,0,180,66,99,109,0,0,128,67,0,0,169,67,98,143,162,102,67,0,0,169,67,0,0,82,67,72,81,179,67,0,0,82,67,0,0,192,67,98,0,0,82,67,152,174,204,67,143,162,102,67,0,0,215,67,0,0,128,67,0,0,
    215,67,98,184,174,140,67,0,0,215,67,0,0,151,67,152,174,204,67,0,0,151,67,0,0,192,67,98,0,0,151,67,72,81,179,67,184,174,140,67,0,0,169,67,0,0,128,67,0,0,169,67,99,101,0,0];

    help_icon_path.loadFromData(help_icon_svg_data);
    const var help = help_icon_path;
    
    //------------------ WINDOW CLOSE ICON -----------------------
    //Font Awesome Free License. - https://fontawesome.com/license/free
    
    const var window_close_icon_path = Content.createPath();
    const var window_close_icon_svg_data = [110,109,0,0,232,67,0,0,0,66,108,0,0,64,66,0,0,0,66,98,0,0,172,65,0,0,0,66,0,0,0,0,0,0,86,66,0,0,0,0,0,0,160,66,108,0,0,0,0,0,0,216,67,98,0,0,0,0,0,64,229,67,0,0,172,65,0,0,240,67,0,0,64,66,0,0,240,67,108,0,0,232,67,0,0,240,67,98,0,64,245,67,0,0,240,67,
    0,0,0,68,0,64,229,67,0,0,0,68,0,0,216,67,108,0,0,0,68,0,0,160,66,98,0,0,0,68,0,0,86,66,0,64,245,67,0,0,0,66,0,0,232,67,0,0,0,66,99,109,51,51,190,67,0,64,161,67,98,153,153,192,67,102,166,163,67,153,153,192,67,205,140,167,67,51,51,190,67,51,243,169,67,
    108,51,243,169,67,51,51,190,67,98,205,140,167,67,153,153,192,67,102,166,163,67,153,153,192,67,0,64,161,67,51,51,190,67,108,0,0,128,67,102,166,156,67,108,0,128,61,67,51,51,190,67,98,51,179,56,67,153,153,192,67,102,230,48,67,153,153,192,67,154,25,44,67,
    51,51,190,67,108,154,153,3,67,51,243,169,67,98,154,153,253,66,205,140,167,67,154,153,253,66,102,166,163,67,154,153,3,67,0,64,161,67,108,52,179,70,67,0,0,128,67,108,154,153,3,67,0,128,61,67,98,154,153,253,66,51,179,56,67,154,153,253,66,102,230,48,67,154,
    153,3,67,154,25,44,67,108,154,25,44,67,154,153,3,67,98,103,230,48,67,154,153,253,66,52,179,56,67,154,153,253,66,0,128,61,67,154,153,3,67,108,0,0,128,67,52,179,70,67,108,0,64,161,67,154,153,3,67,98,102,166,163,67,154,153,253,66,205,140,167,67,154,153,
    253,66,51,243,169,67,154,153,3,67,108,51,51,190,67,154,25,44,67,98,153,153,192,67,103,230,48,67,153,153,192,67,52,179,56,67,51,51,190,67,0,128,61,67,108,102,166,156,67,0,0,128,67,108,51,51,190,67,0,64,161,67,99,101,0,0];

    window_close_icon_path.loadFromData(window_close_icon_svg_data);
    const var close = window_close_icon_path;       
}