const abt = document.getElementById("about");
const skill = document.getElementById("skills");
const contact = document.getElementById("contact");

const alldivs = document.querySelectorAll(".content-div");
const abt_div = document.getElementById("about_div");
const skill_div = document.getElementById("skills_div");
const contact_div = document.getElementById("contact_div");

abt_div.classList.add("visible");

function hideAll() {
  alldivs.forEach((div) => {
    div.classList.remove("visible");
  });
}

abt.addEventListener("click", (e) => {
  hideAll();
  abt_div.classList.add("visible");
});
skill.addEventListener("click", (e) => {
  hideAll();
  skill_div.classList.add("visible");
});
contact.addEventListener("click", (e) => {
  hideAll();
  contact_div.classList.add("visible");
});
