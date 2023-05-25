import './Styles/App.css'
import StarwarsCards from './Characters';
import CardStarwars from './Components/CardStarwars';

const App = () => {

  return (
    <div className="App">
        <StarwarsCards />
      <div>
        <CardStarwars />
      </div>
    </div>
  );
}

export default App;
