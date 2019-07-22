Content.setWidth(730);
Content.setHeight(50);

const var lastTime = Engine.createMidiList();
const var group = Engine.createMidiList();

const var s = Synth.getChildSynth("triplets");
s.asSampler().enableRoundRobin(false);

function onNoteOn()
{
	if (Engine.getUptime() - lastTime.getValue(Message.getNoteNumber()) > 2)
    {
        group.setValue(Message.getNoteNumber(), 0);
    }

    s.asSampler().setActiveGroup(group.getValue(Message.getNoteNumber())+1);

    group.setValue(Message.getNoteNumber(), (group.getValue(Message.getNoteNumber()) + 1) % 3);

    lastTime.setValue(Message.getNoteNumber(), Engine.getUptime());
}
function onNoteOff()
{
	
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
 