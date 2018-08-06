function onNoteOn()
{
	
}
function onNoteOff()
{
	
}
function onController()
{
    Console.print(Synth.isSustainPedalDown());
    
	if (Synth.isSustainPedalDown() == 1)
    {
        Engine.allNotesOff();
    }
}
function onTimer()
{
	
}
function onControl(number, value)
{
	
}
