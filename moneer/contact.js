document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    
    // Simulate success
    document.getElementById("successMessage").classList.remove("hidden");
  
    // Reset the form
    document.getElementById("contactForm").reset();
  });
  const toggle = document.getElementById("menu-toggle");
  const nav = document.querySelector(".navbar");

  toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
  });

  function scrollToContact() {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  }

fetch("footer.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("footer-placeholder").innerHTML = data;
  });



