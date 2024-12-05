fetch('https://insta-grama-api-780703529073.us-east1.run.app', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
  mode: 'no-cors'
})

fetch('https://insta-grama-api-780703529073.us-east1.run.app'){
  .then(response => {
    console.log(response);
    if (!response.ok) {
      throw new Error('Erro na requisição');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Erro na requisição:', error);
  })
};
async function fetchImages() {
    try {
        const response = await fetch('https://insta-grama-api-780703529073.us-east1.run.app'); // URL da API
        if (!response.ok) {
            throw new Error('Erro na requisição');
        }
        const data = await response.json();
        return data; // Certifique-se de que a função retorna os dados
    } catch (error) {
        console.error('Erro ao buscar as imagens:', error);
        return []; // Retorne um array vazio ou um valor que o código possa manipular
    }
}
