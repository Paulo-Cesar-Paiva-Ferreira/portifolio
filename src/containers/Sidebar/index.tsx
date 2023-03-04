import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'

import { Descricao, BotaoTema, SideBarContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SideBarContainer>
      <Avatar />
      <Titulo fontSize={20}>Paulo César Paiva Ferreira</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        paulo-cesar-paiva-ferreira
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Full Stack Python
      </Descricao>
      <BotaoTema>TRocar tema</BotaoTema>
    </SideBarContainer>
  </aside>
)

export default Sidebar
