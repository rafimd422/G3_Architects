  import './App.css';
  import './index.css';
  import Header from './Componant/header';
  import Features from './Componant/features';
  import OtherFeatures from './Componant/otherFeatures';
  import Facts from './Componant/facts';
import Sponsor from './Componant/sponsor';

  function App() {
  return (
  <>
  <Header />
  <Features />
  <OtherFeatures versionOne = "Dexktop & Mobile Version" versionTwo = "Drag & Drop Builder" versionThree = "Super Easy to Edit"     versionFour = "Dexktop & Mobile Version"/>
  <Facts/>
  <Sponsor/>
  </>
  );
}

  export default App;
