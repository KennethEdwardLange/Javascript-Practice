function validate1() {
    valCheck = true;
    var image1 = getImage(validCheck(document.forms["contact information"]["first"].value), "first");
    var image2 = getImage(validCheck(document.forms["contact information"]["last"].value), "last");
    var image3 = getImage(validCheck(document.forms["contact information"]["gender"].value), "gender");
    var image4 = getImage(validCheck(document.forms["contact information"]["state"].value), "state");

    document.getElementById("First").appendChild(image1);
    document.getElementById("Last").appendChild(image2);
    document.getElementById("Gender").appendChild(image3);
    document.getElementById("State").appendChild(image4);

    if (valCheck){
      document.location.href = "./validation2.html";
    }
}

function getImage(bool, ID) {
    var image = document.getElementById("image" + ID);
    if (image == null) {
        image = new Image(15, 15);
        image.id = "image" + ID;
    }
    image.src = bool ? './correct.png' : './wrong.png';
    return image;
}

function validCheck(string) {
    if (alphaNumCheck(string)){
      return true
    }
    valCheck = false;
    return false;
}


function alphaNumCheck(entry) {
    let regex = /^[a-z0-9]+$/i;
    if (entry != null && entry.match(regex)) {
        return true;
    } else {
        return false;
    }
}
