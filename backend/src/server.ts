import express from 'express';
import'express-async-errors';

import path from 'path';

import cors from 'cors';

import './database/connection';
import errorHandler from './errors/hunlder';

import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(errorHandler);
app.listen(3333, () => console.log('servidor iniciado...'));


//Semântica - significado de cada methodo
//Rota = conjunto
//Recurso = usuario

//Methods HTTP = GET/POST/PUT/DELETE

//Prametros

//serve pra busca ou para filtro o queryparams
//Query Params: http://localhost:3333/user?search=kaio


//serve pra identicar um recurso exemplo: user com id ='1'
//Route Params: http://localhost:333/users/:id
// console.log(request.params);

//o body tem todo os dados do de um usuario atraves do parametro
//Body: http://localhost:333/users/:id
// console.log(request.body);
    
    

//GET= Buscar uma informação (ex: Lista, Item)
//POST = Criando uma informação
//PUT = Editando uma informação
//DELETE = Deletando uma informação