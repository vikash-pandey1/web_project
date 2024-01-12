let cardsArray = [
    {
        'name': 'CSS',
        'img': 'https://th.bing.com/th/id/OIP.tAvAD5lCtDJSjywplxd37QHaEo?rs=1&pid=ImgDetMain',
    },
    {
        'name': 'HTML',
        'img': 'https://th.bing.com/th/id/OIP.wtbphh9buB7NAjHoCtv74wAAAA?rs=1&pid=ImgDetMain',
    },
    {
        'name': 'jQuery',
        'img': 'https://th.bing.com/th/id/OIP.3W0Vhz02wBXmrDBhuuvo_QHaHa?w=157&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    },
    {
        'name': 'JS',
        'img': 'https://th.bing.com/th/id/OIP.25vSXGJsvi1u3JIjcfvfNQHaEo?w=268&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    },
    {
        'name': 'Node',
        'img': 'https://th.bing.com/th/id/OIP.Tf4BFI6846neirVSebC0vAAAAA?w=255&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    },
    {
        'name': 'Python',
        'img': 'https://th.bing.com/th/id/OIP.0eDk2LFmQbHPZS4ZDWK78gHaHa?w=169&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    },
];

const parentDiv = document.querySelector('#card-section');

//step 2 to duplicate each card
const gameCard = cardsArray.concat(cardsArray);
console.log(gameCard);

//step 3 
//Note that this method creates a new shuffled array instead of modifying the original one

const myNumber = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1))

        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}
const shuffledChild = myNumber(gameCard);


const card_match = () => {
    let card_selected = document.querySelectorAll('.card_selected');
    card_selected.forEach((currElem) => {
        currElem.classList.add('card_match');
    })
}

let clickCount = 0;
let firstCard = "";
let secondCard = "";

let card_selected = document.querySelectorAll('.card_selected');
card_selected.forEach((currElem) => {
    currElem.classList.remove('card_selected');
})

const resetGame = () => {
    clickCount = 0;
}
// step 4

parentDiv.addEventListener('click', (event) => {
    let curCard = event.target;
    clickCount++;

    if (curCard.id === "card-section") {
        return false;
    }

    if (clickCount < 3) {
        if (clickCount === 1) {
            firstCard = curCard.parentNode.dataset.name;
            curCard.parentNode.classList.add('card_selected');
        } else {
            secondCard = curCard.parentNode.dataset.name;
            curCard.parentNode.classList.add('card_selected');
        }

        if (firstCard != "" && secondCard != "") {
            if (firstCard === secondCard) {
                // curCard.classList.add('card_match')
                setTimeout(() => {
                    card_match()
                    resetGame()
                }, 1000)

            } else {
                setTimeout(() => {
                    resetGame()
                }, 1000)
            }
        }
    }
})
// step 1 to add the card

for (let i = 0; i < shuffledChild.length; i++) {
    const childDiv = document.createElement('div');
    childDiv.classList.add('card')
    
    childDiv.dataset.name = shuffledChild[i].name;
    // childDiv.style.backgroundImage = `url(${shuffledChild[i].img})`;

    const front_div = document.createElement('div');
    front_div.classList.add('front-card')

    const back_div = document.createElement('div');
    back_div.classList.add('back-card')
    back_div.style.backgroundImage = `url(${shuffledChild[i].img})`;


    parentDiv.appendChild(childDiv)

    childDiv.appendChild(front_div)
    childDiv.appendChild(back_div)
}