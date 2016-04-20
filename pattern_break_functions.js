var levelCount = 0;
var j1 = 0;
var j2 = 0;
var j3 = 0;
var j4 = 0;
var active1 = true;
var active2 = true;
var active3 = true;
var active4 = true;

var b1Value = levels[levelCount]['b1Init'];
var b2Value = levels[levelCount]['b2Init'];
var b3Value = levels[levelCount]['b3Init'];
var b4Value = levels[levelCount]['b4Init'];
var target = levels[levelCount]['target'];

var count1 = levels[levelCount]['count1'];
var count2 = levels[levelCount]['count2'];
var count3 = levels[levelCount]['count3'];
var count4 = levels[levelCount]['count4'];

//Level select generator-----------------------------------------------------------------------------------------------
function levelselect() {
				for (i=0; i<levels.length; ++i)
					{document.write('<option value="' + i + '" >Level ' + (i+1) + '</option>')}

				
}

function changeLevel(newlevel){
	$('nextlevel').style.display="none";
	levelCount = parseInt(newlevel);
	setCounters();
	setLevelTarget();
	resetLevel();
}



//Here are the function for each of the four buttons.------------------------------------------------------------------------

	function activateB1(j) {
		if(active1){
			j = levelCount;
			levels[j]['b1Func']();
			checkNumbers();
			checkWin();
			counter1(count1);
		}
	}

	function activateB2(j) {
		if(active2){
			j = levelCount;
			levels[j]['b2Func']();
			checkNumbers();
			checkWin();
			counter2(count2);
		}
	}

	function activateB3(j) {
		if(active3){
			j = levelCount;
			levels[j]['b3Func']();
			checkNumbers();
			checkWin();
			counter3(count3);
		}
	}

	function activateB4(j) {
		if(active4){
			j = levelCount;
			levels[j]['b4Func']();
			checkNumbers();
			checkWin();
			counter4(count4);
		}
	}




//These functions check the numbers to display them on the button and see if they are higher than 999 or a decimal number.---
// Also turns the buttons red if they are above 999.

function checkNumbers(){
		checkNum1();
		checkNum2();
		checkNum3();
		checkNum4();
		checkWin();
	}

function checkNum1() {
			if (b1Value <= 999){
				if(b1Value % 1 !=0){$('b1').innerHTML = b1Value.toFixed(2);}
				else{$('b1').innerHTML = b1Value;}
				
			}
			else {
				$('b1').className = "button deactivebutton";
			}
		}

function checkNum2() {
		if (b2Value <= 999){
			if(b2Value % 1 !=0){$('b2').innerHTML = b2Value.toFixed(2);}
			else{$('b2').innerHTML = b2Value;}
		}
		else {
			$('b2').className = "button deactivebutton";
		}
	}

	function checkNum3() {
		if (b3Value <= 999){
			if(b3Value % 1 !=0){$('b3').innerHTML = b3Value.toFixed(2);}
			else{$('b3').innerHTML = b3Value;}
		}
		else {
			$('b3').className = "button deactivebutton";
		}
	}

	function checkNum4() {
		if (b4Value <= 999){
			if(b4Value % 1 !=0){$('b4').innerHTML = b4Value.toFixed(2);}
			else{$('b4').innerHTML = b4Value;}
		}
		else {
			$('b4').className = "button deactivebutton";
		}
	}






//Check to see if the target number has been reached on all buttons. Displays the next level button if this is true.-----

	function checkWin() {
		if ((b1Value == target) && (b2Value == target) && (b3Value == target) && (b4Value == target))
			$('nextlevel').style.display="block";
	}





//Counters for all buttons that count how many times the button has been clicked and deactivates it and turns it red if
//it has reached it's total click limit.
	
	function counter1(number1){
		++j1;
		if(j1>=number1){
			$('b1').className = "button deactivebutton";
			active1 = false;
		}
	}

	function counter2(number2){
		++j2;
		if(j2>=number2){
			$('b2').className = "button deactivebutton";
			active2 = false;
		}
	}
	
	function counter3(number3){
		++j3;
		if(j3>=number3){
			$('b3').className = "button deactivebutton";
			active3 = false;
		}
	}

	function counter4(number4){
		++j4;
		if(j4>=number4){
			$('b4').className = "button deactivebutton";
			active4 = false;
		}
	}



//Reset Button, resets all to initial values, resets counters and turns all buttons green again.---------------------------

	function resetLevel(j) {
		j = levelCount;
		b1Value = levels[j]['b1Init'];
	 	b2Value = levels[j]['b2Init'];
		b3Value = levels[j]['b3Init'];
		b4Value = levels[j]['b4Init'];
		setValues();
		$('b1').className = "button activebutton";
		$('b2').className = "button activebutton";
		$('b3').className = "button activebutton";
		$('b4').className = "button activebutton";
		j1 = 0;
		j2 = 0;
		j3 = 0;
		j4 = 0;
		active1 = true;
		active2 = true;
		active3 = true;
		active4 = true;
	}





//Next level function changes all the values to the next level and resets everything to initial setting for the new level.
//Also hides the next level box again.

function nextLevel() {
	$('nextlevel').style.display="none";
	levelCount += 1;
	setCounters();
	setLevelTarget();
	resetLevel();
}


//On load sets initial values for when the game is first loaded and played.-----------------------------------------------

window.onload=function () {
		setValues();
		setLevelTarget();
	}


function setCounters() {
	count1 = levels[levelCount]['count1'];
	count2 = levels[levelCount]['count2'];
	count3 = levels[levelCount]['count3'];
	count4 = levels[levelCount]['count4'];
}

function setValues() {
		$('b1').innerHTML = b1Value;
		$('b2').innerHTML = b2Value;
		$('b3').innerHTML = b3Value;
		$('b4').innerHTML = b4Value;
}

function setLevelTarget() {
		target = levels[levelCount]['target'];
		$('target').innerHTML = target;
		$('levelnumber').innerHTML = levelCount + 1;
		$('description').innerHTML = levels[levelCount]['text'];
		$('nextLevelDisp').innerHTML = levelCount + 2;
}

function $(element) {
		return document.getElementById(element);
	}