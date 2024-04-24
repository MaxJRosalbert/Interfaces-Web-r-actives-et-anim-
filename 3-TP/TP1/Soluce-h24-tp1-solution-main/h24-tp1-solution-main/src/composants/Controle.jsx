import './Controle.scss';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Button from '@mui/material/Button';

export default function Controle({taches, supprimerCompletees, filtre, setFiltre}) {  
  // On compte le nombre de tâches actives (non-complétées) en réduisant (reduce) 
  // le tableau "taches". Voici une explication simple de cette opération : 
  // on démarre l'accumulateur à 0, et pour chaque tâche reçue dans la fonction 
  // de *réduction*, on ajoute 0 si elle est complétée et 1 sinon...
  const nbTachesActives = taches.reduce((acc, tache) => acc + (tache.completee?0:1), 0);
  return (
    <footer className="Controle">
      {/* Composant MUI utilisé ici ;-) */}
      <ToggleButtonGroup 
        size="small" 
        exclusive={true} 
      >
        <ToggleButton value={'toutes'} selected={(filtre==='toutes')} onClick={() => setFiltre('toutes')}>Toutes</ToggleButton>
        <ToggleButton value={true} selected={(filtre===true)} onClick={() => setFiltre(true)}>Complétées</ToggleButton>
        <ToggleButton value={false} selected={(filtre===false)} onClick={() => setFiltre(false)}>Actives</ToggleButton>
      </ToggleButtonGroup>
      <span className="compte">
        {nbTachesActives + (nbTachesActives>1?' tâches actives':' tâche active')}
      </span>
      <div className="supprimer-completees">
        <Button 
          aria-label="Supprimer toutes les tâches complétées"
          color="error" 
          onClick={() => supprimerCompletees()} 
          title="Supprimer toutes les tâches complétées"
          variant='contained'
          size='small'
        >
          Supprimer complétées
        </Button>
      </div>
    </footer>
  );
}