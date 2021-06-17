function preload()
{

}

function draw()
{
    background('#F7DC6F');
}

function setup()
{
    video = createCapture(VIDEO);
    video.size(500, 400,);
    video.position(50, 150);
    canvas = createCanvas(500, 400);
    canvas.position(640, 150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log("posenet is initialized");
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
    }
}