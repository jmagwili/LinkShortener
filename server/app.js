const express = require('express')
const shortId = require('shortid')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()

app.use(express.urlencoded({extended:true}))
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');
    next();
});

app.use(cors({
    origin: 'http://localhost:3001',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(bodyParser.json());
const port = 3000
let links = []

app.get('/',(req,res)=>{
    res.send(links)
    console.log(`listening at port ${port}`)
})

app.post('/shortlink',(req,res)=>{
    links.push({
        shortLink: `http://localhost:${port}/${shortId.generate()}`,
        longLink: req.body.link
    })
    console.log(`received ${req.body.link}`)
    res.send(links)
})

app.get('/:shortlink',(req,res)=>{
    let isLinkFound = false
    
    for(let i=0;i<=links.length-1;i++){
        if(links[i].shortLink === `http://localhost:${port}/${req.params.shortlink}`){
            isLinkFound = true
            res.redirect(links[i].longLink)
        }
    }

    if(!isLinkFound) res.status(404).send('Not Found')
})

app.listen(port)