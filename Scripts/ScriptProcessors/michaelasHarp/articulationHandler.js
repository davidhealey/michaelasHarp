Content.setWidth(730);
Content.setHeight(50);

const var ks = [24, 26]; //KS for sustain and triplets
const var ccs = [40, 41] //CC32/program values for sustain and triplets
const var UACC = 32;

const var muters = [];
muters[0] = Synth.getMidiProcessor("sustainMuter");
muters[1] = Synth.getMidiProcessor("tripletsMuter");

//Switch between sustain and triplets depending on idx
inline function changeArticulation(idx)
{
    muters[idx].setAttribute(0, 0);
    muters[1-idx].setAttribute(0, 1);
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
        local ccIdx = ccs.indexOf(Message.getControllerNumber());
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
