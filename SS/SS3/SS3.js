

let textHeight = 30
let numRows = 13
let pageColor = 255
let interfaceColor = 230
let interfaceColor1 = 150


//SS3
let email 
let inboxEmailReply, replyHeading, sendHeading, inboxDividerArray
let interactionElement, textCursor, autoComplete, tabToggle, backSpaceExtended, contextQuestion2

let newMessageTab, sideBar, textCover, instructTextBox, ss3Instruction, ss3CloseSearch, ss3SearchBox
let textCoverToggle = true

let ss3Agent, ss3CameraMan, ss3CorrectionX, ss3CorrectionY

let windowButtons, newInstructionGroup


let emailPageImg, emailCloseButtonImg, longButtonImg, shortButtonImg, artistImg, emailBodyImg, inboxEmailImg, sideBarImg, emailBarImg

let bg1, bg2, bg3

function preload(){
  emailPageImg = loadImage('assets/widerWindow1.png')
  emailCloseButtonImg = loadImage('assets/closeButton.png')
  longButtonImg = loadImage('assets/longButton.png')
  shortButtonImg = loadImage('assets/shortButton.png')
  artistImg = loadImage('assets/artist.png')
  emailBodyImg = loadImage('assets/emailBody.png')
  inboxEmailImg = loadImage('assets/inboxEmail.png')
  sideBarImg = loadImage('assets/inboxWindow.png')
  emailBarImg = loadImage('assets/infoWindow1.png')

  bg1 = loadImage('assets/background/1.png')
  bg2 = loadImage('assets/background/2.png')
  bg3 = loadImage('assets/background/3.png')
}

function setup(){
  createCanvas(windowWidth, windowHeight)  
  textFont("Silver")
  textSize(20)

  email =  new SS3(50, 50, windowWidth*0.9, windowHeight*0.9)
  email.openEmail()

  ss3Instruction = new Group()
  ss3Instruction.collider ='s'
  ss3Instruction.color = 255
  ss3Instruction.stroke =0
  
  ss3SearchBox = new ss3Instruction.Sprite()
  ss3SearchBox.x = 755
  ss3SearchBox.w = 665
  ss3SearchBox.h = textHeight*1.25 + 4
  ss3SearchBox.y = 50 + ss3SearchBox.h/2 + 8
  ss3SearchBox.textColor = 0
  ss3SearchBox.visible = false


  let currentMail = new ss3Instruction.Sprite()
  currentMail.w = 112.5
  currentMail.x = ss3SearchBox.x - ss3SearchBox.w/2 - currentMail.w/2 
  currentMail.h = ss3SearchBox.h
  currentMail.y = ss3SearchBox.y
  currentMail.color = 100
  currentMail.visible = false

  let searchDropDown = new ss3Instruction.Sprite()
  searchDropDown.x = ss3SearchBox.x
  searchDropDown.w = ss3SearchBox.w
  searchDropDown.h = 300
  searchDropDown.y = 50 + searchDropDown.h*0.62 + 8 + 5
  searchDropDown.visible = false


  newInstructionGroup = new Group()
  newInstructionGroup.collider ='s'
  newInstructionGroup.color = 255
  newInstructionGroup.stroke =0
  newInstructionGroup.visible = false

  let instructTextArray = []
  while (instructTextArray.length < 8){
    instructTextBox = new newInstructionGroup.Sprite()
    // instructTextBox.w = searchDropDown.w - 4
    // instructTextBox.h = textHeight *1.25 -4
    // instructTextBox.x = searchDropDown.x
    // instructTextBox.y = (searchDropDown.y - searchDropDown.h/2) + (instructTextBox.h * instructTextArray.length) + instructTextBox.h/2 +2
    instructTextBox.w = sideBar.w * 0.75
    instructTextBox.x = sideBar.x + 5
    instructTextBox.y = (sideBar.y - sideBar.h/2) + (instructTextBox.h *0.8 * instructTextArray.length) + instructTextBox.h/2 + 5
    instructTextBox.h = textHeight *1.2
    instructTextBox.stroke = 255
    // instructTextBox.textSize = 14
    instructTextBox.textColor = 0
    instructTextArray.push(instructTextBox)
  }

  textCover = new newInstructionGroup.Sprite()
  textCover.w = instructTextBox.w * 1.1
  textCover.x = instructTextBox.x
  textCover.h = instructTextBox.h * 10
  textCover.y = sideBar.y - sideBar.h/2 + textCover.h/2 + instructTextBox.h*0.6
  textCover.color = 255
  textCover.stroke = textCover.color
  textCover.layer = instructTextBox.layer -8


  instructTextArray[1].text = 'Dear User, '
  instructTextArray[2].text = 'This is an email inbox with an '
  instructTextArray[3].text = 'email draft open. Read the context '
  instructTextArray[4].text = 'about the situation provided and '
  instructTextArray[5].text = 'make a decision by interacting with'
  instructTextArray[6].text = 'your keyboard '
  instructTextArray[7].text = '("tab", "backspace" or "w").'

  ss3CloseSearch = new newInstructionGroup.Sprite()
  // ss3CloseSearch.w = 50 
  // ss3CloseSearch.x = ss3SearchBox.x + ss3SearchBox.w/2  - ss3CloseSearch.w/2 -4
  // ss3CloseSearch.h = ss3SearchBox.h -4
  // ss3CloseSearch.y = ss3SearchBox.y
  ss3CloseSearch.w = 30 
  ss3CloseSearch.x = sideBar.x + sideBar.w/2  - ss3CloseSearch.w/2 - 20
  ss3CloseSearch.h = ss3CloseSearch.w
  ss3CloseSearch.y = sideBar.y - sideBar.h/2 + ss3CloseSearch.h

  // ss3CloseSearch.text = 'x'
  ss3CloseSearch.stroke = 255
  ss3CloseSearch.img = emailCloseButtonImg
  ss3CloseSearch.visible = false


  // noCursor()
  // ss3Agent = new Sprite(width/2, height/2, 20)
  // ss3Agent.color =255
  // // ss3Agent.text = 'agent'
  // ss3Agent.visible = true
  // ss3Agent.color = 0
  // ss3CameraMan = new Sprite(width/2, height/2, 25)
  // ss3CameraMan.color = 200
  // ss3CameraMan.text = 'camera man'
  // ss3CameraMan.visible = false

  // camera.x = width/2
  // camera.y = height/2

}

