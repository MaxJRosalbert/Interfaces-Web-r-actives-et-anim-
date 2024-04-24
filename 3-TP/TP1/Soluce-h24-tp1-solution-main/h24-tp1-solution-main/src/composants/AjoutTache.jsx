import './AjoutTache.scss';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

export default function AjoutTache({taches, setTaches, setFiltre}) {
    /**
     * Ajouter une nouvelle tâche.
     * @param {Event} e Objet Event JS qui a déclenché l'appel
     */
    function ajouterTache(evt) {
        // Prévenir le formulaire d'être soumit (et de faire une requête HTTP 
        // qui causerait une actualisation de la page !!!)
        evt.preventDefault();
        // Récupérer la valeur de la boîte de texte
        const texte = evt.target.texteTache.value;
        // Si le texte est vide, oublie ça ;-) TODO : faire une meilleure 
        // validation ici (avec un regexp simple)
        if(texte.trim() !== '') {
            // Bonne idée : vider le formulaire pour la prochaine tâche
            evt.target.reset();
            
            // Insérer la tâche dans un nouveau tableau de tâches et réécrire
            // l'état des tâches (avec setTaches())
                // Note A : pour l'identifiant, on utilise un UUID avec l'API 'crypto' du DOM : 
                // https://developer.mozilla.org/en-US/docs/Web/API/Crypto/randomUUID 
                // Ou, ce module JS (Node) : https://github.com/uuidjs/uuid
                
                // Note B : pour la date/temps, on utilise un "timestamp", c'est à dire le temps
                // en millisecondes depuis le début de l'ère "Unix" (1 janvier 1970 à 00:00:00.000 UTC) :
                // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime
            setTaches(
                // On créé un NOUVEAU tableau :
                [
                    // On y ajoute un objet représentant la nouvelle tâche ...
                    {
                        id: crypto.randomUUID(), 
                        texte: texte, 
                        completee: false, 
                        date: new Date().getTime()
                    }, 
                    // ... et ensuite tous les objets représentants les autres 
                    // tâches qui étaient déjà dans le tableau "taches"
                    ...taches
                ]
            );
            
            // On réinitialise le filtre des tâches (c'est important pour le UX 
            // car sinon, si le filtre était sur les tâches complétées, cette 
            // nouvelle tâche qui vient d'être ajoutée étant non-complétée, elle 
            // ne sera pas tout de suite visible, et l'utilisateur serait 
            // certainement confus : il penserait que l'ajout n'a pas fonctionné)
            setFiltre('toutes');
        }
    }
    return (
        <section className='AjoutTache'>
            <form onSubmit={evt => ajouterTache(evt)}>
                <input 
                    type="text"   
                    placeholder="Ajoutez une tâche ..." 
                    name="texteTache"
                    autoComplete="off" 
                    autoFocus={true} 
                />
                {/* J'ai utilisé un bouton MUI pour l'uniformité avec le reste 
                de mes éléments d'interactivité de l'interface, mais un bouton 
                HTML <button> aurait aussi bien fait l'affaire, exactement de la 
                même manière. */}
                <Button variant='contained' type='submit' className='btn-ajout-tache' size='small'>
                    <SendIcon />
                </Button>
            </form>
        </section>
    );
}   