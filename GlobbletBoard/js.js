/* **************** initlization ********** */

var board=[];
var item=['-',-1,''];
var data=[
	["40px","40px"],
	["60px","60px"],
	["70px","80px"]
];

let lastPlayer='';


function init(){
	board=[
		['-',-1],
		['-',-1],
		['-',-1],
		['-',-1],
		['-',-1],
		['-',-1],
		['-',-1],
		['-',-1],
		['-',-1]
	];
	item=['-',-1,''];
	lastPlayer='';
}



/* *********** playing ********** */
function play(position){
	if(notValidate(position))
		return;

	if(	board[position][0]=='-'||
		(board[position][1]!=2 && item[1]>board[position][1])
		){

		move(position);
		if(checkWin())
			win();
		if(checkGameOver())
			gameOver();
	}

}

function move(position){
	document.getElementById("message").innerHTML="......";
	let cell=document.getElementById(position);	
	console.log(data[item[1]][0]);
	cell.style.width=data[item[1]][0]; 
	cell.style.height=data[item[1]][1];
	board[position][0]=item[0];
	board[position][1]=item[1];
	if(item[0]=='x')
		cell.style.backgroundColor="rebeccapurple";
	else
		cell.style.backgroundColor="rgb(51, 102, 0)";
	document.getElementById(item[2]).hidden=true;
	lastPlayer=item[0];
	item=['-',-1,''];
}


function notValidate(position){
	if(item[0]==lastPlayer){
		document.getElementById("message").innerHTML="It's not your role.";
		return true;
	}

	if(item[0]=='-')
	return true;

if(board[position][1]==2)
 return true;

/* if(board[position][0]!=item[0] && board[position][0]!='-')
return true;*/

	return false;
}


function playItem(value,order,id){
	item[0]=value;
	item[1]=order;
	item[2]=id;
}


/* ********** Game Over ************ */

function checkGameOver(){
	var allItems=document.getElementsByClassName("comman");
	for(let i=0;i<12;i++){
		if(allItems[i].hidden==false)
			return false;
	}
	return true;
}

function gameOver(){
	document.getElementById("message").innerHTML="Game Over -___-";
	disableBoard(true);
}


/* *************** Play again ************* */
function playAgain(){
	document.getElementById("message").innerHTML="......";
	init();
	disableBoard(false);
	showItems(true);
	removeBackGround();
}

function removeBackGround(){
	for(let i=0;i<9;i++){
		document.getElementById(i).style.backgroundColor="rgb(1,1,1,0)";
	}
}

/* *************** Comman **************/

function showItems(flag=true){
	var allItems=document.getElementsByClassName("comman");
	for(let i=0;i<12;i++){
		allItems[i].hidden=!flag;
	}
}

function controlItems(flag=true){
	var allItems=document.getElementsByClassName("comman");
	for(let i=0;i<12;i++){
		allItems[i].disabled=flag;
	}
}

function disableBoard(flag=true){
	for(let i=0;i<9;i++)
	{
		document.getElementById(i).disabled=flag;
	}
}



/* ************** Win *************** */

function win(){
	score();
	disableBoard(true);
	document.getElementById("message").innerHTML="Congratulation !";
	controlItems(true);
	
}


function score(){
	let scoreData=document.getElementById(lastPlayer);
	scoreData.innerHTML=1*scoreData.innerHTML+1;

}

function checkWin(){

	/* Rows */
	if(board[0][0]==board[1][0] && board[1][0]==board[2][0] && board[0][0]!='-' )
		return true;
	
	if(board[3][0]==board[4][0] && board[4][0]==board[5][0] && board[3][0]!='-'  )

		return true;


	if(board[6][0]==board[7][0] && board[7][0]==board[8][0]  && board[6][0]!='-')
		return true;
	
	/* Cols */
	if(board[0][0]==board[3][0] && board[3][0]==board[6][0]  && board[0][0]!='-')
		return true;
	
	if(board[1][0]==board[4][0] && board[4][0]==board[7][0]  && board[1][0]!='-')
		return true;

	if(board[2][0]==board[5][0] && board[5][0]==board[8][0]  && board[2][0]!='-')
		return true;

	/* Diagnols */
	if(board[0][0]==board[4][0] && board[4][0]==board[8][0]  && board[0][0]!='-')
		return true;

	if(board[2][0]==board[4][0] && board[4][0]==board[6][0]  && board[2][0]!='-')
		return true;
	return false;
}

/* *********** back *********** */
function back(){
	window.location="../chooseGame/chooseGame.html";
}