// ========== MENU BAR TOGGLE ==========
const navMenu = document.getElementById("nav_menu"),
  navToggle = document.getElementById("nav_toggle"),
  navClose = document.getElementById("nav_close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show_menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show_menu");
  });
}

// this function will make the anchored link be a pop-up window.
function newWindow() {
  const windowPop = window.open(
    "https://danemaas.github.io/MyResume/",
    "pop-up",
    "width=814, height=960"
  );
}

// ========== CONTACT ME EMAIL SENDING SCRIPT ==========
const contactForm = document.getElementById("contact_form"),
  contactMessage = document.getElementById("contact_msg");

const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_10mzhyp",
      "template_kodiowk",
      "#contact_form",
      "QemH39hUwGl242MUc"
    )
    .then(
      () => {
        contactMessage.textContent = "Message sent successfully ✅";

        setTimeout(() => {
          contactMessage.textContent = "";
        }, 5000);

        contactForm.reset();
      },
      () => {
        contactMessage.textContent = "Message not sent (service error) ❌";
      }
    );
};

contactForm.addEventListener("submit", sendEmail);

// ========== AUTO-HIDE MENU BAR ==========

// ========== SCROLL UP BUTTON ==========

// ========== other additional ideas for functionality/effects ==========
