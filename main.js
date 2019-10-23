const leftButton = document.getElementById("lButton")
const rightButton = document.getElementById("rButton")
const ltxt = document.getElementById("ltxt")
const rtxt = document.getElementById("rtxt");
const center = document.getElementById("center")
const mirror = document.getElementById('mirror')

let lastMessage

function addMessage(text, sender){ 
  if(text === '') {
    return
  }
  const newLi = document.createElement("div")
  newLi.textContent = text
  newLi.className = sender + 'Message'
  function showAlert() {
    newLi.innerHTML = "123"
    center.removeChild(lastMessage)
  }
  newLi.addEventListener('click', showAlert)
  center.appendChild(newLi);
  lastMessage = newLi
}

function newLmessage() {
    addMessage(ltxt.value, 'left')
    ltxt.value = ''
}

function newRmessage() {
  const newLi = document.createElement("div");
  const rtext = document.createTextNode(rtxt.value)

  newLi.className = "rightMessage";
  newLi.appendChild(rtext)
  document.getElementById("center").appendChild(newLi)
  
}

function updateMirror(event) {
  mirror.textContent = 'last pressed keyCode: ' + event.keyCode
  if (event.keyCode === 90) {
    // do something
  }
}

ltxt.addEventListener('keyup', updateMirror)

leftButton.addEventListener('click', newLmessage)
rightButton.addEventListener('click', newRmessage)