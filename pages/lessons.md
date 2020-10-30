---
layout: content
title: Lessons
permalink: /lessons/
image: paint-brushes-1366198-pxh.jpg
---


## How to Get Set up

- For now, I'm using Glitch
    - You don't need to create an account on Glitch, but it's free, and if you do you can save a copy of any code you edit online
- You could also download the website from GitHub and work with the code on your laptop, 
- Or you could grab a copy of the repo and then play with it online using Visual Studio code's new online version

<hr/>


## Getting Started: Making a Simple Virtual Postcard

In this lesson, we'll take our first steps in learning how to code.

### 1) Create the Simplest Possible Program using BabylonJS
Create your first script: some text in 3D!

- View the end result on [GitHub](../pages/lessons/0010-simple-postcard/text-hello/index.html) or Glitch
- View the code on GitHub (HTML, JavaScript) or play with it on Glitch


### 2) Create a Simple Virtual Postcard

Create a simple digital postcard that you can mail to your friends

- View the end result on [GitHub](../pages/lessons/0010-simple-postcard/text-postcard/index.html) or Glitch
- View the code on GitHub (HTML, JavaScript) or play with it on Glitch


[Instructor's Notes](../pages/lessons/0010-simple-postcard/text-postcard-notes.html)

<hr/>

# --- START HERE --- 

## Working with Variables

In this lesson, we will learn how and why you want to use variables.

### 1) Numbers

{ Start with a very simple example, such as numBikes. Use let instead of var
- Display it in a simpleTextBlock
- Do a simple calculation and display the results
}

- View the end result on [GitHub](../pages/lessons/0010-variables/numbers/index.html) or Glitch
- View the code on GitHub (HTML, JavaScript) or play with it on Glitch


### 2) Strings

- View the end result on [GitHub](../pages/lessons/0010-variables/numbers/index.html) or Glitch
- View the code on GitHub (HTML, JavaScript) or play with it on Glitch

### 3) Using Variables to Hold Other Types of Objects
{2 Materials: Wood, Lava. Plus Possibly using RGB color for the background, such as wheat (if so, link to that [list of colors and RGB codes](https://www.rapidtables.com/web/color/RGB_Color.html), plus divide by 255}

{ Sample code for using mmaterials:
https://www.babylonjs-playground.com/#20OAV9#15}

- View the end result on [GitHub](../pages/lessons/0020-variables/other-objects/index.html) or Glitch
- View the code on GitHub (HTML, JavaScript) or play with it on Glitch

### 4) Using Variables for Calculations (?)

{ We can use variables to change things:
- Make a ball/sphere -- possibly using plastic or glass? (Add to simpleSphere)
- Make 3 balls with exact X and Y coordinates
- Each time, add the same amount tostartX.
- Also do something with size
}
{ NOTE: need to explain why it is that with a sphere you need to use an RGB color, e.g., simpleColor.Yellow, and not just the word "yellow" the way you can with simpleTextBlock. Don't need to get into the nitty-gritty -- textblock as part of the GUI, which operates differently -- just need to flag it as a potential issue. Alternatively, redo simpleTextBlock so it requires an RGB color. Or dodge the issue by using a material?}


- View the end result on [GitHub](../pages/lessons/0010-variables/numbers/index.html) or Glitch
- View the code on GitHub (HTML, JavaScript) or play with it on Glitch

[Instructor's Notes](../pages/lessons/0010-simple-postcard/text-postcard-notes.html)

<hr/>


## Loops:
{
- instead of having to write the code to create a sphere over and over, can do it by using a loop and some simple math, including creating a variable called distance, a.k.a. distance between the spheres
- using fancier math: sign/cosign? Something more ambitious? Want to start giving students a feel for how you can use loops plus a little bit of high school math to create a bunch of stuff using an interesting pattern. Also nudge students towards checking out simplified documentation so they can see what tools they have in terms of math
- Now it's your turn: playing with this, trying out simplePlasticColor and simpleGlassColor colors, trying 2 loops example. Maybe give them a sample script with a couple of examples, including random, that they can play with

for (let counter = 0; counter <= 3; counter++)
}

- View the end result on [GitHub](../pages/lessons/0010-variables/numbers/index.html) or Glitch
- View the code on GitHub (HTML, JavaScript) or play with it on Glitch

[Instructor's Notes](../pages/lessons/0010-simple-postcard/text-postcard-notes.html)

<hr/>


## If Then
- Not sure what would be fun to play with: using different materials on a block or sphere depending on conditional logic? Creating simpleFire or simpleParticles or something else that's cool and trying that? For example, if someone got a high enough score, there's a burst of confetti particles


Animating blocks


- View the end result on [GitHub](../pages/lessons/0010-variables/numbers/index.html) or Glitch
- View the code on GitHub (HTML, JavaScript) or play with it on Glitch

[Instructor's Notes](../pages/lessons/0010-simple-postcard/text-postcard-notes.html)

<hr/>



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

- View the end result on [GitHub](../pages/lessons/0010-variables/numbers/index.html) or Glitch
- View the code on GitHub (HTML, JavaScript) or play with it on Glitch

[Instructor's Notes](../pages/lessons/0010-simple-postcard/text-postcard-notes.html)

<hr/>

## Arrays, Lists, etc.

### 1) A Simple List
{ bestFood = ('Pizza', 'Burritos', 'Ice Cream')

### 2) Tricks you can do with Lists
{ break words "As I Go by" into a list and put them at different heights}
{ for (const word of sentence) }

### 3) Report using 2 types of sprites: cowboys and dinosaurs

{ Not sure what example to use
- Maybe a report on how a list of students are doing?
  - Start by just printing the list of students
  - Then one score per student? Or come up with something more creative?

Not sure what special effects to use
- Use sprite animation -- either as a way of reinforcing example of functions if we used it there, or by creating functions for it here?
  - Example: for values below 10, animate a walking character whose speed is score/10, for 10 it's a sprite jumping up and down
Adding in text variables to create a "report"
- text variables: adding in how you feel today?
- Using slightly fancier math: division, integer as a scale (size) (?) Or maybe using a color range?
- Change the date and the number at the top, and you've got yourself a virtual report!
}


- View the end result on [GitHub](../pages/lessons/0010-variables/numbers/index.html) or Glitch
- View the code on GitHub (HTML, JavaScript) or play with it on Glitch

[Instructor's Notes](../pages/lessons/0010-simple-postcard/text-postcard-notes.html)



