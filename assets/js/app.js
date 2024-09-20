// window.addEventListener("DOMContentLoaded", () => {
//   const menuBtn = document.querySelector("#menu-btn");
//   const dropDown = document.querySelector("#drop-down");
//   menuBtn.addEventListener("click", () => {
//     dropDown.classList.toggle("hidden");
//     dropDown.classList.toggle("flex");
//   });
// });


const navmenu = () => {
  document.getElementById("mobile_view").classList.toggle("max-lg:top-0");
  document.getElementById("mobile_view").classList.toggle("max-lg:left-0");
  document.getElementById("nav_line_1").classList.toggle("rotate-45");
  document.getElementById("nav_line_2").classList.toggle("-rotate-45");
  document
    .getElementById("nav_line_out_side")
    .classList.toggle("translate-x-6");
  document.body.classList.toggle("overflow-hidden");
};
