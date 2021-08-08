import Instagrammi from '../images/projectsicon/Instagrammi.png'
import Appsus from '../images/projectsicon/Appsus.png'
import MineSweeeper from '../images/projectsicon/MineSweeper.png' 
import MemeMaker from '../images/projectsicon/MemeMaker.png'

const portfolioData=[
    {
        image: Instagrammi,
        link:'http://instagrammi.herokuapp.com/',
        title:'Instagram clone',
        summary:'Instagram clone using Vue.js',
        tech:'Vue | HTML | SCSS | JavaScript'
    },
    {
        image: Appsus,
        link:'https://sharonwirtzer.github.io/sprint-3/#/',
        title:'"google keep" clone',
        summary:'app for keeping things (reference app "google keep")',
        tech:'HTML | CSS | JavaScript'
    },
     {
        image: MineSweeeper,
        link:'https://sharonwirtzer.github.io/sprint1/',
        title:'puzzle video game',
        summary:'Minesweeper is a single-player puzzle video game.',
        tech:'HTML | CSS | JavaScript'
    }, 
    {
        image: MemeMaker,
        link:'https://sharonwirtzer.github.io/sprint-2/',
        title:'Make memes for free in minutes.',
        summary:'meme generator you can easily take a memorable moment and turn it into a viral meme in minutes.',
        tech:'HTML | CSS | JavaScript'
    },
]


export default portfolioData