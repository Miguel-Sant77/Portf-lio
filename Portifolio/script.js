const username = "Miguel-Sant77"; // Substitua pelo seu nome de usuário no GitHub
const projectsContainer = document.getElementById("projects");

// Função para buscar repositórios
async function fetchRepos() {
  try {
    const response = await fetch(`https://api.github.com/users/${Miguel-sant77}/repos`);
    const repos = await response.json();

    projectsContainer.innerHTML = ""; // Limpar o placeholder

    repos.forEach(repo => {
      const projectCard = document.createElement("div");
      projectCard.className = "project";

      projectCard.innerHTML = `
        <h3>${repo.name}</h3>
        <p>${repo.description || "Sem descrição disponível"}</p>
        <a href="${repo.html_url}" target="_blank">Ver no GitHub</a>
      `;

      projectsContainer.appendChild(projectCard);
    });
  } catch (error) {
    projectsContainer.innerHTML = "<p>Erro ao carregar projetos. Tente novamente mais tarde.</p>";
    console.error("Erro ao buscar repositórios:", error);
  }
}

// Chamar a função ao carregar a página
fetchRepos();
