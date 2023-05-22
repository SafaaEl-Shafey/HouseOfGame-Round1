var playerX="X";
var playerO="O";
var input=playerX;
var start=true;

function createTwoDimArray(game){
	var game = new Array(3); 
	for (var i = 0; i < game.length; i++) { 
	    game[i] = ["0","0","0"]; 
	} 
	return game;
}


function setInputInGame(game,positionX,positionY)
{
	game[positionX][positionY]=input;
	input=playerX==input?playerO:playerX;
} 

function setInputInButton(Id,player)
{
	var myButton=document.getElementById(Id);
	myButton.innerHTML =input;
	myButton.style.borderColor="white";
	myButton.disabled=true;
}

function gameFinish(message){
	document.getElementById("message").innerHTML=message;
	for(var i=0;i<9;i++){
		document.getElementById(i).disabled=true;
	}
}

function back(){
	window.location="../chooseGame/chooseGame.html";
}

function setResult(Id){
	var owner=document.getElementById(Id);
	owner.innerHTML= 1 + owner.innerHTML*1;
	gameFinish("Congratulation " + Id + " ^__^");
}

function playAgain(){
	document.getElementById("message").innerHTML=" ";
	game= createTwoDimArray();
	input=playerX;
	for(var i=0;i<9;i++){
		document.getElementById(i).innerHTML=" ";
		document.getElementById(i).disabled=false;
		document.getElementById(i).setAttribute("style","border: 2px solid #006666");
	}
}

function play(Id,positionX,positionY)
{
	if(start){		
		game= createTwoDimArray();
		start=false;
	}

	setInputInButton(Id);
	setInputInGame(game,positionX,positionY);
	var owner = checkOwner(game);
	if(owner)
		setResult(owner);

	if(!owner && gameOver(game))
		gameFinish("Game Over :( ");
} 

/* **************** Check Win Or Game Over *********** */

function gameOver(array)
{
	for (var i = 0; i < array.length; i++)
		for(var j=0;j<array.length;j++)
			if(array[i][j]=="0")
				return false;
	return true;
}

function checkOwner(array)
{
	// Check Row
	for (var i = 0; i < array.length; i++){  
    	if(array[i][0] == array[i][1] && array[i][1]   == array[i][2] && array[i][2] ==playerX)
    		return playerX;
    	if(array[i][0] == array[i][1] && array[i][1]  == array[i][2] && array[i][2] ==playerO)
    		return playerO;
    	if(array[0][i] == array[1][i] && array[1][i] == array[2][i] && array[2][i] ==playerX)
    		return playerX;
    	if(array[0][i] == array[1][i] && array[1][i] == array[2][i] && array[2][i] ==  playerO)
    		return playerO;
	}


	var players = [playerX,playerO];
	 
	for(var i=0;i<players.length;i++){
    	if(array[0][0]==array[1][1] && array[1][1] == array[2][2] && array[2][2] == players[i])
    		return players[i];
    	if(array[0][2]==array[1][1] && array[1][1] == array[2][0] && array[2][0] == players[i])
    		return playerO;
    }

    return false;
} 