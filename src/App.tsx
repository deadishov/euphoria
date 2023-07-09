import { Container } from '@mui/system';
import { Header } from './components/Header';
import { Slider } from './components/Slider';
import './scss/app.scss'


function App() {
  return (
    <Container>
      <Header />
      <Slider />
    </Container>
  );
}

export default App;
