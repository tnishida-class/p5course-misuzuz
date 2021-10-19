// 練習問題：神戸市のマーク
function setup(){
  createCanvas(400, 200);
  background(255);

  // 空欄を埋めて神戸市のロゴマークを完成させよう
  noFill();
  strokeWeight(25);
  strokeCap(SQUARE);
  arc(100 + 25, 100, 100, 100, QUARTER_PI * 3, QUARTER_PI * 3 + PI);
  arc(100 - 25, 100, 100, 100, QUARTER_PI * 5, QUARTER_PI * 5 + PI);


  // おまけ：神戸大学のロゴを作りたい人向けに色情報だけ置いておきます
  const red = color(196, 0, 0);

fill(14,47,146);
noStroke();
  ellipse(300,100,100,100);
  fill(255);
  ellipse(293,93,80,80);
  fill(22,131,46);
  ellipse(291,91,75,75);
  fill(255);
  ellipse(289,93,70,70);
}
