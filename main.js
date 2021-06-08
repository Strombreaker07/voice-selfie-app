var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start() 
{
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event)
{
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = content;
    console.log(content);
    speak();

    if(content == "take my selfie")
    {
        console.log("taking your selfie in 5 seconds");
        speak()
    }
}

function speak()
{
    var synth = window.speechSynthesis;
    speak_data = "Taking Your Selfie in 5 Seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(Camera);
    
    setTimeout(function() 
    {
        take_snapshot();
        save();
    },5000);
}

Camera = document.getElementById("camera_view");

Webcam.set({
    width: 360,
    height: 250,
    image_format: 'png',
    png_quality: 90
   });

function take_snapshot() 
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="snapped" src="'+data_uri+'">';
    });
}

function save() 
{
    link = document.getElementById("link");
    image = document.getElementById("snapped").src;
    link.href = image;
    link.click();
}