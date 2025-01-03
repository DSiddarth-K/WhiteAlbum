// Simple script to handle project category navigation
document.addEventListener("DOMContentLoaded", function() {
  const projectLinks = document.querySelectorAll("#projects .category-card");

  projectLinks.forEach(link => {
    link.addEventListener("click", function(event) {
      event.preventDefault();
      const category = link.querySelector('h3').textContent;
      loadProjectPage(category);
    });
  });

  function loadProjectPage(category) {
    let pageContent = "";
    if (category === "Web Development") {
      pageContent = `
        <h1>Web Development Projects</h1>
        <p>Details about my web development projects.</p>
      `;
    } else if (category === "App Development") {
      pageContent = `
        <h1>App Development Projects</h1>
        <p>Details about my app development projects.</p>
      `;
    } else if (category === "Graphic Design") {
      pageContent = `
        <h1>Graphic Design Projects</h1>
        <p>Details about my graphic design projects.</p>
      `;
    } else {
      pageContent = `<h1>404 - Page not found</h1>`;
    }

    // Replace content in the 'projects' section
    document.querySelector("#projects").innerHTML = pageContent;
  }
});
