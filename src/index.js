const express = require('express');
const app = express();
const path = require('path');

//settings
app.set('port', 4000);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
    //motor de plantilla qn el podemos usar javascript en html <%"codigo js"%>
app.set('view engine', 'ejs');

// routes
app.use(require('./routes/index'));//importamos un modulo.

// stattis files
app.use(express.static(path.join(__dirname, 'public')));

//listening server
app.listen(app.get('port'), (req,res) => {
    console.log("Server on port ", app.get('port'));
});

