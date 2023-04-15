let textHeight = 30
let numRows = 13
let pageColor = 255
let interfaceColor = 230
let interfaceColor1 = 150

let ss1Button
let ss1App, ss2App, ss3App

let jiraImg, imsgImg, emailImg
let jiraNotif, imsgNotif, emailNotif

function preload(){
  jiraImg = loadImage('assets/jiraApp.png')
  imsgImg = loadImage('assets/imsgApp.png')
  emailImg = loadImage('assets/emailApp.png')
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // ss1Button = createImg('assets/jiraApp.png');
  // ss1Button.size(50,50)
  // ss1Button.position(100, 150)
  // ss1Button.mouseClicked(openSS1)


  // let ss2Button = createImg('assets/imsgApp.png');
  // ss2Button.size(50,50)
	// ss2Button.position(200, 150)
	// ss2Button.mouseClicked(openSS2)

  // let ss3Button = createImg('assets/emailApp.png');
  // ss3Button.size(50,50)
	// ss3Button.position(300, 150)
	// ss3Button.mouseClicked(openSS3)

  let app = new Group()
  app.w = 50
  app.h = 50
  app.collider = 's'

  jiraImg.resize(50,50)
  ss1App = new app.Sprite(100, 150)
  ss1App.img = jiraImg

  imsgImg.resize(50,50)
  ss2App = new app.Sprite(200,150)
  ss2App.img = imsgImg

  emailImg.resize(50,50)
  ss3App = new app.Sprite(300,150)
  ss3App.img = emailImg

  let notif = new Group()
  notif.collider='s'
  notif.color = 'red'
  notif.stroke = 'red'
  notif.textColor = 255
  notif.text = '1'
  notif.d = 15
  notif.visible = true

  ss1Notif = new notif.Sprite()
  ss1Notif.x = ss1App.x + 22
  ss1Notif.y = ss1App.y -22

  ss2Notif = new notif.Sprite()
  ss2Notif.x = ss2App.x + 22
  ss2Notif.y = ss2App.y -22

  ss3Notif = new notif.Sprite()
  ss3Notif.x = ss3App.x + 22
  ss3Notif.y = ss3App.y -22
  

}




function draw() {
  background(220);
  // textSize(36);
  // text("Which one?", 50, 100)

  if(ss1App.mouse.released()){
    openSS1()
    ss1Notif.visible = false
  }
  if(ss2App.mouse.released()){
    openSS2()
    ss2Notif.visible = false
  }
  if(ss3App.mouse.released()){
    openSS3()
    ss3Notif.visible = false
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




