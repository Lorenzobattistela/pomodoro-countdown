var start = document.querySelector("#start").addEventListener("click" , grab);

var reset = document.querySelector("#reset").addEventListener("click" , resetar);

var aumentar = document.querySelector("#aumentar").addEventListener("click" , aumentar);

var diminuir = document.querySelector("#diminuir").addEventListener("click" , diminuir);

var aumentar = document.querySelector("#aumentar1").addEventListener("click" , aumentar1);

var diminuir = document.querySelector("#diminuir1").addEventListener("click" , diminuir1);

var pause = document.querySelector("#Stop").addEventListener("click" , pause);



var defaultValue = document.getElementById("minutes").innerText;
var defaultValue1 = document.getElementById("seconds").innerText;
var defaultValue2 = document.getElementById("minutes1").innerText;
var defaultValue3 = document.getElementById("seconds1").innerText;


var idVar;
var defMinutes;
var defSecs;
var defMinutes1;
var defSecs1;
var idVar1;
var counter = 0;


     function pause() {
          clearInterval(idVar);
          clearInterval(idVar1);
     }

     

     function aumentar() {
         var value = document.getElementById("minutes").innerText;
         value = Number(value);
         value = value + 1;
         document.getElementById("minutes").innerText = value;
     }

    function diminuir() {
     var value = document.getElementById("minutes").innerText;
     value = Number(value);
     value = value - 1;
     if(value > 0)
     {
          document.getElementById("minutes").innerText = value;
     }
           
}

function aumentar1() {
     var value = document.getElementById("minutes1").innerText;
     value = Number(value);
     value = value + 1;
     document.getElementById("minutes1").innerText = value;
     
     console.log(value);
 }

function diminuir1() {
 var value = document.getElementById("minutes1").innerText;
 value = Number(value);
 value = value - 1;
 if(value > 0)
 {
      document.getElementById("minutes1").innerText = value;
 }
    
}





   function grab() {
     var minutesHtml = document.getElementById("minutes");
     var secondsHtml = document.getElementById("seconds");
     defMinutes = minutesHtml.innerText;
     defSecs = secondsHtml.innerText;
     idVar = setInterval(countingTime, 1000);
     
     function countingTime(){
          var seconds = Number(secondsHtml.innerText);
          var minutes = Number(minutesHtml.innerText);
          if(minutes == 0 && seconds == 0)
          {
               var counter = counter + 1;
               if(counter == 4)
               {
                    document.getElementById("minutes1").innerText = "10"
               }
               clearInterval(idVar);
               grab1();
          }
          else{
            if(seconds == 00)
            {
                 seconds = 60;
                 minutes = minutes - 1;
            }
            seconds--; 
          }
          console.log(idVar);
          secondsHtml.innerText = seconds.toString();
          minutesHtml.innerText = minutes.toString();
     }
   }

   function grab1() {
        var minutesHtml1= document.getElementById("minutes1");
        var secondsHtml1 = document.getElementById("seconds1");
        defMinutes1 = minutesHtml1.innerText;
        defSecs1 = secondsHtml1.innerText;
        idVar1 = setInterval(countingTime1, 1000);

        function countingTime1() {
          var seconds1 = Number(secondsHtml1.innerText);
          var minutes1 = Number(minutesHtml1.innerText);
          if(minutes1 == 0 && seconds1 == 0)
          {
               clearInterval(idVar1);
               alert("Reinicie o tempo!");                       
          }
          else{
               if(seconds1 == 00)
               {
                    seconds1 = 60;
                    minutes1 = minutes1 - 1;
               }
               seconds1--;
          }

               secondsHtml1.innerText = seconds1.toString();
               minutesHtml1.innerText = minutes1.toString();
          
     }
  
   }

  
   function resetar() {
     clearInterval(idVar);
     clearInterval(idVar1);
     document.getElementById("minutes").innerText = defaultValue;
     document.getElementById("seconds").innerText = defaultValue1;
     document.getElementById("minutes1").innerText = defaultValue2;
     document.getElementById("seconds1").innerText = defaultValue3;
     
}