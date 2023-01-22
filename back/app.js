const express = require('express');
const app = express();
const morgan = require('morgan')
const bodyparser = require('body-parser');




//routes
// const rotaProdutos = require('./routes/produtos');
// const rotaPedidos = require('./routes/pedidos')
const rotaFuncionarios = require('./routes/funcionarios')
const rotaCargos = require('./routes/cargos')
const rotaCargoFuncionario = require('./routes/cargo_funcionario')

app.use(morgan('dev'))
//body-parser
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());
//cors
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, PATCH, DELETE, OPTIONS"
    );
    next();
  });


app.use('/funcionarios', rotaFuncionarios)
app.use('/cargos', rotaCargos)
app.use('/cargoFuncionario', rotaCargoFuncionario)



app.use((req, res, next) => {
    const erro = new Error('Rota Não Encontrada ou conexão falhou');
    erro.status = 404;
    next(erro)
});

app.use((error, req, res,next) => {
    res.status(error.status|| 500)
    return res.send({
        erro:{
            message:error.message
        }
    })
})



module.exports = app;