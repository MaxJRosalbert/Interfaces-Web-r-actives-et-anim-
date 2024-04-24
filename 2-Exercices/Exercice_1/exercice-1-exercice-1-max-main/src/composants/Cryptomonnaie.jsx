import './Cryptomonnaie.scss';

function Cryptomonnaie(crt){
    return(
        <table className='Cryptomonnaie'>
            <tbody>
                <tr>
                    <td><span>{crt.titre}</span> </td>
                </tr>
                <tr>
                    <img src="" alt="" srcset="" />
                </tr>
                <tr>
                    <td><span>{crt.id}</span></td>
                </tr>
                <tr>
                    <td><span>{crt.depuis}</span></td>
                </tr>
                <tr>
                    <td><span>{crt.montant}</span></td>
                </tr>
            </tbody>
            
            
            
        </table>
    );
}

export default Cryptomonnaie;

