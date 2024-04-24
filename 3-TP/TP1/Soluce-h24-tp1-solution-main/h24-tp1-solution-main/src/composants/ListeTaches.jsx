import Tache from './Tache';
import './ListeTaches.scss';
import { AnimatePresence } from "framer-motion";

export default function ListeTaches({taches, setTaches, filtre, setFiltre}) {
  // Utilisé pour afficher un message lorsqu'il n'y a pas de tâches actives
  const nbTachesActives = taches.reduce((acc, tache) => acc + (tache.completee?0:1), 0);

  /**
   * Supprime une tâche.
   * @param {string} idTache Identifiant de la tâche à supprimer
   */
  function supprimerTache(idTache) {
    setTaches(taches.filter(
      tache => tache.id !== idTache
    ))
  }

  /**
   * Fait basculer l'état de la tâche (complétée <-> non-complétée).
   * @param {string} idTache Identifiant de la tâche à faire basculer
   */
  function basculerEtatTache(idTache) {
    // On réécrit l'état des tâches avec setTaches()
    setTaches(
      // On obtient un nouveau tableau des tâches incluant la modification
      // à la tâche spécifiée par son identifiant (idTache)
      taches.map(tache => {
        if(tache.id === idTache) {
          tache.completee = !tache.completee;
        }
        return tache;
      })
    )
  }

  return (
    <section className="Taches">
      {/* Voir : https://www.framer.com/motion/introduction/ */}
      <AnimatePresence>
        {
          (taches.length === 0 || (nbTachesActives === 0 && filtre==false))
          ?
            <div className='msg-aucune-tache'>
              <span className="emoji-anime">&#x1F483;</span> 
              Wouhou, t'as rien à faire ! 
              <span className="emoji-anime">&#x1F57A;</span>
            </div>
          :
            taches
              // Avant de produire les composants "Tache", on filtre le tableau 
              // "taches" pour afficher uniquement les tâches demandées.
              .filter(
                // Pour chaque tâche, on la garde dans le tableau si le filtre a 
                // la valeur "toutes" ou si sa propriété "completee" a la même 
                // valeur que le filtre ;-) 
                // Pour comprendre il faut savoir quelles sont les valeurs
                // possibles de notre variable d'état "filtre" (voir dans Appli)
                tache => filtre === 'toutes' || tache.completee === filtre
              )
              .map(tache => <Tache
                                  // Requis par React
                                  key={tache.id}     
                                  // On étale toutes les propriétés de l'objet 
                                  // "tache" comme des props du composant Tache
                                  {... tache} 
                                  // On ajoute des props pour les méthodes des 
                                  // fonctionnalités requises :
                                  supprimerTache={supprimerTache} 
                                  basculerEtatTache={basculerEtatTache}
                                />)
        }
      </AnimatePresence>
    </section>
  );
}