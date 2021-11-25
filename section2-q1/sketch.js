// 小手調べ
function setup(){
  createCanvas(100,100);
  for(let i = 0; i < 10; i++){
noFill();
if (i < 5){
  stroke(0,0,255);
}
else if (i < 10){
  stroke(255,0,0);
}
let x = i*10+10;
ellipse(50,50,x);
}

    // BLANK[1]

}
