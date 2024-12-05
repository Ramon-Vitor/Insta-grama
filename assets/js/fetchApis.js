fetch('https://insta-grama-api-780703529073.us-east1.run.app', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
  mode: 'no-cors'
})

async function fetchImages() {
    try {
        const response = await fetch('https://insta-grama-api-780703529073.us-east1.run.app/posts');
        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status} - ${response.statusText}`);
        }
        const data = await response.json(); // Lê a resposta como JSON
        return data; // Retorna os dados
    } catch (error) {
        console.error('Erro ao buscar imagens:', error);
        return []; // Retorna um array vazio em caso de erro
    }
}

export default fetchImages;
