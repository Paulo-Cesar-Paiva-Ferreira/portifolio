import Paragrafo from '../Paragrafo'
import Titulo from '../Titulo'

import { Card, LinkBotao } from './styled'

const Projeto = () => (
  <Card>
    <Titulo>Porjeto Lista de Tarefas</Titulo>
    <Paragrafo tipo="secundario">Lista de tarefas feita com vue js</Paragrafo>
    <LinkBotao>Visualizar</LinkBotao>
  </Card>
)

export default Projeto
