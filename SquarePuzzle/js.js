var boardX=4;
var boardY=4;
var board=[];
var firstStep=-1;
var score=0;
var steps=0;



function play(position){

	if(firstStep==position){
		document.getElementById(firstStep).style.backgroundColor="rgb(255, 255, 255,.7)";
		firstStep=-1;
		document.getElementById("result").innerHTML="....";
		return;
	}
	
	if(firstStep==-1){
		document.getElementById("result").innerHTML="....";
		firstStep=position;
		document.getElementById(firstStep).style.backgroundColor="yellow";
		return ;
	}

	if(firstStep!=-1){
		if(board[position]!=' ' && board[firstStep]!= ' '){
			document.getElementById("result").innerHTML="Can't Move :(";
			return ;
		}

		if(firstStep==position-1 ||
			firstStep == position +1 ||
			firstStep== position -boardY  || 
			firstStep== position + boardY ){
					document.getElementById("result").innerHTML="Done ^_^";
					document.getElementById(firstStep).style.backgroundColor="rgb(255, 255, 255,.7)";
		   			let temp = board[position];
					board[position]=board[firstStep];
					board[firstStep]=temp;
					drawData();
					firstStep=-1;
					steps++;
					document.getElementById("steps").innerHTML=steps;
					win();
			}else
			document.getElementById("result").innerHTML="Can't Move :(";

	}
	
}


/* *************** Win **************** */

function CheckSortBoard(){
	for(let i=0;i<boardY*boardX;i++){
		if(board[i]!=i+1)
			return false;
	}
	return true;
}


function win(){
	if(CheckSortBoard()){
		document.getElementById("result").innerHTML="Congratulation !";
		score++;
		document.getElementById("score").innerHTML=score;
		document.getElementById("steps").innerHTML=steps;
	}
	
}


/* ******************* Init *********** */

function generateRandomBoard(){
	let no =Math.floor(Math.random() * 5);
	let allBoards=[
	[11,' ',4,7,2,15,1,8,5,14,9,3,13,6,12,10],
	[9,2,8,11,' ',5,13,7,15,1,4,10,3,14,6,12] ,
	[15,2,1,12,8,5,6,11,4,9,10,7,3,14,13,' '] ,
	[1,2,8,11,9,3,6,14,4,7,12,10,5,15,13,' '],
	[1,2,3,4,5,6,7,11,13,12,9,' ',10,15,14,8]
	];
	board=allBoards[no];
}

function drawData(){
	for(let i=0;i<boardX*boardY;i++){
			let element=document.getElementById(i);
			element.innerHTML=board[i];
		}
}


function init(){
	generateRandomBoard();
	drawData();
}

/* ********** PlayAgain ************ */

function resetData(){
	boardX=4;
	boardY=4;
	board=[];
	if(firstStep!=-1)
		document.getElementById(firstStep).style.backgroundColor="rgb(255, 255, 255,.7)";
	firstStep=[-1];
	document.getElementById("result").innerHTML="....";
	document.getElementById("steps").innerHTML=0;
	steps=0;
}

function playAgain(){
	resetData();
	init();
}

/* ************ back ******************* */

function back(){
	window.location="../chooseGame/chooseGame.html";
}
