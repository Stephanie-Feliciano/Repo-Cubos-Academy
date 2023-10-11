const express = require('express');
const { getCityFromZipcode, getPackageDescriptionNpm } = require('utils-playground');

const app = express();

app.get('/', async (requisicao, resposta) => {
    const cidade1 = getCityFromZipcode('03281000');

    const cidade2 = getCityFromZipcode('41256250');

    const promise = await Promise.all([cidade1, cidade2]);
    
    resposta.send(`A cidade encontrada foi: ${promise}`);
});

app.get('/pacote/:nomePacote', async (requisicao, resposta) => {
    const { nomePacote } = requisicao.params;

    const descricaoPacote = await getPackageDescriptionNpm(nomePacote);

    return resposta.send(descricaoPacote);
});

app.listen(3000);

