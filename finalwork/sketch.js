// 最終課題を制作しよう

function setup(){
  createCanvas(windowWidth, windowHeight);
  shuffle(questionLv1, true);
  shuffle(questionLv2, true);
  shuffle(questionLv3, true);
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}


let s =0;
let correct = false;
let incorrect = false;
let questionLv1 = [
  {w: "libro(本)", g: "m", n: "s"},
  {w: "luna(月)", g: "f", n: "s"},
  {w: "ragazzi(少年)", g: "m", n: "p"},
  {w: "amiche(友達)", g: "f", n: "p"},
  {w: "isola(島)", g: "f", n: "s"},
  {w: "ciambella(ドーナツ)", g: "f", n: "s"},
  {w: "vacanze(バカンス)", g: "f", n: "p"},
  {w: "piazza(広場)", g: "f", n: "s"},
  {w: "museo(美術館)", g: "m", n: "s"},
  {w: "ponti(橋)", g: "m", n: "p"},
];

let questionLv2 =[
  {w: "chiavi(鍵)", g: "f", n: "p"},
  {w: "fiore(花)", g: "m", n: "s"},
  {w: "studente(生徒)", g: "m", n: "s"},
  {w: "pesce(魚)", g: "m", n: "s"},
  {w: "mare(海)", g: "m", n: "s"},
  {w: "giornale(新聞)", g: "m", n: "s"},
  {w: "limone(レモン)", g: "m", n:"s"},
  {w: "stazioni(駅)", g: "f", n: "p"},
  {w: "luce(光)", g: "f", n: "s"},
  {w: "scrittrici(作家)", g: "f", n: "p"},
];

let questionLv3 = [
  {w: "negozi(店)", g: "m", n: "p"},
  {w: "chiesa(教会)", g: "f", n:"s"},
  {w: "montagne(山)", g: "f", n: "p"},
  {w: "lago(湖)", g: "m", n: "s"},
  {w: "pantaloni(ズボン)", g: "m", n: "p"},
  {w: "scarpe(靴)", g: "f", n: "p"},
  {w: "calzini(靴下)", g: "m", n: "p"},
  {w: "carne(肉)", g: "f", n:"s"},
  {w: "dolce(デザート)", g:"m", n: "s"},
  {w: "canzoni(歌)", g: "f", n: "p"}
];




function draw(){
  background(0, 128, 0);
  textAlign(CENTER);

  push();
  strokeWeight(4);
  stroke(255, 0, 0);
  fill(255);
  textSize(25);
  text("イタリア語 名詞の性・数一致ゲーム", width * 0.5, height * 0.1);
  pop();

  push();
  fill(0);
  textSize(15);
  let t1;
  t1 = "あそびかた…下の単語が 男性単数名詞なら'm'　男性複数名詞なら'M' 女性単数名詞なら'f'　女性複数名詞なら'F' をおしてください。Enterキーで次の問題に移ります"
  text(t1, width * 0.4, height * 0.1 + 20, 200, 200);
  pop();
  push();
  textSize(10);
  let t2;
  t2 = "(ただし、日本語は単数形・複数形ともに単数表記しています。) イタリア語初心者の方は、右矢印ボタンで説明ページに飛べます。"
  text(t2, width * 0.4, height * 0.1 + 100, 200, 200);
  pop();


  textSize(32);
  if(s < questionLv1.length){
    text(questionLv1[s].w, width * 0.5, height * 0.4);
    push();
    strokeWeight(2);
    stroke(255, 0, 0);
    fill(255);
    text("Level.1", width * 0.5 - 220, height * 0.4);
    pop();
  }
  else if(s < questionLv1.length + questionLv2.length){
    text(questionLv2[s - questionLv1.length].w, width *0.5, height * 0.4);
    push();
    strokeWeight(2);
    stroke(255, 0, 0);
    fill(255);
    text("Level.2", width * 0.5 - 220, height * 0.4);
    pop();
  }
  else if(s < questionLv1.length + questionLv2.length + questionLv3.length){
    text(questionLv3[s - questionLv1.length -questionLv3.length].w, width *0.5, height * 0.4);
    push();
    strokeWeight(2);
    stroke(255, 0, 0);
    fill(255);
    text("Level.3", width * 0.5 - 220, height * 0.4);
    pop();
  }
  else if(s >= questionLv1.length + questionLv2.length + questionLv3.length){
    noStroke();
    for(let x = 0; x < width; x = x + width * 1 / 3){
      if(x == 0){fill(46, 139, 87);}
      else if(x == width * 1 / 3){fill(255);}
      else {fill(178, 34,34);}
      rect(x, 0, width * 1 / 3, height);
    }
    text("completato!", width * 0.5, height * 0.5);
  }

  text()
  if (correct){
    thmbsup(width * 1 / 5, height * 3 / 5);
    const q = currentQuestion();
    if (q.g == "m"){text("男性", width * 0.5 - 32, height * 0.5);}
    if (q.g == "f"){text("女性", width * 0.5 - 32, height * 0.5);}
    if (q.n == "s"){text("単数", width * 0.5 + 32, height * 0.5);}
    if (q.n == "p"){text("複数", width * 0.5 + 32, height * 0.5);}
  }
  else if (incorrect){
    thmbsdown(width * 1 / 5, height * 3 / 5);
  }

}

