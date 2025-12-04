
    function togglePortfolio() {
      const more = document.getElementById("more-items");
      const btn = document.querySelector(".toggle-btn");
      if (more.style.display === "none" || more.style.display === "") {
        more.style.display = "grid";
        btn.textContent = "See Less";
      } else {
        more.style.display = "none";
        btn.textContent = "See More";
      }
    }
  
    