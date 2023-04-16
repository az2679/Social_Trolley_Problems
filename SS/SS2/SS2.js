
let textHeight = 30
let numRows = 13
let pageColor = 255
let interfaceColor = 230
let interfaceColor1 = 150

//SS2
let chat
let infoMember, sideIcon, sideName, sideNameArray, sideDivider, sideDividerArray, sideTextArray, sideTextArray1, chatText, chatTextArray
let infoTab 
let mouseDrag, infoName, infoNameArray, infoMemberArray, infoWindow, infoChange
let infoLocShare, infoMemNum, infoDivider, infoLocSend
let infoToggle = true
let infoDis, infoButton
let removeToggle = false
let friendInQ, leftBound, removeButton


let searchBar, searchIcon, ss2Instruction, ss2CloseSearch
let ss2InstructionArray, ss2InstructionText

let ss2Agent, ss2CameraMan, ss2CorrectionX, ss2CorrectionY

function setup(){
  createCanvas(windowWidth, windowHeight)

  chat = new SS2(150, 50, 1000, 700)
  chat.openChat()


  ss2Instruction = new Group()
  ss2Instruction.collider = 's'
  ss2Instruction.color = 245
  ss2Instruction.stroke = ss2Instruction.color + 10
  ss2Instruction.visible = false


  ss2SearchBox = new ss2Instruction.Sprite(325, (150- 22.5))
  ss2SearchBox.h = textHeight + 2
  ss2SearchBox.w = 310 + 2
  ss2SearchBox.stroke = color(150, 200, 255)
  ss2SearchBox.strokeWeight = 2
  ss2SearchBox.layer = 15
  ss2SearchBox.visible = false

  let ss2SearchBG = new ss2Instruction.Sprite()
  ss2SearchBG.w = ss2SearchBox.w + 40 - 4 -4
  ss2SearchBG.h = 700- 100
  ss2SearchBG.x = ss2SearchBox.x
  ss2SearchBG.y = 50 + ss2SearchBG.h/2 + 100 - 2 -4
  ss2SearchBG.color = 230
  ss2SearchBG.stroke = ss2SearchBG.color
  // ss2SearchBG.layer = ss2SearchBox.layer

  let searchChatArray = []
  while (searchChatArray.length < 8){
    let searchChatIcon = new ss2Instruction.Sprite()
    searchChatIcon.d = 50
    searchChatIcon.x = (ss2SearchBox.x-ss2SearchBox.w*0.4) + (searchChatIcon.d * (searchChatArray.length/2) * 1.63)
    searchChatIcon.y = ss2SearchBox.y + searchChatIcon.r + textHeight*1.5
    searchChatIcon.stroke = searchChatIcon.color
    searchChatArray.push(searchChatIcon)
    

    let searchChatName = new ss2Instruction.Sprite()
    searchChatName.h = textHeight*0.5
    searchChatName.w = ss2SearchBox.w*0.2
    searchChatName.x = (ss2SearchBox.x-ss2SearchBox.w*0.4) - searchChatName.w*0.6 + ((searchChatName.w) * (searchChatArray.length/2) * 1.3)
    searchChatName.y = searchChatIcon.y + textHeight* 1.25
    searchChatName.stroke = searchChatName.color
    searchChatArray.push(searchChatName)
  }
 

  let linkBox = new ss2Instruction.Sprite()
  linkBox.w = ss2SearchBox.w *0.17
  linkBox.h = textHeight * 0.75
  linkBox.x = ss2SearchBox.x - ss2SearchBox.w/2 + linkBox.w/2 
  linkBox.y = ss2SearchBox.y + ss2SearchBox.h/2 + 50 + textHeight*3.5

  let showMoreBox = new ss2Instruction.Sprite()
  showMoreBox.w = ss2SearchBox.w *0.27
  showMoreBox.h = textHeight * 0.75
  showMoreBox.x = ss2SearchBox.x + ss2SearchBox.w/2 - showMoreBox.w/2 
  showMoreBox.y = ss2SearchBox.y + ss2SearchBox.h/2 + 50 + textHeight*3.5

  let ss2InstructionBG = new ss2Instruction.Sprite()
  ss2InstructionBG.w = ss2SearchBox.w
  ss2InstructionBG.h = ss2SearchBG.h * 0.45
  ss2InstructionBG.x = ss2SearchBG.x
  ss2InstructionBG.y = ss2SearchBG.y + ss2InstructionBG.h*0.1
  ss2InstructionBG.color = 255

  // ss2InstructionBG.text = 'This is a messaging app, opened to the friend group chat. Interact with the information tab on the top right corner, as well as the items on the information tabs panel.'


  ss2InstructionArray = []
  while (ss2InstructionArray.length < 8){
    ss2InstructionText = new ss2Instruction.Sprite()
    ss2InstructionText.w = ss2SearchBox.w 
    ss2InstructionText.h = textHeight
    ss2InstructionText.x = ss2SearchBG.x
    ss2InstructionText.y = (ss2InstructionBG.y - ss2InstructionBG.h*0.35) + (textHeight * ss2InstructionArray.length)
    ss2InstructionText.color = 255
    // ss2InstructionText.stroke = 0
    ss2InstructionText.textColor =0
    ss2InstructionText.textSize = 14
  ss2InstructionArray.push(ss2InstructionText)
  }

  ss2InstructionArray[0].text = 'Hello!'
  ss2InstructionArray[1].text = 'This is a messaging app,'
  ss2InstructionArray[2].text = 'Currently, a chat between a group of friends'
  ss2InstructionArray[3].text = 'is being displayed.'
  ss2InstructionArray[4].text = 'Read the context about the situation provided'
  ss2InstructionArray[5].text = ' and make a decision by interacting with the'
  ss2InstructionArray[6].text = 'information tab on the top right corner.'
  // ss2InstructionArray[7].text = 'as well as the items on the information tabs panel.'



  let photosBox = new ss2Instruction.Sprite()
  photosBox.w = ss2SearchBox.w *0.17
  photosBox.h = textHeight * 0.75
  photosBox.x = ss2SearchBox.x - ss2SearchBox.w/2 + photosBox.w/2 
  photosBox.y = ss2InstructionBG.y + ss2InstructionBG.h/2 + photosBox.h/2 + textHeight


  let showMoreBox1 = new ss2Instruction.Sprite()
  showMoreBox1.w = ss2SearchBox.w *0.27
  showMoreBox1.h = textHeight * 0.75
  showMoreBox1.x = ss2SearchBox.x + ss2SearchBox.w/2 - showMoreBox1.w/2 
  showMoreBox1.y = ss2InstructionBG.y + ss2InstructionBG.h/2 + showMoreBox1.h/2 + textHeight

  ss2CloseSearch = new ss2Instruction.Sprite()
  ss2CloseSearch.h = ss2SearchBox.h -5
  ss2CloseSearch.w = ss2CloseSearch.h -5
  ss2CloseSearch.y = ss2SearchBox.y
  ss2CloseSearch.x = ss2SearchBox.x+ ss2SearchBox.w/2 - ss2CloseSearch.w/2 - 2.5
  ss2CloseSearch.text = 'x'
  ss2CloseSearch.layer = 50

  infoTab.visible = true



  // noCursor()
  // ss2Agent = new Sprite(width/2, height/2, 20)
  // ss2Agent.color =255
  // // ss2Agent.text = 'agent'
  // ss2Agent.visible = true
  // ss2Agent.color = 0
  // ss2CameraMan = new Sprite(width/2, height/2, 25)
  // ss2CameraMan.color = 200
  // ss2CameraMan.text = 'camera man'
  // ss2CameraMan.visible = false

  // camera.x = width/2
  // camera.y = height/2



 

}