function currentQuestion(){
  let q = questionLv1[s];
  if(s < questionLv1.length){ q = questionLv1[s];}
  else if(s < questionLv1.length + questionLv2.length){ q = questionLv2[s - questionLv1.length];}//s番目がquestionLv2のところにあったらquestionLv2 = q
  else if(s < questionLv1.length + questionLv2.length + questionLv3.length){q = questionLv3[s - questionLv1.length - questionLv2.length];}//s番目がquestionLv3のところにあったらquestionLv3 = q
  return q;
}

function keyPressed(){
  const q = currentQuestion();
  if(keyCode == ENTER){
    s = s + 1;
    correct = false;
    incorrect = false;}
    if(key == "m" && q.g == "m" && q.n == "s")
    {correct = true;}
    else if(key == "M" && q.g == "m" && q.n == "p")
    {correct = true;}
    else if(key == "f" && q.g == "f" && q.n == "s")
    {correct = true;}
    else if(key == "F" && q.g == "f" && q.n == "p")
    {correct = true;}
    else if (key == "f" || key == "M" || key == "F" && q.g == "m" && q.n == "s")
    {incorrect = true;}
    else if (key == "m" || key == "f" || key == "F" && q.g == "M" && q.n == "p")
    {incorrect = true;}
    else if (key == "m" || key == "M" || key == "F" && q.g == "f" && q.n == "s")
    {incorrect = true;}
    else if (key == "m" || key == "M" || key == "f" && q.g == "m" && q.n == "p")
    {incorrect = true;}
    if (keyCode == RIGHT_ARROW){
      window.open("https://docs.google.com/document/d/1pvMtecS153qSxtqJntLV7RLIAtJf03s-LfitRcak7Yo/edit");
    }
  }


  function thmbsup(rx, ry){
    push();
    noStroke();
    fill(255, 215, 0);
    rect(rx, ry + 10, 50, 80, 20, 0, 0, 0);//親指までのしかく
    rect(rx + 50, ry, 150, 80, 20, 30, 20, 0);//人差し指までのしかく
    rect(rx, ry + 80, 160, 100, 0, 30, 20, 15);//中指・薬指のしかく
    rect(rx + 20, ry + 160, 130, 40, 0, 10, 10, 10);//小指のしかく
    triangle(rx + 12, ry + 15, rx + 35, ry - 15, rx + 35, ry + 15 );//親指までのさんかく
    rect(rx + 35, ry - 100, 50, 120, 20, 20, 0, 0);//親指
    pop();
    push();
    fill (255, 215, 0);
    stroke(255, 165, 0);
    strokeWeight(5);
    rect(rx + 100, ry + 40, 100, 40, 20, 10, 10, 20);//人差し指
    rect(rx + 100, ry + 80, 95, 40, 20, 10, 10, 20);//中指
    rect(rx + 100, ry + 120, 90, 40, 20, 10, 10, 20);//薬指
    rect(rx + 100, ry + 160, 80, 40, 20, 10, 10, 20);//小指
    pop();
    push();
    fill(255, 215, 0);
    stroke(255, 215, 0);
    rect(rx + 150, ry, 50, 70, 0, 30, 20, 0);//人差し指の線消し
    pop();
  }

  function thmbsdown(rx, ry){
    translate(width * 2 / 3, height * 7 / 5);
    rotate(PI)
    push();
    noStroke();
    fill(255, 215, 0);
    rect(rx, ry + 10, 50, 80, 20, 0, 0, 0);//親指までのしかく
    rect(rx + 50, ry, 150, 80, 20, 30, 20, 0);//人差し指までのしかく
    rect(rx, ry + 80, 160, 100, 0, 30, 20, 15);//中指・薬指のしかく
    rect(rx + 20, ry + 160, 130, 40, 0, 10, 10, 10);//小指のしかく
    triangle(rx + 12, ry + 15, rx + 35, ry - 15, rx + 35, ry + 15 );//親指までのさんかく
    rect(rx + 35, ry - 100, 50, 120, 20, 20, 0, 0);//親指
    pop();
    push();
    fill (255, 215, 0);
    stroke(255, 165, 0);
    strokeWeight(5);
    rect(rx + 100, ry + 40, 100, 40, 20, 10, 10, 20);//人差し指
    rect(rx + 100, ry + 80, 95, 40, 20, 10, 10, 20);//中指
    rect(rx + 100, ry + 120, 90, 40, 20, 10, 10, 20);//薬指
    rect(rx + 100, ry + 160, 80, 40, 20, 10, 10, 20);//小指
    pop();
    push();
    fill(255, 215, 0);
    stroke(255, 215, 0);
    rect(rx + 150, ry, 50, 70, 0, 30, 20, 0);//人差し指の線消し
    pop();
  }
