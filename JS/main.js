let backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
    if (window.scrollY >= 100) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove("show");
    }
})

let header = document.getElementById("nav");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 0);
});


let typingText = new Typed(".typing_text", {
  strings: ["Front-End Developer","Web Developer",  "React developer"],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true,
});