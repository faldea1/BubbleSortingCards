
window.onload = () => {

    //Variable para Array de obj. suits:
    const suits= [
        {
            name: 'Clubs',
            color: 'black',
            symbol: '♣'

        },
        {
            name: 'Spades',
            color: 'black',
            symbol: '♠'

        },
        {
            name: 'Hearts',
            color: 'red',
            symbol: '♥'

        },
        {
            name: 'Diamonds',
            color: 'red',
            symbol: '♦'

        },
    ];

    //Draw Button:
    var prevnumb = document.getElementById('drawbutton');
    var newnumb = prevnumb.cloneNode(true);
    prevnumb.parentNode.replaceChild(newnumb, prevnumb);



    //Crear baraja de cartas
    const generateCards = () => {
        const cards = [];
        suits.forEach(suit =>{
            for (let i=2;)


        });




    }



}



