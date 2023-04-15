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
let cameraMan
let testCursor

  // // windowSize = 1440 x 875 (outer), 1440 x 795 (inner)
  // let browserWidth = 1440
  // let browserHeight = 795
  // let sceneW = browserWidth*1.5
  // let sceneH = browserHeight*1.5


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
  // // agent.collider = 'd'
  // agent.x = windowWidth/2
  // agent.y = windowHeight/2
  // agent.d = 25
  // agent.visible = true
  // agent.color =255

  // agent.overlaps(toolBar)
  // agent.overlaps(toolBarArray[2])
  // agent.overlaps(ss1App)


  // cursor(CROSS)
  // noCursor()

  // camera.x = windowWidth/2
  // camera.y = windowHeight/2



  // testCursor = new Sprite(width/2, height/2, 25)
  agent = new Sprite(width/2, height/2, 25)
  cameraMan = new Sprite(width/2, height/2, 25)
  cameraMan.visible = false
  noCursor()
}






function draw() {
  background(220);

  //agent movement 1: sprite limited range of motion, not v responsive
  // agent.x = mouseX
  // agent.y = mouseY

  // testCursor.x = mouseX
  // testCursor.y = mouseY

  cameraMan.x = mouseX
  cameraMan.y = mouseY

 

  //agent movement 2 - doc: good when dragging but too sensitive if moving around
  // agent.moveTowards(
  //   mouse.x + agent.mouse.x,
  //   mouse.y + agent.mouse.y,
  //   1 // full tracking
  // );

  //agent movement 3 - doc 
  // agent.moveTowards(mouse, 0.5);
  // agent.moveTowards(mouse, 0.05);



  //agent movement 5 - trolley
  // agent.vel.x = ((mouse.x ))
  // agent.vel.y = ((mouse.y))

  // camera.x = cameraMan.x
  // camera.y = cameraMan.y
  // cameraMan.visible = false

  // camera.x = agent.x
  // camera.y = agent.y

  // camera.x = testCursor.x
  // camera.y = testCursor.y
  camera.x = cameraMan.x
  camera.y = cameraMan.y
  

  // camera.x = mouse.x
  // camera.Y= mouse.y

  // if (mouseX > 500){test.x = mouseX + 500}
  // if (mouseX < 500 ){test.x = mouseX-500}

  correctionX = map (mouseX, 0, width, (0-width/2), (width + width/2))
  correctionY = map (mouseY, 0, height, (0-height/2), (height+ height/2))

  // cameraMan.x = mouseX
  // cameraMan.y = mouseY
  // cameraMan.color = 0
  cameraMan.text = 'camera'
  
  // camera.x = cameraMan.x
  // camera.Y= cameraMan.y

  // agent.collider = 'n'
  // agent.x = correctionX
  // agent.y = correctionY
  agent.text = 'agent'

  // console.log (windowHeight)
  // testCursor.x = correctionX
  // testCursor.y = correctionY
  agent.x = correctionX
  agent.y = correctionY

    // cameraMan.moveTowards(agent, 0.05);


  // camera.x = agent.x
  // camera.y = agent.y

  // test.x = mouseX

  // testCursor.collider = 'n'
// console.log (test.x)

  // cameraMan.x = correctionX

  // cameraMan.x = mouseX
  // test.y = mouseY


  // test.y = mouseY + abs(mouseY - camera.y) 
  // test.y = windowHeight/2
  // test.collider = 'n'

  // console.log('mouse', mouseX, mouseY, 'camera', camera.x, camera.y, 'test', test.x)

//0, -470; 1439, 2408

  // if (camera.x > windowWidth){
  //   camera.x = windowWidth
  // }
  // if(camera.x < 0){
  //   camera.x= 0
  // }
  // if (camera.y > windowHeight*1.5){
  //   camera.y = windowHeight*1.5
  // }


  // camera.moveTowards(mouse.x, mouse.y)

  // camera.x = mouseX 
  // camera.y = mouseY


  // test.x = agent.x
  // test.y = agent.y


  // camera.moveTowards(mouse)


  // camera.zoomTo(agent.x, agent.y, 0.5)

  // camera.moveTowards(
  //     mouse.x + agent.mouse.x,
  //     mouse.y + agent.mouse.y,
  //     1 // full tracking
  //   );

    // camera.on()



    /*
    ok. so, if i have fixed camera, agent sprite follows mouse cursor directly
      agent.x = agent.x
      agent.Y= agent.y

    this also works:
      agent.moveTowards(
      mouse.x + agent.mouse.x,
      mouse.y + agent.mouse.y,
      1 // full tracking
     );

    if I have moving camera (following agent, which is following mouse), then the movement range is only a fraction of where the cursor is - results in choppy and limited view 
      agent.x = mouse.x
      agent.y = mouse.y
      camera.x = agent.x
      camera.Y= agent.y

    ok what if i have moving camera that follows mouse too 
      moves wayy too fast and sensitive
      camera.moveTowards(mouse) > doesnt work either 
    
    ok, but i like moveTowards() so maybe make a pseudo camera.moveTowards(). like how about having a camera man sprite (camera pos is set to camera man) that trails/move towards the agent/cursor. 
      agent.x = mouse.x
      agent.y = mouse.y
      cameraMan.moveTowards(agent, 0.05);
      camera.x = cameraMan.x
      camera.Y= cameraMan.y

    alright, the cameras less jarring. but never fixed issue of agent sprite being offset from cursor when camera starts moving 
        happened here too > 
      agent.x = mouse.x
      agent.y = mouse.y
      camera.x = agent.x
      camera.Y= agent.y
        actually all this was supposed to fix that..

    learned that camera is offset from canvas
      cursor seems to be moving camera but the agent is fixed at camera center
      so agent at mouse position is like camera cross hair centerpoint 
      would need agent at cursor to act as visual
      camera following mouse seems fine, need cameraman? makes it a bit more smooth i suppose

      need some correction - i think its bc camera view is larger than canvas 
      correctionX = map (mouseX, 0, width, (0-width/2), (width + width/2))
      correctionY = map (mouseY, 0, height, (0-height/2), (height+ height/2))

    ok this is good!
      agent.x = mouseX
      agent.y = mouseY
      camera.x = agent.x
      camera.Y= agent.y
      correctionX = map (mouseX, 0, width, (0-width/2), (width + width/2))
      correctionY = map (mouseY, 0, height, (0-height/2), (height+ height/2))
      testCursor.x = correctionX
      testCursor.y = correctionY
    
    do i need cameraman still?
      its moving waaay too fast
        agent.x = mouseX
        agent.y = mouseY
        camera.x = mouse.x
        camera.Y= mouse.y
        correctionX = map (mouseX, 0, width, (0-width/2), (width + width/2))
        correctionY = map (mouseY, 0, height, (0-height/2), (height+ height/2))
        testCursor.x = correctionX
        testCursor.y = correctionY

      doing that just created same displacement issue but with the test cursor and the agent
        agent.x = mouseX
        agent.y = mouseY
        correctionX = map (mouseX, 0, width, (0-width/2), (width + width/2))
        correctionY = map (mouseY, 0, height, (0-height/2), (height+ height/2))
        testCursor.x = correctionX
        testCursor.y = correctionY
        cameraMan.moveTowards(agent, 0.05);
        camera.x = cameraMan.x
        camera.y = cameraMan.y

      lets try to clean up naming
        agent.x = mouseX; agent.y = mouseY; >> agent is new cameraman like the camera crosshair center that im viewing screen through

        camera.x = agent.x
        camera.Y= agent.y

        correctionX = map (mouseX, 0, width, (0-width/2), (width + width/2))
        correctionY = map (mouseY, 0, height, (0-height/2), (height+ height/2))
        testCursor.x = correctionX; testCursor.y = correctionY; >> what I want my visible cursor to be, the agent sprite that follows the cursor

        so..matching the right variable names to position mappings

        cameraMan.x = mouseX
        cameraMan.y = mouseY
        camera.x = cameraMan.x
        camera.Y= cameraMan.y

        correctionX = map (mouseX, 0, width, (0-width/2), (width + width/2))
        correctionY = map (mouseY, 0, height, (0-height/2), (height+ height/2))
        agent.x = correctionX
        agent.y = correctionY

    
    */



















//idk why it keeps switching  
  //Option1
  // if (agent.mouse.released()){
  // if(agent.overlaps(ss1App)){
  //   openSS1()
  //   ss1Notif.visible = false
  // }
  // if(agent.overlaps(ss2App)){
  //   openSS2()
  //   ss2Notif.visible = false
  // }
  // if(agent.overlaps(ss3App)){
  //   openSS3()
  //   ss3Notif.visible = false
  // }
  // }


  //Option2
  if (ss1App.mouse.released()){
    openSS1()
  }
  if (ss2App.mouse.released()){
    openSS2()
  }
  if (ss3App.mouse.released()){
    openSS3()
  }





}



function resolveAfter1Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, 1000);
  });
}

async function asyncCall() {
  console.log('calling');
  const result = await resolveAfter1Seconds();
  console.log(result);
  if(window.confirm('You go on with the rest of your day until a colleague comes to you for advice on their predicament. ')){
    // agent.visible = true
    // noCursor()


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




