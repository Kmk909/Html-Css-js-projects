var meridian="AM"
function showTime() {
    var time=new Date();
    var clock=document.querySelector('#clock')

    var hr = time.getHours();
    var min = time.getMinutes();
    var sec = time.getSeconds();

    if (hr>12) {
      hr=hr-12;
      meridian="PM";
    }
    if (hr === 0) {
      hr=12;
    }
    if (hr<10) {
      hr="0"+hr;
    }
    if (min<10) {
      min="0"+min;
    }
    if (sec<10) {
      sec="0"+sec;
    }

    var newtime=hr+":"+min+":"+sec+"."+meridian;
    clock.innerText=newtime;
}
showTime();
setInterval(showTime,1000);
function getRandomColor() { //To give me a new rgb number everytime
var colors=['black','red','aqua','#A52A2A']
var color=Math.floor(Math.random() * colors.length);
return color;
}
function bgchanger() {
  var aNoti = document.querySelector('.mainAlarmNoti');

  var color = getRandomColor();
  var colors=['black','red','aqua','#A52A2A']
  console.log(color);
  setInterval(aNoti.style.background = colors[color],
      1000);

}
// bgchanger();
// setInterval(bgchanger,1000);

alarm();
interval=setInterval(alarm,1000);

function alarm(){
  var alarm=document.querySelector('.alarm');
  var alarmmer=document.querySelector('.alarm-meridiem')
  var alarmHour=parseInt(alarm.options[alarm.selectedIndex].value);
  var alarmMeri=alarmmer.options[alarmmer.selectedIndex].value;
  var alNoti=document.querySelector('.alarmNoti');
  var button=document.querySelector('.button');
  var showButton=document.querySelector('.show-button');
  var countDownDiv=document.querySelector('.countdown');
  //var confirm;

  var time = new Date();
  var date = time.getDate();
  var meri = "AM";
  var currenthr = time.getHours();

  console.log(alarmHour);
  console.log(currenthr);
  console.log(alarmMeri);
  console.log(date);

  if (currenthr === 0) {
    currenthr = currenthr+12;
  }
  if (currenthr>12) {
    currenthr = currenthr-12;
    meri = "PM";
    console.log(currenthr);
  }

  showButton.onclick=function(){
    if (currenthr === alarmHour && meri === alarmMeri ) {
                 alNoti.style.display = "block";
                 console.log('This is equal');

    }else if(alarmHour>currenthr && meri === alarmMeri) {
                 var hr=alarmHour-currenthr;
                 console.log(hr);
                 if (hr === 1) {
                   var txt=hr+" hour untill the alarm.";
                 }else {
                   var txt=hr+" hours untill the alarm.";
                 }

                 if (document.querySelector('.countDownP')) {
                   document.querySelector('.countDownP').remove();
                 }else {
                   let message=document.createElement("p");
                   message.textContent=txt;
                   message.classList.add("countDownP")
                   console.log(txt);
                   countDownDiv.appendChild(message);
                 }

      }else if (alarmHour<currenthr && alarmMeri === "PM" && meri === "AM") {
                  var ah = alarmHour+12;
                  var hr = ah-currenthr;
                  console.log(hr);
                  console.log("THis is inside ah<ch.");
                  if (hr === 1) {
                    var txt=hr+" hour untill the alarm.";
                  }else {
                    var txt=hr+" hours untill the alarm.";
                  }

                  if (document.querySelector('.countDownP')) {
                    document.querySelector('.countDownP').remove();
                  }else {
                    let message=document.createElement("p");
                    message.textContent=txt;
                    message.classList.add("countDownP")
                    console.log(txt);
                    countDownDiv.appendChild(message);
                  }
      }
    }

  var countP=document.querySelector('.countDownP');
  console.log(countP);
  if (currenthr === alarmHour && meri === alarmMeri ) {
              //confirm="yes";
              //if (confirm === "yes") {
                  alNoti.style.display = "block";
              //}
              console.log('This is equal');
              if (countP) {
                  countP.style.display="none";
              }
              button.onclick= function(){
                alNoti.style.display="none";
                console.log(countP+"hahaha");
                console.log(currenthr);
                //confirm="no";
                // currenthr=0;
                // meri="PM";
                clearInterval(interval);
              }
  }


}
setInterval(alarm,1000);
