import app from './app';

app.listen(app.get('port'), () => {
  console.log(`Server on: http://localhost:${app.get('port')}`);
});
