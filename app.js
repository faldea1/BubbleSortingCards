
window.onload = () => {

    //Variable para Array de obj. suits:
    const suits = [
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
        }
    ]

    //Draw Button:
    var prevnumb = document.getElementById("rollBtn");
    var newnumb = prevnumb.cloneNode(true);
    prevnumb.parentNode.replaceChild(newnumb, prevnumb);



    //Crear baraja de cartas:
    const generateDeck = () => {
        const deck = [];
        suits.forEach(suit => {
            for (let c = 2; c <= 14; c = c + 1) {
                deck.push({ ...suit, value: c, renderValue: cardRenderValue(c) })
            }
        });

        return deck;
    }

    //Numero de referencia para J,Q,K,A x suit:
    const cardRenderValue = (value) => {
        if (value === 11) {
            return 'J'
        }
        if (value === 12) {
            return 'Q'
        }
        if (value === 13) {
            return 'K'
        }
        if (value === 14) {
            return 'A'
        }

        return `${value}`
    }

    //Cartas al azar de baraja:
    const generateRandomCards = () => {
        let times = document.getElementById('inputRandom').value || 0
        if (times > 52) {
            times = 52
        }
        const arr = []
        for (let cards = 1; cards <= times; cards=cards+1) {
            const randomIndex = generateRandomIndex(deck.length - 1)
            arr.push(deck[randomIndex])
            deck.splice(randomIndex, 1)
        }

        return arr

    }

    const generateRandomIndex = (max) => {
        min = 0
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min)
    }

    //Mostrar N° de cartas seleccionadas aleatoriamente para sort:
    const renderCards = (arr) => {
        const container = document.getElementById('deckRender')
        arr.forEach(card => {
            const cardDiv = `<div class="card">
            <div class="symbol top-left" style="color: ${card.color}">${card.symbol}</div>           
            <div class="symbol bottom-right" style="color: ${card.color}">${card.symbol}</div>  
            <div class="card-render-value" style="color: ${card.color}">${card.renderValue}</div>        
        </div>`
            container.insertAdjacentHTML("beforeend", cardDiv);
        });

    }

    //Mostrar "Sort Steps" para N° de cartas seleccionadas aleatoriamente:
    const renderLogs = (rows) => {
        const logs = document.getElementById('logsList')

        const card = (card, index) => {
            return `<div class="card">
            <div class="symbol top-left" style="color: ${card.color}" >${card.symbol}</div>
            <div class="render-thevalue" style="color: ${card.color}" >${card.renderValue}</div>
            <div class="symbol bottom-right" style="color: ${card.color}" >${card.symbol}</div>          
        </div>`

        }
        rows.forEach((row, index) => {
            let logRow = document.createElement('div');
            const header = document.createElement('h5');
            header.innerHTML = `${index}.`
            header.style.color = 'white'
            header.style.padding = '10px'
            logRow.appendChild(header)
            logRow.classList.add('logRow')

            row.forEach(c => {
                const appendCard = card(c)
                logRow.insertAdjacentHTML("beforeend", appendCard);
            })

            logs.appendChild(logRow)
        })
    }


    //Aplicar Bubble Sort:
    const sortItems = (arr) => {
        let min = 0;
        const logs = []
        while (min <= arr.length - 1) {
            const asd = [...arr]
            logs.push(asd)
            for (let i = min + 1; i < arr.length; i = i + 1) {
                if (arr[min].value && arr[min].value > arr[i].value) {
                    let aux = arr[min];
                    arr[min] = arr[i];
                    arr[i] = aux;
                }
            }
            min = min + 1;
        }
        return logs;
    }
    


    //Resetear Draw y Sort:
    const clearCards = () => {
        const container = document.getElementById('deckRender')
        while (container.firstChild) {
            container.firstChild.remove()
        }
    }

    const clearSorted = () => {
        const container = document.getElementById('logsList')
        while (container.firstChild) {
            container.firstChild.remove()
        }
    }


    document.getElementById('rollBtn').addEventListener('click', function () {
        clearCards()
        clearSorted()
        deck = generateDeck()
        cards = generateRandomCards()
        renderCards(cards)

    })

    document.getElementById('sortBtn').addEventListener('click', function () {
        const logRows = sortItems([...cards])
        renderLogs(logRows)

    })

    let deck = generateDeck()
    let cards = generateRandomCards()

}



