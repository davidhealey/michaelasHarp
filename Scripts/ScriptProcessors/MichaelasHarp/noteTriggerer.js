reg i;
reg lastVel;function onNoteOn()
{
    lastVel = Message.getVelocity();
	Message.ignoreEvent(true);
}
function onNoteOff()
{
	
}
function onController()
{
	if (Synth.isSustainPedalDown() == 1)
    {
        for (i = 0; i < 128; i++)
        {
            if (Synth.isKeyDown(i) == 1)
            {
                Synth.playNote(i, lastVel);
            }
        }
    }
}
function onTimer()
{
	
}
function onControl(number, value)
{
	
}
