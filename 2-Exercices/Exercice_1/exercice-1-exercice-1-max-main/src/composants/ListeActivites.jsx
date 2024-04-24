import './ListeActivites.scss';
import Activite from './Activite';
import acts from '../data/activites.json';

function ListeActivites(){
    return(
        <article className='ListeActivites'>
        <h2>Activités récentesVoir historique</h2>
        {acts.map(Act =>   <Activite 
                                    id={Act.id}
                                    titre={Act.titre}
                                    depuis={Act.depuis}
                                    montant={Act.montant}
                                />
        )}
        </article>
    );
}

export default ListeActivites;