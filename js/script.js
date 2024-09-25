function registration() {

    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var contact = document.getElementById("mobile");
    var address = document.getElementById("address");
    var pwd = document.getElementById("psw");
    var cpwd = document.getElementById("psw-repeat");

    var errorName = document.getElementById("error_name");
    var errorEmail = document.getElementById("error_email");
    var errorMobile = document.getElementById("error_mobile");
    var erroraddress = document.getElementById("error_address");

    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var phoneno = /^\d{10}$/;

    if (name.value == '') {
        errorName.style.display = 'block';
        errorName.innerText = 'Please enter your name';
        name.focus();
        return true;
    } else if (name.value.length < 3) {
        errorName.style.display = 'block';
        errorName.innerText = 'Name field required only alphabet characters';
        name.focus();
        return true;
    } else {
        errorName.style.display = 'none';
    }

    if (email.value == '') {
        errorEmail.style.display = 'block';
        errorEmail.innerText = 'Please enter your email';
        email.focus();
        return true;
    } else if (!filter.test(email.value)) {
        errorEmail.style.display = 'block';
        errorEmail.innerText = 'enter the Valid email';
        email.focus();
        return true;
    } else {
        errorEmail.style.display = 'none';
    }
    if (contact.value == '') {
        errorMobile.style.display = 'block';
        errorMobile.innerText = 'Please enter your number';
        email.focus();
        return true;
    } else if (!phoneno.test(contact.value)) {
        errorMobile.style.display = 'block';
        errorMobile.innerText = 'please enter valid number';
        email.focus();
        return true;
    } else {
        errorMobile.style.display = 'none';
    }

    if (address.value == '') {
        erroraddress.style.display = 'block';
        erroraddress.innerText = 'Please enter your number';
        address.focus();
        return true;
    } else {
        erroraddress.style.display = 'none';
    }
    if (pwd != cpwd) {
        alert("Passwords do not match.");
        return false;
    }
    return true;


}