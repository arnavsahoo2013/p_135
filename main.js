function setup()
{
    can = createCanvas(400,340);
    can.center();
    video = createCapture(VIDEO);
    video.size(400,340);
    video.center();
    video.hide();
}
video = "";
status = "";
number_of_objects = "";
function preload()
{
    video = createVideo("");
    video.hide();
}
function draw()
{
    image(video, 0, 0, 400, 340);
}
function start()
{
    myModel = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status : Object Detected";
    document.getElementById("number_of_objects").innerHTML = "cell phone found";
}
function modelLoaded()
{
    console.log("model_has_loaded");
    status = true;
    number_of_objects = true;
    video.loop();
    video.volume(0);
}