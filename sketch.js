let textHeight = 30
let numRows = 13
let pageColor = 255
let interfaceColor = 230
let interfaceColor1 = 150



function setup() {
  createCanvas(windowWidth, windowHeight);
  let door1 = createA("SS/SS1", "SS1");
  door1.position(50, 150);
  
  let door2 = createA("SS/SS2", "SS2");
  door2.position(50, 200);

  let door3 = createA("SS/SS3", "SS3");
  door3.position(50, 250);

	let SS1Button = createButton('SS1');
	SS1Button.position(100, 150)
	SS1Button.mousePressed(openSS1)

  let SS2Button = createButton('SS2');
	SS2Button.position(100, 200)
	SS2Button.mousePressed(openSS2)

  let SS3Button = createButton('SS3');
	SS3Button.position(100, 250)
	SS3Button.mousePressed(openSS3)


}



function draw() {
  background(220);
  textSize(36);
  text("Which one?", 50, 100)

}

function openSS1() {
	window.open('SS/SS1');
}
function openSS2() {
	window.open('SS/SS2');
}
function openSS3() {
	window.open('SS/SS3');
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}




