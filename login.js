window.onload = function() {
    const isLogin = localStorage.getItem('login');
    if (isLogin != null) {
        location.replace('dashboard.html')
        alert('You are logged in')
    }
    // console.log(isLogin);
}



//login -----------------------------------------------------------------------------------------
var login_form = document.getElementById('login_submit');
if (login_form != null) {
    login_form.addEventListener('click', function submitForm(e) {
        e.preventDefault();
        var email = document.getElementById('email').value
        var emailError = document.getElementById('emailError')
        var pass = document.getElementById('password').value
        var passwordError = document.getElementById('passwordError')

        //validations-----------------------------------------------------------------

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
        }


        var myObj = new Users(null, email, pass);
        myObj.login()

    })
};
if (document.getElementById('login') != null) {
    document.getElementById('login').addEventListener('click', function() {
        location.replace('login.html');
    })

}
var signUp = document.getElementById('sign_up')
if (signUp != null) {
    signUp.addEventListener('click', function() {
        location.replace('index.html');
    })
};