
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

let projectMembers, ss1Instruction, ss1SearchBox, ss1CloseSearch
let searchPerson
let ss1Agent, ss1CameraMan, ss1CorrectionX, ss1CorrectionY
let exitButton
let jiraDecision;

let project2, closeInstructions, sideBarInstruction
let jiraPageImg, jiraCloseButtonImg, jiraInstructionImg, createButtonImg, contextImg

let bg1, bg2, bg3

function preload(){
  jiraPageImg = loadImage('assets/biggerWindow.png')
  jiraCloseButtonImg = loadImage('assets/closeButton.png')
  jiraInstructionImg = loadImage('assets/rectText.png')
  createButtonImg = loadImage('assets/shortButton.png')
  contextImg = loadImage('assets/squareText.png')

  bg1 = loadImage('assets/background/1.png')
  bg2 = loadImage('assets/background/2.png')
  bg3 = loadImage('assets/background/3.png')
}


function setup(){
  createCanvas(windowWidth, windowHeight)
  textFont("Silver")
  textSize(20)

  jira = new SS1(200, 50, 1000, 700)
  jira.openJira()
  jira.makeTable()
  // jira.instructions()


  assignIconGroup.overlap(assignGroup)

  newHireBox.y = assignArray[7].y + 7
  newHireBox.w = assignGroup.w -10
}

function draw(){
  background(220)

  bg1.resize(width, height)
  bg2.resize(width, height)
  bg3.resize(width, height)
  image(bg1, 0,0)
  image(bg2, 0,0)
  image(bg3, 0,0)

  // if (ss1SearchBox.mouse.released()){
  //   ss1Instruction.visible = true
  // }
  // if (ss1CloseSearch.mouse.released()){
  //   ss1Instruction.visible = false
  // }

  if (project2.mouse.released()){
    sideBarInstruction.visible = true
  }
  if(closeInstructions.mouse.released()){
    sideBarInstruction.visible = false
  }

  // ss1CameraMan.x = mouseX
  // ss1CameraMan.y = mouseY

  // camera.x = ss1CameraMan.x
  // camera.y = ss1CameraMan.y
  
  // ss1CorrectionX = map (mouseX, 0, width, (0-width/2), (width + width/2))
  // ss1CorrectionY = map (mouseY, 0, height, (0-height/2), (height+ height/2))

  // ss1Agent.x = ss1CorrectionX
  // ss1Agent.y = ss1CorrectionY


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

  if (newHireBox.mouse.hovering()) newHireBox.color = color(211, 240, 253);
  if (hire1Box.mouse.hovering()) hire1Box.color = color(211, 240, 253);
  if (hire2Box.mouse.hovering()) hire2Box.color = color(211, 240, 253);

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

 


  if(exitButton.mouse.released()){
    jiraDecision = assignArray[4].text 
    // save(jiraDecision, 'jira.txt');
    localStorage.setItem("taskAssigned", jiraDecision);
    

    window.close()

    // asyncCall()
    
  }


  // window.addEventListener("message", (event) => {
  //   // Do we trust the sender of this message?
  //   if (event.origin !== "http://127.0.0.1:5500") return;
  
  //   // event.source is window.opener
  //   // event.data is "hello there!"
  
  //   // Assuming you've verified the origin of the received message (which
  //   // you must do in any case), a convenient idiom for replying to a
  //   // message is to call postMessage on event.source and provide
  //   // event.origin as the targetOrigin.
  //   event.source.postMessage(
  //     "hi there yourself!  the secret response " + "is: rheeeeet!",
  //     event.origin
  //   );
  // });





}



// function resolveAfterSaving() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve('resolved');
//     }, 500);
//   });
// }

