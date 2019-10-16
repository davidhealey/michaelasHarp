---
keywords: Articulations
summary:  
author:   David Healey
modified: 16.10.2019
index:    01
colour:   0xFF448877
---
  
## Plucked Sustain
These samples were recorded at four velocity layers and chromatically sampled across the entire range of the instrument. These are recordings of the plucked strings and their sustain (longer for the lower notes, shorter for the higher notes) with the natural resonance of the surrounding strings.

## Plucked Damped

The damped samples were recorded chromatically at a single velocity layer. For this sample set all of the strings surrounding the one being plucked were damped. This resulted in a less resonant sample set with a crisper attack on each sample and a more defined sustain.

## Retrigger

The retrigger function uses either the plucked sustain or plucked damped samples, depending on which one was last used.

When this articulation is active every note you play will be repeated when you release it. This is very useful for creating fast repeated notes or tremolos.

## Triplets

Playing quick groups of three notes is a common occurrence in Celtic harp music and is not easy to simulate with individual plucked samples. The triplet articulation makes it easy to play real harp triplets on a keyboard.

The triplet samples were recorded over the mid-range of the instrument (C3-A4) where this technique is most often used, with the remaining key range covered through pitch stretching of the lowest and highest samples.

In order to be able to perform the triplet in real time the samples have been sliced up and are controlled in a round robin fashion. For example to play a triplet on middle C you just need to hit the note three times in a row and each sample of the triplet will play in order.

Each key has its own internal counter which resets if the key hasn’t been played for two seconds or more.

You can create variety in the speed of the triplet by how fast you play the notes.

## Stopped

Another common technique is for the musician to cut short the resonance of the lower strings during a performance. This creates a percussive staccato feel and has a unique sound as the strings are quickly stopped.

Michaela’s Harp includes a set of stopped samples that covers the lower range of the instrument (C1-C3). These samples are activated by engaging the sustain pedal (CC64) before releasing the keys.

## Changing articulation

You can change articulation using either keyswitches, MIDI program change, or UACC (CC32). The stopped samples can only be accessed using the sustain pedal (CC64).

### Key switches
- C0: Plucked Sustain.
- C#0: Plucked Damped.
- D0: Retrigger.
- D#0: Triplets.

### UACC (CC32) and MIDI Program Change
- 40: Plucked Sustain.
- 41: Plucked Damped.
- 42: Retrigger.
- 43: Triplets.
    
