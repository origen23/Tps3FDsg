// Nav hamburgerburger selections
const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

// Scroll to top selection
const desplazarArriba = document.querySelector("#desplazarse-hacia-arriba");
// const scrollUp = document.querySelector("#scroll-up");

// Select nav links
const navLink = document.querySelectorAll(".nav-link");

// Hamburger menu function
burger.addEventListener("click", () => {
  ul.classList.toggle("show");
});

// Close hamburger menu when a link is clicked
navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);

// scroll to top functionality
desplazarArriba.addEventListener("click", () => {
// scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

const namet = document.querySelector("#namet");
const email = document.querySelector("#email");
const telefono = document.querySelector("#telefono");
const tipof = document.querySelector("#tipof");
const birthdate = document.querySelector("#birthdate");
const contanos = document.querySelector("#contanos");

const errornamet = document.querySelector("#error-namet");
const erroremail = document.querySelector("#error-email");
const errortelefono = document.querySelector("#error-telefono");
const errortipof = document.querySelector("#error-tipof");
const errorbirthdate = document.querySelector("#error-birthdate");
const errorcontanos = document.querySelector("#error-contanos");




if (namet && email && telefono && tipof && birthdate && contanos)  {
  formConsulta.addEventListener("submit", validarFormulario);
} else {
  console.log("error ... ");
}

function validarFormulario(event) {
  event.preventDefault();

  let validation = true;

  if (namet.value === "") {
    namet.classList.add("error");
    errornamet.textContent = "¡ Debe ingresar un nombre !";
    validation = false;
  } else {
    namet.classList.remove("error");
    errornamet.textContent = "";
  }

  if (email.value === "") {
    email.classList.add("error");
    erroremail.textContent = "¡ Debe ingresar un e-mail !";
    validation = false;
  } else {
    email.classList.remove("error");
    erroremail.textContent = "";
  }


  if (telefono.value === "") {
    email.classList.add("error");
    errortelefono.textContent = "¡ Debe ingresar un numero telefonico !";
    validation = false;
  } else {
    telefono.classList.remove("error");
    errortelefono.textContent = "";
  }

  if (tipof.value === "") {
    tipof.classList.add("error");
    errortipof.textContent = "¡ Debe seleccionar un tipo de evento !";
    validation = false;
  } else {
    tipof.classList.remove("error");
    errortipof.textContent = "";
  }


   if (birthdate.value === "") {
     birthdate.classList.add("error");
     errorbirthdate.textContent = "¡ Debe seleccionar una posible fecha para su evento";
     validation = false;
   } else {
     birthdate.classList.remove("error");
     errorbirthdate.textContent = "";
   }

   if (contanos.value === "") {
    contanos.classList.add("error");
    errorcontanos.textContent = "¡ Debe ingresar una descripción de la fiesta";
    validation = false;
  } else {
    contanos.classList.remove("error");
    errorcontanos.textContent = "";
  }


}
