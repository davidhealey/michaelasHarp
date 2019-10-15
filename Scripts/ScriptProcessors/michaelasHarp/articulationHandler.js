Content.setWidth(730);
Content.setHeight(50);

Synth.deferCallbacks(true);

reg currentArticulation = 0;

const var range = [36, 93]; //Playable range
const var ks = [24, 25, 26, 27]; //KS for sustain and triplets
const var ccs = [40, 41, 42, 43] //CC32/program values for sustain and triplets
const var UACC = 32;

//Disable sustain sampler round robin
const var sustain = Synth.getSampler("sustain");
sustain.enableRoundRobin(false);

//Colour keyboard
for (i = 0; i < 128; i++)
{
    if (i < range[0] || i > range[1]) //i is outside max playable range
    {        
        if (ks.indexOf(i) != -1) //Keyswitch
            Engine.setKeyColour(ks.indexOf(i), Colours.withAlpha(Colours.red, 0.2));
        else
            Engine.setKeyColour(i, Colours.withAlpha(Colours.black, 0.5)); //Clear key colour            
    }
    else
    {
        Engine.setKeyColour(i, Colours.withAlpha(Colours.white, 0.0)); //Set key colour
    }
}

//Highlight first keyswitch
Engine.setKeyColour(ks[0], Colours.withAlpha(Colours.red, 0.4));

//Articulation switching
const var muters = [];
muters[0] = Synth.getMidiProcessor("sustainMuter");
muters[1] = Synth.getMidiProcessor("sustainMuter"); //Damped uses same sustain sampler
muters[2] = Synth.getMidiProcessor("retrigger");
muters[3] = Synth.getMidiProcessor("tripletsMuter");

inline function changeArticulation(idx)
{
    //Highlight keyswitch for articulation
    Engine.setKeyColour(ks[currentArticulation], Colours.withAlpha(Colours.red, 0.3));
    Engine.setKeyColour(ks[idx], Colours.withAlpha(Colours.red, 0.5));
    
    currentArticulation = idx;
    
    //Enable correct sustain sampler round robin group
    if (idx == 0 || idx == 1)
        sustain.setActiveGroup(idx+1);
    
    //Mute all
    for (i = 0; i < muters.length; i++)
    {
        muters[i].setAttribute(0, 1);
    }
    
    //Unmute selected (or enable retrigger script)
    muters[idx].setAttribute(0, 0);
    
    //Dampled and retrigger require sustain to be enabled
    if (idx == 1 || idx == 2) muters[0].setAttribute(0, 0);
}
function onNoteOn()
{
    local idx = ks.indexOf(Message.getNoteNumber());

	if (idx != -1)
        changeArticulation(idx);
}

function onNoteOff()
{
	
}
 function onController()
{
	if (Message.getControllerNumber() == UACC || Message.isProgramChange())
    {
        local ccIdx = ccs.indexOf(Message.getControllerValue());
        local programIdx = ccs.indexOf(Message.getProgramChangeNumber());
        
        if (ccIdx != -1) //UACC
        {
            changeArticulation(ccIdx);
        }
        else if (programIdx != -1) //Program change
        {
            changeArticulation(programIdx);
        }
    }
}
function onTimer()
{
	
}
 function onControl(number, value)
{
	
}
 