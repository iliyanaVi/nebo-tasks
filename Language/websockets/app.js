const socket = io("ws://localhost:3500");

function sendMessage(e) {
  e.preventDefault();
  let input = document.getElementById("input");
  if (input.value) {
    socket.emit("message", input.value);
    input.value = "";
  }
  input.focus();
}

document.getElementById("form").addEventListener("submit", sendMessage);
socket.on("connect", (data) => {
  console.log(data);

  console.log("Connected to server");
});

//Listen for messages
socket.on("message", (data) => {
  let messages = document.getElementById("messages");
  messages.innerHTML += `<li>${data}</li>`;
  messages.scrollTop = messages.scrollHeight;
});

function setActive() {
  if (document.querySelector(".side-section-item.active")) {
    document
      .querySelector(".side-section-item.active")
      .classList.remove("active");
  } else {
    document.querySelector(".side-section-item").classList.add("active");
  }
}
