const var sustainEnvelope = Synth.getModulator("sustainEnvelope");
reg releaseTm = sustainEnvelope.getAttribute(sustainEnvelope.Release);function onNoteOn()
{
	if (!Synth.isSustainPedalDown())
    {
        releaseTm = sustainEnvelope.getAttribute(sustainEnvelope.Release);
    }
}
function onNoteOff()
{
    if (Synth.isSustainPedalDown() && Message.getNoteNumber() <= 60)
    {
        sustainEnvelope.setAttribute(sustainEnvelope.Release, 25);
    }
    else
    {
        sustainEnvelope.setAttribute(sustainEnvelope.Release, releaseTm);
    } 
}
function onController()
{
    if (Message.getControllerNumber() == 64)
    {
        Message.ignoreEvent(true);
        
        if (Synth.isSustainPedalDown())
        {
            releaseTm = sustainEnvelope.getAttribute(sustainEnvelope.Release);
        }
        else
        {
            sustainEnvelope.setAttribute(sustainEnvelope.Release, releaseTm);
        }
    }
}function onTimer()
{
	
}
 function onControl(number, value)
{
	
}
 