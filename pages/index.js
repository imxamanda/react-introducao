import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Cabecalho from "../components/Cabecalho"
import Navbar from '../components/Navbar';
import Rodape from  "../components/Rodape"
export default function Home() {
  return (
  <>
    
    <Navbar/>

    <Container>
   <h1>Hello World!</h1>
   <p>Qualquer txt</p>
   <p>Qualquer txt</p>
   <p>Qualquer txt</p>
   <p>Qualquer txt</p>
    </Container>
  </>   
  )
}
