// necessário instalar o bcrypt para criptografar a senha

const bcrypt = require('bcrypt');
const pool = require('../conexao');

const cadastrarUsuarios = async (requisicao, resposta) => {
  const { nome, email, senha: senhaB } = requisicao.body;

  try {
    const emailExiste = await pool.query('select *from usuarios where email = $1', [email]);

    if (emailExiste.rowCount > 0) {
      return resposta.status(400).json({ mensagem: 'Este e-mail já esta cadastrado.' });
    }

    const senhaCriptografada = await bcrypt.hash(senhaB, 10);

    const query = `insert into usuarios (nome, email, senha) values ($1, $2, $3) returning * `

    const { rows } = await pool.query(query, [nome, email, senhaCriptografada]);

    const { senha, ...usuario } = rows[0]

    return resposta.status(201).json(usuario);

  } catch (error) {
    return resposta.status(500).json({ mensagem: error.message })
  }
}

module.exports = {
  cadastrarUsuarios
}