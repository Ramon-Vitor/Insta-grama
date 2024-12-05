fetch('https://insta-grama-api-780703529073.us-east1.run.app', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
  mode: 'no-cors'
})

fetch('https://insta-grama-api-780703529073.us-east1.run.app')
  .then(response => response.json())
  .then(data => processData(data))  // Certifique-se de que processData é uma função válida
  .catch(error => console.error(error));
someObject.someMethod().then(anotherMethod());

.then(response => {
  console.log(response);
  if (!response.ok) {
    throw new Error('Erro na requisição: ' + response.status);
  }
  return response.json();
})
.then(data => console.log(data))
.catch(error => {
  console.error('Erro ao fazer requisição:', error);
});