function draw(){
  background(220)

  if (newMessageTab.mouse.released()) {
    newInstructionGroup.visible = true
  }
  if (ss3CloseSearch.mouse.released()){
    newInstructionGroup.visible = false
  }
  
  bg1.resize(width, height)
  bg2.resize(width, height)
  bg3.resize(width, height)
  image(bg1, 0,0)
  image(bg2, 0,0)
  image(bg3, 0,0)

  // || ss3SearchBox.mouse.released()){
    // ss3Instruction.visible = true
  // }

  // if (ss3CloseSearch.mouse.released()){
  //   ss3Instruction.visible = false
  // }


  // ss3CameraMan.x = mouseX
  // ss3CameraMan.y = mouseY

  // camera.x = ss3CameraMan.x
  // camera.y = ss3CameraMan.y
  
  // ss3CorrectionX = map (mouseX, 0, width, (0-width/2), (width + width/2))
  // ss3CorrectionY = map (mouseY, 0, height, (0-height/2), (height+ height/2))

  // ss3Agent.x = ss3CorrectionX
  // ss3Agent.y = ss3CorrectionY

  if(windowButtons.mouse.released()){
    localStorage.setItem("lie",tabToggle);
    window.close()
  }



}

function keyReleased(){
  email.type()
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

class SS3{
    constructor(x, y, w, h){
      this.x = x
      this.y = y
      this.w = w
      this.h = h
    }
  
    openEmail(){
      let emailSections = new Group()
        emailSections.collider = 's'
        emailSections.color = interfaceColor
      
      let emailWindow = new emailSections.Sprite()
        emailWindow.w = this.w
        emailWindow.h = this.h  
        emailWindow.x = this.x + this.w/2
        emailWindow.y = this.y + this.h/2
        emailPageImg.resize(emailWindow.w, emailWindow.h)
        emailWindow.img = emailPageImg
      
      let emailWindowTab1 = new emailSections.Sprite()
        emailWindowTab1.w = emailWindow.w
        emailWindowTab1.x = emailWindow.x
        emailWindowTab1.h = emailWindow.h*0.075
        emailWindowTab1.y = (emailWindow.y-emailWindow.h/2) + emailWindowTab1.h/2
        // emailWindowTab1.color = interfaceColor1
        emailWindowTab1.visible = false
      
      let emailWindowTab2 = new emailSections.Sprite()
        emailWindowTab2.w = emailWindowTab1.w -2
        emailWindowTab2.x = emailWindowTab1.x
        emailWindowTab2.h = emailWindowTab1.h
        emailWindowTab2.y = (emailWindowTab1.y+emailWindowTab1.h/2) + emailWindowTab2.h/2
        emailWindowTab2.color = 'red'
        emailWindowTab2.stroke = emailWindowTab2.color
        emailWindowTab2.visible = false
      
      sideBar = new emailSections.Sprite()
        sideBar.w = emailWindow.w*0.2 
        sideBar.x = (emailWindow.x-emailWindow.w/2) + sideBar.w/2 +2
        sideBar.h = emailWindow.h - emailWindowTab1.h - emailWindowTab2.h -2
        sideBar.y = emailWindow.y + emailWindowTab1.h
        sideBar.stroke = sideBar.color
        sideBar.visible = false
      
      let margin = 10
      
      let inboxBar = new emailSections.Sprite()
        inboxBar.w = emailWindow.w*0.25
        inboxBar.x = (sideBar.x+sideBar.w/2) + inboxBar.w/2 + margin/2
        inboxBar.h = emailWindow.h - emailWindowTab1.h - emailWindowTab2.h - 15
        inboxBar.y = emailWindow.y + emailWindowTab1.h -7.5
        inboxBar.color = pageColor
        inboxBar.strokeWeight = 2
        inboxBar.stroke = color(211, 240, 253)
        emailBarImg.resize(inboxBar.w, inboxBar.h)
        inboxBar.img = emailBarImg
      
      let emailDraft = new emailSections.Sprite()
        emailDraft.w = emailWindow.w*0.53 - 10
        emailDraft.x = (emailWindow.x+emailWindow.w/2) - emailDraft.w/2 - margin -10
        emailDraft.h = emailWindow.h - emailWindowTab1.h - emailWindowTab2.h - margin - 5
        emailDraft.y = emailWindow.y + emailWindowTab1.h - margin/2 -2.5
        emailDraft.color = pageColor
        emailDraft.strokeWeight = 2
        emailDraft.stroke = color(127,209, 247)


        emailBodyImg.resize(emailDraft.w, emailDraft.h)
        emailDraft.img = emailBodyImg
  
      let emailInterface = new Group()
        emailInterface.collider = 's'
  
  
      let searchBar = new emailInterface.Sprite()
        searchBar.w = emailWindowTab1.w*0.6
        searchBar.x = emailWindowTab1.x
        searchBar.h = emailWindowTab1.h - margin *1.5
        searchBar.y = emailWindowTab1.y
        searchBar.color = interfaceColor1+30
        searchBar.stroke = searchBar.color 
        searchBar.visible = false
  
      windowButtons = new emailInterface.Sprite()
        windowButtons.w = 22
        windowButtons.x = (emailWindow.x + emailWindow.w/2) - windowButtons.h * 0.4
        windowButtons.h = 22
        windowButtons.y = (emailWindow.y - emailWindow.h/2) + windowButtons.h -2
        emailCloseButtonImg.resize(windowButtons.w, windowButtons.h) 
        windowButtons.img = emailCloseButtonImg
        windowButtons.debug = false

      let closeHighlight = new emailInterface.Sprite()
        closeHighlight.w = windowButtons.w + 2
        closeHighlight.x = windowButtons.x 
        closeHighlight.h = windowButtons.h + 2
        closeHighlight.y = windowButtons.y
        closeHighlight.layer = windowButtons.layer -1
        closeHighlight.stroke = 255
        closeHighlight.strokeWeight = 3
        closeHighlight.color = closeHighlight.stroke
  
      let windowButtons1 = new emailInterface.Sprite()
        windowButtons1.w = 60
        windowButtons1.x = (emailWindow.x + emailWindow.w/2) - windowButtons.h * 1.75
        windowButtons1.h = 25
        windowButtons1.y = (emailWindow.y - emailWindow.h/2) + windowButtons.h
        windowButtons1.color = interfaceColor1+30
        windowButtons1.stroke = windowButtons1.color 
        windowButtons1.visible = false
  
  
      let emailDraftTab = new emailInterface.Sprite()
        emailDraftTab.w = emailDraft.w 
        emailDraftTab.x = emailDraft.x - 0.5
        emailDraftTab.h = emailWindowTab2.h - margin/2
        emailDraftTab.y = emailWindowTab2.y
        emailDraftTab.color = 255
        emailDraftTab.strokeWeight = 2
        emailDraftTab.stroke = color(211, 240, 253)
  
      newMessageTab = new emailInterface.Sprite()
        newMessageTab.w = sideBar.w*0.75
        newMessageTab.x = (sideBar.x - sideBar.w/2) + newMessageTab.w/2 + margin*2
        newMessageTab.h = emailWindowTab2.h -margin/2
        newMessageTab.y = emailWindowTab2.y + margin/2
        longButtonImg.resize(newMessageTab.w, newMessageTab.h)
        newMessageTab.img = longButtonImg
        newMessageTab.textColor = 255
        newMessageTab.textSize = 24
        newMessageTab.text = 'Instructions'
  
      let sideBarTab = new emailInterface.Sprite()
        sideBarTab.w = sideBar.w * 0.9
        sideBarTab.x = sideBar.x + (sideBar.w * 0.025)
        sideBarTab.h = sideBar.h * 0.96
        sideBarTab.y = sideBar.y - sideBar.h * 0.005
        sideBarTab.color = 255
        sideBarTab.strokeWeight = 2
        sideBarTab.stroke = color(211, 240, 253)
        sideBarImg.resize(sideBarTab.w, sideBarTab.h)
        sideBarTab.img = sideBarImg
      
      let emailElem = new Group()
        emailElem.collider = 's'
        emailElem.stroke = 0
        emailElem.color = 255
      let emailAddress = new emailElem.Sprite()
        emailAddress.h = textHeight 
        emailAddress.y = sideBarTab.y - sideBarTab.h/2 + emailAddress.h * 1.75
        emailAddress.w = sideBarTab.w*0.65
        emailAddress.x = sideBarTab.x - sideBarTab.w/2 + emailAddress.w*0.75
        emailAddress.stroke = emailAddress.color
        emailAddress.textSize = 22
        emailAddress.text = 'codeYourWay2023@nyu.edu'

      let emailElemArray = []
      while (emailElemArray.length < 6) {
        let emailTab = new emailElem.Sprite()
        emailTab.h = textHeight
        emailTab.w = sideBarTab.w*0.4
        emailTab.x = sideBarTab.x - sideBarTab.w/2 + emailTab.w
        emailTab.y = emailAddress.y+emailAddress.h/2 + emailTab.h/2 + (emailTab.h* emailElemArray.length * 1.2)
        emailTab.stroke = emailTab.color
        emailElemArray.push(emailTab)
      }

      let emailIconArray = []
      while (emailIconArray.length < 6) {
        let emailIcon = new emailElem.Sprite()
        emailIcon.h = textHeight*0.6
        emailIcon.w = emailIcon.h
        emailIcon.x = sideBarTab.x - sideBarTab.w/2 + emailIcon.w * 2
        emailIcon.y = emailAddress.y+emailAddress.h/2 + (emailIcon.h*0.65) + (emailIcon.h* emailIconArray.length * 2)
        emailIcon.stroke = color(211, 240, 253)
        emailIconArray.push(emailIcon)
      }

      let emailHover = new emailElem.Sprite()
        emailHover.h = textHeight 
        emailHover.y = emailElemArray[0].y -2
        emailHover.w = sideBarTab.w*0.9
        emailHover.x = sideBarTab.x
        emailHover.color = color(211, 240, 253)
        emailHover.stroke = emailHover.color 
        emailHover.layer = emailElemArray[0].layer-1
       
      emailElemArray[0].color = emailHover.color
      emailElemArray[0].stroke = emailElemArray[0].color
      emailElemArray[0].h = emailElemArray[0].h-4
      emailElemArray[0].text = 'Inbox          '
      emailElemArray[1].text = 'Drafts        '
      emailElemArray[2].text = 'Archive       '
      emailElemArray[3].text = 'Sent          '
      emailElemArray[4].text = 'Deleted Items'
      emailElemArray[5].text = 'Junk Email    '

            // let project1Icon = new emailInterface.Sprite()
            //   project1Icon.h = textHeight 
            //   project1Icon.y = starred.y + starred.h/2 + project1Icon.h/2 
            //   project1Icon.w = project1Icon.h
            //   project1Icon.x = sideBarList.x - sideBarList.w/2 + project1Icon.w/2 
            //   project1Icon.color = 255
            //   project1Icon.stroke = project1Icon.color
            // let project1 = new emailInterface.Sprite()
            //   project1.h = textHeight 
            //   project1.y = starred.y + starred.h/2 + project1.h/2 +3
            //   project1.w = sideBarList.w/2
            //   project1.x = sideBarList.x - sideBarList.w/2 + project1.w/2 + project1Icon.w *1.25
            //   project1.color = color(211, 240, 253)
            //   project1.stroke = project1.color
            //   project1.textSize = 22
            //   project1.text = 'Task Assignment'


  
      let focusedInbox = new emailInterface.Sprite()
        focusedInbox.w = inboxBar.w
        focusedInbox.x = inboxBar.x
        focusedInbox.h = inboxBar.h* 0.125
        focusedInbox.y = (inboxBar.y - inboxBar.h/2) + focusedInbox.h/2
        focusedInbox.color = color(211, 240, 253)
        focusedInbox.stroke = color(127, 209, 247)
        focusedInbox.visible = false
  
  
      let inboxEmail = new Group()
        inboxEmail.collider = 's'
        inboxEmail.color = inboxBar.color
        inboxEmail.stroke = color(127, 209, 247)
        inboxEmail.w = inboxBar.w -16
        inboxEmail.x = inboxBar.x
        inboxEmail.h = textHeight*2
  
      let inboxEmailReplyArray = []
        while (inboxEmailReplyArray.length < 3){
          inboxEmailReply = new inboxEmail.Sprite()
          inboxEmailReply.stroke = color(211, 240, 253)
          inboxEmailReply.y = ((inboxBar.y-inboxBar.h/2) + focusedInbox.h)  + inboxEmail.h/2 + (inboxEmail.h * inboxEmailReplyArray.length) -40
          inboxEmailReplyArray.push(inboxEmailReply)
        }
        inboxEmailReplyArray[0].color = 255
        inboxEmailReplyArray[0].stroke = 255
        inboxEmailReplyArray[0].w = inboxEmailReplyArray[0].w -2
        inboxEmailReplyArray[1].color = color(211, 240, 253)
  
      inboxDividerArray = []
        while (inboxDividerArray.length < 7){
          let inboxDivider = new inboxEmail.Sprite()
          inboxDivider.h = 0
          inboxDivider.w = inboxBar.w -20
          // inboxDivider.stroke = emailSections.color
          // inboxDivider.stroke = 'red'
          inboxDivider.stroke = color(211, 240, 253)
          inboxDivider.y = (inboxEmailReply.y + inboxEmailReply.h/2) +  (textHeight * inboxDividerArray.length * 2.2)
          inboxDividerArray.push(inboxDivider)
        }
  
      let draftElements = new Group()
        draftElements.collider = 's'
        draftElements.color = 255
        draftElements.stroke = 0
        draftElements.color = 255
        draftElements.strokeWeight = 2
        draftElements.stroke = color(211, 240, 253)
  
      let draftHeading = new draftElements.Sprite()
        draftHeading.w = emailDraft.w
        draftHeading.x = emailDraft.x
        draftHeading.h = emailDraft.h*0.3
        draftHeading.y = (emailDraft.y - emailDraft.h/2) + draftHeading.h/2
        draftHeading.visible = false
    
      let draftReplyTo = new draftElements.Sprite()
        draftReplyTo.w = emailDraft.w
        draftReplyTo.x = emailDraft.x
        draftReplyTo.h = emailDraft.h*0.19
        draftReplyTo.y = (emailDraft.y + emailDraft.h/2) - draftReplyTo.h/2
        draftReplyTo.visible = false
  
      let replyHeadingArray = []
        while(replyHeadingArray.length < 3){
        replyHeading = new draftElements.Sprite()
        replyHeadingArray.push(replyHeading)
        replyHeading.w = draftReplyTo.w * 0.1
        replyHeading.x = (draftReplyTo.x - draftReplyTo.w/2) + replyHeading.w/2 + margin*2
        replyHeading.h = textHeight
        replyHeading.y = (draftReplyTo.y - draftReplyTo.h/2) + (replyHeadingArray.length * replyHeading.h) - draftReplyTo.h*0.2
        
        }
  
      let replyHeadingTextArray = []
        while(replyHeadingTextArray.length < 3){
          let replyHeadingText = new draftElements.Sprite()
          replyHeadingTextArray.push(replyHeadingText)
          replyHeadingText.w = draftReplyTo.w * 0.6
          replyHeadingText.x = (replyHeading.x + replyHeading.w/2) + replyHeadingText.w/2
          replyHeadingText.h = textHeight
          replyHeadingText.y = (draftReplyTo.y - draftReplyTo.h/2) + (replyHeadingTextArray.length * replyHeadingText.h) - draftReplyTo.h*0.2
        }
  
      let replyLine = new draftElements.Sprite()
        replyLine.w = draftReplyTo.w * 0.94
        replyLine.x = (draftReplyTo.x - draftReplyTo.w/2) + replyLine.w/2 + margin*2
        replyLine.h = 0
        replyLine.y = draftReplyTo.y - draftReplyTo.h*0.65

  
      let draftSaved = new draftElements.Sprite()
        draftSaved.w = draftReplyTo.w * 0.3
        draftSaved.x = (draftReplyTo.x + draftReplyTo.w/2) - draftSaved.w/2 - margin*1.5
        draftSaved.h = textHeight*0.75
        draftSaved.y = emailDraft.y+emailDraft.h/2 - draftSaved.h/2 - margin

        let artist = new draftElements.Sprite()
        artist.w = draftSaved.w /4
        artist.x = draftSaved.x + draftSaved.w/2 - artist.w/2 - 10
        artist.y = draftSaved.y
        artist.h = draftSaved.h -5
        artist.img = artistImg
        artist.debug=false
  
  
      let sendHeadingArray = []
        while(sendHeadingArray.length < 3){
          sendHeading = new draftElements.Sprite()
          sendHeadingArray.push(sendHeading)
          sendHeading.w = draftHeading.w * 0.1
          sendHeading.x = (draftHeading.x - draftHeading.w/2) + sendHeading.w/2 + margin*2
          sendHeading.h = textHeight
          sendHeading.y = (draftHeading.y - draftHeading.h/2) + (sendHeadingArray.length * sendHeading.h * 1.3) 
        }
  
      let sendHeadingLinesArray = []
        while(sendHeadingLinesArray.length < 3){
          let sendHeadingLines = new draftElements.Sprite()
          sendHeadingLinesArray.push(sendHeadingLines)
          sendHeadingLines.w = draftHeading.w * 0.75
          sendHeadingLines.x = (draftHeading.x + draftHeading.w/2) - sendHeadingLines.w/2 - margin*2
          sendHeadingLines.h = 0
          sendHeadingLines.y = (draftHeading.y - draftHeading.h/2) + (sendHeadingLinesArray.length * (textHeight) * 1.3) + textHeight*0.4
          sendHeadingLines.stroke = color(211, 240, 253)
        }
  
      let textEditor = new draftElements.Sprite()
        textEditor.w = draftHeading.w * 0.94
        textEditor.x = draftHeading.x - draftHeading.w/2 + textEditor.w/2 + margin*2
        textEditor.h = sendHeading.h*1.1
        textEditor.y = draftHeading.y + draftHeading.h/2 - textEditor.h/2 

  
      let contextPlacement = new Group()
        contextPlacement.collider = 's'
        contextPlacement.color = 255
        contextPlacement.stroke = 255
        
      let contextArray = []
      let inboxTextArray = []
        while (inboxTextArray.length < 2){
          let inboxText = new contextPlacement.Sprite()
          inboxText.w = inboxBar.w - 20
          inboxText.x = inboxBar.x
          inboxText.h = textHeight * 0.75 - 2
          inboxText.y = inboxDividerArray[0].y + inboxText.h/2 + (inboxText.h * (inboxTextArray.length+1))
          inboxTextArray.push(inboxText)
      }
      contextArray.push(inboxTextArray) 
  
      let inboxTextArray1 = []
        while (inboxTextArray1.length < 2){
          let inboxText1 = new contextPlacement.Sprite()
          inboxText1.w = inboxBar.w -20
          inboxText1.x = inboxBar.x
          inboxText1.h = textHeight * 0.75 -2
          inboxText1.y = inboxDividerArray[1].y + inboxText1.h/2 + (inboxText1.h * (inboxTextArray1.length+1))
          inboxTextArray1.push(inboxText1)
        }
      contextArray.push(inboxTextArray1) 
  
      let inboxTextArray2 = []
        while (inboxTextArray2.length < 2){
          let inboxText2 = new contextPlacement.Sprite()
          inboxText2.w = inboxBar.w -20
          inboxText2.x = inboxBar.x
          inboxText2.h = textHeight * 0.75 -2
          inboxText2.y = inboxDividerArray[2].y + inboxText2.h/2 + (inboxText2.h * (inboxTextArray2.length+1))
          inboxTextArray2.push(inboxText2)
        }
      contextArray.push(inboxTextArray2) 
  
      let inboxTextArray3 = []
        while (inboxTextArray3.length < 2){
          let inboxText3 = new contextPlacement.Sprite()
          inboxText3.w = inboxBar.w -20
          inboxText3.x = inboxBar.x
          inboxText3.h = textHeight * 0.75 -2
          inboxText3.y = inboxDividerArray[3].y + inboxText3.h/2 + (inboxText3.h * (inboxTextArray3.length+1))
          inboxTextArray3.push(inboxText3)
        }
      contextArray.push(inboxTextArray3) 
  
      contextArray[0][0].text = '     A teacher gave an optional assignment'
      contextArray[0][1].text = 'to conduct a social experiment   '
      contextArray[1][0].text = 'outside of class with everyone   '
      contextArray[1][1].text = 'for extra credit.                  '
      contextArray[2][0].text = '  One criteria for completion of the '
      contextArray[2][1].text = '         assignment is that everyone participated.'
      // contextArray[3][0].text = 'However, when conducting the experiment, '
      // contextArray[3][1].text = 'a few classmates were absent.'
  
      let contextQuestion = new contextPlacement.Sprite()
        contextQuestion.w = textEditor.w
        contextQuestion.x = textEditor.x
        contextQuestion.h = textHeight
        contextQuestion.y = textEditor.y + textEditor.h/2 + contextQuestion.h/2 + emailDraft.h*0.15
        contextQuestion.textSize = 22
        contextQuestion.text = 'When the teacher asked the class representative if everyone participated,           '
  
      let contextQuestion1 = new contextPlacement.Sprite()
        contextQuestion1.w = textEditor.w
        contextQuestion1.x = textEditor.x
        contextQuestion1.h = textHeight
        contextQuestion1.y = textEditor.y + textEditor.h/2 + contextQuestion.h*1.5 + emailDraft.h*0.15
        contextQuestion1.textSize = 22
        contextQuestion1.text = 'should they lie and say that everyone participated?                                    '
        // contextQuestion1.color = 255
  
      contextQuestion2 = new contextPlacement.Sprite()
        contextQuestion2.w = textEditor.w
        contextQuestion2.x = textEditor.x 
        contextQuestion2.h = textHeight 
        contextQuestion2.y = textEditor.y + textEditor.h/2 + contextQuestion.h/2 + emailDraft.h*0.15 - textHeight
        contextQuestion2.textSize = 22
        contextQuestion2.text = 'However, when conducting the experiment, a few classmates were absent.              '
  
  
  
      interactionElement = new Group()
        interactionElement.collider = 's'
        interactionElement.color = 255
        interactionElement.visible = true

      autoComplete = new interactionElement.Sprite()
        autoComplete.w = contextQuestion1.w * 0.577
        autoComplete.x = contextQuestion1.x+contextQuestion1.w/2 - autoComplete.w*0.575
        autoComplete.h = contextQuestion1.h
        autoComplete.y = contextQuestion1.y
        autoComplete.textSize = 22
        autoComplete.textColor = 200
        // autoComplete.text = 'veryone participated?                                             '
        autoComplete.text = 'veryone participated?                                       '
        autoComplete.color = 255
        autoComplete.stroke = autoComplete.color



      let tabButton = new interactionElement.Sprite()
        tabButton.w = textEditor.w * 0.075
        // tabButton.x = contextQuestion1.x+contextQuestion1.w/4
        tabButton.x = textEditor.x * 1.15
        tabButton.h = autoComplete.h
        tabButton.y = autoComplete.y
        autoComplete.color = 255
          //need to set color or it wont show
        tabButton.text = 'tab   '
        // tabButton.textSize = 12
        tabButton.textColor = 255
        // tabButton.stroke = color(127,209,247)
        shortButtonImg.resize(tabButton.w*1.3, tabButton.h)
        tabButton.img = shortButtonImg
        tabButton.debug=false
  
      textCursor = new Sprite()
        textCursor.w = 1
        // textCursor.x = autoComplete.x - autoComplete.w/2 -7
        textCursor.x = autoComplete.x - autoComplete.w/2 
        textCursor.h = autoComplete.textSize
        textCursor.y = autoComplete.y
        textCursor.collider = 's'
        textCursor.stroke = 0
        textCursor.visible = true
  
      let backSpace = new Sprite()
        backSpace.w = contextQuestion1.w * 0.577
        backSpace.x = contextQuestion1.x+contextQuestion1.w/2 - autoComplete.w*0.53
        backSpace.h = contextQuestion1.h + 4
        backSpace.y = contextQuestion1.y
        backSpace.color = 255
        backSpace.stroke = backSpace.color 
        backSpace.collider = 's'
        backSpace.visible = false
  
      backSpaceExtended = new Sprite()
        backSpaceExtended.w = contextQuestion.w
        backSpaceExtended.x = contextQuestion.x-contextQuestion.w/2 + backSpaceExtended.w/2
        backSpaceExtended.h = contextQuestion.h *2
        backSpaceExtended.y = contextQuestion.y + contextQuestion.h/2
        backSpaceExtended.color = 255
        backSpaceExtended.stroke = backSpaceExtended.color 
        backSpaceExtended.collider = 's'
        backSpaceExtended.visible = false
  

  
    }
  
    type(){
      //keyCode === 9 is tab
      tabToggle = false
      
      if (keyCode === 9){
        interactionElement.visible = false
        // textCursor.x = textCursor.x+ autoComplete.w*0.39
        textCursor.x = autoComplete.x - autoComplete.w/2 + autoComplete.w*0.39
        //set in place in case they push tab twice. 
        tabToggle == true
      }
  
      //option1: can go back and forth 
      // if (keyCode === BACKSPACE){
      //   interactionElement.visible = true
      //   textCursor.x = autoComplete.x - autoComplete.w/2
      //   tabToggle = false
      // }
  
      //option 2: no outcome
      if (keyCode === BACKSPACE){
        backSpaceExtended.visible = true
        textCursor.x = contextQuestion2.x + contextQuestion2.w/2
        tabToggle = false
      }
  
      if (keyCode === 87){
        backSpaceExtended.visible = false
        interactionElement.visible = true
        textCursor.x = textCursor.x = autoComplete.x - autoComplete.w/2
        tabToggle = false
      }
  
    }
  
}
  