let colors=[
	'red', // #ff0000 // rgb(255, 0, 0) // 0
	'yellow', // #ffff00 // rgb(255, 255, 0) //1
	'blue', // #0000ff // rgb(0, 0, 255) //2
	'gray',//#808080 // rgb(128, 128, 128) //3
	'green', // #008000 // rgb(0, 128, 0) //4
	'lime',//#00ff00 // rgb(0, 255, 0) //5
	'purple',//#800080 // rgb(128, 0, 128) // 6
	'aqua', // #00ffff // rgb(0, 255, 255) //7
	'Fuchsia', // #ff00ff // rgb(255, 0, 255) //8
	'rgb(255, 255, 255,0)' // #ffffff // rgb(255, 255, 255) //9
];

var board=[
	[colors[4],colors[1],colors[2],colors[0]],
	[colors[4],colors[3],colors[4],colors[0]],
	[colors[5],colors[6],colors[0],colors[1]],
	[colors[8],colors[4],colors[7],colors[2]],
	[colors[2],colors[6],colors[7],colors[3]],
	[colors[3],colors[1],colors[7],colors[2]],
	[colors[5],colors[6],colors[5],colors[7]],
	[colors[8],colors[8],colors[8],colors[0]],
	[colors[1],colors[5],colors[6],colors[3]],
	[colors[9],colors[9],colors[9],colors[9]],
	[colors[9],colors[9],colors[9],colors[9]]
];



// to test win .. 
var board2=[
	[colors[4],colors[4],colors[4],colors[4]],
	[colors[3],colors[3],colors[3],colors[3]],
	[colors[5],colors[5],colors[5],colors[5]],
	[colors[4],colors[4],colors[4],colors[4]],
	[colors[3],colors[3],colors[3],colors[3]],
	[colors[5],colors[5],colors[5],colors[5]],
	[colors[4],colors[4],colors[4],colors[4]],
	[colors[3],colors[3],colors[3],colors[3]],
	[colors[5],colors[5],colors[5],colors[5]],
	[colors[9],colors[9],colors[9],colors[9]],
	[colors[9],colors[9],colors[9],colors[9]]
];

var move=-1;

function SetBoard(){
	
	var defaultBoard=[
	[colors[4],colors[1],colors[2],colors[0]],
	[colors[4],colors[3],colors[4],colors[0]],
	[colors[5],colors[6],colors[0],colors[1]],
	[colors[8],colors[4],colors[7],colors[2]],
	[colors[2],colors[6],colors[7],colors[3]],
	[colors[3],colors[1],colors[7],colors[2]],
	[colors[5],colors[6],colors[5],colors[7]],
	[colors[8],colors[8],colors[8],colors[0]],
	[colors[1],colors[5],colors[6],colors[3]],
	[colors[9],colors[9],colors[9],colors[9]],
	[colors[9],colors[9],colors[9],colors[9]]
];

	for(let i=0;i<11;i++){
		for(let j=0;j<4;j++){
			var cell = document.getElementById("p_"+i+"_"+j);
			cell.style.backgroundColor=defaultBoard[i][j];
		}
	}
}

function firstStep(pipeId){
	move=pipeId;
	setPipeBackground(pipeId,"black");
	document.getElementById("message").innerHTML="";
}

function play(pipeId){
	if(move==-1)
		firstStep(pipeId);
	else if(pipeId==move)
		document.getElementById("message").innerHTML="It's selected";
	else
		secondStep(pipeId);
}

function haveEmptyPlace(pipeId){
	for(let i=3;i>=0;i--){
		if(board[pipeId][i]==colors[9])
			return i;
	}
	return -1;
}


function getLastFirstPlace(){
	for(let i=0;i<4;i++){
		if(board[move][i]!=colors[9])
			return i;
	}
	return -1;
}

function replaceTwoCell(pipeId,lastFirstPlace,lastSecondPlace){
	board[pipeId][lastSecondPlace]=board[move][lastFirstPlace];
	board[move][lastFirstPlace]=colors[9];
	var cell = document.getElementById("p_"+pipeId+"_"+lastSecondPlace);
	cell.style.backgroundColor=board[pipeId][lastSecondPlace];
	var cell = document.getElementById("p_"+move+"_"+lastFirstPlace);
	cell.style.backgroundColor=colors[9];
}

function DoneMove(pipeId,lastFirstPlace,lastSecondPlace){
	replaceTwoCell(pipeId,lastFirstPlace,lastSecondPlace);
	setPipeBackground(move,'rgb(255, 255, 255,0)');
	move=-1;
	document.getElementById("message").innerHTML="Done";
	win();
}

function secondStep(pipeId){

	let lastFirstPlace=getLastFirstPlace();
	let lastSecondPlace=haveEmptyPlace(pipeId);

	// Check if empty pipe
	if(board[pipeId][3]==colors[9])
		DoneMove(pipeId,lastFirstPlace,3);

	// check if No empty place
	else if(lastSecondPlace==-1)
		NoMove();

	// check if empty and with same cell
	else if(board[move][lastFirstPlace]==board[pipeId][lastSecondPlace+1])
		DoneMove(pipeId,lastFirstPlace,lastSecondPlace);
	
	else
		NoMove();
	
}

function setPipeBackground(pipeId,color){
	var pipe = document.getElementById(pipeId);
	pipe.style.backgroundColor=color;
}

function NoMove(){
	document.getElementById("message").innerHTML="Can't Move";
	setPipeBackground(move,'rgb(255, 255, 255,0)');
	move=-1;
	
}

function win(){
	for(let i=0;i<11;i++){
		let save=board[i][0];
		for(let j=0;j<4;j++){
			if(save!=board[i][j])
				return false;
		}
	}
	document.getElementById("message").innerHTML="Congratulation !";
	return true;
}

function playAgain(){
	SetBoard();
	move=-1;
	document.getElementById("message").innerHTML="";
}

function back(){
	window.location="../chooseGame/chooseGame.html";
}