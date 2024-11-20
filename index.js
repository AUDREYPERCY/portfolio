import express from 'express';
import routes from './routes/routes.js'

const app = express();



const port = process.env.PORT || 8080

//setup for static files
app.use(express.static(path.json(process.env.cwd), 'public'));

//ejs setup
app.set('view engine', 'ejs');
app.set('views', './views')

//create routes
app.use('/', routes)


app.listen(port, () =>{
    console.log('server is running on port ${port}')
})