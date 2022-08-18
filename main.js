function startClassification()
{
    navigator.mediaDevices.getUserMedia({
        audio: true
    });
    classifier=ml5.soundClassifier("model.json",modelReady);
}

function modelReady(){
    console.log("modelLoaded");
    classifier.classify(gotResults);
}