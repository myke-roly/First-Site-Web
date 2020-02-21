const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index.html', { title: 'mykeRoly_' });
});

router.get('/contact', (req, res) => {
    res.render('contact.html', { title: 'Contact' });
})

//Exportamos nuestro mudulo para usarlo en otro archivo.
module.exports = router;