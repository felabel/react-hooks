import logo from './logo.svg';
import './App.css';
import Products from './Products';
import Button from 'react-bootstrap/Button';
import Rating from './Rating';

function formatName(user){
  return user.firstName + " " + user.lastName
}
function App() {
  const isValid = true
  const user = {
    firstName:'Felicity',
    lastName:'Essien',
    imageUrl: './logo.svg'
  }


  return (
    <div className="App">
      
      <h2>Hello, {formatName(user)} </h2><br />
      <Products />
      <Rating />

      <Button disabled={isValid}>Default</Button>
      

    </div>
  );
}

export default App;
