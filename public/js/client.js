var socket = io.connect();  
socket.on('trackBallResponse', function (data) {
	updateBall(data); 
});  
socket.on('trackPlayerResponse', function (data) {
	updatePlayer(data); 
});  
socket.on('trackScoreResponse', function (score) {
	secondPlayerScore = score;
}); 
function trackBall(data) { 
	socket.emit('trackBall', data);
}  
function updateBall(data) { 
	ball.x =  data.x*W;
	ball.y =  data.y*H;  
	ball.vx =  data.vx*W;
	ball.vy =  data.vy*H; 
}
function trackScore(score) { 
	socket.emit('trackScore', score);
}    
function trackPlayer(data) { 
	socket.emit('trackPlayer', data);
}    
function updatePlayer(data) {  
	if(data.id==1){
		activePlayer = 2;
		secondPlayer = 1;
		
		sp = paddles[secondPlayer];
		sp.x = data.x*W - sp.w/2;	
		sp.y = data.y*H;	
		
	}else{
		activePlayer = 1;
		secondPlayer = 2;
		
		sp = paddles[secondPlayer];
		sp.x = data.x*W - sp.w/2;	
		sp.y = data.y*H;	
	}
}  