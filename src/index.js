const express = require('express')
const morgan = require('morgan')
const { engine } = require('express-handlebars')
const path = require('path');
const sass = require('sass');
const app = express()
const port = 3001

// file static
app.use(express.static(path.join(__dirname, 'public')));

// file scss
// const result = sass.compile()

//HTTP logger
app.use(morgan('combined'))

//Template engine
app.engine('hbs', engine({
  defaultLayout: 'main',
  extname: '.hbs',
  // partialsDir: __dirname + 'resources/views/partials'
}
));

app.set('view engine', 'hbs');
app.set('views', './src/resources/views');

app.get('/', (req, res) => {
  res.render('home');
})

app.get('/api/users', (req, res) => {
  res.json(
    [
      { id: 1, name: 'Nguyễn Văn A' },
        { id: 2, name: 'Trần Thị B' },
        { id: 3, name: 'Trần Thị c' },
        { id: 4, name: 'Trần Thị d' },
        { id: 5, name: 'Trần Thị d' },
        { id: 6, name: 'Trần Thị d' },
        { id: 7, name: 'Trần Thị d' },
        { id: 8, name: 'Trần Thị e' },
    ]
  );
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