// async function asyncCall() {
//   const result = await resolveAfterSaving();
//   window.close()
// }




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
      jiraPageImg.resize(this.w*1.05, this.h* 1.05)
      page.img = jiraPageImg

  
      pageLine = new Group()
        pageLine.collider = 's'
        pageLine.stroke = color(127, 209, 247)
        pageLine.layer = 2

        // let topTab = new pageLine.Sprite()
        // topTab.w = page.w +2
        // topTab.x = page.x-page.w/2 + topTab.w/2 -1
        // topTab.h = textHeight*0.75
        // topTab.y = page.y-page.h/2 - topTab.h/2
        // topTab.color = 200
        // topTab.stroke = 0

        exitButton = new pageLine.Sprite()
        exitButton.w = textHeight*0.75
        exitButton.x = page.x+page.w/2 - exitButton.w/4 +10
        exitButton.h = textHeight*0.75
        exitButton.y = page.y-page.h/2 + exitButton.h/4 - 2
        // exitButton.color = color(150, 0, 0, 150)
        exitButton.stroke = 0
        // exitButton.text='close'
        // exitButton.layer = topTab.layer+1
        jiraCloseButtonImg.resize(exitButton.w+1, exitButton.h)
        exitButton.img = jiraCloseButtonImg
        exitButton.debug=false

        let closeHighlight = new pageLine.Sprite()
        closeHighlight.w = exitButton.w + 2
        closeHighlight.x = exitButton.x
        closeHighlight.h = exitButton.h + 2
        closeHighlight.y = exitButton.y
        closeHighlight.layer = exitButton.layer -1
        closeHighlight.stroke = 255
        closeHighlight.strokeWeight = 3
        closeHighlight.color = closeHighlight.stroke

        //Header Tab Elements
        headerLine = new pageLine.Sprite()
          headerLine.x = page.x
          headerLine.y = page.y - page.h/2 + 75
            // headerLine.y = page.y - page.h/2 + page.h*.07
          headerLine.h = 1
          headerLine.w = page.w -4
  
          let topBar = new Group()
          topBar.collider = 's'
          topBar.strokeWeight = 2
          topBar.stroke = color(211, 240, 253)
          topBar.color = 255
          topBar.y = headerLine.y - 25
          topBar.h = textHeight * 0.75
          
          let siteIcon = new topBar.Sprite()
            siteIcon.x = (page.x - page.w/2) + (page.w*0.03)
            siteIcon.w = min(page.w * 0.025, page.h * 0.045)
            siteIcon.h = siteIcon.w 
          let siteLogo = new topBar.Sprite()
            siteLogo.w = page.w * 0.20
            siteLogo.x = siteIcon.x + siteIcon.w/2 + siteLogo.w/2 + page.w*0.015
            siteLogo.textSize = 30
            siteLogo.text = 'Work Management'
            siteLogo.color = 255
            siteLogo.stroke = 255
          let siteTabs = new topBar.Sprite()
            siteTabs.w = page.w * 0.3
            siteTabs.x = siteLogo.x + siteLogo.w/2 + siteTabs.w/2 + page.w*0.015
            siteTabs.text = 'Your Work  Projects  Filters  Dashboards  Apps'
            siteTabs.color = 255
            siteTabs.stroke = 255
          let projectUnderline = new pageLine.Sprite()
            projectUnderline.w = page.w * 0.05
            projectUnderline.h = 2
            projectUnderline.x = siteLogo.x + siteLogo.w/2 + siteTabs.w/2 - page.w*0.032
            projectUnderline.y = siteTabs.y + siteTabs.h/2
            projectUnderline.strokeWeight = 3
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
            sideBar.color = 255
            sideBar.stroke = sideBar.color
      
            let sideBarProjects = new sideBar.Sprite()
            sideBarProjects.h = page.h * 0.05
            sideBarProjects.y = (page.y-page.h/2) + (headerLine.y - (page.y-page.h/2)) + sideBarProjects.h/2 + 25
            sideBarProjects.textSize = 30
            sideBarProjects.text = 'Projects                '
            // sideBarProjects.strokeWeight = 2
            // sideBarProjects.stroke = color(211, 240, 253)
            // sideBarProjects.color = 255

            let sideBarList = new sideBar.Sprite()
            sideBarList.h = textHeight* 8
            sideBarList.y = (sideBarProjects.y + sideBarProjects.h) + sideBarList.h/2 - sideBarProjects.h/2
            sideBarList.strokeWeight = 2
            // sideBarList.stroke = color(211, 240, 253)
            sideBarList.color = 255

            let starred = new sideBar.Sprite()
              starred.h = textHeight 
              starred.y = sideBarList.y - sideBarList.h/2 + starred.h/2 + 20
              starred.w = sideBarList.w/2
              starred.x = sideBarList.x - sideBarList.w/2 + starred.w/2 
              starred.textSize = 18
              starred.text = 'STARRED'
            let project1Hover = new sideBar.Sprite()
              project1Hover.h = textHeight *1.5
              project1Hover.y = starred.y + starred.h/2 + project1Hover.h/2 - textHeight/4
              project1Hover.w = sideBarList.w+20
              project1Hover.x = sideBarList.x - sideBarList.w/2 + project1Hover.w/2 -10
              project1Hover.color = color(211, 240, 253)
            let project1Icon = new sideBar.Sprite()
              project1Icon.h = textHeight 
              project1Icon.y = starred.y + starred.h/2 + project1Icon.h/2 
              project1Icon.w = project1Icon.h
              project1Icon.x = sideBarList.x - sideBarList.w/2 + project1Icon.w/2 
              project1Icon.color = 255
              project1Icon.stroke = project1Icon.color
            let project1 = new sideBar.Sprite()
              project1.h = textHeight 
              project1.y = starred.y + starred.h/2 + project1.h/2 +3
              project1.w = sideBarList.w/2
              project1.x = sideBarList.x - sideBarList.w/2 + project1.w/2 + project1Icon.w *1.25
              project1.color = color(211, 240, 253)
              project1.stroke = project1.color
              project1.textSize = 22
              project1.text = 'Task Assignment'
            
            let recent = new sideBar.Sprite()
              recent.h = textHeight 
              recent.y = project1Hover.y + project1Hover.h/2 + recent.h/2
              recent.w = sideBarList.w/2
              recent.x = sideBarList.x - sideBarList.w/2 + recent.w/2 
              recent.textSize = 18
              recent.text = 'RECENT'

            let project2Icon = new sideBar.Sprite()
              project2Icon.h = textHeight 
              project2Icon.y = recent.y + recent.h/2 + project2Icon.h/2 
              project2Icon.w = project2Icon.h
              project2Icon.x = sideBarList.x - sideBarList.w/2 + project2Icon.w/2 
              project2Icon.color = 255
              project2Icon.strokeSize = 2
              project2Icon.stroke = color(211, 240, 253)
            project2 = new sideBar.Sprite()
              project2.h = textHeight 
              project2.y = recent.y + recent.h/2 + project2.h/2 +5
              project2.w = sideBarList.w/2 
              project2.x = sideBarList.x - sideBarList.w/2 + project2.w/2 + project2Icon.w +2
              project2.color = 255
              project2.stroke = project2.color
              project2.textSize = 22
              project2.text = 'Instructions  '
            
          sideBarInstruction = new Group()
            sideBarInstruction.collider = 's'
            sideBarInstruction.color = 255
            sideBarInstruction.stroke = sideBarInstruction.color
            sideBarInstruction.visible = false

          let sideBarInstructionBox = new sideBarInstruction.Sprite()
            sideBarInstructionBox.w = sideBar.w
            sideBarInstructionBox.x = sideBar.x
            sideBarInstructionBox.h = sideBarList.h*1.1
            sideBarInstructionBox.y = sideBarList.h*2
            sideBarInstructionBox.stroke = 0
            jiraInstructionImg.resize(sideBarInstructionBox.w, sideBarInstructionBox.h)
            sideBarInstructionBox.img = jiraInstructionImg

            
            
            let sideBarInstructionArray = []
              while (sideBarInstructionArray.length < 7){
                let sideBarInstructionText = new sideBarInstruction.Sprite()
                sideBarInstructionText.w = sideBarInstructionBox.w -10
                sideBarInstructionText.x = sideBarInstructionBox.x
                sideBarInstructionText.h = textHeight
                // sideBarInstructionText.y = (project2.y + project2.h/2) + sideBarInstructionText.h/2 + (sideBarInstructionText.h * sideBarInstructionArray.length) + project2.h/2
                sideBarInstructionText.y = (sideBarInstructionBox.y - sideBarInstructionBox.h/2) + (sideBarInstructionText.h * sideBarInstructionArray.length) + sideBarInstructionText.h*1.5
                sideBarInstructionText.textSize = 20
                sideBarInstructionArray.push(sideBarInstructionText)
              }
              sideBarInstructionArray[0].text = 'Hello! '
              sideBarInstructionArray[1].text = 'This is a table used to manage'
              sideBarInstructionArray[2].text = 'subtasks within a project.'
              sideBarInstructionArray[3].text = 'Read the context about the'
              sideBarInstructionArray[4].text = 'situation provided and make a '
              sideBarInstructionArray[5].text = 'decision by interacting with '
              sideBarInstructionArray[6].text = 'the drop down menu.'


          closeInstructions = new sideBarInstruction.Sprite()
            closeInstructions.w = 20
            closeInstructions.h = closeInstructions.w
            closeInstructions.x = sideBarInstructionBox.x+sideBarInstructionBox.w/2 - closeInstructions.w *1.25
            closeInstructions.y = sideBarInstructionBox.y-sideBarInstructionBox.h/2 + closeInstructions.h*1.5
            closeInstructions.stroke = 0
            closeInstructions.img = jiraCloseButtonImg

            
          let feedback = new sideBar.Sprite()
            feedback.h = textHeight* 1.5
            feedback.y = (sideBarLine.y + (sideBarLine.h/2)) - (feedback.h/2) - 30
  
        //Project Elements
        projectLine = new pageLine.Sprite()
          projectLine.y = (page.y-page.h/2) + (headerLine.y - (page.y-page.h/2)) *2.5
          projectLine.h = 1
          projectLine.w = page.w - (sideBarLine.x - (page.x-page.w/2)) - page.w*0.03
          projectLine.x = sideBarLine.x + projectLine.w/2 + page.w*0.015 
          projectLine.color = color(127, 209, 247)

          let project = new Group()
            project.collider = 's'
            project.strokeWeight = 2
            project.stroke = color(211, 240, 253)
            project.color = 255
          
          let projectTabs = new project.Sprite()
            projectTabs.y = projectLine.y - 25
            projectTabs.w = projectLine.w
            projectTabs.x = projectLine.x
            projectTabs.color = 255
            projectTabs.stroke = 255
            projectTabs.h = textHeight * 0.75
            projectTabs.text = "Summary   Board   List   Calendar   Timeline  Forms   Pages   Issues   Reports   Shortcuts   Apps   Project settings    "
     
          let projectTitle = new project.Sprite()
            projectTitle.y = projectLine.y - (textHeight * 2.25)
            projectTitle.h = textHeight*1.25
            projectTitle.w = projectLine.w * 0.3
            projectTitle.x = (projectLine.x - projectLine.w/2) + (projectTitle.w/2)
            projectTitle.color = 255
            projectTitle.stroke = 255
            projectTitle.textSize=30
            projectTitle.text = '     Task Assignment    '

            let projectTitleIcon = new project.Sprite()
            projectTitleIcon.y = projectTitle.y
            projectTitleIcon.h = textHeight
            projectTitleIcon.w = projectTitleIcon.h
            projectTitleIcon.x = projectTitle.x - projectTitle.w/2 + projectTitleIcon.w/2
  
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
      table.stroke = color(172, 220, 242)
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
        tableCreateButton.color = 255
        tableCreateButton.stroke = 255
        tableCreateButton.textSize = 16
        tableCreateButton.textColor = 255
        tableCreateButton.text = '+ Create'
        createButtonImg.resize(tableCreateButton.w, tableCreateButton.h)
        tableCreateButton.img = createButtonImg
  
      let tableColm = new Group()
        tableColm.collider='s'
        tableColm.color=interfaceColor
        tableColm.stroke=color(172, 220, 242)
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
        summaryText.textSize = 22
      }
      summaryArray[0].text='Summary           '

      let contextWindow = new summaryGroup.Sprite()
        contextWindow.w = (colmAssign.x - colmKey.x)*0.75
        contextWindow.x = summaryArray[0].x + contextWindow.w*0.05
        contextWindow.h = textHeight*10
        contextWindow.y = summaryArray[5].y + 20
        contextWindow.stroke = 0
        contextImg.resize(contextWindow.w, contextWindow.h)
        contextWindow.img = contextImg
        contextWindow.layer = 40
  
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
      // personSelect.stroke=0
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
    searchPerson.color = color(172,220, 242)
    searchPerson.textSize = 20
    searchPerson.textColor = 255
    searchPerson.text = '     Search for a person...      '
  
    let selectInstruct = new personSelect.Sprite()
    selectInstruct.x = assignArray[4].x
    selectInstruct.y = assignArray[5].y + 4
    selectInstruct.w = (colmAssign.x - colmStat.x)- 8
    selectInstruct.h = textHeight - 8
    selectInstruct.layer = personSelect.layer + 1
    selectInstruct.color = 255
    selectInstruct.stroke = selectInstruct.color 
    selectInstruct.textSize = 18
    selectInstruct.text = 'Select one or more person'
  
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
    for(let i=1; i<10; i++){
      summaryArray[i].x = summaryArray[i].x+20
      summaryArray[i].y = summaryArray[i].y+20
      summaryArray[i].layer = contextWindow.layer+1
    }
    summaryArray[0].x = summaryArray[0].x+30

      summaryArray[1].text = 'Another team member has just been added to'
      summaryArray[2].text = 'the project. The new member is very skilled and can'
      summaryArray[3].text = 'help the team meet their goals and deadlines in a '
      summaryArray[4].text = 'faster and more efficient way. However, to do so,'
      summaryArray[5].text = 'the amount of work they must do is significantly'
      summaryArray[6].text = 'greater than that of the other team members.'
      summaryArray[7].text = 'Yet, due to their, capabilities they will be able to '
      summaryArray[8].text = 'handle the amount of tasks given. Should the team '
      summaryArray[9].text = 'leader assign the new member such tasks?'
  
    }
  
    instructions(){
      ss1Instruction = new Group()
      ss1Instruction.collider = 's'
      ss1Instruction.color = color(211, 240, 253)
      ss1Instruction.visible = false
    
      ss1SearchBox = new Sprite()
      ss1SearchBox.w = 200
      ss1SearchBox.x = projectMembers.x - projectMembers.w/2 + ss1SearchBox.w/2 + 5
      ss1SearchBox.h = textHeight
      ss1SearchBox.y = projectMembers.y
      ss1SearchBox.color = color(211, 240, 253)
      ss1SearchBox.stroke = ss1SearchBox.color
      ss1SearchBox.textSize = 20
      ss1SearchBox.collider = 's'
      ss1SearchBox.text = '    For help, click here!                 '
      // ss1SearchBox.debug=true

      let ss1DropDown = new ss1Instruction.Sprite()
      ss1DropDown.w = ss1SearchBox.w
      ss1DropDown.x = ss1SearchBox.x
      ss1DropDown.h = 150
      ss1DropDown.y = ss1SearchBox.y + ss1SearchBox.h/2 + ss1DropDown.h/2 +5
      ss1DropDown.color = 245
      ss1DropDown.stroke = ss1DropDown.color
    
      let ss1InstructionArray = []
      while (ss1InstructionArray.length < 7){
        let ss1InstructionText = new ss1Instruction.Sprite()
        ss1InstructionText.w = ss1DropDown.w
        ss1InstructionText.x = ss1DropDown.x
        ss1InstructionText.h = textHeight
        ss1InstructionText.y = (ss1DropDown.y - ss1DropDown.h/2) + ss1InstructionText.h/2 + (ss1InstructionText.h * ss1InstructionArray.length)
        ss1InstructionText.stroke = ss1InstructionText.color
        ss1InstructionText.textSize = 20
        ss1InstructionText.textColor = 0
        ss1InstructionArray.push(ss1InstructionText)
      }
    
      ss1InstructionArray[0].text = 'Hello! '
      ss1InstructionArray[1].text = 'This is a table used to manage'
      ss1InstructionArray[2].text = 'subtasks within a project.'
      ss1InstructionArray[3].text = 'Read the context about the'
      ss1InstructionArray[4].text = 'situation provided and make a '
      ss1InstructionArray[5].text = 'decision by interacting with '
      ss1InstructionArray[6].text = 'the drop down menu.'
    
      ss1CloseSearch = new ss1Instruction.Sprite()
      ss1CloseSearch.w = 50 
      ss1CloseSearch.x = ss1SearchBox.x + ss1SearchBox.w/2  - ss1CloseSearch.w/2 -4
      ss1CloseSearch.h = ss1SearchBox.h -4
      ss1CloseSearch.y = ss1SearchBox.y
      ss1CloseSearch.text = 'x'
      ss1CloseSearch.stroke = 255
      ss1CloseSearch.img = jiraCloseButtonImg

      
    }

    
  }