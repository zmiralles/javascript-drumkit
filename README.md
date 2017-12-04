# javascript-drumkit

My take on [Wes Bos' JavaScript Drum Kit](https://github.com/wesbos/JavaScript30/tree/master/01%20-%20JavaScript%20Drum%20Kit). 3 x 3 Launchpad style drum sampler created using JavaScript, HTML and CSS.

# Key take aways

* For some reason, the `removeTransition` function doesn't work if the script tag in the HTML is in the head. After checking the YouTube comments, moving the script tag to the end of the HTML body magically fixes this. I have to research some more to figure out why this is the case.
* I'm still not quite confident with what I was able to achieve here. I tried writing the script after watching the tutorial video a couple of times but I had to go back and reference the video to figure out the next step when I hit a roadblock.
* It felt like I was just copying his code. Knowing this, I made sure to try and understand why he wrote each line the way he did.
* Learned a lot about events such as `transitionend` and `keydown` using google-fu.
