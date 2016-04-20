level1 = {
	"b1Func": function() {b1Value += 1},
	"b2Func": function() {b2Value += 1},
	"b3Func": function() {b3Value += 1},
	"b4Func": function() {b4Value += 1},
	"b1Init": 1,
	"b2Init": 2,
	"b3Init": 3,
	"b4Init": 4,
	"count1": 10,
	"count2": 10,
	"count3": 10,
	"count4": 10,
	"target": 5,
	"text": "You must click the buttons to get all numbers to the target number, in this case 5.<br />\
	In this puzzle each number goes up by 1. Once finished click on \"Try Level 2\" down the botton."
}

level2 = {
	"b1Func": function() {b1Value += 1},
	"b2Func": function() {b2Value += 1; b1Value += 1},
	"b3Func": function() {b3Value += 1},
	"b4Func": function() {b4Value += 1},
	"b1Init": 0,
	"b2Init": 5,
	"b3Init": 3,
	"b4Init": 7,
	"count1": 5,
	"count2": 10,
	"count3": 15,
	"count4": 15,
	"target": 10,
	"text": "These all go up by 1 for each press as well but you can only press the top-left button 5 times.<br />\
	You then need to push the top-right button which adds 1 to itself and the number in the top-left."
}

level3 = {
	"b1Func": function() {b1Value += 2},
	"b2Func": function() {b2Value += 4},
	"b3Func": function() {b3Value += 1},
	"b4Func": function() {b4Value += 3; b3Value += 3},
	"b1Init": 4,
	"b2Init": 0,
	"b3Init": 0,
	"b4Init": 0,
	"count1": 10,
	"count2": 10,
	"count3": 4,
	"count4": 10,
	"target": 12,
	"text": "These buttons make the numbers go up by different amounts, press the top two to see by how much.<br />\
	The bottom-left button can only be pushed 4 times, the bottom-right button makes it's own number go up by 3<br />\
	and makes the number next to it go up by 3 as well. How can you make each number equal 12?<br />\
	Big clue: You might not need to push the bottom left button at all!"
}

level4 = {
	"b1Func": function() {b1Value += 2},
	"b2Func": function() {b2Value += 4; b1Value += 4},
	"b3Func": function() {b3Value += 6},
	"b4Func": function() {b4Value += 4; b3Value -= 2},
	"b1Init": 0,
	"b2Init": 0,
	"b3Init": 0,
	"b4Init": 0,
	"count1": 10,
	"count2": 10,
	"count3": 10,
	"count4": 10,
	"target": 8,
	"text": "See if you can work out the top two by yourself. The bottom left one goes up by 6 each time<br />\
	so how can you make it equal 8? You need to press it to 12 and then press the button next to it twice.<br />\
	The bottom-right button adds 4 to itself but also subtracts 2 from the button to it's left each time."
}

level5 = {
	"b1Func": function() {b1Value += b2Value},
	"b2Func": function() {b2Value += 1},
	"b3Func": function() {b3Value += 5; b4Value += 1},
	"b4Func": function() {b4Value += 1},
	"b1Init": 5,
	"b2Init": 1,
	"b3Init": 0,
	"b4Init": 10,
	"count1": 5,
	"count2": 15,
	"count3": 3,
	"count4": 10,
	"target": 15,
	"text": "The top right button can only be pushed 5 times and goes up by the number in the button next to it.<br />\
	The bottom left button adds 5 to itself and 1 to the number next to it. Can you get all numbers to equal 15?"
}

level6 = {
	"b1Func": function() {b1Value += b4Value},
	"b2Func": function() {b2Value += 3},
	"b3Func": function() {b3Value += b2Value},
	"b4Func": function() {b4Value += 5},
	"b1Init": 0,
	"b2Init": 6,
	"b3Init": 3,
	"b4Init": 5,
	"count1": 3,
	"count2": 10,
	"count3": 4,
	"count4": 10,
	"target": 30,
	"text": "Ok you're on your own now!<br />\
	Work out what how each button affects the numbers. Numbers can be changed based on addition, subtraction, multiplication\
	and division patterns. Work out the patterns and how the numbers interact with each other to solve the combination that makes\
	every number equal to the target number."
}

