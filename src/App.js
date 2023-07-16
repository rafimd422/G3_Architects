  import './App.css';
  import './index.css';
  import Header from './Componant/header';
  import Features from './Componant/features';
  import OtherFeatures from './Componant/otherFeatures';
  import Facts from './Componant/facts';


  function App() {
  return (
  <>
  <Header />
  <Features />
  <OtherFeatures versionOne = "Dexktop & Mobile Version" versionTwo = "Drag & Drop Builder" versionThree = "Super Easy to Edit"     versionFour = "Dexktop & Mobile Version"/>
  <Facts/>
  </>
  );
}

  export default App;
