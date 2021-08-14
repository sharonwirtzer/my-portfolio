import Instagrammi from '../images/projectsicon/Instagrammi.png'
import Appsus from '../images/projectsicon/Appsus.png'
import MineSweeeper from '../images/projectsicon/MineSweeper.png' 
import MemeMaker from '../images/projectsicon/MemeMaker.png'

const portfolioData=[
    {
        image: Instagrammi,
        link:'http://instagrammi.herokuapp.com/',
        title:'Instagrammi',
        summary:'Instagram clone using Vue.js',
        tech:'Vue.js | Sass | Node.js | MongoDB | Websockets'
    },
    {
        image: Appsus,
        link:'https://sharonwirtzer.github.io/sprint-3/#/',
        title:'Appsus',
        summary:'app for keeping things (reference app "google keep")',
        tech:'Vue.js | HTML | CSS'
    },
     {
        image: MineSweeeper,
        link:'https://sharonwirtzer.github.io/sprint1/',
        title:'Mine Sweeeper',
        summary:'Minesweeper is a vintage single-player puzzle video game.',
        tech:'Vanilla JS | HTML | Canvas | CSS'
    }, 
    {
        image: MemeMaker,
        link:'https://sharonwirtzer.github.io/sprint-2/',
        title:'Meme Maker.',
        summary:'A meme generator, allowing the user to upload their own pictures and afterwards download, save or publish their creation.',
        tech:'Vanilla JS | HTML | CSS'
    },
]


export default portfolioData