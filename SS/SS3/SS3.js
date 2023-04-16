

let textHeight = 30
let numRows = 13
let pageColor = 255
let interfaceColor = 230
let interfaceColor1 = 150


//SS3
let email 
let inboxEmailReply, replyHeading, sendHeading, inboxDividerArray
let interactionElement, textCursor, autoComplete, tabToggle, backSpaceExtended, contextQuestion2

let searchBar, instructionBox, closeSearch, searchBox


function setup(){
  createCanvas(windowWidth, windowHeight)

  email =  new SS3(50, 50, windowWidth*0.9, windowHeight*0.9)
  email.openEmail()

  instructionBox = new Group()
  instructionBox.collider ='s'
  instructionBox.color = 255
  instructionBox.stroke =0
  instructionBox.visible = false
  
  searchBox = new instructionBox.Sprite()
  searchBox.x = 755
  searchBox.w = 665
  searchBox.h = textHeight*1.25 + 4
  searchBox.y = 50 + searchBox.h/2 + 8
  searchBox.textColor = 0


  let currentMail = new instructionBox.Sprite()
  currentMail.w = 112.5
  currentMail.x = searchBox.x - searchBox.w/2 - currentMail.w/2 
  currentMail.h = searchBox.h
  currentMail.y = searchBox.y
  currentMail.color = 100

  let searchDropDown = new instructionBox.Sprite()
  searchDropDown.x = searchBox.x
  searchDropDown.w = searchBox.w
  searchDropDown.h = 300
  searchDropDown.y = 50 + searchDropDown.h*0.62 + 8 + 5

  let instructTextArray = []
  while (instructTextArray.length < 7){
    let instructTextBox = new instructionBox.Sprite()
    instructTextBox.w = searchDropDown.w - 4
    instructTextBox.h = textHeight *1.25 -4
    instructTextBox.x = searchDropDown.x
    instructTextBox.y = (searchDropDown.y - searchDropDown.h/2) + (instructTextBox.h * instructTextArray.length) + instructTextBox.h/2 +2
    instructTextBox.stroke = 255
    instructTextBox.textSize = 14
    instructTextBox.textColor = 0
    instructTextArray.push(instructTextBox)
  }

  instructTextArray[1].text = 'Dear User, '
  instructTextArray[2].text = 'This is an email inbox with an email draft open.'
  // instructTextArray[2].text = 'Press "tab" to accept the suggestion or "backspace" to reject the suggestion. ' 
  instructTextArray[3].text = 'Read the context about the situation provided'
  instructTextArray[4].text = ' and make a decision by interacting with'
  instructTextArray[5].text = 'your keyboard ("tab", "backspace" or "w").'

  closeSearch = new instructionBox.Sprite()
  closeSearch.w = 50 
  closeSearch.x = searchBox.x + searchBox.w/2  - closeSearch.w/2 -4
  closeSearch.h = searchBox.h -4
  closeSearch.y = searchBox.y
  closeSearch.text = 'x'
  closeSearch.stroke = 255

}

