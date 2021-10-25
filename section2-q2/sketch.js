// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;
  noStroke();
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      if((i + j) % 2 == 1){
        fill(198);//灰色
      }
      else{
        noFill();
      }
             // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
             rect (size * i, size * j, size);
    if(j < 3 && (i + j) % 2 == 1){
      fill(255, 0, 0);
    }
    else if(j < 5){
      noFill();
    }
    else if(j < 8 && (i + j) % 2 == 1){
      fill(0);
    }
    circle(size * (1/2 + i),  size * (1/2 + j), size * 5/6);
    }
  }
}
