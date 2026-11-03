
let notes = document.getElementsByClassName("card");


function showAll() {

    for (let i = 0; i < notes.length; i++) {

        notes[i].style.display = "block";

    }

}


function showDBMS() {

    showAll();

    for (let i = 0; i < notes.length; i++) {

        if (i == 0) {
            notes[i].style.display = "block";
        }

        else {
            notes[i].style.display = "none";
        }

    }

}


function showJava() {

    showAll();

    for (let i = 0; i < notes.length; i++) {

        if (i == 1) {
            notes[i].style.display = "block";
        }

        else {
            notes[i].style.display = "none";
        }

    }

}


function showWeb() {

    showAll();

    for (let i = 0; i < notes.length; i++) {

        if (i == 2 || i == 3) {
            notes[i].style.display = "block";
        }

        else {
            notes[i].style.display = "none";
        }

    }

}


function searchNotes() {

    let input = document.getElementById("search").value;

    input = input.toLowerCase();

    for (let i = 0; i < notes.length; i++) {

        let title = notes[i].innerText.toLowerCase();

        if (title.includes(input)) {

            notes[i].style.display = "block";

        }

        else {

            notes[i].style.display = "none";

        }

    }

}
