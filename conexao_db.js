const Sequelize = require('sequelize')
const sequelize = new Sequelize('softex', 'miguel', '123456', {
    dialect: 'mysql',
    host: 'localhost',
})

sequelize.authenticate()
    .then(() => {
        console.log('Você se conectou com sucesso ao banco de dados!')
    })
    .catch(e => {
        console.log('Houve um erro na conexão com o banco de dados, por favor, tente novamente')
    });

module.exports = sequelize;