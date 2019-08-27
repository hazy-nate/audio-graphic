let background_color;
let mic, mic_sensitivity;
let img;
let h = 0;
let s = 0;


function setup(){
     background_color = color(40);

     mic = new p5.AudioIn();
     mic.start();
     mic_sensitivity = 0.7;

     img = loadImage("media/tv.png");

     createCanvas(windowWidth, windowHeight);
}


function draw(){
     background(background_color);

     let vol = mic.getLevel() * mic_sensitivity;

     h = lerp(h, map(vol, 0, 0.7, 0, height), 0.3);                             // Height by microphone volume
     s = lerp(s, map(vol, 0, 1, 1, 2), 0.3);                                    // Scale by microphone volume

     translate(width / 2, height / 2);
     scale(s);
     image(img, -img.width / 5, -h - img.height / 5, img.width / 2.5, img.height / 2.5);
}


function windowResized(){
     resizeCanvas(windowWidth, windowHeight);
}
