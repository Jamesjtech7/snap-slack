// Interactive checkboxes
document.querySelectorAll(".checkbox-item").forEach((item) => {
  item.addEventListener("click", function () {
    this.classList.toggle("checked");
  });
});

// Responsive adjustments
function handleResize() {
  // Additional responsive logic if needed
}

window.addEventListener("resize", handleResize);
handleResize(); // Initialize

document.addEventListener("DOMContentLoaded", function () {
  const mobileToggle = document.querySelector(".mobile-toggle");
  const navLinks = document.querySelector(".nav-links");
  const navItems = document.querySelectorAll(".nav-item");

  // Track currently open dropdown
  let currentOpenDropdown = null;

  // Mobile menu toggle with X animation
  mobileToggle.addEventListener("click", function () {
    this.classList.toggle("active");
    navLinks.classList.toggle("active");

    // Close all dropdowns when menu closes
    if (!navLinks.classList.contains("active")) {
      closeCurrentDropdown();
    }
  });

  // Handle clicks on nav items with dropdowns
  navItems.forEach((item) => {
    const link = item.querySelector(".nav-link");
    const dropdown = item.querySelector(".dropdown-menu");
    const dropdownIcon = item.querySelector(".dropdown-icon");

    if (dropdown) {
      // Click handler for dropdown trigger
      link.addEventListener("click", function (e) {
        // For mobile, prevent default and handle dropdown
        if (window.innerWidth <= 768) {
          e.preventDefault();
          e.stopPropagation();

          // If clicking the currently open dropdown, close it
          if (currentOpenDropdown === item) {
            closeCurrentDropdown();
            return;
          }

          // Close any open dropdown first
          closeCurrentDropdown();

          // Open the clicked dropdown
          item.classList.add("active");
          if (dropdownIcon) {
            dropdownIcon.style.transform = "rotate(180deg)";
          }
          currentOpenDropdown = item;
        }
      });
    }
  });

  // Close dropdowns when clicking outside
  document.addEventListener("click", function (e) {
    if (
      window.innerWidth <= 768 &&
      navLinks.classList.contains("active") &&
      !e.target.closest(".nav-item") &&
      !e.target.closest(".mobile-toggle")
    ) {
      closeCurrentDropdown();
    }
  });

  // Handle window resize
  window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
      mobileToggle.classList.remove("active");
      navLinks.classList.remove("active");
      closeCurrentDropdown();
      // Reset dropdown icons
      document.querySelectorAll(".dropdown-icon").forEach((icon) => {
        icon.style.transform = "rotate(0deg)";
      });
    }
  });

  // Helper function to close current dropdown
  function closeCurrentDropdown() {
    if (currentOpenDropdown) {
      currentOpenDropdown.classList.remove("active");
      const icon = currentOpenDropdown.querySelector(".dropdown-icon");
      if (icon) icon.style.transform = "rotate(0deg)";
      currentOpenDropdown = null;
    }
  }
});

