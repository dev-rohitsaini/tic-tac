class Users {
    constructor(userName = null, email, password, google = null) {
        this.username = userName,
            this.email = email,
            this.password = password,
            this.google = google
    }
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
            // localStorage.setItem(this.email, JSON.stringify(data));      
        } else {
            alert('email alreay registered')
            return false;
        }

    }
    login() {
        // console.log(this.email + " and   " + this.password)
        const localEmail = JSON.parse(localStorage.getItem(this.email));
        if (localEmail != null) {
            console.log(localEmail.email)
            if (localEmail.password == this.password) {

                alert('you are logged in')
            }
            // alert('hello')
        } else if (localEmail != null) {
            alert('This email is not valid email')
        }

    }
    print() {
        const localEmail1 = JSON.parse(localStorage.getItem(this.email));


        console.log(localEmail1)
    }
}

// var myobj = new Users("rohit", "R@gmail.com", "123");
// var myobj2 = new Users("rrrohit", "R@gmail.com", "1234");
var myobj = new Users("rrrohit", "R@gmail.com", "1234");
myobj.save()
    // myobj2.save()
    // myobj.print()
    // myobj2.print()

// myobj.login()
// myobj2.login()


// console.log(myobj)