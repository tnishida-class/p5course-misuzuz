// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let count;
let cycle;

function setup(){
  createCanvas(200, 200);
  count = 0;
  cycle = 100;
}

function draw(){
  background(160, 192, 255);
  count = (count + 1) % cycle;
if(keyIsDown(" ".charCodeAt(0))){
  count = (count + 2) % cycle;
}

  // BLANK[1]
  if(count > 40 && count < 60){
  ellipse(width / 2, height / 2, count);
}
   else if(count < 40){
     ellipse(width / 2, height / 2, count / 2);
   }
   else {
     ellipse(width / 2, height / 2, 100 - count);
  }
}
