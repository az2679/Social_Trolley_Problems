let textHeight = 30
let numRows = 13
let pageColor = 255
let interfaceColor = 230
let interfaceColor1 = 150

let SS1Button

function setup() {
  createCanvas(windowWidth, windowHeight);

  SS1Button = createImg('assets/jiraApp.png');
  SS1Button.size(50,50)
  SS1Button.position(100, 150)
  SS1Button.mouseClicked(openSS1)


  let SS2Button = createImg('assets/imsgApp.png');
  SS2Button.size(50,50)
	SS2Button.position(200, 150)
	SS2Button.mouseClicked(openSS2)

  let SS3Button = createImg('assets/emailApp.png');
  SS3Button.size(50,50)
	SS3Button.position(300, 150)
	SS3Button.mouseClicked(openSS3)

  let notif = new Sprite()
  notif.x = SS1Button.x+ 45
  notif.y = SS1Button.y + 5
  notif.d = 10
  notif.layer = 50
  

  // button = createImg('mod.png');
  // button.position(19, 19);
  // button.mousePressed(changeBG);
}




function draw() {
  background(220);
  // textSize(36);
  // text("Which one?", 50, 100)



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




