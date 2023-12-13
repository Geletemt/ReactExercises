import ListaNumeros from './basics/ListaNumeros';
import ParImpar from './basics/ParImpar';
import Multiplicar from './basics/Multiplicar';
import Contador from './basics/Contador';
import SumaNumeros from './basics/SumaNumeros';
import Conversor from './basics/Conversor';
import Piramide from './basics/Piramide';
import AdivinaNum from './basics/AdivinaNum';
import Primos from './basics/Primos';
import MayorEdad from './basics/MayorEdad';
import ValidadorDNI from './sinsolucionI/ValidadorDNI';
import Fibonacci from './sinsolucionI/Fibonacci';
import ReemplazaText from './sinsolucionI/ReemplazaText';
import CuentaPalabras from './sinsolucionI/CuentaPalabras';
import CifradoCesar from './sinsolucionI/CifradoCesar';
import MadLibs from './sinsolucionI/MadLibs';
import CalculadoraDog from './sinsolucionII/CalculadoraDog';
import CalcInteres from './sinsolucionII/CalcInteres';
import Palindromos from './sinsolucionII/Palindromos';
import Imc from './sinsolucionII/Imc';
import Propinas from './sinsolucionII/Propinas';
import ConUnidades from './sinsolucionII/ConUnidades';
import Musica from './sinsolucionII/Musica';
import Calorias from './sinsolucionII/Calorias';

export default function EjercicioSwitch(props) {
    const {currentPage}=props;

    switch(currentPage){
        case 'listaNumeros':
            return <ListaNumeros />;
        case 'parImpar':
            return <ParImpar />;    
        case 'multiplicar':
            return <Multiplicar />;    
        case 'contador':
            return <Contador />;    
        case 'sumaNumeros':
            return <SumaNumeros />;    
        case 'conversor':
            return <Conversor />;    
        case 'piramide':
            return <Piramide />;    
        case 'adivinaNum':
            return <AdivinaNum />;    
        case 'primos':
            return <Primos />;    
        case 'mayorEdad':
            return <MayorEdad />;    
        case 'validadorDNI':
            return <ValidadorDNI />;    
        case 'fibonacci':
            return <Fibonacci />;    
        case 'reemplazaText':
            return <ReemplazaText />;    
        case 'cuentaPalabras':
            return <CuentaPalabras />;    
        case 'cifradoCesar':
            return <CifradoCesar />;    
        case 'madLibs':
            return <MadLibs />;    
        case 'calculaDog':
            return <CalculadoraDog />;    
        case 'calcInteres':
            return <CalcInteres />;    
        case 'palindromos':
            return <Palindromos />;    
        case 'imc':
            return <Imc />;    
        case 'propinas':
            return <Propinas />;    
        case 'unidades':
            return <ConUnidades />;    
        case 'musica':
            return <Musica />;    
        case 'calorias':
            return <Calorias />;    
            
        default:
            return <div>Selecciona una pagina</div>;  
    }
  
}

  