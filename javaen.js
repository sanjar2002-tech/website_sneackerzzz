const form = document.getElementById('form');

const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const submitpost = document.querySelector("btn-submit");

form.addEventListener('submit', e => {
    e.preventDefault();
    checkInputs();

});

function checkInputs() {

    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();


    if (emailValue === '') {
        alert("Email can not be blank");
    } else if (!isEmail(emailValue)) {
        alert("Incorrectly entered email address.");
    }

    if (passwordValue === '') {
        alert("Email can not be blank");
    } else if (!isPassword(passwordValue)) {
        alert("The password must be at least 8 characters long and contain one capital letter one small one character and one number.");
    }

    if (password2Value === '') {
        alert("Password can not be blank");
    } else if (passwordValue !== password2Value) {
        alert("Password can not be match");
    } else {

        postRegister(obj, (pesponse) => {
            alert(response);
        });
    }
}





function isEmail(email) {
    const val = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(gmail.com)|(mail.ru)|(yahoo.com)|(yandex.ru)$/;
    return val.test(email);
}

function isPassword(password) {
    const val = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return val.test(password);
}

var obj = {
    "email": email,
    "password": password
}


function postRegister(obj) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://my-json-server.typicode.com/RassulNurdylda/users/users", true);
    var stringObj = JSON.stringify(obj);
    xhr.send(stringObj);
    xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status == 201) {
            console.log(stringObj);
            console.log(this.response);
            var json = jQuery.parseJSON(this.response);
            alert("Success! Your ID:" + json.id);

        }
    };
};