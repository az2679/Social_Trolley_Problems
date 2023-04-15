let textHeight = 30
let numRows = 13
let pageColor = 255
let interfaceColor = 230
let interfaceColor1 = 150

let appSize = 50

let ss1App, ss2App, ss3App

let jiraImg, imsgImg, emailImg
let jiraNotif, imsgNotif, emailNotif

let toolBarArray, toolBarApps

let pageLoadPromise;

let agent


function preload(){
  jiraImg = loadImage('assets/jiraApp.png')
  imsgImg = loadImage('assets/imsgApp.png')
  emailImg = loadImage('assets/emailApp.png')
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  
  toolBarArray = []

  while(toolBarArray.length < 13){
    toolBarApps = new Sprite()
    toolBarApps.w = appSize
    toolBarApps.h = appSize
    toolBarApps.y = windowHeight - toolBarApps.h*2
    toolBarApps.x = windowWidth*0.25 + (toolBarApps.w * toolBarArray.length * 1.25)
    toolBarApps.color = 245
    toolBarApps.stroke = toolBarApps.color
    toolBarApps.collider ='s'
    toolBarApps.layer = 2
    toolBarArray.push(toolBarApps)
  }

  let toolBar = new Sprite()
  toolBar.collider = 's'
  toolBar.x = windowWidth/2 + ((appSize * 1.25)/2)
  toolBar.y = windowHeight - appSize*2
  toolBar.h = appSize*2
  toolBar.w = (toolBarArray.length+1) * appSize * 1.25
  toolBar.layer = 1
  toolBar.color = 235
  toolBar.stroke = toolBar.color
  // toolBar.visible = false

  toolBarArray[9].w = 0
  toolBarArray[9].stroke = 0
  toolBarArray[2].visible = false
  toolBarArray[5].visible = false
  toolBarArray[7].visible = false


  let app = new Group()
  app.w = 50
  app.h = 50
  app.collider = 's'

  jiraImg.resize(50, 50)
  ss1App = new app.Sprite()
  ss1App.img = jiraImg
  ss1App.x = toolBarArray[2].x
  ss1App.y = toolBarArray[2].y

  imsgImg.resize(50,50)
  ss2App = new app.Sprite()
  ss2App.img = imsgImg
  ss2App.x = toolBarArray[5].x
  ss2App.y = toolBarArray[5].y

  emailImg.resize(50,50)
  ss3App = new app.Sprite()
  ss3App.img = emailImg
  ss3App.x = toolBarArray[7].x
  ss3App.y = toolBarArray[7].y

  let notif = new Group()
  notif.collider='s'
  notif.color = 'red'
  notif.stroke = 'red'
  notif.textColor = 255
  notif.text = '1'
  notif.d = 15
  notif.visible = true

  ss1Notif = new notif.Sprite()
  ss1Notif.x = ss1App.x + notif.d*1.5
  ss1Notif.y = ss1App.y - notif.d*1.5

  ss2Notif = new notif.Sprite()
  ss2Notif.x = ss2App.x + notif.d*1.5
  ss2Notif.y = ss2App.y - notif.d*1.5

  ss3Notif = new notif.Sprite()
  ss3Notif.x = ss3App.x + notif.d*1.5
  ss3Notif.y = ss3App.y - notif.d*1.5

  // asyncCall();

  // agent = new Sprite()
  // agent.collider = 's'
  // agent.x = mouseX
  // agent.y = mouseY
  // agent.d = 25
}

// function resolveAfter1Seconds() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve('resolved');
//     }, 1000);
//   });
// }

async function asyncCall() {
  console.log('calling');
  const result = await resolveAfter1Seconds();
  console.log(result);
  // window.confirm('You go on with the rest of your day until a colleague comes to you for advice on their predicament. ')

  // if (confirm("Press a button!")) {
  //   txt = "You pressed OK!";
  // } else {
  //   txt = "You pressed Cancel!";
  // }

  

}






function draw() {
  background(220);

  // agent.x = mouseX
  // agent.y = mouseY
  // noCursor()

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




