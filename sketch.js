let textHeight = 30
let numRows = 13
let pageColor = 255
let interfaceColor = 230
let interfaceColor1 = 150

let ss1Button
let ss1App

function preload(){
  jira = loadImage('assets/jiraApp.png')
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  ss1Button = createImg('assets/jiraApp.png');
  ss1Button.size(50,50)
  ss1Button.position(100, 150)
  ss1Button.mouseClicked(openSS1)


  let ss2Button = createImg('assets/imsgApp.png');
  ss2Button.size(50,50)
	ss2Button.position(200, 150)
	ss2Button.mouseClicked(openSS2)

  let ss3Button = createImg('assets/emailApp.png');
  ss3Button.size(50,50)
	ss3Button.position(300, 150)
	ss3Button.mouseClicked(openSS3)

  jira.resize(50,50)
  ss1App = new Sprite(125, 250)
  ss1App.img = jira
  ss1App.w = 50
  ss1App.h = 50
  ss1App.collider ='s'
  // let app = loadImage('assets/jiraApp.png')
  // ss1App.addImage('assets/jiraApp.png')
  // image(app, ss1App.x, ss1App.y)

  let notif = new Sprite()
  notif.x = ss1Button.x+ 45
  notif.y = ss1Button.y + 5
  notif.d = 15
  notif.color = 'red'
  notif.stroke = 'red'
  notif.textColor = 255
  notif.text = '1'

  let notif1 = new Sprite()
  notif1.x = ss1App.x + 22
  notif1.y = ss1App.y -22
  notif1.d = 15
  notif1.collider='s'
  notif1.color = 'red'
  notif1.stroke = 'red'
  notif1.textColor = 255
  notif1.text = '1'
  

  // button = createImg('mod.png');
  // button.position(19, 19);
  // button.mousePressed(changeBG);
}




function draw() {
  background(220);
  // textSize(36);
  // text("Which one?", 50, 100)

  if(ss1App.mouse.released()){
    openSS1()
  }


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




