import {useState, useEffect} from 'react'
import Player from './components/Player/Player'



function App() {
  const [songs] = useState([
    {
      title: 'Asian Therapy Sounds – Oriental Sounds of Nature',
      artist: 'MediRelax',
      img_src:'./images/1.gif',
      src: './music/asian-therapy.mp3'

    },
    {
      title: 'Aumente a Atividade Espiritual',
      artist: 'MediRelax',
      img_src:'./images/2.gif',
      src: './music/atividade-espiritual.mp3'

    },
    {
      title: 'Canal Holístico',
      artist: 'MediRelax',
      img_src:'./images/3.gif',
      src: './music/canal-holistico.mp3'

    },
    {
      title: 'Elevar',
      artist: 'MediRelax',
      img_src:'./images/4.gif',
      src: './music/Elevar.mp3'

    },
    {
      title: ' Frequência de Cura- Meditação de Tom Milagroso- Música Relaxante',
      artist: 'MediRelax',
      img_src:'./images/5.gif',
      src: './music/frequencia-cura.mp3'

    },
    {
      title: 'Inspiração Espiritual',
      artist: 'MediRelax',
      img_src:'./images/6.gif',
      src: './music/inspiracao-espiritual.mp3'

    },
    {
      title: 'Jornada Interior',
      artist: 'MediRelax',
      img_src:'./images/7.gif',
      src: './music/jornada-interior.mp3'

    },
    {
      title: 'Mantra Matinal',
      artist: 'MediRelax',
      img_src:'./images/8.gif',
      src: './music/mantra-matinal.mp3'

    },
    {
      title: 'Meditação do Eu Superior',
      artist: 'MediRelax',
      img_src:'./images/9.gif',
      src: './music/meditacao-do-eu-superior.mp3'

    },
    {
      title: 'Pensamentos Elevados',
      artist: 'MediRelax',
      img_src:'./images/10.gif',
      src: './music/pensamentos-elevados .mp3'

    },
    {
      title: 'Perspectiva de Inspiração ',
      artist: 'MediRelax',
      img_src:'./images/11.gif',
      src: './music/perspectiva-de-inspiracao.mp3'

    },
    {
      title: 'Regenerando sua Mente',
      artist: 'MediRelax',
      img_src:'./images/12.gif',
      src: './music/regenerando-mente.mp3'

    },
    {
      title: 'Ritual de Limpeza',
      artist: 'MediRelax',
      img_src:'./images/13.gif',
      src: './music/ritual-de-limpeza.mp3'

    }
  ])

  const [currentSongIndex, setCurrentSongIndex] = useState(0)
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1)

  useEffect(() => {
    setNextSongIndex(() => {
      if(currentSongIndex + 1 > songs.length - 1){
        return 0
      }
      else {
        return currentSongIndex + 1
      }
    })
  },[currentSongIndex])
  return (
    <div className="App">
      <Player 
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      />
    </div>
  );
}

export default App;
