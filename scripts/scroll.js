gsap.registerPlugin(ScrollTrigger);
const jjlbBtn = document.getElementById("jjlbBtn");
const jjlbDesc = document.getElementById("jjlbDesc");
const jaBtn = document.getElementById("jaBtn");
const jaDesc = document.getElementById("jaDesc");
const slBtn = document.getElementById("slBtn");
const slDesc = document.getElementById("slDesc");
const cvBtn = document.getElementById("cvBtn");
const cvDesc = document.getElementById("cvDesc");

const compsContent = document.getElementById("compsContent");
const compsBtnRight = document.getElementById("compsBtnRight");
const compsBtnLeft = document.getElementById("compsBtnLeft");

const teamContent = document.getElementById("teamContent");
const teamBtnRight = document.getElementById("teamBtnRight");
const teamBtnLeft = document.getElementById("teamBtnLeft");

let idx = 0;

compsBtnRight.addEventListener("click", () => {
  idx++;
  if (idx > 4) {
    idx = 0;
  } else if (idx < 0) {
    idx = 4;
  }
  compsContent.style.transform = `translateX(-${idx * 33}rem)`;
});
compsBtnLeft.addEventListener("click", () => {
  idx--;

  if (idx > 4) {
    idx = 0;
  } else if (idx < 0) {
    idx = 4;
  }
  compsContent.style.transform = `translateX(-${idx * 33}rem)`;
});

let idx2 = 0;
teamBtnRight.addEventListener("click", () => {
  idx2++;
  if (idx2 > 3) {
    idx2 = 0;
  } else if (idx2 < 0) {
    idx2 = 3;
  }
  teamContent.style.transform = `translateX(-${idx2 * 30}rem)`;
});
teamBtnLeft.addEventListener("click", () => {
  idx2--;

  if (idx2 > 3) {
    idx2 = 0;
  } else if (idx2 < 0) {
    idx2 = 3;
  }
  teamContent.style.transform = `translateX(-${idx2 * 30}rem)`;
});

jjlbBtn.addEventListener("click", () => {
  jaDesc.classList.remove("active");
  slDesc.classList.remove("active");
  cvDesc.classList.remove("active");

  jaBtn.classList.remove("active");
  slBtn.classList.remove("active");
  cvBtn.classList.remove("active");

  jjlbDesc.classList.add("active");
  jjlbBtn.classList.add("active");

  jjlbDesc.scrollIntoView({ behavior: "smooth", block: "end" });
});
jaBtn.addEventListener("click", () => {
  jjlbDesc.classList.remove("active");
  slDesc.classList.remove("active");
  cvDesc.classList.remove("active");

  jjlbBtn.classList.remove("active");
  slBtn.classList.remove("active");
  cvBtn.classList.remove("active");

  jaDesc.classList.add("active");
  jaBtn.classList.add("active");
  jaDesc.scrollIntoView({ behavior: "smooth", block: "end" });
});
slBtn.addEventListener("click", () => {
  jjlbDesc.classList.remove("active");
  jaDesc.classList.remove("active");
  cvDesc.classList.remove("active");

  jjlbBtn.classList.remove("active");
  jaBtn.classList.remove("active");
  cvBtn.classList.remove("active");

  slDesc.classList.add("active");
  slBtn.classList.add("active");
  slDesc.scrollIntoView({ behavior: "smooth", block: "end" });
});
cvBtn.addEventListener("click", () => {
  jjlbDesc.classList.remove("active");
  jaDesc.classList.remove("active");
  slDesc.classList.remove("active");

  jjlbBtn.classList.remove("active");
  jaBtn.classList.remove("active");
  slBtn.classList.remove("active");

  cvDesc.classList.add("active");
  cvBtn.classList.add("active");
  cvDesc.scrollIntoView({ behavior: "smooth", block: "end" });
});

gsap.to(".menu", {
  backgroundColor: "rgb(187, 187, 187)",
  color: "white",
  padding: "1rem 0",
  duration: 3,
  scrollTrigger: {
    trigger: "header",
    start: "bottom 30%",
    end: "bottom 30%",
    scrub: 1,
  },
});
