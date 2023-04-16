
let textHeight = 30
let numRows = 13
let pageColor = 255
let interfaceColor = 230
let interfaceColor1 = 150


//SS1
let jira
let page, pageLine, headerLine, sideBarLine, projectLine
let toggleNewHire = false
let toggleHire1 = false
let toggleHire2 = false
let toggleAssignBox = true
let assignGroup, assignIconGroup, assignArray, assignIconArray
let newHireBox, hire1Box, hire2Box, personSelect

let projectMembers, instructionBox, searchBox, closeSearch

let searchPerson



function setup(){
  createCanvas(windowWidth, windowHeight)

  jira = new SS1(200, 50, 1000, 700)
  jira.openJira()
  jira.makeTable()

  instructionBox = new Group()
  instructionBox.collider = 's'
  instructionBox.color = 230
  instructionBox.visible = false

  searchBox = new Sprite()
  searchBox.w = 200
  searchBox.x = 570
  searchBox.h = textHeight
  searchBox.y = 230
  searchBox.color = 245
  searchBox.stroke = searchBox.color
  searchBox.textSize = 10
  searchBox.collider = 's'
  searchBox.text = 'For help, click here!                 '

  let searchDropDown = new instructionBox.Sprite()
  searchDropDown.w = searchBox.w
  searchDropDown.x = searchBox.x
  searchDropDown.h = 150
  searchDropDown.y = searchBox.y + searchBox.h/2 + searchDropDown.h/2 +5
  searchDropDown.color = 245
  searchDropDown.stroke = searchDropDown.color

  let instructTextArray = []
  while (instructTextArray.length < 7){
    let instructTextBox = new instructionBox.Sprite()
    instructTextBox.w = searchDropDown.w
    instructTextBox.x = searchDropDown.x
    instructTextBox.h = textHeight
    instructTextBox.y = (searchDropDown.y - searchDropDown.h/2) + instructTextBox.h/2 + (instructTextBox.h * instructTextArray.length)
    instructTextBox.stroke = instructTextBox.color
    instructTextBox.textSize = 12
    instructTextBox.textColor = 0
    instructTextArray.push(instructTextBox)
  }

  instructTextArray[0].text = 'Hello! '
  instructTextArray[1].text = 'This is a table used to manage'
  instructTextArray[2].text = 'subtasks within a project.'
  instructTextArray[3].text = 'Read the context about the situation'
  instructTextArray[4].text = 'provided and make a decision by'
  instructTextArray[5].text = 'interacting with the'
  instructTextArray[6].text = 'drop down menu.'


  closeSearch = new instructionBox.Sprite()
  closeSearch.w = 50 
  closeSearch.x = searchBox.x + searchBox.w/2  - closeSearch.w/2 -4
  closeSearch.h = searchBox.h -4
  closeSearch.y = searchBox.y
  closeSearch.text = 'x'
  closeSearch.stroke = 255


  assignIconGroup.overlap(assignGroup)
  
  newHireBox.y = assignArray[7].y + 7
  newHireBox.w = assignGroup.w -10

  noCursor()
  agent = new Sprite(width/2, height/2, 20)
  agent.color =255
  // agent.text = 'agent'
  agent.visible = true
  agent.color = 0
  cameraMan = new Sprite(width/2, height/2, 25)
  cameraMan.color = 200
  cameraMan.text = 'camera man'
  cameraMan.visible = false

  camera.x = width/2
  camera.y = height/2


}

