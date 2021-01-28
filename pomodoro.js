var start = document.querySelector("#start").addEventListener("click" , grab);

var reset = document.querySelector("#reset").addEventListener("click", resetar);

var aumentar = document.querySelector("#up-focus").addEventListener("click", aumentar);

var diminuir = document.querySelector("#down-focus").addEventListener("click", diminuir);

var aumentar = document.querySelector("#up-break").addEventListener("click", aumentar1);

var diminuir = document.querySelector("#down-break").addEventListener("click", diminuir1);

var pausar = document.querySelector("#pause").addEventListener("click", pause)


var defaultValue = document.getElementById("minutes-focus").innerText;
var defaultValue1 = document.getElementById("seconds-focus").innerText;
var defaultValue2 = document.getElementById("minutes-break").innerText;
var defaultValue3 = document.getElementById("seconds-break").innerText;

var idvar;
var idvar1;
var counter = 0;
var storeM;
var storeS;
var interval;

function grab(){
    var minutes = document.getElementById("minutes-focus");
    var seconds = document.getElementById("seconds-focus");
    var storeM = minutes.innerText;
    var storeS = seconds.innerText;
    idvar = setInterval(countingTime, 1000);

    function countingTime(){
        var secondsN = Number(seconds.innerText);
        var minutesN = Number(minutes.innerText);

        if(minutesN == 0 && secondsN == 0)
        {
            counter = counter + 1;

            if(counter == 4)
            {
                document.getElementById("minutes").innerText = "10";
            }
            clearInterval(idvar);
            grab1();
        }

        else{
            if(secondsN == 00)
            {
                secondsN = 60;
                minutesN = minutesN - 1;
            }
            secondsN--;
        }

        seconds.innerText = secondsN.toString();
        minutes.innerText = minutesN.toString();
    }
}

function grab1(){
    var minutes = document.getElementById("minutes-break");
    var seconds = document.getElementById("seconds-break");
    var storeM = minutes.innerText;
    var storeS = seconds.innerText;
    idvar1 = setInterval(countingTime, 1000);

    function countingTime(){
        var secondsN = Number(seconds.innerText);
        var minutesN = Number(minutes.innerText);

        if(minutesN == 0 && secondsN == 0)
        {
            clearInterval(idvar1);
            alert("Reinicie o tempo");
        }

        else{
            if(secondsN == 0)
            {
                secondsN = 60;
                minutesN = minutesN - 1;
            }
            secondsN--;
        }

        seconds.innerText = secondsN.toString();
        minutes.innerText = minuetsM.toString();
    }
}


function resetar(){
    clearInterval(idvar);
    clearInterval(idvar1);
    document.getElementById("minutes-focus").innerText = defaultValue;
    document.getElementById("seconds-focus").innerText = defaultValue1;
    document.getElementById("minutes-break").innerText = defaultValue2;
    document.getElementById("seconds-break").innerText = defaultValue3;
}

function pause(){
    clearInterval(idvar)
    clearInterval(idvar1)
}

function aumentar(){
    var value = document.getElementById("minutes-focus").innerText;
    value = Number(value);
    value = value + 1;
    defaultValue = value;
    document.getElementById("minutes-focus").innerText = value;
}

function diminuir() {
    var value = document.getElementById("minutes-focus").innerText;
    value = Number(value);
    value = value - 1;
    if(value > 0)
    {
        defaultValue = value;
        document.getElementById("minutes-focus").innerText = value;
    }
}

function aumentar1(){
    var value = document.getElementById("minutes-break").innerText;
    value = Number(value);
    value = value + 1;
    defaultValue2 = value;
    document.getElementById("minutes-break").innerText = value;
}

function diminuir1() {
    var value = document.getElementById("minutes-break").innerText;
    value = Number(value);
    value = value - 1; 
    if(value > 0)
    {
        defaultValue2 = value;
        document.getElementById("minutes-break").innerText = value;
    }
}