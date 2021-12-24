function check (id_element) {
    
    var document_element = document.getElementById (id_element);
    var error_icon = document.getElementById ("error_icon_" + id_element);
    var error_alert = document.getElementById ("error_alert_" + id_element);

    if (document_element.value == "") {
        error_icon.style.visibility = error_alert.style.visibility =  'visible';
        document_element.style.borderColor = 'hsl(0, 100%, 74%)';
        return true;
    }

    error_icon.style.visibility = error_alert.style.visibility =  'hidden';
    document_element.style.borderColor = 'hsla(249, 10%, 26%, 0.246)';

    return false;
}

function isValid () {

    if (check('fname') || check('lname') || check('iemail') || check('ipass'))
        return false;

    return true;
}

function invalidEmail () {

    var document_element = document.getElementById ("iemail");
    var error_icon = document.getElementById ("error_icon_iemail");
    var error_alert = document.getElementById ("error_alert_iemail");

    error_icon.style.visibility = error_alert.style.visibility =  'visible';
    document_element.style.borderColor = 'hsl(0, 100%, 74%)';
    
    return false;
}