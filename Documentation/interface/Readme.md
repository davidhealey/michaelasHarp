---
keywords: Interface
summary:  Guide to the main interface
author:   David Healey
modified: 16.10.2019
index:    03
---

## Pages

The interface is made up of four pages which are accessible by buttons on the interface.

- The instrument page contains the main controls for adjusting the sound and response of the instrument. It is accessed by clicking the word INSTRUMENT.
- The presets browser is accessed by clicking the word PRESETS.
- The settings page is accessed by clicking the word SETTINGS.
- The help documentation is accessed by clicking the ? button. The X in the top right corner of the documentation window is used to return to the instrument page.

## Quick Tips

If you hold the shift key on your keyboard while clicking on a knob or slider you’ll be able to type in a specific value.

You can move the knobs and sliders on the interface more precisely by holding down the control key on your keyboard at the same time.

Double clicking a knob or slider will reset it to its default value.

Clicking the Libre Wave logo will display some information about the library as well as a clickable link to the librewave.com website. You can click the Instrument button to leave this screen.

## Automation

Most of the sliders and knobs on the interface can be controlled with a continuous controller. You can assign a hardware controller to a control using MIDI learn: just right-click a control, select MIDI learn, and move a hardware knob, wheel, or fader to assign its MIDI controller number to that control. You can right-click the control again to remove the assignment.

Many of the on-screen controls will respond to automation within your DAW without needing to assign a CC to them first. Check your DAW’s user guide for details on how to access automatable parameters.

## Keyboard

The illuminated keys of the on-screen keyboard show the playable range of the instrument. Keys outside of this range will not trigger any samples.

The red keys at the lower end of the keyboard are used to change articulation.

## Mixer

At the left side of the interface are the microphone controls.

Each microphone position has a channel strip that controls its volume, pan, stereo width, and delay. The DI channel is mono only so its width control has no effect on the sound.

Below each volume fader is a button that can be used to purge or load the samples for that microphone position. These buttons also indicate the name of the channel: Close (C), Direct Input (DI), Room (R).

## Envelope

![michaelas-harp-envelope](/images/custom/michaelas-harp-envelope.jpg) 

On the right hand side of the interface you’ll find the envelope controls. These allow you to adjust the attack and release time of the sustain samples.

## Round Robin

![michaelas-harp-round-robin](/images/custom/michaelas-harp-round-robin.jpg) 

Below the envelope controls is the round robin button which is used to toggle the round robin repetition feature on or off. This solves the problem of the same sample being triggered when a note is played multiple times, also known as “the machine gun effect”.

The round robin scripting will automatically switch samples when a note is played more than once. Each note is individually tracked and their internal counters are reset if they haven’t been played for two seconds or more. The round robin is completely random so it may occasionally trigger the same sample twice in a row.

## Velocity Curve Editor

This control can be used to change how the instrument responds to MIDI velocity.

You can move nodes around by clicking, holding, and dragging them. New nodes can be added to the table by clicking anywhere that doesn’t already have a node, and you can delete nodes by right-clicking on them. Hover your cursor over a node and move the scroll wheel on your mouse to adjust the curve between that node and the one to the right of it.