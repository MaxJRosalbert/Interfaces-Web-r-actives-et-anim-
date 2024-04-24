import './ListeCryptomonnaies.scss';
import Cryptomonnaie from './Cryptomonnaie';
import cryptos from '../data/cryptomonnaies.json';

function ListeCryptomonnaies(){
    return(
        <div className='ListeCryptomonnaies'>
            <h3>Prix Affichés en CA</h3>
            <thead>
                <tr>
                    <th>Crypto</th>
                    <th>Changement 24H</th>
                    <th>Prix Temps réel</th>
                    <th>Prix Vente</th>
                    <th>Prix Prix Achat</th>
                    <th>Suivre</th>
                </tr>
            </thead>
            {cryptos.map(Crt =>   <Cryptomonnaie 
                                    id={Crt.id}
                                    nom={Crt.nom}
                                    difference={Crt.difference}
                                    prix={Crt.prix}
                                    vente={Crt.vente}
                                    achat={Crt.achat}
                                />
        )}
        </div>
    );
}

export default ListeCryptomonnaies;