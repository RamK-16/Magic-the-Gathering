/* eslint-disable max-len */
const express = require('express');
const createError = require('http-errors');
const hbs = require('hbs');
const logger = require('morgan');
const path = require('path');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
// const { checkSession } = require('./MiddleWars/MiddleWar');
const indexRouter = require('./routes/index');
const signUpRouter = require('./routes/signUp');
const signInRouter = require('./routes/signIn');
const signOutRouter = require('./routes/signOut');
const cartRouter = require('./routes/cart');
const lkRouter = require('./routes/lk');
const filterCityRouter = require('./routes/filterCity');
const filterCardRouter = require('./routes/filterCard');

const app = express();
const PORT = 3000;

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
hbs.registerPartials(path.join('views', 'partials'));

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', indexRouter);
// app.use('/card${')
app.use('/signUp', signUpRouter);
app.use('/signIn', signInRouter);
app.use('/signOut', signOutRouter);
app.use('/filterCity', filterCityRouter);
app.use('/filterCard', filterCardRouter);

app.use('/cart', cartRouter);
// app.use('/cart/succes')
app.use('/lk', lkRouter);
// ('lk/profile')
// ('lk/addPost')
// ('lk/myPost')

// Если HTTP-запрос дошёл до этой строчки, значит ни один из ранее встречаемых рутов не ответил на запрос. Это значит, что искомого раздела просто нет на сайте. Для таких ситуаций используется код ошибки 404. Создаём небольшое middleware, которое генерирует соответствующую ошибку.
app.use((req, res, next) => {
  const error = createError(404, 'Запрашиваемой страницы не существует на сервере.');
  next(error);
});

// Отлавливаем HTTP-запрос с ошибкой и отправляем на него ответ.
app.use((err, req, res, next) => {
  // Получаем текущий ражим работы приложения.
  const appMode = req.app.get('env');
  // Создаём объект, в котором будет храниться ошибка.
  let error;

  // Если мы находимся в режиме разработки, то отправим в ответе настоящую ошибку. В противно случае отправим пустой объект.
  if (appMode === 'development') {
    error = err;
  } else {
    error = {};
  }

  // Записываем информацию об ошибке и сам объект ошибки в специальные переменные, доступные на сервере глобально, но только в рамках одного HTTP-запроса.
  res.locals.message = err.message;
  res.locals.error = error;

  // Задаём в будущем ответе статус ошибки. Берём его из объекта ошибки, если он там есть. В противно случае записываем универсальный стату ошибки на сервере - 500.
  res.sendStatus(err.status || 500);
  // Формируем HTML-текст из шаблона "error.hbs" и отправляем его на клиент в качестве ответа.
  // res.render('error');
});

app.listen(PORT, () => {
  console.log(`server started PORT: ${PORT}`);
});
