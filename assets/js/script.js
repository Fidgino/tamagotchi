document.addEventListener('DOMContentLoaded', function () {
    refreshingObject()
})

// Dom Element 
let risitasCharacter = document.querySelector('.normalRisitas');

// Bar 
const progressionBar = document.querySelectorAll('.bar');

// Sound
let rire = new Audio('../assets/sound/rire.mp3')
let smoke = new Audio('../assets/sound/smoke.mp3')
let sleep = new Audio('../assets/sound/sleep.mp3')

// Select
const foodSelect = document.querySelector('#foodSelect');
const drinkSelect = document.querySelector('#drinkSelect');
const sleepSelect = document.querySelector('#sleepSelect');
const playSelect = document.querySelector('#playSelect');
const option = document.querySelectorAll('option')

// Validation Button
const validBtn = document.querySelectorAll('.buttonGive');

// Array 
let blagueFirst = ["Que dit un aveugle lorsqu'on lui donne du papier de verre ?", "Pourquoi la petite fille tombe-t-elle de la balançoire?", "Qu'est-ce qui est pire qu'un bébé dans une poubelle ?", "Grâce à quoi peut-on enlever le chewing-gum dans les cheveux ?", "Qu'est-ce qui est mieux que gagner une médaille d'or aux Jeux Paralympiques ?", "Quelle partie du légume ne passe pas dans le mixer ?", "Comment sortir un bébé d'un mixer ?", "Qu'est-ce qui a deux pattes et qui saigne ?", "Comment un parachutiste aveugle sait-il qu'il va toucher le sol ?", "Qu'est ce qui est vert et qui pue ?", "– Maman, maman, je ne veux plus dormir avec mon petit frère.", "Pourquoi un enfant chinois ne croit jamais au Père Noël ?", "Quelle est la pire combinaison de maladies?"];

let blagueSecond = ["« C’est écrit tout petit. »", "Parce qu’elle n’a pas de bras.", "Un bébé dans deux poubelles.", "Le cancer.", "Marcher.", "La chaise roulante.", "Avec une paille.", "Un demi-chien.", "Il y a du mou dans la laisse du chien.", "Un scout mort au fond d’un bois.", "– Tais-toi ! Je t’ai déjà dit qu’on avait pas assez d’argent pour l’enterrer.", "Car c’est lui qui a fabriqué les jouets", "– Alzheimer et la diarrhée. Vous courez, mais vous ne savez plus où….", "– Sur leurs doigts."];

// Function Css Bar 

// Object
let risitas = {
    food: 30,
    drink: 50,
    sleep: 50,
    satisfaction: 60,
}
function limitObject() {
    Object.keys(risitas).forEach(function (key) {
        let value = risitas[key];
        Object.defineProperty(risitas, key, {
            get: function () {
                return value;
            },
            set: function (newValue) {
                if (newValue > 100) {
                    value = 100;
                } else if (newValue < 0) {
                    value = 0;
                } else {
                    value = newValue;
                }
            }
        });
    })
}
// Timer Object

setInterval(() => {
    risitas.food -= 5;
    risitas.drink -= 5;
    risitas.sleep -= 5;
    risitas.satisfaction -= 5;

    progressionBar[0].style.height = `${risitas.food}%`;
    progressionBar[1].style.height = `${risitas.drink}%`;
    progressionBar[2].style.height = `${risitas.sleep}%`;
    progressionBar[3].style.height = `${risitas.satisfaction}%`;
}, 5000);




// Refreshing Object Function
function refreshingObject() {
    progressionBar[0].style.height = `${risitas.food}%`;
    progressionBar[1].style.height = `${risitas.drink}%`;
    progressionBar[2].style.height = `${risitas.sleep}%`;
    progressionBar[3].style.height = `${risitas.satisfaction}%`;
    limitObject();
    console.log(risitas.food)
}


// Food Object 
foodSelect.addEventListener('change', () => {
    if (foodSelect.selectedIndex === 1) { // Burger
        validBtn[0].addEventListener('click', () => {
            risitas.food += 15;
            risitas.drink -= 5;
            risitas.sleep -= 5;
            risitas.satisfaction += 10;
            refreshingObject();
        })
    }
    else if (foodSelect.selectedIndex === 2) { // KFC
        validBtn[0].addEventListener('click', () => {
            risitas.food += 20;
            risitas.drink -= 10;
            risitas.sleep -= 5;
            risitas.satisfaction += 10;
            refreshingObject();
        })
    }
    else if (foodSelect.selectedIndex === 3) { // Kebab
        validBtn[0].addEventListener('click', () => {
            risitas.food += 10;
            risitas.drink -= 5;
            risitas.sleep -= 5;
            risitas.satisfaction += 10;
            refreshingObject();
        })
    }
    else if (foodSelect.selectedIndex === 4) { // Pizza
        validBtn[0].addEventListener('click', () => {
            risitas.food += 15;
            risitas.drink -= 10;
            risitas.sleep -= 10;
            risitas.satisfaction += 10;
            refreshingObject();
        })
    }
    else if (foodSelect.selectedIndex === 5) { // Bouillie qui nourrit
        validBtn[0].addEventListener('click', () => {
            risitas.food += 25;
            risitas.drink -= 10;
            risitas.sleep -= 10;
            risitas.satisfaction += 0;
            refreshingObject();
        })
    }
})

