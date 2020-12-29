---
layout: content
title: Creative Data Visualizations
permalink: /dataviz/

image: glass-spheres-970093-pxh.jpg
---

It's pretty straightforward to give users a nice user interface for creating standard data visualizations. But what if you want to go beyond that? Creative Data Visualizations is a series of [Data Chefs]( https://datachefs.org/)' experiments to see if we can incrementally teach tiny bits of coding to folks who aren't developers.

## Recent Experiments


### p5.js

p5.js is a web-based JavaScript version of Processing.

- A really simple [first project](../pages/p5js/first-project/index.html) ([JavaScript code](https://github.com/makersall/playful-coding/blob/main/pages/p5js/first-project/sketch.js))
- [Klint](../pages/p5js/klint/index.html), a clone of  [niccab](https://editor.p5js.org/niccab/sketches)'s replication of a Klint painting, to give you a feel for what a relatively small number of Processing commands can do ([JavaScript code](https://github.com/makersall/playful-coding/blob/main/pages/p5js/klint/sketch.js))
  
  
Processing has a truly amazing set of libraries, including:

-  a Nice [GUI library](https://github.com/bitcraftlab/p5.gui) — some really fun examples
- a better [animation framework](https://www.npmjs.com/package/p5.createloop)
- a [plotting library](https://github.com/jagracar/grafica.js), which also allows you to do lots of cool animations
- a library that lets you create shapes with a [Sketchy](https://github.com/generative-light/p5.scribble.js) look
- a crazy fun [sprite library](http://molleindustria.github.io/p5.play/)
- a nice [particle library](https://github.com/bobcgausa/cook-js)

You might also want to check out these [examples](http://jsfiddle.net/user/jagracar/fiddles/) as well as a series of experiments of doing [letters as particles](http://jsfiddle.net/bobcook/mph714p8/)

<!-- For my little experiments: [Stars](https://p5js.org/examples/form-star.html) and [Hearts](https://github.com/gaba5/p5.shape.js) -->

{ Also add in:
- Links to examples
- Links to terrific YouTube video tutorial series on Coding Train
}

### BabylonJS

BabylonJS is a powerful JavaScript library for creating WebVR. It can be a bit intimidating to get started if you don't have any programming background. So, we've been experimenting with creating a library that hides some of the trickier stuff.

<p> The following are a few simple data visualization experiments. Most of them don't follow dataviz best practices, and they need work to make them prettier. The purpose of these examples is to rough out what's involved in doing a data visualization using BabylonJS. </p>


<ul>
<li> Simple visualization using data: <a href="../pages/bjs-viz/goals/index.html">Goals</a></li>
</ul>

{ NOTE: these were working; need to play with them to figure out why they aren't anymore

<p> NOTE: something recently changed in the BabylonJS library that may be causing some examples that load an asset to fail -- I'll figure this out when I have the time.</p>


<ul>
<li> Animation:  <a href="../pages/bjs-viz/moores-law/index.html">Moore's Law</a></li>
<li> Animation:  <a href="dataviz/engagement/index.html">Member engagement over time</a></li>
<li> Work in progress: 3D Graphic Objects:  <a href="dataviz/sandwich/index.html">Calories in a sandwich</a></li>
</ul>
}

## Other Potential Frameworks/Tools


### D3.js

We've done a bunch of work with D3.js, including teaching [A Taste of D3](http://aschneiderman.github.io/a-taste-of-d3/) at [ASHA](https://www.asha.org/) and creating
[D3 Sandwiches](http://aschneiderman.github.io/d3_sandwich/), a pilot project toexplore teaching d3 by interactively looking at the layers of a d3 "sandwich." Ultimately we decided to stop; D3.js is powerful but it's just too difficult to teach to beginners.


### GSAP

GSAP is a JavaScript library for creating animations.

{Why it's worth exploring}



## Long-Term Vision

These experiments with creative data visualizations are part of a project called [Data Chefs]( https://datachefs.org/). Data Chefs is a framework to help organizations unleash the power of analytics and data science by growing organizational ecosystems of power users -- and to do so in a way that in the long term will also help the community. It advocates for:

- Growing an organization's internal ecosystem to help power users flourish, using an iterative approach that racks up small, strategic wins while building towards larger victories
- Building an ecosystem across organizations so they can share knowledge, pool resources, and collectively work to [smooth the learning curve](https://toolkit.makersall.org/pages/30-smooth/00-index.html) from beginner to power user to data scientist/engineer
- Using this ecosystem across organizations to connect large organizations to the community, so communities can also benefit -- and in doing so, laying the groundwork to help communities from Harlem to Harlan County [benefit from the explosion of wealth](https://toolkit.makersall.org) that will be created by emerging tech over the next 20 years.


*NOTE: this site isn't yet ready for public use -- right now it's just a place to experiment.*