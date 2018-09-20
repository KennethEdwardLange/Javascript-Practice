function validate2() {
    valCheck = true;
    var image1 = getImage(emailCheck(document.forms["contact information"]["email"].value), "email");
    var image2 = getImage(phoneCheck(document.forms["contact information"]["phone"].value), "phone");
    var image3 = getImage(addressCheck(document.forms["contact information"]["address"].value), "address");

    document.getElementById("Email").appendChild(image1);
    document.getElementById("Phone").appendChild(image2);
    document.getElementById("Address").appendChild(image3);
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

function emailCheck(email) {
    atSplit = email.split('@');
    if (atSplit.length == 2 && alphaNumCheck(atSplit[0])) {
        periodSplit = atSplit[1].split('.')
        if (periodSplit.length == 2 && alphaNumCheck(periodSplit[0] + periodSplit[1])) {
            return true;
        }
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

function phoneCheck(phone) {
    atSplit = phone.split('-');
    if (atSplit.length == 3 && numCheck(atSplit[0]) && numCheck(atSplit[1]) && numCheck(atSplit[2])) {
      if(atSplit[0].length == 3 && atSplit[1].length == 3 && atSplit[2].length == 4){
        return true;
      }
    } else if (phone.length == 10 && numCheck(phone)){
      return true
    }
    valCheck = false;
    return false;
}

function numCheck(entry) {
    let regex = /[0-9]/;
    if (entry != null && entry.match(regex)) {
        return true;
    } else {
        return false;
    }
}

function addressCheck(email) {
    atSplit = email.split(',');
    if (atSplit.length == 2 && alphaCheck(atSplit[0])) {
        return true;
    }
    valCheck = false;
    return false;
}

function alphaCheck(entry) {
    let regex = /^[a-z]+$/i;
    if (entry != null && entry.match(regex)) {
        return true;
    } else {
        return false;
    }
}
