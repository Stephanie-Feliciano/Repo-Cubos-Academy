const { getCityFromZipcode, getStateFromZipcode } = require('utils-playground');

getCityFromZipcode('03281000').then(cidade => {
    console.log(cidade);
}).catch((erro) => {
    console.log(erro.menssage)
;});


getStateFromZipcode('03281000').then(uf => {
    console.log(uf);
});

// const cidade = getCityFromZipcode('03281000');

// sincrono e assincrono (async e await)

(async function () {
    const cidade = await getCityFromZipcode('03281000');
    
    console.log(cidade);

    const estado = await getStateFromZipcode('03281000');
    console.log(estado);
});

//padrão simplificado

const testeSimplificado = async () => {

}

console.log(testeSimplificado);