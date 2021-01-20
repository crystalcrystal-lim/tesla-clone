import './App.css';
import Header from './components/Header';
import Item from './components/Item';

import Poster from './assets/poster.jpg'
import Safety from './assets/safety.jpg'



function App() {
  return (
    <div className="App">
      <Header/>
      <div className='app__itemsContainer'>
        <Item
        title='title one'
        desc='description'
        descLink=''
        backgroundImg={Poster}
        leftBtnTxt='order now'
        leftBtnLink=''
        rightBtnTxt='learn more'
        rightBtnLink=''
        twoButtons='true'
        first
        />
        <Item        
          title='title two'
          desc='description'
          descLink=''
          backgroundImg={Safety}
          leftBtnTxt='order now'
          leftBtnLink=''
          rightBtnTxt='learn more'
          rightBtnLink=''
          twoButtons='true'
          />
      </div>
    </div>
  );
}

export default App;
