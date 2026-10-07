document.addEventListener("DOMContentLoaded", function() {

    // 1. MOBILE MENU DRAWER CONTROLLER
    const hamburger = document.getElementById("hamburgerMenu");
    const navMenu = document.getElementById("navMenu");

    if (hamburger && navMenu) {
        hamburger.addEventListener("click", function() {
            navMenu.classList.toggle("active");
            const icon = hamburger.querySelector("i");
            if (navMenu.classList.contains("active")) {
                icon.className = "fas fa-times";
            } else {
                icon.className = "fas fa-bars";
            }
        });
    }

    // Auto close drawer menu when navigation points are clicked
    const navLinks = document.querySelectorAll(".nav-menu a");
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
            const hamburgerIcon = hamburger.querySelector("i");
            if(hamburgerIcon) hamburgerIcon.className = "fas fa-bars";
            
            navLinks.forEach(nav => nav.classList.remove("active"));
            link.classList.add("active");
        });
    });


    // 2. ACADEMIC ADMISSIONS TAB SYSTEM
    const tabButtons = document.querySelectorAll(".tab-btn");
    const tabContents = document.querySelectorAll(".tab-content");

    tabButtons.forEach(button => {
        button.addEventListener("click", () => {
            const targetTab = button.getAttribute("data-tab");

            tabButtons.forEach(btn => btn.classList.remove("active"));
            tabContents.forEach(content => content.classList.remove("active"));

            button.classList.add("active");
            const structuralTarget = document.getElementById(targetTab);
            if(structuralTarget) structuralTarget.classList.add("active");
        });
    });


    // 3. SECURE INTERACTION DISPATCH OVERRIDES
    const portalForm = document.getElementById("portalForm");
    if (portalForm) {
        portalForm.addEventListener("submit", function(e) {
            e.preventDefault();
            alert("St. Andrew's College Portal: Verified handshake request sent.\nDatabase integration ready for linkage to the Wakiso SACS data framework.");
        });
    }

    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function(e) {
            e.preventDefault();
            const name = document.getElementById("contactName").value;
            const info = document.getElementById("contactInfo").value;
            
            if (name && info) {
                alert(`Inquiry Confirmed!\nThank you ${name}. The administration desk at St. Andrew's College Ssanda will contact you via ${info} regarding vacancies.`);
                contactForm.reset();
            }
        });
    }
});