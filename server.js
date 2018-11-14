const express = require('express');
const path = require('path');
const publicPath = path.resolve(__dirname, 'dist');
const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.static(publicPath));
app.use(express.static('src/public'));

app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, 'dist', 'index.html'))
})

app.listen(PORT, () => {
	console.log('Server is up over on PORT: %s', PORT)
})

