function getNumber(num) {
    var input = document.getElementById("history-value");
    switch (num) {
        case 1:
            input.innerHTML += 1;
            break;
        case 2:
            input.innerHTML += 2;
            break;
        case 3:
            input.innerHTML += 3;
            break;
        case 4:
            input.innerHTML += 4;
            break;
        case 5:
            input.innerHTML += 5;
            break;
        case 6:
            input.innerHTML += 6;
            break;
        case 7:
            input.innerHTML += 7;
            break;
        case 8:
            input.innerHTML += 8;
            break;
        case 9:
            input.innerHTML += 9;
            break;
        case 0:
            input.innerHTML += 0;
            break;
    }
}
//Operator 
function operator(sign) {
    let getSign = document.getElementById("history-value");
    switch (sign) {
        case "+":
            getSign.innerHTML += "+";
            break;
        case "-":
            getSign.innerHTML += "-";
            break;
        case "*":
            getSign.innerHTML += "*";
            break;
        case "/":
            getSign.innerHTML += "/";
            break;
        case "%":
            getSign.innerHTML += "%";
            break;
    }
}
//calculate 
function calculate() {
    let exp = document.getElementById("history-value");
    let exp1 = Math.abs(eval(exp.innerHTML));
    document.getElementById("output-value").innerHTML = "=" + exp1;
}
//Voice
let voice = document.getElementById("microphone");
let userSpeak = document.getElementById("history-value");
var sound = () => {
    if ('webkitSpeechRecognition' in window) {
        let speak = new webkitSpeechRecognition();
        speak.continuous = true;
        speak.interimResults = true;
        speak.lang = "en-IN";
        speak.start();


        let finalSpeak = '';
        speak.onresult = function (event) {
            let interimTranscript = '';
            for (let i = event.resultIndex; i < event.results.length; i++) {
                let tranScripts = event.results[i][0].transcript;
                tranScripts.replace();
                if (event.results[i].isFinal) {
                    finalSpeak += tranScripts;
                } else {
                    interimTranscript += tranScripts;
                }
            }
            userSpeak.innerHTML = finalSpeak + interimTranscript;
            var calculateSpeak = () => {
                document.getElementById('output-value').innerHTML = "=" + eval(userSpeak.innerHTML);
            }
            setInterval(calculateSpeak, 1000);
        }
    } else {
        userSpeak.innerHTML = "Browser not support";
    }
}
voice.addEventListener('click', sound);
//backspace 
function backSpace() {
    let exp = document.getElementById("output-value").innerHTML;
    document.getElementById("output-value").innerHTML = exp.substring(0, exp.length - 1);
}
//clear
function clearScreen() {
    document.getElementById("output-value").innerHTML = "";
    document.getElementById("history-value").innerHTML = "";
    document.getElementById("microphone").innerHTML = "";
}