function draw(){
  background(220)

  if (searchBox.mouse.released()){
    instructionBox.visible = true
  }
  if (closeSearch.mouse.released()){
    instructionBox.visible = false
  }


  cameraMan.x = mouseX
  cameraMan.y = mouseY

  camera.x = cameraMan.x
  camera.y = cameraMan.y
  
  correctionX = map (mouseX, 0, width, (0-width/2), (width + width/2))
  correctionY = map (mouseY, 0, height, (0-height/2), (height+ height/2))

  agent.x = correctionX
  agent.y = correctionY


  if (assignArray[4].mouse.released() || searchPerson.mouse.released()){
    toggleAssignBox = !toggleAssignBox
  }
 
  if (!toggleAssignBox){
    personSelect.visible = false
    assignIconArray[12].visible = false
    assignIconArray[13].visible = false
    assignIconArray[14].visible = false
  }
  if(toggleAssignBox){
    personSelect.visible = true
    assignIconArray[12].visible = true
    assignIconArray[13].visible = true
    assignIconArray[14].visible = true
  } 

  newHireBox.color = 255
  hire1Box.color = 255
  hire2Box.color = 255

  if (newHireBox.mouse.hovering()) newHireBox.color = interfaceColor;
  if (hire1Box.mouse.hovering()) hire1Box.color = interfaceColor;
  if (hire2Box.mouse.hovering()) hire2Box.color = interfaceColor;

  if(newHireBox.mouse.released()){
    assignIconArray[3].color = assignIconArray[11].color
    assignArray[4].text = 'new hire'
    toggleAssignBox = !toggleAssignBox
  }
  if(hire1Box.mouse.released()){
    assignIconArray[3].color = assignIconArray[10].color
    assignArray[4].text = 'hire 1'
    toggleAssignBox = !toggleAssignBox
  }
  if(hire2Box.mouse.released()){
    assignIconArray[3].color = assignIconArray[12].color
    assignArray[4].text = 'hire 2'
    toggleAssignBox = !toggleAssignBox
  }




}



function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


class SS1{
    constructor(x, y, w, h){
      //now i can use corner as origin when calling this class
      this.x = x 
      this.y = y 
      this.w = w
      this.h = h
    }
    
