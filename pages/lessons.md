---
layout: content
title: Lessons
permalink: /lessons/
image: paint-brushes-1366198-pxh.jpg
---



## How to Get Set up

For now: using Glitch {NOTE: need to move code over to Glitch once I'm happy with it}. But you could also download the code off of GitHub and work on a laptop -- which would also be useful if you don't have good Internet access so you could work off-line. Or you could grab a copy of the repo and then play with it online using Visual Studio code's new online version } 

## Getting Started: Making a Simple Virtual Postcard

- Explain goals, what you get to do & learn

- [Simple Text](../pages/lessons/0010-simple-postcard/text-hello.html): create some text in 3D!
- [Simple Postcard](../pages/lessons/0010-simple-postcard/text-postcard.html): create a simple digital postcard that you can mail to your friends


## Working with Variables

Start with a very simple example, such as numBikes.
- Display it in a simpleTextBlock
- Do a simple calculation and display the results

We can use variables to change things:
- Make a ball/sphere
- Make 3 balls with exact X and Y coordinates
- Use startX plus calculations to place the balls; now if you want to move them you only need to change startX
- Replace manual coordinates with startY and startZ
{ NOTE: need to explain why it is that with a sphere you need to use an RGB color, e.g., simpleColor.Yellow, and not just the word "yellow" the way you can with simpleTextBlock. Don't need to get into the nitty-gritty -- textblock as part of the GUI, which operates differently -- just need to flag it as a potential issue. Alternatively, redo simpleTextBlock so it requires an RGB color. Or dodge the issue by using a material?}

## Loops:
- instead of having to write the code to create a sphere over and over, can do it by using a loop and some simple math, including creating a variable called distance, a.k.a. distance between the spheres
- using fancier math: sign/cosign? Something more ambitious? Want to start giving students a feel for how you can use loops plus a little bit of high school math to create a bunch of stuff using an interesting pattern. Also nudge students towards checking out simplified documentation so they can see what tools they have in terms of math
- Now it's your turn: playing with this, trying out simplePlasticColor and simpleGlassColor colors, trying 2 loops example. Maybe give them a sample script with a couple of examples, including random, that they can play with


## If Then
- Not sure what would be fun to play with: using different materials on a block or sphere depending on conditional logic? Creating simpleFire or simpleParticles or something else that's cool and trying that? For example, if someone got a high enough score, there's a burst of confetti particles


Animating blocks





## Functions & Reusing Code

Not sure what example to try. A couple of possibilities:
- Sprite animation: creating 2 functions: one that animates the spritesheet's images that cover jumping, another one that covers falling down?
- Functions for creating a campfire scene?
- Physics engine with balls?
- Infinite loader example?
- Ribbons or Render Line?
- Particles -- e.g., the "click boom" example in the BabylonJS documentation/examples?

NOTES
- Critically important: teach this early so students start to see that they can be tool creators and not just with users
- Also teach this early since reusability & breaking code into chunks are key to writing good code
- Optional parameters with default values? The code is easy but looks a bit weird, so may want to hold off till later
- How to write code you can read 6 months from now 
- Why & how to use comments 


## Arrays 
Not sure what example to use
- Maybe a report on how a list of students are doing?
  - Start by just printing the list of students
  - Then one score per student? Or come up with something more creative?

Not sure what special effects to use
- Use sprite animation -- either as a way of reinforcing example of functions if we used it there, or by creating functions for it here?
  - Example: for values below 10, animate a walking character whose speed is score/10, for 10 it's a sprite jumping up and down

## Basic String manipulation
- Not sure if there's an easy place to teach this earlier

## Loading assets

## Version control



## Any javascriot concepts you need to understand to do fabcier stuff in BJS.

## Onject Oriented?  Functional Programming?
- Read up on what's recommended for modern JS


## Interaction (or do later?)

&nbsp;

&nbsp;

&nbsp;

<hr/>


#### Sample Code, Note Dumps, Etc. I Might Use in Lessons

- [Goals](../pages/lessons/goals/index.html)
- Other [Examples](../pages/examples/more-stuff.html) Of what BabylonJS can do
- 3D graphics [terminology](../pages/lessons/tutorial-3Dgraphics-terminology.html)


## Later in the course

Adding in text variables to create a "report"
- text variables: adding in how you feel today?
- Using slightly fancier math: division, integer as a scale (size) (?) Or maybe using a color range?
- Change the date and the number at the top, and you've got yourself a virtual report!


