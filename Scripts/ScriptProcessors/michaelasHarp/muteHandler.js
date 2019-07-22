Content.setWidth(730);
Content.setHeight(50);

reg lastVelo;function onNoteOn()
{
	Message.ignoreEvent(true);
	lastVelo = Message.getVelocity();
}
function onNoteOff()
{
	if (Synth.isSustainPedalDown())
    {
        Synth.playNote(Message.getNoteNumber(), lastVelo);
    }
}
function onController()
{
	if (Message.getControllerNumber() == 64)
    {
        Message.ignoreEvent(true);
    }
}
function onTimer()
{
	
}
 function onControl(number, value)
{
	
}
 