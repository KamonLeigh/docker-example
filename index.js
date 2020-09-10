const app = require('express')();
const port = process.env.PORT || 8081;

app.get('/', (req, res) => {
    res.json('Docker is running');
})


app.listen(port, () => `app running on http://localhost:${port}`);