import React from 'react'
import './MiniGames.css'
import Preview from './Miscellaneous/Preview'

//MEDIA
import SnakeGif from '../assets/Snake.gif'

function MiniGames() {

    let snake = {
        gif:SnakeGif,
        link:'https://chenomorfo.github.io/Snake-WebGame/'
    }

  return (
    <div className='MiniGames'>
        <Preview name='Snake Game' game={snake}/>
    </div>
  )
}

export default MiniGames