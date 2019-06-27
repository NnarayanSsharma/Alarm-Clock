// function showTime(){
// 	var date = new Date();
// 	var h = date.getHours();
// 	var m = date.getMinutes();
// 	var s = date.getSeconds();
// 	var session = "AM";

// 	if (h==0) {
// 		h = 12;
// 	}
// 	if (h>12) {
// 		h = h-12;
// 		session = "PM";
// 	}
// 	h = (h < 10) ? "0" + h : h;
// 	m = (m < 10) ? "0" + m : m;
// 	s = (s < 10) ? "0" + s : s;

// 	var time = h + ":" + m + ":" + s + " " + session; 
// 	document.getElementById("time").innerText = time;
// 	document.getElementById("time").innerContent = time;

	
	

	
// }
// showTime();
// setInterval(showTime, 1000);

var alarmSound = new Audio();
alarmSound.src = "music/James%20Blunt%20-%20Goodbye%20My%20Lover%20[OFFICIAL%20VIDEO]-320.mp3";
function setAlarm(button){
	var ms = document.getElementById('alarmTime').valueAsNumber;
	if(isNaN(ms)){
		alert('Invalide Date');
		return;
	}

	var alarm = new Date(ms);
	var alarmTime = new Date(
		alarm.getUTCFullYear(),
		alarm.getUTCMonth(),
		alarm.getUTCDate(),
		alarm.getUTCHours(),
		alarm.getUTCMinutes(),
		alarm.getUTCSeconds()
		);

	var differenceInMs = alarmTime.getTime() - (new Date()).getTime();
	if(differenceInMs < 0){
		alert("specifoed time is already passed");
		return;
	}

	setTimeout(initAlarm, differenceInMs);
	button.innnerText = 'Cancel Alarm';
	button.setAttribute('onclick', 'cancelAlarm(this);');
}

function cancelAlarm(button){
	button.innnerText = "Set Alarm";
	button.setAttribute('onclick', 'setAlarm(this);');
}

function initAlarm(){
	alarmSound.play();
	document.getElementById('alarmOption').style.display = '';

}
function stopAlarm(){
	alarmSound.pouse();
	alarmSound.currentTime = 0;
	document.getElementById('alarmOption').style.display = "none";
	cancelAlarm('document.getElementById('alarmButton')');
}
function snooze(){
	stopAlarm();
	setTimeout(initAlarm, 36000);
}


