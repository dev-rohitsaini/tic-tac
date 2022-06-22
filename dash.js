window.onload = function() {
    const isLogin = localStorage.getItem('login');
    if (isLogin == null) {
        location.replace('login.html')
        setTimeout(() => { alert('Please login first') }, 0)
    }
    // console.log(isLogin);
}
document.getElementById('logout').addEventListener('click', function() {
    var myObj = new Users();
    myObj.logout();
});
// --------------------------show game---------------------------------
document.getElementById('playTic').addEventListener('click', function() {
    document.getElementById('mainIn').style.display = "block";
});
document.getElementById('reset').addEventListener('click', function() {
    makeReset();
})

//----------------paly the game --------------------------------------------
var main = document.getElementById('mainIn');
var t = 1;
for (let i = 0; i < 9; i++) {
    var input = document.createElement('input');
    input.setAttribute('class', 'inputCut');
    input.setAttribute('id', 'in_' + t);
    input.setAttribute('readonly', 'true')
    input.setAttribute('onclick', 'putValue(event)')
    main.appendChild(input);
    t++;
}

function putValue(event) {
    //to eneter the value ---------------------------------
    enterValue(event.srcElement.id)
        //cheching the result----------------------------------------------------
    let coun = turnCount();
    if (coun > 4) {
        chechResult()
    }

}
var turn = 1;

function enterValue(id) {
    if (turn == 1) {
        document.getElementById(id).value = "X";
        document.getElementById(id).disabled = true;
        turn = 0;
    } else {
        document.getElementById(id).value = "O";
        document.getElementById(id).disabled = true;
        turn = 1;
    }
}

function turnCount() {
    let count = 0
    for (let i = 1; i < 10; i++) {
        if (document.getElementById('in_' + i).disabled == true) {
            count++;
        }
    }
    return count;
}

function chechResult() {

    var item1 = document.getElementById('in_1').value;
    var item2 = document.getElementById('in_2').value;
    var item3 = document.getElementById('in_3').value;
    var item4 = document.getElementById('in_4').value;
    var item5 = document.getElementById('in_5').value;
    var item6 = document.getElementById('in_6').value;
    var item7 = document.getElementById('in_7').value;
    var item8 = document.getElementById('in_8').value;
    var item9 = document.getElementById('in_9').value;

    if ((item1 == 'X') && (item2 == 'X') && (item3 == 'X')) {
        if (confirm('Player X Win you want to continue') == true) {
            makeReset()
        } else {
            makerestDisabled();
        }
    } else if ((item4 == 'X') && (item5 == 'X') && (item6 == 'X')) {
        if (confirm('Player X Win you want to continue') == true) {
            makeReset()
        } else {
            makerestDisabled();
        }
    } else if ((item7 == 'X') && (item8 == 'X') && (item9 == 'X')) {
        if (confirm('Player X Win you want to continue') == true) {
            makeReset()
        } else {
            makerestDisabled();
        }
    } else if ((item1 == 'X') && (item4 == 'X') && (item7 == 'X')) {
        if (confirm('Player X Win you want to continue') == true) {
            makeReset()
        } else {
            makerestDisabled();
        }
    } else if ((item2 == 'X') && (item5 == 'X') && (item8 == 'X')) {
        if (confirm('Player X Win you want to continue') == true) {
            makeReset()
        } else {
            makerestDisabled();
        }
    } else if ((item3 == 'X') && (item6 == 'X') && (item9 == 'X')) {
        if (confirm('Player X Win you want to continue') == true) {
            makeReset()
        } else {
            makerestDisabled();
        }
    } else if ((item1 == 'X') && (item5 == 'X') && (item9 == 'X')) {
        if (confirm('Player X Win you want to continue') == true) {
            makeReset()
        } else {
            makerestDisabled();
        }
    } else if ((item3 == 'X') && (item5 == 'X') && (item7 == 'X')) {
        if (confirm('Player X Win you want to continue') == true) {
            makeReset()
        } else {
            makerestDisabled();
        }
    } else if ((item1 == 'O') && (item2 == 'O') && (item3 == 'O')) {
        if (confirm('Player O Win you want to continue') == true) {
            makeReset()
        } else {
            makerestDisabled();
        }
    } else if ((item4 == 'O') && (item5 == 'O') && (item6 == 'O')) {
        if (confirm('Player O Win you want to continue') == true) {
            makeReset()
        } else {
            makerestDisabled();
        }
    } else if ((item7 == 'O') && (item8 == 'O') && (item9 == 'O')) {
        if (confirm('Player O Win you want to continue') == true) {
            makeReset()
        } else {
            makerestDisabled();
        }
    } else if ((item1 == 'O') && (item4 == 'O') && (item7 == 'O')) {
        if (confirm('Player O Win you want to continue') == true) {
            makeReset()
        } else {
            makerestDisabled();
        }
    } else if ((item2 == 'O') && (item5 == 'O') && (item8 == 'O')) {
        if (confirm('Player O Win you want to continue') == true) {
            makeReset()
        } else {
            makerestDisabled();
        }
    } else if ((item3 == 'O') && (item6 == 'O') && (item9 == 'O')) {
        if (confirm('Player O Win you want to continue') == true) {
            makeReset()
        } else {
            makerestDisabled();
        }
    } else if ((item1 == 'O') && (item5 == 'O') && (item9 == 'O')) {
        if (confirm('Player O Win you want to continue') == true) {
            makeReset()
        } else {
            makerestDisabled();
        }
    } else if ((item3 == 'O') && (item5 == 'O') && (item7 == 'O')) {
        if (confirm('Player O Win you want to continue') == true) {
            makeReset()
        } else {
            makerestDisabled();
        }
    }

}

function makerestDisabled() {
    for (let i = 1; i < 10; i++) {
        if (document.getElementById('in_' + i).disabled != true) {
            document.getElementById('in_' + i).disabled = true;
        }
    }
}

function makeReset() {
    for (let i = 1; i < 10; i++) {
        document.getElementById('in_' + i).value = '';
        document.getElementById('in_' + i).disabled = false;
        turn = 1
    }
}