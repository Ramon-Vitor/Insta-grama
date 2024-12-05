fetch('https://insta-grama-api-780703529073.us-east1.run.app', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    // Adicione outros cabeçalhos, se necessário
  },
    mode: 'no-cors'
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Erro ao fazer requisição:', error));
