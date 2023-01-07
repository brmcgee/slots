          
            
const display = document.getElementById('box');
const spinButton = document.getElementById('my-btn');
const imageDisplay = document.querySelectorAll(".img-box")
const scoreDisplay = document.getElementById('score');
const moneyDisplay = document.getElementById('money')
const possWinDisplay = document.getElementById('poss-win');


let myRandom;
let myScore = 0;
let resultHor = [];
let money = 2000;  //start money
let howManyToDisplay = 15;
moneyDisplay.innerHTML = money;
let bet = Number(document.getElementById('bet').innerHTML);
let prize = Math.floor(bet / 4) * 10 ; //rowJackpot prize
possWinDisplay.innerHTML = prize;
let rowJackpot = 4;  //amount needed per row to win       

spinButton.addEventListener('click', clearPot);

function rangeSlide(valueRange, valueWin) {
    document.getElementById('range-value').innerHTML = valueRange;
    document.getElementById('poss-win').innerHTML = valueWin;
}

function spin(){
    bet = Number(document.getElementById('bet').value);
    prize = Math.floor(bet / 4) * 10 ; 
    possWinDisplay.innerHTML = prize;
    resultHor = [];
    for (let i=0; i < howManyToDisplay; i++) {
        const imageElem = document.createElement('img');
        randomNum();  
        if (myRandom === 1) {
            imageElem.setAttribute('src', 'minion.png');
            imageElem.setAttribute('class', 'img-box');
            imageElem.setAttribute('id', `index${i}`);
            imageElem.setAttribute('data-id', 1);
                let dataStore = Number(imageElem.getAttribute('data-id'));
                resultHor.push(dataStore);
            display.appendChild(imageElem); 
            let timer = setInterval(() => {
                imageElem.setAttribute('src', 'minion2.png')
            }, 220)
        } else if (myRandom === 2) {
            imageElem.setAttribute('src', 'minion2.png');
            imageElem.setAttribute('class', 'img-box');
            imageElem.setAttribute('id', `index${i}`);
            imageElem.setAttribute('data-id', 2);
                let dataStore = Number(imageElem.getAttribute('data-id'));
                resultHor.push(dataStore);
            display.appendChild(imageElem); 
            let timer = setInterval(() => {
                imageElem.setAttribute('src', 'minion.png')
            }, 480)
        }  else if (myRandom === 3) {
            imageElem.setAttribute('src', 'minion3.jpg');
            imageElem.setAttribute('class', 'img-box');
            imageElem.setAttribute('id', `index${i}`);
            imageElem.setAttribute('data-id', 3);
                let dataStore = Number(imageElem.getAttribute('data-id'));
                resultHor.push(dataStore);
            display.appendChild(imageElem); 
            let timer = setInterval(() => {
                imageElem.setAttribute('src', 'carl.jpg')
            }, 100)
        }  else if (myRandom === 4) {
            imageElem.setAttribute('src', 'carl.jpg');
            imageElem.setAttribute('class', 'img-box');
            imageElem.setAttribute('id', `index${i}`);
            imageElem.setAttribute('data-id', 4);
                let dataStore = Number(imageElem.getAttribute('data-id'));
                resultHor.push(dataStore);
            display.appendChild(imageElem); 
            let timer = setInterval(() => {
                imageElem.setAttribute('src', 'minion3.jpg')
            }, 460)
        }  else {
            imageElem.setAttribute('src', 'minion.png');
            imageElem.setAttribute('class', 'img-box');
            imageElem.setAttribute('id', `index${i}`);
            imageElem.setAttribute('data-id', 5);
                let dataStore = Number(imageElem.getAttribute('data-id'));
                resultHor.push(dataStore);
            display.appendChild(imageElem); 
            let timer = setInterval(() => {
                imageElem.setAttribute('src', 'minion-king.jpg')
            }, 340)
        }            
    }
    validateRow();
}
spin();            
function clearPot(){
  myScore = 0;
  scoreDisplay.innerHTML = myScore;
  for (let i=0; i<howManyToDisplay; i++){
    let imageHolder = document.getElementById(`index${i}`);
    imageHolder.parentNode.removeChild(imageHolder);
  }
  money = money - bet;
  moneyDisplay.innerHTML = money;
  // if enough money to play
  if (money >= bet){
    spin()
  }  
  //   validateRow();   
}       
function toggleWinImage() {

}
function randomNum() {
    myRandom = Math.floor(Math.random() * 6);
}
function validateRow() {
    let row = howManyToDisplay / 3;
    let one = [];
    let two = [];
    let three = [];
    let rowOneRes = []; 
    let rowTwoRes = [];
    let rowThreeRes = [];

    // creates three arrays representing 3 rows
    for (let i=0; i<row; i++){
        one.push(resultHor[i]); 
    } 
    for (let i=row; i<row*2; i++){
        two.push(resultHor[i]); 
    } 
    for (let i=row*2; i<row*3; i++){
        three.push(resultHor[i]); 
    } 
    //find total amount times each # appear index 0 is for #1 and will display how many times 1 apppears
    rowOneRes = countRowTotal(one);
    rowTwoRes = countRowTotal(two);
    rowThreeRes = countRowTotal(three);
    for (let i=0; i<rowOneRes.length - 1; i++) {  ///  -1 
        if (rowOneRes[i] >= rowJackpot) {
            myScore += prize;
            money += prize;
        }  
    }
    for (let i=0; i<rowTwoRes.length - 1; i++) {
        if (rowTwoRes[i] >= rowJackpot) {
            myScore += prize;
            money += prize;
        }
    }
    for (let i=0; i<rowThreeRes.length - 1; i++) {
        if (rowThreeRes[i] >= rowJackpot) {
            myScore += prize;
            money += prize;
        }
    }

    scoreDisplay.innerHTML = myScore; 
    // moneyDisplay.innerHTML = money;
    setInterval(updateLeaderBoardMoney, 3000) //delay to update money after prize
    one = [];
    two = [];
    three = [];
    rowOneRes = []; 
    rowTwoRes = [];
    rowThreeRes = []; 
    myScore = 0;   

    
}
function updateLeaderBoardMoney() {
    moneyDisplay.innerHTML = money;
    
}
function countRowTotal(arr) {
    let oneCount = 0;
    let twoCount = 0;
    let threeCount = 0;
    let fourCount = 0;
    let fiveCount = 0;
    let nArr = [];

    arr.filter(n => {
        if (n == 1) {
            oneCount++;
        }
    });
    arr.filter(n => {
        if (n == 2) {
            twoCount++;
        }
    });
    arr.filter(n => {
        if (n == 3) {
            threeCount++;
        }
    });
    arr.filter(n => {
        if (n == 4) {
            fourCount++;
        }
    });
    arr.filter(n => {
        if (n == 5) {
            fiveCount++;
        }
    });
    nArr.push(oneCount);
    nArr.push(twoCount);
    nArr.push(threeCount);
    nArr.push(fourCount);
    nArr.push(fiveCount);

    //push true if winner to end of array future expansion
    if (oneCount >= rowJackpot || 
        twoCount >= rowJackpot || 
        threeCount >= rowJackpot || 
        fourCount >= rowJackpot || 
        fiveCount >= rowJackpot) {
            nArr.push(true);
        } else {
            nArr.push(false);
        }
    return nArr;
}
