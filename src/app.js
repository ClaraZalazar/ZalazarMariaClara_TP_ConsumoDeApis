const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const app = express();

const indexRouter = require('./routes/index');
const moviesRoutes = require('./routes/moviesRoutes');
const genresRoutes = require('./routes/genresRoutes');

//Aquí llamo a la ruta de las api de movies
const apiMoviesRouter = require('./routes/api/movies')
//Aquí llamo a la ruta de las api de actors
const apiGenresRouter = require('./routes/api/genres')
//Aquí llamo a la ruta de las api de actors
const apiActorsRouter = require('./routes/api/actors')


// view engine setup
app.set('views', path.resolve(__dirname, './views'));
app.set('view engine', 'ejs');

app.use(express.static(path.resolve(__dirname, '../public')));

//URL encode  - Para que nos pueda llegar la información desde el formulario al req.body
app.use(express.urlencoded({ extended: false }));

app.use(methodOverride('_method'));

app.use('/', indexRouter);
app.use(moviesRoutes);
app.use(genresRoutes);

app.use('/api/movies',apiMoviesRouter);
app.use('/api/actors',apiActorsRouter);
app.use('/api/genres',apiGenresRouter);

app.listen('3001', () => console.log('Servidor corriendo en el puerto 3001'));
