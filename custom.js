  // ANIMACIÓN MENÚ MOBILE

  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector(".nav");

  hamburger.addEventListener("click", () => {
      nav.classList.toggle("open");
  })



  const sendEmail = () => {
    window.location = "mailto:ventas@greenfield.com.mx";
 }

 const descarga = () => {

  let seconds = 3;
  const segundero = document.querySelector(".segundero");
  const download = document.querySelector(".download-link");

  let countdown = setInterval(() => {

    segundero.innerHTML = seconds;
    seconds--;

    if (seconds < 0) {
      clearInterval(countdown);
      download.click();
    }

  }, 1000);


 }