function draw(){
  background(220)

  if (searchBar.mouse.released() || searchBox.mouse.released()){
    instructionBox.visible = true
  }

  if (closeSearch.mouse.released()){
    instructionBox.visible = false
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
      
      let emailWindowTab1 = new emailSections.Sprite()
        emailWindowTab1.w = emailWindow.w 
        emailWindowTab1.x = emailWindow.x
        emailWindowTab1.h = emailWindow.h*0.075
        emailWindowTab1.y = (emailWindow.y-emailWindow.h/2) + emailWindowTab1.h/2
        emailWindowTab1.color = interfaceColor1
      
      let emailWindowTab2 = new emailSections.Sprite()
        emailWindowTab2.w = emailWindowTab1.w -2
        emailWindowTab2.x = emailWindowTab1.x
        emailWindowTab2.h = emailWindowTab1.h
        emailWindowTab2.y = (emailWindowTab1.y+emailWindowTab1.h/2) + emailWindowTab2.h/2
        emailWindowTab2.stroke = emailWindowTab2.color
      
      let sideBar = new emailSections.Sprite()
        sideBar.w = emailWindow.w*0.2 
        sideBar.x = (emailWindow.x-emailWindow.w/2) + sideBar.w/2 +2
        sideBar.h = emailWindow.h - emailWindowTab1.h - emailWindowTab2.h -2
        sideBar.y = emailWindow.y + emailWindowTab1.h
        sideBar.stroke = sideBar.color
      
      let margin = 10
      
      let inboxBar = new emailSections.Sprite()
        inboxBar.w = emailWindow.w*0.25
        inboxBar.x = (sideBar.x+sideBar.w/2) + inboxBar.w/2 + margin/2
        inboxBar.h = emailWindow.h - emailWindowTab1.h - emailWindowTab2.h
        inboxBar.y = emailWindow.y + emailWindowTab1.h
        inboxBar.color = pageColor
        inboxBar.stroke = emailSections.color
      
      let emailDraft = new emailSections.Sprite()
        emailDraft.w = emailWindow.w*0.53
        emailDraft.x = (emailWindow.x+emailWindow.w/2) - emailDraft.w/2 - margin
        emailDraft.h = emailWindow.h - emailWindowTab1.h - emailWindowTab2.h - margin
        emailDraft.y = emailWindow.y + emailWindowTab1.h - margin/2
        emailDraft.color = pageColor
  
      let emailInterface = new Group()
        emailInterface.collider = 's'
        emailInterface.color = pageColor-10
        emailInterface.stroke = emailInterface.color 
  
      searchBar = new emailInterface.Sprite()
        searchBar.w = emailWindowTab1.w*0.6
        searchBar.x = emailWindowTab1.x
        searchBar.h = emailWindowTab1.h - margin *1.5
        searchBar.y = emailWindowTab1.y
        searchBar.color = interfaceColor1+30
        searchBar.stroke = searchBar.color 

        searchBar.text = 'For help, click here!'
  
      let windowButtons = new emailInterface.Sprite()
        windowButtons.w = 60
        windowButtons.x = (emailWindow.x - emailWindow.w/2) + windowButtons.h * 0.75
        windowButtons.h = 25
        windowButtons.y = (emailWindow.y - emailWindow.h/2) + windowButtons.h
        windowButtons.color = interfaceColor1+30
        windowButtons.stroke = windowButtons.color 
  
      let windowButtons1 = new emailInterface.Sprite()
        windowButtons1.w = 60
        windowButtons1.x = (emailWindow.x + emailWindow.w/2) - windowButtons.h * 1.75
        windowButtons1.h = 25
        windowButtons1.y = (emailWindow.y - emailWindow.h/2) + windowButtons.h
        windowButtons1.color = interfaceColor1+30
        windowButtons1.stroke = windowButtons.color 
  
  
      let emailDraftTab = new emailInterface.Sprite()
        emailDraftTab.w = emailDraft.w
        emailDraftTab.x = emailDraft.x
        emailDraftTab.h = emailWindowTab2.h - margin/2
        emailDraftTab.y = emailWindowTab2.y
  
      let newMessageTab = new emailInterface.Sprite()
        newMessageTab.w = sideBar.w*0.75
        newMessageTab.x = (sideBar.x - sideBar.w/2) + newMessageTab.w/2 + margin*2
        newMessageTab.h = emailWindowTab2.h -margin/2
        newMessageTab.y = emailWindowTab2.y + margin/2
  
      let sideBarTab = new emailInterface.Sprite()
        sideBarTab.w = sideBar.w * 0.95
        sideBarTab.x = sideBar.x
        sideBarTab.h = sideBar.h * 0.96
        sideBarTab.y = sideBar.y - sideBar.h * 0.005
  
      let focusedInbox = new emailInterface.Sprite()
        focusedInbox.w = inboxBar.w
        focusedInbox.x = inboxBar.x
        focusedInbox.h = inboxBar.h* 0.125
        focusedInbox.y = (inboxBar.y - inboxBar.h/2) + focusedInbox.h/2
        focusedInbox.stroke = emailSections.color
  
  
      let inboxEmail = new Group()
        inboxEmail.collider = 's'
        inboxEmail.color = inboxBar.color
        inboxEmail.w = inboxBar.w
        inboxEmail.x = inboxBar.x
        inboxEmail.h = textHeight*1.6
  
      let inboxEmailReplyArray = []
        while (inboxEmailReplyArray.length < 3){
          inboxEmailReply = new inboxEmail.Sprite()
          inboxEmailReply.stroke = emailSections.color
          inboxEmailReply.y = ((inboxBar.y-inboxBar.h/2) + focusedInbox.h)  + inboxEmail.h/2 + (inboxEmail.h * inboxEmailReplyArray.length)
          inboxEmailReplyArray.push(inboxEmailReply)
        }
  
      inboxEmailReplyArray[1].color = 210
  
      inboxDividerArray = []
        while (inboxDividerArray.length < 6){
          let inboxDivider = new inboxEmail.Sprite()
          inboxDivider.h = 0
          inboxDivider.stroke = emailSections.color
          inboxDivider.y = (inboxEmailReply.y + inboxEmailReply.h/2) +  (textHeight * inboxDividerArray.length * 2.2)
          inboxDividerArray.push(inboxDivider)
        }
  
      let draftElements = new Group()
        draftElements.collider = 's'
        draftElements.color = 255
        draftElements.stroke = 0
  
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
        replyHeading.color=230
        replyHeading.stroke = replyHeading.color +10
        }
  
      let replyHeadingTextArray = []
        while(replyHeadingTextArray.length < 3){
          let replyHeadingText = new draftElements.Sprite()
          replyHeadingTextArray.push(replyHeadingText)
          replyHeadingText.w = draftReplyTo.w * 0.6
          replyHeadingText.x = (replyHeading.x + replyHeading.w/2) + replyHeadingText.w/2
          replyHeadingText.h = textHeight
          replyHeadingText.y = (draftReplyTo.y - draftReplyTo.h/2) + (replyHeadingTextArray.length * replyHeadingText.h) - draftReplyTo.h*0.2
          replyHeadingText.color=230
          replyHeadingText.stroke = replyHeadingText.color +10
        }
  
      let replyLine = new draftElements.Sprite()
        replyLine.w = draftReplyTo.w * 0.94
        replyLine.x = (draftReplyTo.x - draftReplyTo.w/2) + replyLine.w/2 + margin*2
        replyLine.h = 0
        replyLine.y = draftReplyTo.y - draftReplyTo.h*0.65
        replyLine.stroke = 0
  
      let draftSaved = new draftElements.Sprite()
        draftSaved.w = draftReplyTo.w * 0.3
        draftSaved.x = (draftReplyTo.x + draftReplyTo.w/2) - draftSaved.w/2 - margin*1.5
        draftSaved.h = textHeight*0.75
        draftSaved.y = emailDraft.y+emailDraft.h/2 - draftSaved.h/2 - margin
        draftSaved.color = 230
        draftSaved.stroke = draftSaved.color
  
  
      let sendHeadingArray = []
        while(sendHeadingArray.length < 3){
          sendHeading = new draftElements.Sprite()
          sendHeadingArray.push(sendHeading)
          sendHeading.w = draftHeading.w * 0.1
          sendHeading.x = (draftHeading.x - draftHeading.w/2) + sendHeading.w/2 + margin*2
          sendHeading.h = textHeight
          sendHeading.y = (draftHeading.y - draftHeading.h/2) + (sendHeadingArray.length * sendHeading.h * 1.3) 
          sendHeading.color=230
          sendHeading.stroke = sendHeading.color + 10
        }
  
      let sendHeadingLinesArray = []
        while(sendHeadingLinesArray.length < 3){
          let sendHeadingLines = new draftElements.Sprite()
          sendHeadingLinesArray.push(sendHeadingLines)
          sendHeadingLines.w = draftHeading.w * 0.75
          sendHeadingLines.x = (draftHeading.x + draftHeading.w/2) - sendHeadingLines.w/2 - margin*2
          sendHeadingLines.h = 0
          sendHeadingLines.y = (draftHeading.y - draftHeading.h/2) + (sendHeadingLinesArray.length * (textHeight) * 1.3) + textHeight*0.4
          sendHeadingLines.stroke=200
        }
  
      let textEditor = new draftElements.Sprite()
        textEditor.w = draftHeading.w * 0.94
        textEditor.x = draftHeading.x - draftHeading.w/2 + textEditor.w/2 + margin*2
        textEditor.h = sendHeading.h*1.1
        textEditor.y = draftHeading.y + draftHeading.h/2 - textEditor.h/2 
        textEditor.color = 240
        textEditor.stroke = textEditor.color
  
      let contextPlacement = new Group()
        contextPlacement.collider = 's'
        contextPlacement.color = 255
        contextPlacement.stroke = 255
        
      let contextArray = []
      let inboxTextArray = []
        while (inboxTextArray.length < 2){
          let inboxText = new contextPlacement.Sprite()
          inboxText.w = inboxBar.w -2
          inboxText.x = inboxBar.x
          inboxText.h = textHeight * 0.75 - 2
          inboxText.y = inboxDividerArray[0].y + inboxText.h/2 + (inboxText.h * (inboxTextArray.length+1))
          inboxTextArray.push(inboxText)
      }
      contextArray.push(inboxTextArray) 
  
      let inboxTextArray1 = []
        while (inboxTextArray1.length < 2){
          let inboxText1 = new contextPlacement.Sprite()
          inboxText1.w = inboxBar.w -2
          inboxText1.x = inboxBar.x
          inboxText1.h = textHeight * 0.75 -2
          inboxText1.y = inboxDividerArray[1].y + inboxText1.h/2 + (inboxText1.h * (inboxTextArray1.length+1))
          inboxTextArray1.push(inboxText1)
        }
      contextArray.push(inboxTextArray1) 
  
      let inboxTextArray2 = []
        while (inboxTextArray2.length < 2){
          let inboxText2 = new contextPlacement.Sprite()
          inboxText2.w = inboxBar.w -2
          inboxText2.x = inboxBar.x
          inboxText2.h = textHeight * 0.75 -2
          inboxText2.y = inboxDividerArray[2].y + inboxText2.h/2 + (inboxText2.h * (inboxTextArray2.length+1))
          inboxTextArray2.push(inboxText2)
        }
      contextArray.push(inboxTextArray2) 
  
      let inboxTextArray3 = []
        while (inboxTextArray3.length < 2){
          let inboxText3 = new contextPlacement.Sprite()
          inboxText3.w = inboxBar.w -2
          inboxText3.x = inboxBar.x
          inboxText3.h = textHeight * 0.75 -2
          inboxText3.y = inboxDividerArray[3].y + inboxText3.h/2 + (inboxText3.h * (inboxTextArray3.length+1))
          inboxTextArray3.push(inboxText3)
        }
      contextArray.push(inboxTextArray3) 
  
      contextArray[0][0].text = 'A teacher gave an optional assignment'
      contextArray[0][1].text = 'to conduct a social experiment '
      contextArray[1][0].text = 'outside of class with everyone '
      contextArray[1][1].text = 'for extra credit.'
      contextArray[2][0].text = 'One criteria for completion of the assignment'
      contextArray[2][1].text = 'is that everyone participated.'
      // contextArray[3][0].text = 'However, when conducting the experiment, '
      // contextArray[3][1].text = 'a few classmates were absent.'
  
      let contextQuestion = new contextPlacement.Sprite()
        contextQuestion.w = textEditor.w
        contextQuestion.x = textEditor.x
        contextQuestion.h = textHeight
        contextQuestion.y = textEditor.y + textEditor.h/2 + contextQuestion.h/2 + emailDraft.h*0.15
        contextQuestion.textSize = 15
        contextQuestion.text = 'When the teacher asked the class representative if everyone participated,'
  
      let contextQuestion1 = new contextPlacement.Sprite()
        contextQuestion1.w = textEditor.w
        contextQuestion1.x = textEditor.x
        contextQuestion1.h = textHeight
        contextQuestion1.y = textEditor.y + textEditor.h/2 + contextQuestion.h*1.5 + emailDraft.h*0.15
        contextQuestion1.textSize = 15
        contextQuestion1.text = 'should they lie and say that everyone participated?                                    '
        // contextQuestion1.color = 255
  
      contextQuestion2 = new contextPlacement.Sprite()
        contextQuestion2.w = textEditor.w
        contextQuestion2.x = textEditor.x 
        contextQuestion2.h = textHeight 
        contextQuestion2.y = textEditor.y + textEditor.h/2 + contextQuestion.h/2 + emailDraft.h*0.15 - textHeight
        contextQuestion2.textSize = 15
        contextQuestion2.text = '  However, when conducting the experiment, a few classmates were absent.'
  
  
  
      interactionElement = new Group()
        interactionElement.collider = 's'
        interactionElement.color = 255
        interactionElement.visible = true

      autoComplete = new interactionElement.Sprite()
        autoComplete.w = contextQuestion1.w * 0.577
        autoComplete.x = contextQuestion1.x+contextQuestion1.w/2 - autoComplete.w/2
        autoComplete.h = contextQuestion1.h
        autoComplete.y = contextQuestion1.y
        autoComplete.textSize = 15
        autoComplete.textColor = 200
        // autoComplete.text = 'veryone participated?                                             '
        autoComplete.text = 'veryone participated?                                                       '
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
        tabButton.text = 'tab'
        tabButton.textSize = 12
        tabButton.textColor = 200
        tabButton.stroke = 200
  
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
  