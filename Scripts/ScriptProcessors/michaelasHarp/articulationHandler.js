Content.setWidth(730);
Content.setHeight(50);

const var ks = [24, 25, 26]; //KS for sustain and triplets
const var ccs = [40, 41, 42] //CC32/program values for sustain and triplets
const var UACC = 32;

const var muters = [];
muters[0] = Synth.getMidiProcessor("sustainMuter");
muters[1] = Synth.getMidiProcessor("retrigger");
muters[2] = Synth.getMidiProcessor("tripletsMuter");

//Switch between sustain and triplets depending on idx
inline function changeArticulation(idx)
{
    //Mute all
    for (i = 0; i < muters.length; i++)
    {
        muters[i].setAttribute(0, 1);
    }
    
    //Unmute selected
    muters[idx].setAttribute(0, 0);
    
    //Retrigger also requires sustain to be enabled
    if (idx == 1) muters[0].setAttribute(0, 0);
}
function onNoteOn()
{
    local idx = ks.indexOf(Message.getNoteNumber());

	if (idx != -1)
    {
        changeArticulation(idx);
    }
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
 