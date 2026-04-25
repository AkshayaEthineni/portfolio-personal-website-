fetch("https://portfolio-backend-hbji.onrender.com/projects")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("projects");

    container.innerHTML = ""; // clear old content

    data.forEach(p => {
      const div = document.createElement("div");

      div.innerHTML = `
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
      `;

      container.appendChild(div);
    });
  })
  .catch(err => console.log(err));