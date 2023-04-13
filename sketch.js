
//SS1
let jira
let page, pageLine, headerLine, sideBarLine, projectLine
let toggleNewHire = false
let toggleHire1 = false
let toggleHire2 = false
let toggleAssignBox = true
let assignGroup, assignIconGroup, assignArray, assignIconArray
let newHireBox, hire1Box, hire2Box, personSelect

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

//SS3
let email 
let inboxEmailReply, replyHeading, sendHeading, inboxDividerArray
let interactionElement, textCursor, autoComplete, tabToggle, backSpaceExtended, contextQuestion2

let textHeight = 30
let numRows = 13
let pageColor = 255
let interfaceColor = 230
let interfaceColor1 = 150



function setup() {

  createCanvas(3500, 3500);

  p5.disableFriendlyErrors = true
  
  // jira = new SS1(200, 200, 1000, 700)
  // jira.openJira()
  // jira.makeTable()

  // chat = new SS2(700, 1100, 1000, 700)
  // chat.openChat()

  // email =  new SS3(1800, 50, 1100, 700)
  // email.openEmail()

}



function draw() {
  background(220);

  // jira.hired()
  // chat.infoTab()
}

function mousePressed(){
  // jira.assign()
  // chat.removeFriend()
}

function keyReleased(){
  // email.type()
}