    openJira(){
      page = new Sprite(this.x, this.y, this.w, this.h)
      page.x = this.x + this.w/2
      page.y = this.y + this.h/2
      page.w = this.w
      page.h = this.h
      page.collider='s'
      page.color=255
      page.stroke=0
      page.layer = 1
  
      pageLine = new Group()
        pageLine.collider = 's'
        pageLine.stroke = interfaceColor
        pageLine.layer = 2
      
        //Header Tab Elements
        headerLine = new pageLine.Sprite()
          headerLine.x = page.x
          headerLine.y = page.y - page.h/2 + 50
            // headerLine.y = page.y - page.h/2 + page.h*.07
          headerLine.h = 1
          headerLine.w = page.w -4
  
          let topBar = new Group()
          topBar.collider = 's'
          topBar.color = interfaceColor
          topBar.stroke = topBar.color
          topBar.y = headerLine.y - 25
          topBar.h = textHeight * 0.75
          
          let siteIcon = new topBar.Sprite()
            siteIcon.x = (page.x - page.w/2) + (page.w*0.03)
            siteIcon.w = min(page.w * 0.025, page.h * 0.045)
            siteIcon.h = siteIcon.w 
          let siteLogo = new topBar.Sprite()
            siteLogo.w = page.w * 0.25
            siteLogo.x = siteIcon.x + siteIcon.w/2 + siteLogo.w/2 + page.w*0.015
          let siteTabs = new topBar.Sprite()
            siteTabs.w = page.w * 0.3
            siteTabs.x = siteLogo.x + siteLogo.w/2 + siteTabs.w/2 + page.w*0.015
          let searchAccount = new topBar.Sprite()
            searchAccount.w = page.w * 0.3
            searchAccount.x = (page.x + page.w/2) - (searchAccount.w/2) - (page.w*0.015)
  
        //Side Tab Elements
        sideBarLine = new pageLine.Sprite()
          sideBarLine.x = (page.x-page.w/2) + page.w*0.25
          sideBarLine.h = page.h - (headerLine.y - (page.y - page.h/2))
          sideBarLine.y = (page.y - page.h/2)+ sideBarLine.h/2 + (headerLine.y - (page.y - page.h/2))
          sideBarLine.w = 1
  
          let sideBar = new Group()
            sideBar.collider = 's'
            sideBar.w = headerLine.w / 5
            sideBar.x = (page.x - page.w/2) + (sideBar.w * 0.6)
            sideBar.h = 1
            sideBar.color = interfaceColor
            sideBar.stroke = sideBar.color 
      
          let sideBarProjects = new sideBar.Sprite ()
            sideBarProjects.h = page.h * 0.05
            sideBarProjects.y = (page.y-page.h/2) + (headerLine.y - (page.y-page.h/2)) + sideBarProjects.h/2 + 25
          let sideBarList = new sideBar.Sprite()
            sideBarList.h = textHeight* 8
            sideBarList.y = (sideBarProjects.y + sideBarProjects.h) + sideBarList.h/2
          let feedback = new sideBar.Sprite()
            feedback.h = textHeight* 1.5
            feedback.y = (sideBarLine.y + (sideBarLine.h/2)) - (feedback.h/2) - 30
  
        //Project Elements
        projectLine = new pageLine.Sprite()
          projectLine.y = (page.y-page.h/2) + (headerLine.y - (page.y-page.h/2)) *3
          projectLine.h = 1
          projectLine.w = page.w - (sideBarLine.x - (page.x-page.w/2)) - page.w*0.03
          projectLine.x = sideBarLine.x + projectLine.w/2 + page.w*0.015 
  
          let project = new Group()
            project.collider = 's'
            project.color = interfaceColor
            project.stroke = project.color
          
          let projectTabs = new project.Sprite()
            projectTabs.y = projectLine.y - 25
            projectTabs.w = projectLine.w
            projectTabs.x = projectLine.x
            projectTabs.h = textHeight * 0.75
     
          let projectTitle = new project.Sprite()
            projectTitle.y = projectLine.y - (textHeight * 2.25)
            projectTitle.h = textHeight*1.25
            projectTitle.w = projectLine.w * 0.3
            projectTitle.x = (projectLine.x - projectLine.w/2) + (projectTitle.w/2)
  
          projectMembers = new project.Sprite()
            projectMembers.y = projectLine.y + textHeight
            projectMembers.h = textHeight * 1.25
            projectMembers.w = projectLine.w * 0.4
            projectMembers.x = (projectLine.x - projectLine.w/2) + (projectMembers.w/2)

            
          let projectSettings = new project.Sprite()
            projectSettings.y = projectLine.y + textHeight
            projectSettings.h = textHeight * 1.25
            projectSettings.w = projectLine.w * 0.4
            projectSettings.x = (projectLine.x + projectLine.w/2 ) - (projectSettings.w/2)
  
    }
  
