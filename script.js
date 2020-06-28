var uploadUrl = "https://face-recognition-masked-unmasked.cognitiveservices.azure.com/customvision/v3.0/Prediction/68e29f1e-edea-4108-85e4-4a92480efe57/classify/iterations/Mask%20Immune%20Face%20Recognition%20System/image";


var linkUrl = "";


function upload(file) {
    let xhr = new XMLHttpRequest();

    // track upload progress
    xhr.upload.onprogress = function(event) {
        console.log(`Uploaded ${event.loaded} of ${event.total}`);
    };

    // track completion: both successful or not
    xhr.onloadend = function() {
        if (xhr.status == 200) {
            console.log("success");
        } else {
            console.log("error " + this.status);
        }
    };

    xhr.open("POST", uploadUrl);
    xhr.setRequestHeader('Prediction-Key', '04b3d203a0b74db08bba5834f5f43223');
    xhr.setRequestHeader('Content-Type', 'application/octet-stream');
    xhr.send(file);
    xhr.onload = () => {
        //document.getElementById('data').innerHTML = xhr.response
        alert(xhr.response);
    };
}

function PreviewImage() {
    var oFReader = new FileReader();
    oFReader.readAsDataURL(document.getElementById("upload-image").files[0]);

    oFReader.onload = function(oFREvent) {
        document.getElementById("uploadPreview").src = oFREvent.target.result;
    };
};