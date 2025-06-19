const steps = document.querySelectorAll(".circle");
const forms = document.querySelectorAll(".form-step");
const nextBtns = document.querySelectorAll(".next-btn");

function showStep(stepNum) {
  forms.forEach(f => f.classList.remove("active"));
  steps.forEach(s => s.classList.remove("active"));

  document.querySelector(`#step-${stepNum}`).classList.add("active");
  document.querySelector(`.circle[data-step="${stepNum}"]`).classList.add("active");
}

steps.forEach(circle => {
  circle.addEventListener("click", () => {
    const step = circle.getAttribute("data-step");
    showStep(step);
  });
});

nextBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const next = btn.getAttribute("data-next");
    showStep(next);
  });
});
