
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



    //Crear baraja de cartas:
    const generateCards = () => {
        const cards = [];
        suits.forEach(suit =>{
            for (let i=1; i <= 13; i=i+1){
                cards.push({...suit, value: i, renderValue: cardreferenceJQKA(i) })
            }
        });

        return cards;

    }

     //Numero de referencia para J,Q,K,A x suit:
     const cardreferenceJQKA = (value) =>{
        if (value === 11){
            return 'J'
        }
        if (value === 12){
            return 'Q'
        }
        if (value === 13){
            return 'K'
        }
        if (value === 1){
            return 'A'
        }

        return `${value}`
     }

     //Cartas al azar de baraja:
     const generateRandomCards = () => {
        let pick = document.getElementById('numberofcards').value || 0
        if (times > 10){
            times = 10
        }
        const pickarray = []
        for (let cards = 1; cards <= pick; cards=cards+1){
            const randomposition = generateRandomPosition(cards.length -1)
            pickarray.push(cards[randomposition])
            cards.splice(randomposition, 1)
        }

        return pickarray;

     }

     const generateRandomPosition = (maxvalue) =>{
        minvalue = 0
        maxvalue = Math.floor(maxvalue);
        return Math.floor(Math.random() * (maxvalue - minvalue) + minvalue)
     }

     //Mostrar N° de cartas seleccionadas aleatoriamente para sort:
     const drawCards = (pickarray) =>{
        const cardsboard = document.getElementById('drawcards')
        pickarray.forEach(card => {
            const thecard = `<div class="card">
            <div class="symbol top-left" style="color: ${card.color}">${card.symbol}</div>
            <div class="thevalue" style"color: ${card.color}">${card.renderValue}</div>
            <div class="symbol bottom-right" style="color: ${card.color}">${card.symbol}</div>          
        </div>`
            cardsboard.insertAdjacentHTML(thecard);
        });

     }

     //Mostrar "Sort Steps" para N° de cartas seleccionadas aleatoriamente:
     const drawSortCards = (rows) => {
        const sortcards = document.getElementById('logsstepslist')
        const render = []

        const card = (card, index) => {
            return `<div class="card">
            <div class="symbol top-left" style="color: ${card.color}">${card.symbol}</div>
            <div class="render-thevalue" style"color: ${card.color}">${card.renderValue}</div>
            <div class="symbol bottom-right" style="color: ${card.color}">${card.symbol}</div>          
        </div>`

        }
        rows.forEach((row, index) => {
            let rowStep = document.createElement('div');
            const h4 = document.createElement('h4');
            h4.innerHTML = `${index}.`
            h4.style.color = 'red'
            h4.style.padding = '1px'
            rowStep.appendChild(h4)
            rowStep.classList.add('rowStep')

            row.forEach(c => {
                const csort = card(c)
                rowStep.insertAdjacentHTML(csort);
            })

            sortcards.appendChild(rowStep)           
        })
     }

     //Aplicar Bubble Sort:
     const sortbubble = (array) => {
        let change = true;
        let logs = []
        do {
            let cbarray = [...array]
                logs.push(cbarray)
            change = false;

            for (let b= 0; b< array.length; j=j+1){

                if (array[j+1] && array[j].value > array[j+1].value) {

                    let temp = array[b];
                    array[b]=array[b+1];
                    array[b+1] = temp;

                    change=true;
                }
            }
        } while (change);
        return logs;
     }

     //Resetear Draw y Sort:
     const resetDraw = () =>{
        const container = document.getElementById('drawcards')
        while (container.firstChild){
            container.firstChild.remove()
        }
     }

     const resetSort = () =>{
        const container2 =document.getElementById('logsstepslist')
        while (container2.firstChild){
            container2.firstChild.remove()
        }
     }








}



