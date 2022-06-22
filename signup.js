//sign up-----------------------------------------------------------------------------------
var submit = document.getElementById('signup_submit');
if (submit != null) {
    submit.addEventListener('click', function submitForm(e) {
        e.preventDefault();
        var userName = document.getElementById('username').value
        var span = document.getElementById('usernameError')
        var email = document.getElementById('email').value
        var emailError = document.getElementById('emailError')
        var pass = document.getElementById('password').value
        var passwordError = document.getElementById('passwordError')
        var pass2 = document.getElementById('password2').value
        var passwordError2 = document.getElementById('passwordError2')
            //validations-----------------------------------------------------------------
        if (userName == "") {
            span.innerHTML = "";
            span.innerHTML = "Please enter the Name"
            return false;
        } else {
            span.innerHTML = "";
            if (userName.length < 3 || userName.length > 25) {
                span.innerHTML = "Name length must be between 2 to 25"
                return false;
            }
        }
        if (email == "") {
            emailError.innerHTML = "";
            emailError.innerHTML = "Please enter the email"
            return false;
        } else {
            emailError.innerHTML = "";
            let regex = new RegExp(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
            if (regex.test(email) == false) {
                emailError.innerHTML = "Please enter valid email"
                return false;
            }

        }

        if (pass == "") {
            passwordError.innerHTML = "";
            passwordError.innerHTML = "Please enter the password"
            return false;
        } else {
            passwordError.innerHTML = "";
            if (userName.length > 35) {
                passwordError.innerHTML = "Password length must be between 6 to 35"
                return false;
            }
            if (userName.length < 6) {
                passwordError.innerHTML = "Password length must be between 6 to 35"
                return false;
            }

        }
        if (pass2 == "") {
            passwordError2.innerHTML = "";
            passwordError2.innerHTML = "Please enter the password again"
            return false;
        } else {
            passwordError2.innerHTML = "";
            console.log(pass2 === pass)
            if ((pass2 === pass) == false) {
                passwordError2.innerHTML = "Confirm-password is matching password"
                return false;
            }

        }
        var myObj = new Users(userName, email, pass);
        myObj.save()

    })
};

var signUp = document.getElementById('sign_up')
if (signUp != null) {
    signUp.addEventListener('click', function() {
        location.replace('index.html');
    })
};
if (document.getElementById('login') != null) {
    document.getElementById('login').addEventListener('click', function() {
        location.replace('login.html');
    })

}