import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { P } from '../../components/Paragrafo/styles'
import { GithubSecao } from './stayles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre Mim</Titulo>
    <Paragrafo>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cupiditate
      pariatur error aspernatur quasi cum fugit repellendus porro natus rerum
      deleniti, suscipit non, totam sint illo! A molestiae optio perferendis.
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=paulo-cesar-paiva-ferreira&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=paulo-cesar-paiva-ferreira&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