level7 = {
	"b1Func": function() {b1Value += 7},
	"b2Func": function() {b2Value += 5},
	"b3Func": function() {b3Value += 4; b1Value -= 3},
	"b4Func": function() {b4Value += b3Value},
	"b1Init": 6,
	"b2Init": 18,
	"b3Init": 20,
	"b4Init": 8,
	"count1": 10,
	"count2": 10,
	"count3": 10,
	"count4": 10,
	"target": 28,
	"text": "Work out what how each button affects the numbers. Numbers can be changed based on addition, subtraction, multiplication\
	and division patterns. Work out the patterns and how the numbers interact with each other to solve the combination that makes\
	every number equal to the target number."
}

level8 = {
	"b1Func": function() {b1Value -= 1},
	"b2Func": function() {b2Value += b3Value},
	"b3Func": function() {b3Value += b1Value},
	"b4Func": function() {b4Value += 2; b1Value += 4},
	"b1Init": 9,
	"b2Init": 1,
	"b3Init": 0,
	"b4Init": 5,
	"count1": 10,
	"count2": 2,
	"count3": 5,
	"count4": 5,
	"target": 9,
	"text": "Work out what how each button affects the numbers. Numbers can be changed based on addition, subtraction, multiplication\
	and division patterns. Work out the patterns and how the numbers interact with each other to solve the combination that makes\
	every number equal to the target number."
}

level9 = {
	"b1Func": function() {b1Value += b2Value},
	"b2Func": function() {b2Value += 3},
	"b3Func": function() {b3Value += b2Value},
	"b4Func": function() {b4Value += 5},
	"b1Init": 0,
	"b2Init": 3,
	"b3Init": 3,
	"b4Init": 12,
	"count1": 3,
	"count2": 12,
	"count3": 3,
	"count4": 8,
	"target": 27,
	"text": "Work out what how each button affects the numbers. Numbers can be changed based on addition, subtraction, multiplication\
	and division patterns. Work out the patterns and how the numbers interact with each other to solve the combination that makes\
	every number equal to the target number."
}

level10 = {
	"b1Func": function() {b1Value += b2Value},
	"b2Func": function() {b2Value += 2},
	"b3Func": function() {b3Value += 6},
	"b4Func": function() {b4Value += b1Value},
	"b1Init": 0,
	"b2Init": 3,
	"b3Init": 13,
	"b4Init": 14,
	"count1": 10,
	"count2": 25,
	"count3": 10,
	"count4": 3,
	"target": 49,
	"text": "Work out what how each button affects the numbers. Numbers can be changed based on addition, subtraction, multiplication\
	and division patterns. Work out the patterns and how the numbers interact with each other to solve the combination that makes\
	every number equal to the target number."
}

level11 = {
	"b1Func": function() {b1Value += 8},
	"b2Func": function() {b2Value += 3},
	"b3Func": function() {b3Value += b2Value; b4Value += 1},
	"b4Func": function() {b4Value += 6},
	"b1Init": 12,
	"b2Init": 0,
	"b3Init": 6,
	"b4Init": 1,
	"count1": 10,
	"count2": 15,
	"count3": 8,
	"count4": 5,
	"target": 36,
	"text": ""
}

level12 = {
	"b1Func": function() {b1Value += b3Value; b2Value += b4Value},
	"b2Func": function() {b3Value += 5},
	"b3Func": function() {b3Value -= 5},
	"b4Func": function() {b4Value += 5},
	"b1Init": 25,
	"b2Init": 5,
	"b3Init": 35,
	"b4Init": 0,
	"count1": 10,
	"count2": 10,
	"count3": 10,
	"count4": 12,
	"target": 55,
	"text": ""
}

level13 = {
	"b1Func": function() {b1Value -= 7},
	"b2Func": function() {b1Value += 4},
	"b3Func": function() {b3Value += 15; b2Value += 10},
	"b4Func": function() {b4Value += b3Value},
	"b1Init": 61,
	"b2Init": 20,
	"b3Init": 0,
	"b4Init": 0,
	"count1": 5,
	"count2": 5,
	"count3": 10,
	"count4": 2,
	"target": 60,
	"text": ""
}

