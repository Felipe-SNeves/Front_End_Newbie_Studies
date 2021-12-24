function isValid () {

    var email = document.getElementById ("iemail").value;

    console.error (email);

    if (email.length == 0)
        return false;

    return true;
}

function changeColor(set) {

    var element = document.getElementById("iemail");

    element.style.color = set ? 'hsl(209, 33%, 12%)' : 'hsl(223, 100%, 88%)';
}

function check () {

    var element = document.getElementById ("iemail");
    var display = document.getElementsByClassName ("alert");

    if (element.value.length == 0) {
        element.style.borderColor = 'hsl(354, 100%, 66%)';
        display[0].style.visibility = 'visible';
        display[0].style.marginBottom = '26px';
        display[0].style.display = 'block';
    }
    else {
        element.style.borderColor = 'hsl(209, 33%, 12%)';
        display[0].style.visibility = 'hidden';
        display[0].style.marginBottom = '0px';
        display[0].style.display = 'none';
    }
}

function effects () {

    var element = document.getElementById ("iemail");
    var display = document.getElementsByClassName ("alert");

    element.style.borderColor = 'hsl(354, 100%, 66%)';
    display[0].style.visibility = 'visible';
    display[0].style.marginBottom = '26px';
    display[0].style.display = 'block';
}