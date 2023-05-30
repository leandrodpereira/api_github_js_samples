const gitHubId = document.querySelector('input[type=text]');
const btnBuscar = document.querySelector('input[type=button]');
btnBuscar.onclick = function() {
// Fazendo a requisição GET para a API
fetch('https://api.github.com/users/' + gitHubId.value)
  .then(response => {
    // Verificando se a requisição foi bem-sucedida
    if (response.ok) {
      // Convertendo a resposta para JSON
      return response.json();
    } else {
      throw new Error('Erro na requisição.');
    }
  })
  .then(data => {
    // Tratando os dados retornados
    document.querySelector('#user').textContent = data.name;
    document.querySelector('#bio').textContent = data.bio;
    document.querySelector('#followers').textContent = data.followers;
    document.querySelector('#location').textContent = data.location;
    console.log('Nome do usuário:', data.name);
    console.log('Biografia:', data.bio);
    console.log('Número de seguidores:', data.followers);
    console.log('Localização:', data.location);    
    // ... outras informações que você queira exibir
  })
  .catch(error => {
    console.error('Ocorreu um erro:', error);
  });
}
