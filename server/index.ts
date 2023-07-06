import express, { Request, Response, Application } from 'express';
const app: Application = express();
const port = 3000;
app.use(express.json());



app.get('/test', (req, res)=>{
  res.json({message: "BOO"})
})
if (require.main === module) {
  app.listen(port);
  // eslint-disable-next-line no-console
  console.log(`App listening on port ${port}`);
}

export  { app };