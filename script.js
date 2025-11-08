const toggle = document.getElementById('theme-toggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  toggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

// Typing Effect (Placeholder)
const texts = ["Web Developer", "JavaScript Lover", "Tech Explorer"];
let index = 0;
let char = 0;
const typingTarget = document.querySelector("#typing-text span");

function typeText() {
  if (char < texts[index].length) {
    typingTarget.textContent += texts[index].charAt(char);
    char++;
    setTimeout(typeText, 100);
  } else {
    setTimeout(eraseText, 1500);
  }
}

function eraseText() {
  if (char > 0) {
    typingTarget.textContent = texts[index].substring(0, char - 1);
    char--;
    setTimeout(eraseText, 50);
  } else {
    index = (index + 1) % texts.length;
    setTimeout(typeText, 500);
  }
}

document.addEventListener("DOMContentLoaded", typeText);





// contact  start

const phoneInput = document.getElementById("phone");

phoneInput.addEventListener("input", function () {
  if (!phoneInput.value.startsWith("+91 ")) {
    const input = phoneInput.value.replace(/[^0-9]/g, "");
    phoneInput.value = "+91 " + input;
  } else {
    const onlyNumbers = phoneInput.value.slice(4).replace(/[^0-9]/g, "");
    phoneInput.value = "+91 " + onlyNumbers;
  }
});

phoneInput.addEventListener("keydown", function (e) {
  const pos = phoneInput.selectionStart;
  if ((e.key === "Backspace" || e.key === "Delete") && pos <= 4) {
    e.preventDefault();
  }

  if (e.key === "ArrowLeft" && pos <= 4) {
    e.preventDefault();
  }
});

phoneInput.addEventListener("focus", () => {
  setTimeout(() => {
    phoneInput.setSelectionRange(phoneInput.value.length, phoneInput.value.length);
  }, 0);
});

window.addEventListener("DOMContentLoaded", () => {
  if (!phoneInput.value.startsWith("+91 ")) {
    phoneInput.value = "+91 ";
  }
});



function moveCursorToEnd(input) {
  const val = input.value;
  input.value = '';
  input.value = val;
}

function submitForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("gmail").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const message = document.getElementById("message").value.trim();
  const submitBtn = document.getElementById("submitBtn");

  if (name === "" || email === "" || phone === "" || message === "") {
    alert("Please fill all the details before submitting.");
    return;
  }

  submitBtn.textContent = "Submitted ✅";
  submitBtn.style.backgroundColor = "green";
  submitBtn.style.pointerEvents = "none";
}

function resetForm() {
  document.getElementById("name").value = "";
  document.getElementById("gmail").value = "";
  document.getElementById("phone").value = "+91 ";
  document.getElementById("message").value = "";

  const submitBtn = document.getElementById("submitBtn");
  submitBtn.textContent = "Submit";
  submitBtn.style.backgroundColor = "teal";
  submitBtn.style.pointerEvents = "auto"; // 
}

function moveCursorToEnd(input) {
  const value = input.value;
  input.value = "";
  input.value = value;
}