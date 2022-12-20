import React from 'react'
import './MiniGames.css'
import Preview from './Miscellaneous/Preview'

//MEDIA
import SnakeGif from '../assets/gifSnake.gif'
import MatatenaGif from '../assets/gifMatatena.gif'

function MiniGames() {

    let snake = {
        gif:SnakeGif,
        link:'https://chenomorfo.github.io/Snake-WebGame/'
    }
    let matatena = {
      gif:MatatenaGif,
      link: 'https://chenomorfo.github.io/Matatena-WebGame/'
    }

  return (
    <div className='MiniGames'>
        <Preview name='Snake Game' game={snake}/>
        <Preview name='Matatena' game={matatena}/>
    </div>
  )
}

export default MiniGames