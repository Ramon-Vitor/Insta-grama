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
        const response = await fetch('https://insta-grama-api-780703529073.us-east1.run.app');
        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status} - ${response.statusText}`);
        }
        const data = await response.json();
        return data; // Retorna os dados recebidos
    } catch (error) {
        console.error('Erro ao buscar imagens:', error);
        return []; // Retorna um array vazio em caso de erro
    }
}

export default fetchImages;
