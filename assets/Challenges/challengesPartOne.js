//Challenges Part 1

//Coding Challenge 1
const Mark = {
    mass: 78,
    height: 1.69,
}

const John = {
    mass: 92,
    height: 1.95,
}

const calculateBMI = (mass, height) => {
    let bmi = (mass / height ** 2);
    return bmi.toFixed(2);
}

var marksBMI = calculateBMI(Mark.mass, Mark.height);
var johnsBMI = calculateBMI(John.mass, John.height);

console.log(marksBMI);

document.getElementById("bmiOfMark").innerHTML = `Mark's BMI: ${marksBMI}`;
document.getElementById("bmiOfJohn").innerHTML = `John's BMI: ${johnsBMI}`;

//Coding Challenge 2
document.getElementById("whoHasHigherBMI").innerHTML = marksBMI > johnsBMI ? `Mark's BMI (${marksBMI}) is higher than John's (${johnsBMI})!` : `John's BMI (${johnsBMI}) is higher than Mark's (${marksBMI})!`;


//Coding Challenge 3

//Question 4 Code (Incomplete)
const golfNicknames = ["Hole-in-one", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Time to go home... >:("];
let par = Number(document.getElementById("parUserInput").value);
let strokes = Number(document.getElementById("strokesUserInput").value);
let nickname = '';
const nickProfileLink = 'https://nickwebbportfolio.netlify.app/'

function golfScoreNickname(par, strokes) {
    if (strokes === 1) {
        nickname = `Wow, ${golfNicknames[0]}!`;
    }
    else if (strokes <= par - 2) {
        nickname = `Nice ${golfNicknames[1]}!`;
    }
    else if (strokes === par - 1) {
        nickname = `Nice ${golfNicknames[2]}!`;
    }
    else if (strokes === par) {
        nickname = `${golfNicknames[3]}...could be better, could be worse.`;
    }
    else if (strokes === par + 1) {
        nickname = `${golfNicknames[4]} :(`;
    }
    else if (strokes === par + 2) {
        nickname = `Yikes, ${golfNicknames[5]}! :'(`;
    }
    else if (strokes >= par + 3) {
        nickname = golfNicknames[6];
    }
    else {
      nickname = "Hmm, something's wrong...Sorry! -Nick";  
    }
    
    document.getElementById("userScoreNickname").innerHTML = nickname;
   
}

//document.getElementById("winnerWithHighestAverage").innerHTML = variableSoonToCome;