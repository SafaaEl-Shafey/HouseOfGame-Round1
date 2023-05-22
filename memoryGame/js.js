/*var ImageName=["https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQwWBHaij34CkDOVj4wGoS6BgaauSQVc5adqQ&usqp=CAU",
					 "https://freepikpsd.com/wp-content/uploads/2019/10/sun-cute-png-1-Transparent-Images.png",
					 "https://cdn0.iconfinder.com/data/icons/valentine-s-heart/128/__heart_cute_emoji-512.png",		 "https://static.vecteezy.com/system/resources/previews/001/190/538/non_2x/cute-flower-png.png",		 "https://img.pngio.com/baby-lion-png-clip-freeuse-library-baby-lion-png-500_479.png",
					 "https://i.pinimg.com/originals/7c/c5/cf/7cc5cf6819f991fb836b283aee27bac0.png",	 "https://i.pinimg.com/originals/0a/03/8a/0a038a72f7c778a7dcf935c4a347c273.png",
					 "https://i.pinimg.com/originals/48/d3/31/48d331e479c4a1aae5b63eddac994122.png"];

*/

var ImageName=["image/star.png",
					 "image/sun.png",
					 "image/heart.png",
					 "image/flower.png",
					 "image/lion.png",
					 "image/monkey.png",
					 "image/bee.png",
					 "image/boo.png"];

var gameElementName=[];

var firstStep=[-1,""];
var perviousSteps=[-1,-1];

function onLoad(){

	for(var i=0;i<16;i++){
		gameElementName[i]="";
	}

	for(var i=0;i<16;i++){		
		do{
			var num=Math.floor(Math.random() * 8);
			var count=0;
			for(var j=0;j<i;j++){
				if(gameElementName[j]==ImageName[num])
				 	count++;
			}
			gameElementName[i]=ImageName[num]; 	
		}while(!(count==0||count==1));
	}
	console.log(gameElementName);
}

/* *********** Move ************ */ 

function play(Id){
	if(firstStep[0]!=Id)
		checkSteps(Id,gameElementName[Id]);
	
	var element = document.getElementById(Id);
	element.style.backgroundImage ="url('"+gameElementName[Id]+"')";
	element.style.backgroundSize = "cover";
	console.log("firstStep is" + firstStep[0]);
	console.log("Second is" + Id);
	
	if(CheckWin())
		setResult();
}



function clearPervious(){
	for(var i=0;i<2;i++){
		if(perviousSteps[i]!=-1){
			var element = document.getElementById(perviousSteps[i]);
			if(element.disabled==false)
				element.style.backgroundImage ="";
		}
	}
}

function checkSteps(position,image){
	if(firstStep[0]==-1){
		clearPervious();
		firstStep[1]=image;
		firstStep[0]=position;
	}
	else
	{
		if(firstStep[1]==image)
		{
		var element = document.getElementById(position);
		element.disabled=true;
		element = document.getElementById(firstStep[0]);
		element.disabled=true;
		}
		perviousSteps[0]=position;
		perviousSteps[1]=firstStep[0];
		firstStep[0]=-1;
	}
}


/* ************** Win ************ */ 
function CheckWin(){
	for(var i=0;i<16;i++){
		var element=document.getElementById(i);
		if(!element.disabled)
			return false;
	}
	return true;
}


function setResult(){
	var owner=document.getElementById("score");
	owner.innerHTML= 1 + owner.innerHTML*1;
	document.getElementById("message").innerHTML = "Congratulation " + "*^";
}

/* ********** Play Again ******** */ 

function playAgain(){
	
	onLoad();
	for(var i=0;i<16;i++){
		var element = document.getElementById(i)
		element.disabled=false;
		element.style.backgroundImage ="";
		firstStep=[-1,""];
        perviousSteps=[-1,-1];
	}
}


function back(){
	window.location="../chooseGame/chooseGame.html";
}