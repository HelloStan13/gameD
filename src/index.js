const app =require('./app')

app.get('/',(req, res) =>{
  res.render('index',{})
});

app.listen(app.get("port"), () => {
  console.log(`Example app listening on port ${ app.get("port") }`);
  console.log("Nombre de la aplicación", app.get("name"));
})