function draw(){
  background(220)


  if(searchBar.mouse.released() || searchIcon.mouse.released()){
    ss2Instruction.visible = true
  }

  if(ss2CloseSearch.mouse.released()){
    ss2Instruction.visible = false
  }


  // ss2CameraMan.x = mouseX
  // ss2CameraMan.y = mouseY

  // camera.x = ss2CameraMan.x
  // camera.y = ss2CameraMan.y
  
  // ss2CorrectionX = map (mouseX, 0, width, (0-width/2), (width + width/2))
  // ss2CorrectionY = map (mouseY, 0, height, (0-height/2), (height+ height/2))

  // ss2Agent.x = ss2CorrectionX
  // ss2Agent.y = ss2CorrectionY


  if (infoButton.mouse.released()){
  infoToggle = !infoToggle
  }
  if (infoToggle){
    infoTab.visible = true
  }
  if (!infoToggle){
    infoTab.visible = false
  } 

  if (friendInQ.x<=leftBound && removeButton.mouse.released()){
    removeToggle = !removeToggle
}

  if (removeToggle){
    friendInQ.visible = false
    removeButton.visible = false
    infoMemberArray[3].visible = false
    infoNameArray[3].visible = false

    infoMemberArray[4].y = infoMemberArray[3].y 
    infoNameArray[4].y = infoNameArray[3].y

    infoLocShare.y = infoMemNum.y + (infoMemNum.h/2) + (infoMember.d * (infoMemberArray.length)) + infoLocShare.h*1.25

    infoDivider.y = infoLocShare.y + infoLocShare.h/2 + 10
    infoLocSend.y = infoDivider.y + 10 + infoLocSend.h/2
  } else{ infoLocSend.visible = false}

    
  if(!removeToggle){
    if(friendInQ.mouse.dragging() || infoMemberArray[3].mouse.dragging() || infoNameArray[3].mouse.dragging()){
      friendInQ.moveTowards(mouse.x + friendInQ.mouse.x, friendInQ.y, 1);
      infoMemberArray[3].moveTowards(mouse.x + infoMemberArray[3].mouse.x, infoMemberArray[3].y, 1);
      infoNameArray[3].moveTowards(mouse.x + infoNameArray[3].mouse.x, infoNameArray[3].y, 1);
    }

    if(friendInQ.x >= infoWindow.x-10){
      friendInQ.x = infoWindow.x
      infoMemberArray[3].x = infoChange.x - infoChange.w/2 + infoMember.r
      infoNameArray[3].x = infoMember.x + infoMember.r + infoName.w/2 + 10
    }
    if (friendInQ.x <= leftBound){
      friendInQ.x = leftBound 
      infoMemberArray[3].x = ((leftBound - friendInQ.w/2) + infoMemberArray[3].d*1.3)
      infoNameArray[3].x = ((leftBound - friendInQ.w/2) + infoNameArray[3].w)
    }
  }
    
  
}



