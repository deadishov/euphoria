import { Header } from './components/Header';
import { MainSlider } from './components/MainSlider';
import './scss/app.scss'
import slidesArr from './slidesArr.json'



function App() {
  return (
    <>
      <Header />
      <MainSlider list={slidesArr} />
    </>
  );
}

export default App;
