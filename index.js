const express = require('express');
const app = express();

const courses = [
    {id:1, name: 'Science'},
    {id:2, name: 'Maths'},
    {id:3, name: 'CS'},
];

app.get('/', (req, res) => {
    res.send('Hello Express');
});

app.get('/api/courses', (req, res) => {
    res.send(courses);
});

app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) res.status(200).send('The course with the given ID is not found');
    res.send(course);
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening to port ${port}...`));