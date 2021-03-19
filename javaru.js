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
        alert("Email не может быть пустым");
    } else if (!isEmail(emailValue)) {
        alert("Неправильно введенный адрес электронной почты.");
    }

    if (passwordValue === '') {
        alert("Email не может быть пустым");
    } else if (!isPassword(passwordValue)) {
        alert("Пароль должен быть не менее 8 символов содержать одну заглавную букву одну маленькую одну символ и одну цифру.");
    }

    if (password2Value === '') {
        alert("Пароль не может быть пустым");
    } else if (passwordValue !== password2Value) {
        alert("Пароль не совпадеат");
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
            alert("Вы успешно зарегистрировались! Ваш  ID:" + json.id);

        }
    };
};