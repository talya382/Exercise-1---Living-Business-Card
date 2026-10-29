// Exercise 1 - Live Business Card
// Write all your code in this file. Read README.md for the full instructions.
// Run the tests with: npm test


// Step 1: live text (name, job, email, bio -> card), trimmed, default text when empty


const nameInput = document.getElementById("name-input");
const cardName = document.getElementById("card-name");


const avatar = document.getElementById("avatar");


nameInput.addEventListener("input", (e) => {
  const value = e.target.value.trim()
  cardName.textContent = value || "Your name"
  avatar.textContent = value.length > 0 ? value.charAt(0).toUpperCase() : "?";
});


const jobInput = document.getElementById("job-input");
const cardJob = document.getElementById("card-job");
jobInput.addEventListener("input", (e) => {
  cardJob.textContent = e.target.value.trim() || "Your job title"
});


const emailInput = document.getElementById("email-input");
const cardemail = document.getElementById("card-email");
emailInput.addEventListener("input", (e) => {
  cardemail.textContent = e.target.value.trim() || "your@email.com";
});


const bioInput = document.getElementById("bio-input");
const cardBio = document.getElementById("card-bio");
const bioleft = document.getElementById("bio-left");
const counterDiv = document.querySelector(".counter");


bioInput.addEventListener("input", (e) => {
  cardBio.textContent = e.target.value.trim() || "Your bio will appear here.";
  const charsLeft = 80 - e.target.value.length;
  bioleft.textContent = charsLeft;


  if (charsLeft <= 10) {
    counterDiv.classList.add("warning");
  } else {
    counterDiv.classList.remove("warning");
  }
});
// Step 2: avatar letter (first letter of the name in uppercase, "?" when empty)


// Step 3: bio character counter + "warning" class when 10 or fewer are left


// Step 4: accent color (card border + avatar background)
const colorSelect = document.getElementById("color-select");
const card = document.getElementById("card");


colorSelect.addEventListener("change", (e) => {
  const selectedColor = e.target.value;


  card.style.borderColor = selectedColor;
  avatar.style.backgroundColor = selectedColor;
});
// Step 5: dark mode button
const darkbutton = document.getElementById("theme-btn");
darkbutton.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    darkbutton.textContent = "Light mode";
  } else {
    darkbutton.textContent = "Dark mode";
  }
});
// Step 6: reset button
const resetbutton = document.getElementById("reset-btn");
resetbutton.addEventListener("click", () => {
  nameInput.value = "";
  jobInput.value = "";
  emailInput.value = "";
  bioInput.value = "";


  cardName.textContent = "Your name";
  cardJob.textContent = "Your job title";
  cardemail.textContent = "your@email.com";
  cardBio.textContent = "Your bio will appear here.";


  avatar.textContent = "?";


  bioleft.textContent = "80";
  counterDiv.classList.remove("warning");


  colorSelect.value = "#4f46e5";
  card.style.borderColor = "";
  avatar.style.backgroundColor = "";
});