// Drink Object 
drinkSelect.addEventListener('change', () => {
    if (drinkSelect.selectedIndex === 1) { // Eau insalubre
        validBtn[1].addEventListener('click', () => {
            risitas.food -= 5;
            risitas.drink += 20;
            risitas.sleep -= 5;
            risitas.satisfaction -= 5;
            refreshingObject();
        })
    }
    else if (drinkSelect.selectedIndex === 2) { // Coca Eco+
        validBtn[1].addEventListener('click', () => {
            risitas.food += 0;
            risitas.drink += 20;
            risitas.sleep -= 5;
            risitas.satisfaction += 5;
            refreshingObject();
        })
    }
    else if (drinkSelect.selectedIndex === 3) { // Villageoise
        validBtn[1].addEventListener('click', () => {
            risitas.food -= 5;
            risitas.drink += 25;
            risitas.sleep -= 10;
            risitas.satisfaction += 20;
            refreshingObject();
        })
    }
    else if (drinkSelect.selectedIndex === 4) { // Maximator
        validBtn[1].addEventListener('click', () => {
            risitas.food -= 10;
            risitas.drink += 30;
            risitas.sleep -= 15;
            risitas.satisfaction += 25;
            refreshingObject();
        })
    }
})

// Sleep Object 
sleepSelect.addEventListener('change', () => {
    if (sleepSelect.selectedIndex === 1) { // 1h
        validBtn[2].addEventListener('click', () => {
            risitasCharacter.style.backgroundImage = "url(../assets/img/risitas/sleep.png)"
            sleep.play()
            disabled()
            risitas.food -= 5;
            risitas.drink -= 5;
            risitas.sleep += 10;
            risitas.satisfaction += 0;
            refreshingObject();
            setTimeout(() => {
                risitasCharacter.style.backgroundImage = "url(../assets/img/risitas/normalRisitas.png)"
                undisabled()
                sleep.pause()
            }, 3000);
        })
    }
    else if (sleepSelect.selectedIndex === 2) { // 3h
        validBtn[2].addEventListener('click', () => {
            risitasCharacter.style.backgroundImage = "url(../assets/img/risitas/sleep.png)"
            sleep.play()
            disabled()
            risitas.food -= 10;
            risitas.drink -= 10;
            risitas.sleep += 20;
            risitas.satisfaction += 0;
            refreshingObject();
            setTimeout(() => {
                risitasCharacter.style.backgroundImage = "url(../assets/img/risitas/normalRisitas.png)"
                undisabled()
                sleep.pause()
            }, 6000);
        })
    }
    else if (sleepSelect.selectedIndex === 3) { // 6h
        validBtn[2].addEventListener('click', () => {
            risitasCharacter.style.backgroundImage = "url(../assets/img/risitas/sleep.png)"
            sleep.play()
            disabled()
            risitas.food -= 15;
            risitas.drink -= 15;
            risitas.sleep += 30;
            risitas.satisfaction += 0;
            refreshingObject();
            setTimeout(() => {
                sleep.play()
            }, 7380);
            setTimeout(() => {
                risitasCharacter.style.backgroundImage = "url(../assets/img/risitas/normalRisitas.png)"
                undisabled()
                sleep.pause()
            }, 12000);
        })
    }
})




























let ContainersBlague = document.createElement('div');
let pBlagueFirst = document.createElement('p');
pBlagueFirst.className = 'pBlagueFirst'
let pBlagueSecond = document.createElement('p');

playSelect.addEventListener('change', function () {
    validBtn[3].addEventListener('click', function () {
        if (playSelect.selectedIndex === 1) {         // Blagues
            disabled()
            risitasCharacter.style.backgroundImage = "url(../assets/img/risitas/avantRire.png)"
            setTimeout(() => {
                risitasCharacter.style.backgroundImage = " url(../assets/img/risitas/rire.png)"
                rire.play()
            }, 1000);
            setTimeout(() => {
                risitasCharacter.style.backgroundImage = " url(../assets/img/risitas/normalRisitas.png)"
                ContainersBlague.style.display = 'none'
                undisabled()
            }, 5500);
            ContainersBlague.style.display = "flex"
            document.querySelector('.mainScreen').appendChild(ContainersBlague);
            ContainersBlague.appendChild(pBlagueFirst);
            ContainersBlague.appendChild(pBlagueSecond);
            ContainersBlague.id = "ContainersBlague";
            pBlagueFirst.textContent = blagueFirst[Math.floor(Math.random() * blagueFirst.length)];
            pBlagueSecond.textContent = blagueSecond[blagueFirst.indexOf(pBlagueFirst.textContent)];
        }
    })
})


playSelect.addEventListener('change', function () {
    validBtn[3].addEventListener('click', function () {
        if (playSelect.selectedIndex === 2) {
            disabled()
            risitasCharacter.style.backgroundImage = 'url(../assets/img/risitas/roule.png)'
            smoke.play()
            setTimeout(() => {
                risitasCharacter.style.backgroundImage = 'url(../assets/img/risitas/fume.png)'
            }, 5000);
            setTimeout(() => {
                risitasCharacter.style.backgroundImage = 'url(../assets/img/risitas/def.png)'
                undisabled()
            }, 12000);
            setTimeout(() => {
                risitasCharacter.style.backgroundImage = " url(../assets/img/risitas/normalRisitas.png)"
            }, 30000);
        }
    })
})

function disabled() {
    for (let i = 0; i < validBtn.length; i++) {
        validBtn[i].disabled = true
        validBtn[i].classList.add('wait');
    }
}
function undisabled() {
    for (let i = 0; i < validBtn.length; i++) {
        validBtn[i].disabled = false
        validBtn[i].classList.remove('wait');
    }
}

