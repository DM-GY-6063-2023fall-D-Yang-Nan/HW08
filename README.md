# HW08 A

I want the red parts in the picture to be able to change colors, and the blue parts to be replaced with another image.

![GIiesG.jpg](https://imgpile.com/images/GIiesG.jpg)

In the setup, I handled the size and position of the image to ensure that the picture fits the screen size and is centered on the screen.

In my initial attempts, I was able to freely change the color of the red parts, but only once. When the red is changed to another color, it can't be changed again. Therefore, I need to check the changed color again. Every time the draw() function is executed, it copies from origImg to img. This means that each frame starts from the completely unmodified original image. So, no matter what modifications you made before, it resets every time draw is called.

At first, I used the threshold values in the code to detect colors.

For detecting red:
I used the condition r > 80 && g < 100 && b < 100.
The logic here is: the value of the red channel should be greater than 80, while the values of the green and blue channels should be less than 100. This means the pixel has a higher red component.

For detecting blue:
I used the condition r < 100 && g < 100 && b > 90.
The logic is: the value of the blue channel should be greater than 90, while the values of the red and green channels should be less than 100. This means the pixel has a higher blue component.

However, the downside is that some pixels will always be out of the threshold range, leading to them not being selected.

![GIst8C.png](https://imgpile.com/images/GIst8C.png)


# HW08 B
Since winter is approaching, I am very much looking forward to Christmas. Therefore, I chose a piece of Christmas music from one of my favorite games, "Stardew Valley", set in winter.

I want to control the diameter of a group of circles based on volume.

![GIsVR4.jpg](https://imgpile.com/images/GIsVR4.jpg)


1.I randomly placed 50 circles on the screen and assigned a random multiplier to each circle. This multiplier determines how the circle should enlarge or shrink according to the amplitude of the audio.
2.I used amplitude.getLevel() to get the current amplitude of the audio.
3.I used the mouseClicked function to listen for mouse click events. When the user clicks on the screen, if the audio is playing, it pauses; if the audio is paused or stopped, it starts looping.
4.I defined a Circle class to manage the properties and behaviors of each circle. Each circle has its own position, multiplier, size, and transparency.

I really like the first few seconds where the circles gradually grow with the bell sound in the music background; it's very adorable.