    makeTable(){
      let table = new Group()
      table.collider='s'
      table.color = interfaceColor
      table.stroke = interfaceColor
      table.strokeWeight=0.5
      table.layer = 2
  
      let tableRowEnd = new table.Sprite()
      tableRowEnd.x = projectLine.x - projectLine.w*0.05
      tableRowEnd.y = (projectLine.y - projectLine.h/2)+ (textHeight*1.75) + (textHeight*(13))
      tableRowEnd.w = projectLine.w * 0.85
      tableRowEnd.h = 0
  
      while (table.length<(numRows-1)){
        let tableRow = new table.Sprite()
        tableRow.w = projectLine.w * 0.85
        tableRow.h = 0
        tableRow.y = (projectLine.y - projectLine.h/2)+ (textHeight*1.75) + (textHeight*(table.length))
        // tableRow.x = projectLine.x - projectLine.w*0.05
        tableRow.x = (projectLine.x - projectLine.w/2) + tableRow.w/2 + projectLine.w*0.025
  
      }
  
      let tableCreateButton = new table.Sprite()
        tableCreateButton.h = textHeight * 0.75
        tableCreateButton.y = (projectLine.y - projectLine.h/2)+ (textHeight*1.75) + (textHeight*(13)) + tableCreateButton.h/2 + (textHeight*0.25)
        tableCreateButton.w = projectLine.w * 0.1
        tableCreateButton.x = (projectLine.x - projectLine.w/2) + (tableCreateButton.w/2) + projectLine.w*0.025
  
      let tableColm = new Group()
        tableColm.collider='s'
        tableColm.color=interfaceColor
        tableColm.stroke=interfaceColor
        tableColm.strokeWeight=0.5
        tableColm.layer= 3
  
        tableColm.w = 1
        tableColm.h = textHeight*(numRows-1)
        tableColm.y = (page.y-page.h/2) + (projectLine.y - (page.y-page.h/2)) + textHeight*2.75 + tableColm.h/2 
  
        let colmKey = new tableColm.Sprite()
          colmKey.x = (projectLine.x - projectLine.w/2) + projectLine.w*0.1
        let colmSum = new tableColm.Sprite()
          colmSum.x = ((projectLine.x - projectLine.w/2) + projectLine.w*0.1) + projectLine.w*0.3
        let colmStat = new tableColm.Sprite()
          colmStat.x = ((projectLine.x - projectLine.w/2) + projectLine.w*0.1 + projectLine.w*0.3) + projectLine.w*0.135
        let colmAssign = new tableColm.Sprite()
          colmAssign.x = (((projectLine.x - projectLine.w/2) + projectLine.w*0.1 + projectLine.w*0.3) + projectLine.w*0.135) + projectLine.w*0.21
  
      let summaryGroup = new Group()
        summaryGroup.color = 255
        summaryGroup.stroke = 255
        summaryGroup.collider = 's'
        summaryGroup.layer = 1
      let summaryArray = []
      while (summaryArray.length< (numRows-1)){
        let summaryText = new summaryGroup.Sprite()
        summaryArray.push(summaryText)
        summaryText.w = colmSum.x - colmKey.x
        summaryText.x = colmSum.x - (summaryText.w /2)
        summaryText.h = textHeight
        summaryText.y = (page.y-page.h/2) + (projectLine.y - (page.y-page.h/2)) + textHeight*2.75 + (textHeight*summaryArray.length) - summaryText.h/2
      }
      summaryArray[0].text='Summary'
  
      assignGroup = new Group()
        assignGroup.color = 255
        assignGroup.stroke = 255
        assignGroup.collider = 's'
        assignGroup.layer = 1
        assignGroup.w = colmAssign.x - colmStat.x
        assignGroup.h = textHeight
        assignGroup.x = colmAssign.x - (assignGroup.w /2)
      assignArray = []
      while (assignArray.length< (numRows-1)){
        let assignText = new assignGroup.Sprite()
        assignArray.push(assignText)
        assignText.w = colmAssign.x - colmStat.x
        assignText.h = textHeight
        assignText.x = colmAssign.x - (assignText.w /2)
        assignText.y = (page.y-page.h/2) + (projectLine.y - (page.y-page.h/2)) + textHeight*2.75 + (textHeight*assignArray.length) - assignText.h/2
      }
      assignArray[0].text='Assignee'
  
      assignIconGroup = new Group()
      assignIconGroup.color = 'white'
      assignIconGroup.collider = 's'
      assignIconGroup.layer = 3
      
      assignIconArray = []
        while (assignIconArray.length<(numRows+2)){
        let assignIconText = new assignIconGroup.Sprite()
        assignIconArray.push(assignIconText)
        assignIconText.d = textHeight*0.85
        assignIconText.x = colmStat.x + 25
        assignIconText.y = (page.y-page.h/2) + (projectLine.y - (page.y-page.h/2)) + textHeight*2.75 + (textHeight*assignIconArray.length) - assignIconText.r*1.15
      }
        
        assignIconArray[0].visible = false
        // assignIconArray[3].visible = false
        // assignIconArray[4].visible = false
        // assignIconArray[6].visible = false
        // assignIconArray[7].visible = false
  
    //drop down menu
    personSelect = new Group()
      personSelect.color=255
      personSelect.stroke=0
      personSelect.collider = 's'
      personSelect.layer = 4
  
    let dropDownBox = new personSelect.Sprite()  
      dropDownBox.x = assignArray[4].x
      dropDownBox.y = assignArray[6].y + (textHeight/2)
      dropDownBox.w = colmAssign.x - colmStat.x
      dropDownBox.h = (textHeight * 5) + (textHeight/2)
      dropDownBox.color = 255
  
    searchPerson = new personSelect.Sprite()
    searchPerson.x = assignArray[4].x
    searchPerson.y = assignArray[4].y
    searchPerson.w = colmAssign.x - colmStat.x
    searchPerson.h = textHeight
    searchPerson.layer = 5
    searchPerson.color = 210
    searchPerson.textColor = 0
    searchPerson.text = 'Search for a person...      '
  
    let instructionBox = new personSelect.Sprite()
      instructionBox.x = assignArray[4].x
      instructionBox.y = assignArray[5].y
      instructionBox.w = (colmAssign.x - colmStat.x)- 8
      instructionBox.h = textHeight - 8
      instructionBox.layer = personSelect.layer + 1
      instructionBox.color = 255
      instructionBox.stroke = instructionBox.color 
      instructionBox.textSize = 10
      instructionBox.text = 'Select one or more person'
  
    newHireBox = new personSelect.Sprite()
      newHireBox.x = assignArray[4].x
      newHireBox.y = assignArray[7].y + 7
      newHireBox.w = (colmAssign.x - colmStat.x)- 12
      newHireBox.h = textHeight + 5
      newHireBox.color = 255
      newHireBox.stroke = 255
      newHireBox.layer = 5
      newHireBox.text = 'new hire'
      assignIconArray[13].layer = 6
      assignIconArray[13].y = assignIconArray[7].y +7
  
    hire1Box = new personSelect.Sprite()
      hire1Box.x = assignArray[4].x
      hire1Box.y = assignArray[6].y + 3
      hire1Box.w = (colmAssign.x - colmStat.x) - 12
      hire1Box.h = textHeight + 5
      hire1Box.color = 255
      hire1Box.stroke = 255
      hire1Box.layer = 5
      hire1Box.text = 'hire 1'
      assignIconArray[12].layer = 6
      assignIconArray[12].y = assignIconArray[6].y +3
  
    hire2Box = new personSelect.Sprite()
      hire2Box.x = assignArray[4].x
      hire2Box.y = assignArray[8].y + 10
      hire2Box.w = (colmAssign.x - colmStat.x)- 12
      hire2Box.h = textHeight + 5
      hire2Box.color = 255
      hire2Box.stroke = 255
      hire2Box.layer = 5
      hire2Box.text = 'hire 2'
      assignIconArray[14].layer = 6
      assignIconArray[14].y = assignIconArray[8].y +10
  
    //situation context
    for(let i=0; i<10; i++){
      summaryArray[i].x = summaryArray[i].x+20
    }
      summaryArray[2].text = 'Another team member has just been added to a project.'
      summaryArray[3].text = 'The new member is very skilled and can help the team meet'
      summaryArray[4].text = 'their goals and deadlines in a faster and more efficient way.'
      summaryArray[5].text = 'However, to do so, the amount of work they must do is'
      summaryArray[6].text = 'significantly greater than that of the other team members.'
      summaryArray[7].text = 'Yet, due to their capabilities, they will be able to'
      summaryArray[8].text = 'handle the amount of tasks given. '
      summaryArray[9].text = 'Should the team leader assign the new member such tasks?'
  
    }
  
  }