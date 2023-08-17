document.addEventListener('DOMContentLoaded', function() {
    fetch('https://api.github.com/users/TheManWhoLikesToCode/repos')
      .then(response => response.json())
      .then(data => {
        const projectsDiv = document.getElementById('projects');
        data.forEach(repo => {
          const projectDiv = document.createElement('div');
          projectDiv.className = 'project';
  
          const projectName = document.createElement('h2');
          projectName.textContent = repo.name;
          projectDiv.appendChild(projectName);
  
          const projectDescription = document.createElement('p');
          projectDescription.textContent = repo.description;
          projectDiv.appendChild(projectDescription);
  
          const projectLink = document.createElement('a');
          projectLink.href = repo.html_url;
          projectLink.textContent = 'View on GitHub';
          projectDiv.appendChild(projectLink);
  
          projectsDiv.appendChild(projectDiv);
        });
      })
      .catch(error => console.error('Error fetching projects:', error));
  });
  