document.querySelector('#fetchBtn').addEventListener('click', async () => {
    const username = document.querySelector('#usernameInput').value.trim();
    if(username.length === 0){
      alert("Empty");
      return;
    }
    const resultDiv = document.querySelector('#result');
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();
    console.log(data)

    resultDiv.innerHTML = 
    `
    <img src="${data.avatar_url}" />
    <p>My Name Is ${data.name}<p/>
    <p>I Am ${data.bio}<p/>
    <p>I Complated ${data.public_repos} Projects <p/>
    <p>You can see on GitHub: <a href="${data.html_url}" target="_blank">${data.html_url} </a></p>
    <p>I Am From ${data.location} <p/>
    `

  });
  