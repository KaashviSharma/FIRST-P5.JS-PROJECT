function preload()
{

}

function setup()
{
    canvas = createCanvas(700,650);
    canvas.position(110,250);
    video = createCapture(VIDEO);
    video.hide();
    circle(300,300,150,10)

    tint_color = "";
}

function draw()
{
    image(video,0,0,640,480);
    tint(tint_color);
}

function take_snapshot()
{
    save('youareamazing.png');
}

function filter_tint()
{
    tint_color = document.getElementById("color_name").value;
}