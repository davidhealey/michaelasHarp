Content.setWidth(730);
Content.setHeight(50);

const var btnMute = Content.addButton("Mute", 0, 0);

const var sustainEnvelope = Synth.getModulator("sustainEnvelope");
reg releaseTm = sustainEnvelope.getAttribute(sustainEnvelope.Release);
reg noteIds = Engine.createMidiList();
reg lastVelocity = 1;function onNoteOn()
{
	lastVelocity = Message.getVelocity();
}
function onNoteOff()
{
    if (!btnMute.getValue() && !Synth.isSustainPedalDown())
    {
        releaseTm = sustainEnvelope.getAttribute(sustainEnvelope.Release);
        noteIds.setValue(Message.getNoteNumber(), Synth.playNote(Message.getNoteNumber(), lastVelocity));
        Synth.addVolumeFade(noteIds.getValue(Message.getNoteNumber()), releaseTm, -100);
    }
}
function onController()
{
	
}
 function onTimer()
{
	
}
 function onControl(number, value)
{
	
}
 