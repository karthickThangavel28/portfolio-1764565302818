fetch("data.json")
  .then(res => res.json())
  .then(data => {

    document.getElementById("nav-name").innerText = data.name;
    document.getElementById("name").innerText = data.name;
    document.getElementById("title").innerText = data.title;
    document.getElementById("about").innerText = data.about;
    document.getElementById("profileImage").src = data.profileImage;

    // Skills
    const skillsDiv = document.getElementById("skills-list");
    data.skills.forEach(skill => {
      const span = document.createElement("span");
      span.innerText = skill;
      skillsDiv.appendChild(span);
    });

    // Projects
    const projectDiv = document.getElementById("projects");

    data.projects.forEach(project => {
      projectDiv.innerHTML += `
        <div class="project-card">
          <img src="${project.image}">
          <div>
            <h3>${project.name}</h3>
            <p>${project.description}</p>
            <a href="${project.github}" target="_blank">View Source</a>
          </div>
        </div>
      `;
    });

    // Socials
    document.getElementById("github").href = data.socials.github;
    document.getElementById("linkedin").href = data.socials.linkedin;

  });
