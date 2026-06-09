
const btn = document.getElementById("progressBtn");
const circle = document.querySelector(".progress-ring");

const radius = 27;
const circumference = 2 * Math.PI * radius;

circle.style.strokeDasharray = circumference;
circle.style.strokeDashoffset = circumference;

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;

  const height =
    document.documentElement.scrollHeight -
    window.innerHeight;

  const progress = scrollTop / height;

  circle.style.strokeDashoffset =
    circumference - progress * circumference;

  if (scrollTop > 300) {
    btn.classList.add("show");
  } else {
    btn.classList.remove("show");
  }
});

btn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
