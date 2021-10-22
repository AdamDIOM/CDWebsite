import { Container, Navbar } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar>
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
        </Container>
      </Navbar>
      <div className="BackImage">
        <div className="ImageCover">
          <div className="Hello">
            Hello <br/>
            Scroll down to read more
          </div>
        </div>
      </div>
      hi
    </div>
  );
}

export default App;
