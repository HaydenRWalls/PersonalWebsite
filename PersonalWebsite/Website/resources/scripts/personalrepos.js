const gitHubUsername = "HaydenRWalls";

requestUserRepos(gitHubUsername)
    .then(response => response.json())
    .then(data => {
        let table = document.getElementById('userRepos');
        table.innerHTML = "";

        if (data.message === "Not Found") {
            table.innerHTML = `
                <tr>
                    <td colspan="3"><strong>No account exists with username:</strong> ${gitHubUsername}</td>
                </tr>`;
        } else {
            table.innerHTML = `
                <tr>
                    <th>Repo</th>
                    <th>Description</th>
                    <th>URL</th>
                </tr>`;

            for (let repo of data) {
                let row = document.createElement('tr');
                row.innerHTML = `
                    <td>${repo.name}</td>
                    <td>${repo.description || "No description provided"}</td>
                    <td><a href="${repo.html_url}" target="_blank">${repo.html_url}</a></td>
                `;
                table.appendChild(row);
            }
        }
    });

function requestUserRepos(username) {
    return Promise.resolve(fetch(`https://api.github.com/users/${username}/repos`));
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }