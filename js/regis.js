function Validate() {
    var isValid = true;
    var full_name = document.forms["regis-form"]["name"];
    var gender = document.getElementsByName("gender");
    var email = document.forms["regis-form"]["email"];
    var password = document.forms["regis-form"]["password"];
    var address = document.forms["regis-form"]["address"];
    var terms = document.getElementsByName("terms");

    if (full_name.value == "") {
        alert("Please enter your name.");
        name.focus();
        isValid = false;
    }
  
    var gender_valid = false;
    for(var i=0; i<gender.length; i++) {
        if(gender[i].checked) {
            gender_valid = true;
        }
    }
    if(!gender_valid) {
        alert("Must check some option!");
        gender.focus();
        isValid = false;
    }

    if (email.value == "") {
        alert("Please enter a valid e-mail address.");
        email.focus();
        isValid = false;
    }

    if (address.value == "") {
        alert("Please enter your address.");
        address.focus();
        isValid = false;
    }
  
    if (password.value == "") {
        alert("Please enter your password");
        password.focus();
        isValid = false;
    }
  
    console.log(terms[0].checked);
    if (terms[0].checked == false) {
        alert("Please check the terms and conditions.");
        terms.focus();
        isValid = false;
    }
  
    if(isValid) {
        alert("Thank you for registering!");
        return true;
    }else {
        return false;
    }
}
