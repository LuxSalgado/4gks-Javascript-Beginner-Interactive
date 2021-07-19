function sing () {
    let letit = "let it be";
    let wisp = "whisper words of wisdom";
    let ther = "there will be an answer";
    let cancion = "";
    let i=0;
    while (i<4) {
        cancion = cancion+letit+", ";
        i++;
    }
    cancion = cancion+wisp+", ";
    i=0;
    while (i<5) {
        cancion = cancion+letit+", ";
        i++;
    }
    cancion = cancion+ther+", ";
    cancion = cancion+letit;
    return cancion;
}

//Your code above ^^^

console.log(sing());