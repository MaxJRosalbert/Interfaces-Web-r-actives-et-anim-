import "./Principal.scss";
import Amorce from './Amorce';
import ListeCryptomonnaies from './ListeCryptomonnaies';
import ListeActivites from './ListeActivites';

function Principal() {
  return (
    <main className="Principal">

        <Amorce/>
        <ListeCryptomonnaies/>
        <ListeActivites/>

    </main>
  );
}

export default Principal;