import './Appli.scss';
import logo from '../images/memo-logo.png';
import Controle from './Controle';
import ListeTaches from './ListeTaches';
import AjoutTache from './AjoutTache';
import { useEffect, useState } from 'react';

export default function Appli() {
  // État "filtre des tâches" utilisé dans le composant Controle (mais aussi 
  // dans ListeTaches et dans AjoutTache) 
  /* 
    Valeurs possibles :      
      a) true (pour les tâches complétées), 
      b) false (pour les tâches non-complétées, ou actives) 
      c) "toutes" (pour toutes les tâches évidement ! c'est la valeur par défaut)
  */
  const [filtre, setFiltre] = useState('toutes');

  // État des tâches
  const [taches, setTaches] = useState(() => JSON.parse(localStorage.getItem('4pa-h24-taches')) || []);

  // Sauvegarde des tâches dans localStorage après chaque opération modificatrice
  useEffect(()=>localStorage.setItem('4pa-h24-taches', JSON.stringify(taches)), [taches]);

  /**
   * Supprime toutes les tâches complétées.
   */
  function supprimerCompletees() {
    // On utilise filter() pour obtenir un nouveau tableau de tâches
    // ayant la valeur false dans la propriété 'completee', puis on réécrit
    // l'état des tâches avec ce nouveau tableau (on utilise setTaches())
    setTaches(taches.filter(
      tache => tache.completee === false
    ));
  }

  return (
    <div className="Appli">
      <header className="appli-entete">
        <img src={logo} className="appli-logo" alt="Memo" />
      </header>
      <AjoutTache taches={taches} setTaches={setTaches} setFiltre={setFiltre} />
      <ListeTaches taches={taches} setTaches={setTaches} filtre={filtre} setFiltre={setFiltre} />
      <Controle taches={taches} filtre={filtre} setFiltre={setFiltre} supprimerCompletees={supprimerCompletees} />
    </div>
  )
}
