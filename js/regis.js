function Validate() {
    var isValid = true
    var full_name = document.forms['regis-form']['name']
    var gender = document.getElementsByName('gender')
    var email = document.forms['regis-form']['email']
    var password = document.forms['regis-form']['password']
    var address = document.forms['regis-form']['address']
    var terms = document.getElementsByName('terms')

    if (full_name.value == '') {
        alert('Please enter your name.')
        name.focus()
        isValid = false
        return false
    }

    var gender_valid = false
    for (var i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            gender_valid = true
        }
    }
    if (!gender_valid) {
        alert('Must check some option!')
        gender.focus()
        isValid = false
        return false
    }

    if (email.value == '' || !email.value.includes("@")) {
        alert('Please enter a valid e-mail address.')
        email.focus()
        isValid = false
        return false
    }

    if (address.value == '') {
        alert('Please enter your address.')
        address.focus()
        isValid = false
        return false
    }

    if (password.value == '' || password.value.length < 8) {
        alert('Please enter your password')
        password.focus()
        isValid = false
        return false
    }

    console.log(terms[0].checked)
    if (terms[0].checked == false) {
        alert('Please check the terms and conditions.')
        terms.focus()
        isValid = false
        return false
    }

    if (isValid) {
        toggleModal()
    } else {
        return false
    }
}

const modal = document.querySelector('.modal')
const trigger = document.querySelector('.trigger')
const ok = document.querySelector('.ok')
const closeButton = document.querySelector('.close-button')

function toggleModal() {
    modal.classList.toggle('show-modal')
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal()
        window.location.href = "index"
    }
}

function redirect() {
    window.location.href = "index"
}

trigger.addEventListener('click', Validate)
ok.addEventListener('click', redirect)
closeButton.addEventListener('click', redirect)
window.addEventListener('click', windowOnClick)