function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


class SS2{

  constructor(x, y, w, h){
    this.x = x
    this.y = y
    this.w = w
    this.h = h
  }

  openChat(){

  let chat = new Group()
  chat.color = pageColor
  chat.stroke = 0
  chat.collider = 's'
  chat.layer = 1

  let chatWindow = new chat.Sprite()
    chatWindow.w = this.w
    chatWindow.h = this.h
    chatWindow.x = this.x + this.w/2
    chatWindow.y = this.y + this.h/2
  let sideBar = new chat.Sprite()
    sideBar.y = chatWindow.y
    sideBar.h = chatWindow.h 
    sideBar.w = chatWindow.w * 0.35
    sideBar.x = (chatWindow.x - (chatWindow.w/2)) + (sideBar.w/2)
    // sideBar.x = this.x + (sideBar.w/2)
    sideBar.color = interfaceColor
  let chatName = new chat.Sprite()
    chatName.w = chatWindow.w - sideBar.w
    chatName.x = (sideBar.x + (sideBar.w/2)) + (chatName.w/2)
    chatName.h = chatWindow.h*0.12
    chatName.y = (chatWindow.y - (chatWindow.h/2)) + (chatName.h/2)

    // let to = new chat.Sprite()
    // to.w = chatName.w*0.2
    // to.x = chatName.x-chatName.w/2 + to.w*0.75
    // to.h = textHeight*1.5
    // to.y = chatName.y
    // to.textSize = 14
    // to.TextColor = 200
    // to.text = '  To:                            '
    // to.color = 255
    // to.stroke = to.color


  infoButton = new chat.Sprite()
    infoButton.d = chatName.h*0.3
    infoButton.y = chatName.y
    infoButton.x = (chatName.x + (chatName.w/2)) - textHeight*1.5
    // infoButton.x = chatWindow.x + chatWindow.w/2 - infoButton.y* 0.3
    infoButton.layer = 3
  let infoButtonHover = new chat.Sprite(infoButton.x, infoButton.y)
    infoButtonHover.w = infoButton.d + 15
    infoButtonHover.h = infoButtonHover.w
    infoButtonHover.layer = 2
    infoButtonHover.color = 255
    infoButtonHover.stroke = infoButtonHover.color
    //not sure if makes final design, blending in for now
    //be careful!! used in infoWindow.y, infoCom.y, infoComArray

    infoTab = new Group()
    infoTab.color=230
    infoTab.stroke=infoTab.color
    infoTab.collider='s'
    infoTab.visible = false

  infoWindow = new infoTab.Sprite()
    infoWindow.x = infoButton.x
    infoWindow.w = (chatName.w) * 0.55
    infoWindow.h = (chatWindow.h - chatName.h) * 0.95
    infoWindow.y = (infoButtonHover.y + infoButtonHover.h/2) + (infoWindow.h/2)
    infoWindow.color = 200
    infoWindow.stroke=0

  let infoIconArray = []
  while(infoIconArray.length < 4){
    let infoIcon = new infoTab.Sprite()
    infoIconArray.push(infoIcon)
    infoIcon.d = 50 - (infoIconArray.length*8)
    infoIcon.y = (infoWindow.y - infoWindow.h/2) + infoWindow.h*0.1
    infoIcon.x = infoWindow.x +5
    infoIcon.stroke = infoIcon.color
  }
  infoIconArray[0].x = (infoWindow.x +5) - (infoIconArray[0].r + 3)
  infoIconArray[1].x = (infoWindow.x +5)  + (infoIconArray[1].r + 3)
  infoIconArray[2].x = (infoWindow.x +5)  - (infoIconArray[2].r + 3)
  infoIconArray[3].x = (infoWindow.x +5)  + (infoIconArray[3].r + 3)

  infoIconArray[3].y = infoIconArray[0].y - (infoIconArray[3].r + 5)
  infoIconArray[1].y = infoIconArray[0].y + (infoIconArray[1].r + 5)
  infoIconArray[2].y = infoIconArray[1].y + (infoIconArray[2].r + 5)

  let infoChatName = new infoTab.Sprite()
    infoChatName.x = infoButton.x
    infoChatName.w = infoWindow.w * 0.3
    infoChatName.h = textHeight
    infoChatName.y = (infoIconArray[2].y + + infoIconArray[2].r) + 25

  let infoComArray = []
  while(infoComArray.length < 3){
    let infoCom = new infoTab.Sprite()
    infoComArray.push(infoCom)
    infoCom.d = textHeight
    infoCom.y = (infoChatName.y + + infoChatName.h/2) + textHeight*1.25
    infoCom.x = infoButton.x
  }
  infoComArray[0].x = infoButton.x - (infoWindow.w/4)
  infoComArray[2].x = infoButton.x+ (infoWindow.w/4)

  infoChange = new infoTab.Sprite()
  infoChange.w = infoWindow.w*0.75
  infoChange.x = infoWindow.x - infoWindow.w*0.4 + infoChange.w/2 
  infoChange.h = textHeight
  infoChange.y = ((infoChatName.y + infoChatName.h/2) + textHeight*1.25) + textHeight*1.5

  infoMemNum = new infoTab.Sprite()
  infoMemNum.h = textHeight/2
  infoMemNum.y = infoChange.y + infoChange.h*1.2
  infoMemNum.w = infoWindow.w*0.2
  infoMemNum.x = infoChange.x - infoChange.w/2 + infoMemNum.w/2


 

  infoMemberArray = []
  while(infoMemberArray.length < 5){
    infoMember = new infoTab.Sprite()
    infoMemberArray.push(infoMember)
    infoMember.d = 35
    infoMember.y = (infoMemNum.y + infoMemNum.h/2) + (infoMember.d * 1.2 * infoMemberArray.length) - infoMember.r
    infoMember.x = infoChange.x - infoChange.w/2 + infoMember.r
    infoMember.stroke = infoMember.color
  }
  infoMemberArray[3].color = 20

  infoNameArray = []
  while(infoNameArray.length < 5){
    infoName = new infoTab.Sprite()
    infoNameArray.push(infoName)
    infoName.h = textHeight
    infoName.w = 150
    infoName.y = (infoMemNum.y + infoMemNum.h/2) + (infoName.h * 1.38 * infoNameArray.length) - infoName.h/2
    infoName.x = infoMember.x + infoMember.r + infoName.w/2 + 10
    infoName.color = infoWindow.color
    infoName.stroke = infoWindow.color
  }
  infoNameArray[0].text = 'Friend 1                             '
  infoNameArray[1].text = 'Friend 2                             '
  infoNameArray[2].text = 'Friend 3                             '
  infoNameArray[3].text = 'Friend in Question             '
  infoNameArray[4].text = 'Add Member                      '

  infoLocShare = new infoTab.Sprite()
  infoLocShare.h = textHeight*0.75
  // infoLocShare.y = infoWindow.y + infoWindow.h/2 - infoLocShare.h*1.5
  infoLocShare.y = infoMemNum.y + (infoMemNum.h/2) + (infoMember.d * (infoMemberArray.length+1)) + infoLocShare.h*1.25
  infoLocShare.w = infoWindow.w*0.5
  infoLocShare.x = infoChange.x - infoChange.w/2 + infoLocShare.w/2

  friendInQ = new infoTab.Sprite()
  friendInQ.x = infoWindow.x
  friendInQ.y = infoNameArray[3].y
  friendInQ.w = infoWindow.w - 2
  friendInQ.h = infoNameArray[3].h + 10
  friendInQ.collider='k'
  friendInQ.color= infoWindow.color
  friendInQ.stroke= infoWindow.color
  friendInQ.layer = 17

  removeButton = new infoTab.Sprite()
  removeButton.x = infoWindow.x + infoWindow.w/4
  removeButton.y = infoNameArray[3].y
  removeButton.w = (infoWindow.w/2) -2
  removeButton.h = infoNameArray[3].h + 8
  removeButton.collider='s'
  removeButton.color='red'
  removeButton.stroke = removeButton.color
  removeButton.layer = 16
  removeButton.text = '                         Remove'
  removeButton.textColor = 255

  let hideChat = new chat.Sprite()
  hideChat.h = chatWindow.h/2
  hideChat.y = chatWindow.y + chatName.h
  hideChat.w = (infoWindow.x-infoWindow.w/2) - (sideBar.x+sideBar.w/2) 
  hideChat.x = (sideBar.x+sideBar.w/2) + hideChat.w/2
  hideChat.color = chatWindow.color
  hideChat.stroke = chatWindow.color
  hideChat.layer = 35

  let infoWindowLine = new infoTab.Sprite()
  infoWindowLine.x = infoWindow.x - infoWindow.w/2
  infoWindowLine.w=0
  infoWindowLine.h = infoWindow.h
  infoWindowLine.y = infoWindow.y
  infoWindowLine.stroke = 0

  infoDivider = new infoTab.Sprite()
  infoDivider.w = infoWindow.w - (2*((infoLocShare.x-infoLocShare.w/2) - (infoWindow.x-infoWindow.w/2)))
    //taking margin between location text and window edge (multiply by 2 since 2 margins)
  infoDivider.h = 0
  infoDivider.x = (infoLocShare.x-infoLocShare.w/2) + infoDivider.w/2
  infoDivider.y = infoLocShare.y + infoLocShare.h/2 + textHeight/2
  infoDivider.stroke = 0

  infoLocSend = new infoTab.Sprite()
  infoLocSend.h = textHeight * 0.75
  infoLocSend.y = infoDivider.y + textHeight/2 + infoLocSend.h/2
  infoLocSend.w = infoWindow.w*0.4
  infoLocSend.x = infoChange.x - infoChange.w/2 + infoLocSend.w/2


  //using parameters from draw to have tab semi pulled out in set up
  leftBound = (infoWindow.x - infoWindow.w/4) 
  friendInQ.x = leftBound + (friendInQ.w*0.1)
  infoMemberArray[3].x = ((leftBound - friendInQ.w/2) + infoMemberArray[3].d*1.3) + (friendInQ.w*0.1)
  infoNameArray[3].x = ((leftBound - friendInQ.w/2) + infoNameArray[3].w) + (friendInQ.w*0.1)


  let chatElement = new Group()
    chatElement.collider='s'
    chatElement.color = 245

    let windowButtons = new chatElement.Sprite()
    //doesn't resize so hard code placement
    windowButtons.w = 60
    windowButtons.x = (sideBar.x - sideBar.w/2) + windowButtons.h
    windowButtons.h = 25
    windowButtons.y = (sideBar.y - sideBar.h/2) + windowButtons.h*1.2

    searchBar = new chatElement.Sprite()
    searchBar.w = sideBar.w - ((windowButtons.x-windowButtons.w/2)-(sideBar.x-sideBar.w/2))*2
      //margin between buttons and edge of side bar. *2 for two margins
    searchBar.x = sideBar.x
    searchBar.h = textHeight
    searchBar.y = (sideBar.y - sideBar.h/2) + searchBar.h/2 + windowButtons.h*2.5
    searchBar.text = 'For help, click here                                         '

    searchIcon = new chatElement.Sprite()
    searchIcon.w = textHeight -5
    searchIcon.h = textHeight -5
    searchIcon.y = searchBar.y
    searchIcon.x = searchBar.x - searchBar.w/2 + searchIcon.w/2 + 2.5


    let contextElement = new Group()
    contextElement.collider='s'
    contextElement.color = 245

    let sideIconArray = []
  while(sideIconArray.length < 8){
    sideIcon = new contextElement.Sprite()
    sideIconArray.push(sideIcon)
    sideIcon.d = 45
    sideIcon.y = (searchBar.y + searchBar.h/2) + (sideIcon.d * sideIconArray.length * 1.65) - sideIcon.r
    sideIcon.x = searchBar.x - searchBar.w/2 + sideIcon.d
    sideIcon.stroke = sideIcon.color
  }

  sideNameArray = []
  while(sideNameArray.length < 8){
    sideName = new contextElement.Sprite()
    sideNameArray.push(sideName)
    sideName.h = textHeight *0.75
    sideName.w = 150
    sideName.y = (searchBar.y + searchBar.h/2) + (sideName.h * (sideNameArray.length-1) * 3.3) + sideName.h*1.5
    sideName.x = sideIcon.x + sideIcon.r + sideName.w/2 + 10
    sideName.stroke = sideName.color
  }

  sideDividerArray = []
  while(sideDividerArray.length < 7){
    sideDivider = new contextElement.Sprite()
    sideDividerArray.push(sideDivider)
    sideDivider.h = 0
    sideDivider.w = (searchBar.w) - ((sideName.x-sideName.w/2)-(searchBar.x-searchBar.w/2))
    sideDivider.y = (searchBar.y + searchBar.h/2) + (sideName.h * (sideDividerArray.length) * 3.3) + sideName.h/2
    sideDivider.x = sideIcon.x + sideIcon.r + sideDivider.w/2 + 10
    sideDivider.stroke = 250
  }




  sideTextArray = []
  while(sideTextArray.length < 7){
    let sideText = new contextElement.Sprite()
    sideTextArray.push(sideText)
    sideText.h = textHeight*0.75
    sideText.w = sideDivider.w
    sideText.y = ((searchBar.y + searchBar.h/2) + sideName.h*2) +(sideText.h * (sideTextArray.length-1) * 3.3) + sideText.h/2
    sideText.x = sideIcon.x + sideIcon.r + sideText.w/2 + 10
    sideText.color = 230
    sideText.stroke = sideText.color
  }
  sideTextArray1 = []
  while(sideTextArray1.length < 7){
    let sideText1 = new contextElement.Sprite()
    sideTextArray1.push(sideText1)
    sideText1.h = textHeight*0.75
    sideText1.w = sideDivider.w
    sideText1.y = ((searchBar.y + searchBar.h/2) + sideName.h*2) +(sideText1.h * (sideTextArray1.length-1) * 3.3) + sideText1.h/2 + (textHeight*0.75) -5
    sideText1.x = sideIcon.x + sideIcon.r + sideText1.w/2 + 10
    sideText1.color = 230
    sideText1.stroke = sideText1.color
  }

  sideTextArray[1].text = 'There is a friend group of 5 people.          '
  sideTextArray[2].text ='However, one of the friends has been the'
  sideTextArray1[2].text ='the target of rumors going around,           '
  sideTextArray[3].text ='leading to distrust and tension/conflicts    '
  sideTextArray1[3].text = 'within the friend group.                             '
  sideTextArray[5].text = 'The friends turn to the unspoken leader    '
  sideTextArray1[5].text = 'of their group for a solution.                      '

  let selectedChat = new chatElement.Sprite()
    selectedChat.w = searchBar.w
    selectedChat.x = sideDividerArray[0].x -40
    selectedChat.h = sideIcon.d + textHeight
    selectedChat.y = sideDividerArray[0].y - selectedChat.w*0.11
    selectedChat.color = 200
    selectedChat.stroke = selectedChat.color

    sideIconArray[0].layer = selectedChat.layer+1
    sideNameArray[0].layer = selectedChat.layer+1

  let hideChatBlock = new chatElement.Sprite()
      hideChatBlock.x = sideIconArray[7].x
      hideChatBlock.w = sideIconArray[7].d
      hideChatBlock.h = sideIconArray[7].r
      hideChatBlock.y = sideBar.y+sideBar.h/2 + hideChatBlock.h/2
      hideChatBlock.color = 220
      hideChatBlock.stroke = hideChatBlock.color
  //background color
  let hideChatLine = new chatElement.Sprite()
      hideChatLine.x = sideBar.x
      hideChatLine.w = sideBar.w
      hideChatLine.h = 0
      hideChatLine.y = sideBar.y+sideBar.h/2 -1
      hideChatLine.stroke = 0

  let chatMessageX = (chatWindow.x-chatWindow.w/2) + (sideBar.w) 

  let messageBar = new chatElement.Sprite()
      messageBar.h = textHeight
      messageBar.y = chatWindow.y + chatWindow.h/2 - messageBar.h*1.5
      messageBar.w = (chatWindow.w - sideBar.w) * 0.9
      messageBar.x = chatMessageX + messageBar.w/2 + ((chatWindow.w - sideBar.w)*0.05)
      messageBar.color = 240
      messageBar.layer=3

  let chatIcon = new contextElement.Sprite()
      chatIcon.y = messageBar.y - messageBar.h/2 - chatIcon.d*1.2
      chatIcon.x = messageBar.x - messageBar.w/2 + chatIcon.r

  chatTextArray = []
  while(chatTextArray.length < 3){
    chatText = new contextElement.Sprite()
    chatTextArray.push(chatText)
    chatText.h = textHeight*0.75
    chatText.w = chatName.w*0.5
    chatText.y = (messageBar.y) - (chatText.h * chatTextArray.length * 1.2) - messageBar.h
    chatText.x = (chatName.x-chatName.w/2) + chatText.w*0.78
    chatText.color = 200
    chatText.stroke = chatText.color
    chatText.textColor=0
  }

  chatTextArray[2].text = 'Despite lack of verification of the rumors,                       '
  chatTextArray[1].text = 'should the friend group exclude the friend in question   '
  chatTextArray[0].text = ' from the group to improve their overall harmony?           '
  // chatTextArray[4].w = chatName.w*0.2
    //looks like problem with condensing group inside array is inability to edit features like w. cant cross ref. if outside loop, cant ref group features. but if inside loop, cant access individual items in array 
    //   // chatMessageName.x = chatTextArray[4].x this doesnt work either 
  
  let chatMessageName = new contextElement.Sprite()
    chatMessageName.h = textHeight*0.75
    chatMessageName.y = (messageBar.y) - (chatText.h * 4 * 1.2) - messageBar.h
    chatMessageName.w = chatName.w*0.15
    chatMessageName.x = (chatName.x-chatName.w/2) + chatMessageName.w *1.43
    chatMessageName.color = 230
    chatMessageName.stroke = chatMessageName.color
  }

}