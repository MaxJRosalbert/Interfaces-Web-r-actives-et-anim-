import './Activite.scss';

function Activite(Avt){
    return(
        <li className='Activite'>
            <span className="ventes">{Avt.id}</span>
            <span className="ventes">{Avt.titre}</span>
            <span className="ventes">Il y a  {Avt.depuis} ans</span>
            <span className="ventes">{Avt.montant}</span>
        </li>
    );
}

export default Activite;