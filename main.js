const leftButton = document.getElementById("leftButton");
const rightButton = document.getElementById("rightButton");
const leftTextInput = document.getElementById("leftTextInput");
const rightTextInput = document.getElementById("rightTextInput");
const center = document.getElementById("center");

function addMessage(text, sender, nextSender) {
  if (text === '') {
    return
  }
  const messageBox = document.createElement("div");
  const delButton = document.createElement("div");
  const messageText = document.createElement("div");
  const timeStamp = document.createElement('div');
  const n = new Date();
  const date = n.toDateString();
  const time = n.toLocaleTimeString();

  messageBox.className = sender + "MessageBox";
  delButton.className = sender + "DelButton";
  messageText.className = sender + "MessageText";
  timeStamp.className = sender + "TimeStamp";

  messageText.textContent = text;
  delButton.textContent = "🗑️";
  timeStamp.textContent = date + ', ' + time;

  messageBox.appendChild(delButton);
  messageBox.appendChild(messageText);
  messageBox.appendChild(timeStamp);

  center.appendChild(messageBox);

  (eval(sender + 'TextInput')).value = '';
 
  document.getElementById(nextSender + 'TextInput').focus();
  function removeMessage() {
    center.removeChild(messageBox)
  }
  delButton.addEventListener('click', removeMessage)
}
function newLeftMessage() {
  addMessage(leftTextInput.value, 'left', 'right')
}
function newRightMessage() {
  addMessage(rightTextInput.value, 'right', 'left')
}
function enterLeft(event) {
  //mirror.textContent = 'last pressed keyCode: ' + event.keyCode
  if (event.keyCode === 13) {
    newLeftMessage()
  }
}
function enterRight(event) {
  if (event.keyCode === 13) {
    newRightMessage()
  }
}
leftTextInput.addEventListener('keyup', enterLeft);
rightTextInput.addEventListener('keyup', enterRight);
leftButton.addEventListener('click', newLeftMessage);
rightButton.addEventListener('click', newRightMessage);
