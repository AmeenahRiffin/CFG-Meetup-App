// This sets up the backend of our neighbourhood app, if there's issues just ask me - Ameenah
import express from 'express';
const app = express();
const PORT = 5000;

app.use(express.json()); 

app.get('/', (req, res) => {
    res.send('Neighbourhood meetup app is now live!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

