const leftButton = document.getElementById("leftButton")
const rightButton = document.getElementById("rightButton")
const leftTextInput = document.getElementById("leftTextInput")
const rightTextInput = document.getElementById("rightTextInput");
const center = document.getElementById("center")
const mirror = document.getElementById('mirror')

function addMessage(text, sender){ 
  if(text === '') {
    return
  }
  const MessageBox = document.createElement("div");
  const DelButton = document.createElement("div");
  const MessageText = document.createElement("div");  
  const TimeStamp = document.createElement('div');

  MessageBox.className = sender + "MessageBox"
  DelButton.className = sender + "DelButton"
  MessageText.className = sender + "MessageText"
  TimeStamp.className = sender + "TimeStamp"

  MessageText.textContent = text
  DelButton.textContent = "🗑️"
  TimeStamp.textContent = "10/26/19 9:04am"

  MessageBox.appendChild(DelButton)
  MessageBox.appendChild(MessageText)
  MessageBox.appendChild(TimeStamp)

  center.appendChild(MessageBox); 

  DelButton.addEventListener('click', removeMessage)
  function removeMessage(){
    center.removeChild(MessageBox)
}
}
function newLeftmessage() {
    addMessage(leftTextInput.value, 'left')
    leftTextInput.value = '';
}
function newRightmessage(){  
  addMessage(rightTextInput.value, 'right')
  rightTextInput.value = '';
}

function enterLeft(event) {
  mirror.textContent = 'last pressed keyCode: ' + event.keyCode
  if (event.keyCode === 13) {
    NewLeftmessage() 
  }
}
function enterRight (event){
  if (event.keyCode ===13) {
    newRightmessage()
  }
}

leftTextInput.addEventListener('keyup', enterLeft)
rightTextInput.addEventListener('keyup', enterRight)

leftButton.addEventListener('click', newLeftmessage);
rightButton.addEventListener('click', newRightmessage)
