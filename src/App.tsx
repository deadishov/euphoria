import { Header } from './components/Header';
import { MainSlider } from './components/MainSlider';
import './scss/app.scss'
import slidesArr from './slidesArr.json'



function App() {

  const filtredArr = slidesArr.filter(slide => slide.id < '6')

  return (
    <>
      <Header />
      <MainSlider list={filtredArr} />
    </>
  );
}

export default App;
