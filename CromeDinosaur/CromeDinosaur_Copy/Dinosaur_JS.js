// let vs var 차이
var canvas =  document.getElementById("canvas");
var ctx = canvas.getContext('2d');


// window 기능
canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;



// 변수 선언
var dino = {	
	x: 10, y: 200, width : 50, height : 50,	
	// 프레임 마다 움직이게끔	
	
	draw() {
		ctx.fillStyle = "green";
		ctx.fillRect(this.x,this.y,this.width,this.height);
	}
}
// 함수 선언
 

// class의 기능 알아오기
class Cactus {
	constructor() {
		this.x = 450;
		this.y = 250;
		this.width = 50;
		this.height = 50;
	}
	draw() {
		ctx.fillStyle = "red";
		ctx.fillRect(this.x,this.y,this.width,this.height);
	}
	
}
var timer = 0;

function Frame() {	    
		requestAnimationFrame(Frame);
		timer ++;
		ctx.clearRect(0,0,canvas.width,canvas.height);
		if(timer % 60 === 0){
			var cactus = new Cactus();
			cactus.draw();
		}		// 기능 알아오기
		
		dino.draw();	    
}


	
Frame();

