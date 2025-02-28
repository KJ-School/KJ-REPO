import Header from './header.jsx'
import MainContent from './mainContent.jsx'
import Footer from './footer.jsx'
import './App.css'
import voitures from './assets/Voitures.js';
import Voiture from './Voiture.jsx';

function App() {
  const voitureTab = voitures.map((voiture) => {
    return {
      id: voiture.id,
      marque: voiture.marque,
      model: voiture.model,
      couleur: voiture.couleur,
      annee: voiture.annee
    }
  }) ;

  return (
    <>
    {voitureTab.map((voiture) => (
      <Voiture index = {voiture.id} prop ={voiture} />
      ))}
    </>
  );
}

export default App
