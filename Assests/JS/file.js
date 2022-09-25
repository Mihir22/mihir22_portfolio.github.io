const sendBtn = document.getElementsByClassName("btn")[0];

sendBtn.addEventListener("click", () => {
  const fullName = document.getElementById("nameZone").value;
  const email = document.getElementById("emailZone").value;
  const subject = document.getElementById("subjectZone").value;
  const message = document.getElementById("messageZone").value;

  alert("your message has been sent");
});

function formReset() {
  document.getElementById("contact-form").reset();
}