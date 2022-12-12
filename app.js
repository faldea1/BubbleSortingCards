
window.onload = () => {
    console.log("verificando...")
    console.log(DeckofCards());

    //FUNCIONES PARA MOSTRAR UNA CARTA AL AZAR (N° y PALO):

    document.querySelector('.number').innerHTML = (RandomCardNumber());


    let RandomCardSuits = RandomCardSuit() 

    document.querySelector('.t-suit').innerHTML = RandomCardSuits;
    document.querySelector('.b-suit').innerHTML = RandomCardSuits;


    if (document.querySelector('.t-suit').innerHTML === "♥" || document.querySelector('.t-suit').innerHTML === "♦") { //para aplicar color rojo en caso de carta palo corazón o diamante.
        document.querySelector('.t-suit').style.color = "red";
        document.querySelector('.b-suit').style.color = "red";
    }




}



let RandomCardNumber = () => {

    let numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

    let numberposition = Math.floor(Math.random() * numbers.length);

    return numbers[numberposition];

};

let RandomCardSuit = () => {

    let suits = ["♣", "♠", "♦", "♥"];

    let suitsposition = Math.floor(Math.random() * suits.length);

    return suits[suitsposition];

};


























//Número de combinaciones posibles en mazo de cartas.

let DeckofCards = () => {

    let numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    let suits = ["♣", "♠", "♦", "♥"];

    const cards = [];
    for (let s = 0; s < suits.length; s++) {
        for (let n = 0; n < numbers.length; n++) {
            const number = numbers[n];
            const suit = suits[s];
            cards.push({ number, suit });
        }
    }

    return cards;

}