level14 = {
	"b1Func": function() {b1Value += 4},
	"b2Func": function() {b2Value += 4},
	"b3Func": function() {b3Value += b2Value},
	"b4Func": function() {b4Value += 20; b2Value += 16},
	"b1Init": 28,
	"b2Init": 0,
	"b3Init": 16,
	"b4Init": 4,
	"count1": 10,
	"count2": 10,
	"count3": 4,
	"count4": 4,
	"target": 44,
	"text": ""
}

level15 = {
	"b1Func": function() {b1Value += 1},
	"b2Func": function() {b2Value += b1Value},
	"b3Func": function() {b3Value += b1Value},
	"b4Func": function() {b4Value += b2Value},
	"b1Init": 0,
	"b2Init": 1,
	"b3Init": 22,
	"b4Init": 9,
	"count1": 32,
	"count2": 3,
	"count3": 3,
	"count4": 2,
	"target": 31,
	"text": ""
}

level16 = {
	"b1Func": function() {b1Value += 7},
	"b2Func": function() {b2Value += 4},
	"b3Func": function() {b3Value -= b2Value},
	"b4Func": function() {b4Value -= b1Value},
	"b1Init": 10,
	"b2Init": 14,
	"b3Init": 66,
	"b4Init": 62,
	"count1": 10,
	"count2": 10,
	"count3": 2,
	"count4": 2,
	"target": 38,
	"text": ""
}

level17 = {
	"b1Func": function() {b1Value += b3Value},
	"b2Func": function() {b2Value -= b3Value},
	"b3Func": function() {b3Value += 9},
	"b4Func": function() {b4Value += b3Value},
	"b1Init": 18,
	"b2Init": 99,
	"b3Init": 0,
	"b4Init": 63,
	"count1": 3,
	"count2": 1,
	"count3": 10,
	"count4": 1,
	"target": 72,
	"text": ""
}

level18 = {
	"b1Func": function() {b1Value += 8; b2Value += 7},
	"b2Func": function() {b2Value += 1},
	"b3Func": function() {b3Value += b4Value},
	"b4Func": function() {b4Value += 12; b1Value -= 4; b2Value -= 4;},
	"b1Init": 60,
	"b2Init": 63,
	"b3Init": 4,
	"b4Init": 20,
	"count1": 8,
	"count2": 3,
	"count3": 8,
	"count4": 8,
	"target": 68,
	"text": ""
}

level19 = {
	"b1Func": function() {b1Value += 3},
	"b2Func": function() {b2Value += b1Value},
	"b3Func": function() {b3Value += b2Value},
	"b4Func": function() {b4Value += b3Value},
	"b1Init": 0,
	"b2Init": 3,
	"b3Init": 27,
	"b4Init": 12,
	"count1": 35,
	"count2": 6,
	"count3": 2,
	"count4": 3,
	"target": 93,
	"text": ""
}

level20 = {
	"b1Func": function() {b3Value += 12},
	"b2Func": function() {b3Value += 7},
	"b3Func": function() {b1Value += 10; b2Value += 15},
	"b4Func": function() {b4Value += b3Value},
	"b1Init": 20,
	"b2Init": 5,
	"b3Init": 0,
	"b4Init": 15,
	"count1": 6,
	"count2": 6,
	"count3": 6,
	"count4": 5,
	"target": 50,
	"text": ""
}


//levels Array of all the levels.
var levels = new Array();
levels[0] = level1;
levels[1] = level2;
levels[2] = level3;
levels[3] = level4;
levels[4] = level5;
levels[5] = level6;
levels[6] = level7;
levels[7] = level8;
levels[8] = level9;
levels[9] = level10;
levels[10] = level11;
levels[11] = level12;
levels[12] = level13;
levels[13] = level14;
levels[14] = level15;
levels[15] = level16;
levels[16] = level17;
levels[17] = level18;
levels[18] = level19;
levels[19] = level20;

// level# = {
// 	"b1Func": function() {b1Value += #},
// 	"b2Func": function() {b2Value += #},
// 	"b3Func": function() {b3Value += #},
// 	"b4Func": function() {b4Value += #},
// 	"b1Init": #,
// 	"b2Init": #,
// 	"b3Init": #,
// 	"b4Init": #,
// 	"count1": #,
// 	"count2": #,
// 	"count3": #,
// 	"count4": #,
// 	"target": #,
// 	"text": ""
// }