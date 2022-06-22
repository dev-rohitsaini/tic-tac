class Users {
    constructor(userName = null, email, password, google = null) {
            this.username = userName,
                this.email = email,
                this.password = password,
                this.google = google
        }
        //saving data in local storage---------------------------------------------
    save() {
            var data = {
                    username: this.username,
                    email: this.email,
                    password: this.password,
                    google: this.google,
                }
                //first get -----------------------------------------------------------
                //then save===================
            const localEmail = JSON.parse(localStorage.getItem(this.email));
            if (localEmail == null) {
                localStorage.setItem(this.email, JSON.stringify(data));
                location.replace('login.html')
                alert('You have registered successfully ,Please Login');
            } else {
                alert('email alreay registered')
                return false;
            }

        }
        //for login -------------------------------------------------------------

    login() {
        console.log(this.email + " and   " + this.password)
        const localEmail = JSON.parse(localStorage.getItem(this.email));
        if (localEmail != null) {
            console.log(localEmail.email)
            if (localEmail.password == this.password) {
                localStorage.setItem('login', this.email);
                location.replace('dashboard.html')
                alert('you are logged in')
            }
        } else if (localEmail == null) {
            alert('This email is not registered email')
            return false;

        }



    }
    logout() {
        localStorage.removeItem('login');
        location.replace('login.html');
        alert('you have been logged out')
    }
    print() {
        const localEmail1 = JSON.parse(localStorage.getItem(this.email));
        console.log(localEmail1)
    }
}