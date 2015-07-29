import Ball from './ball'

const WIDTH = 800
const HEIGHT = 400

class Game {

  constructor () {

    let body = window.document.querySelector('body')

    this.canvas = window.document.createElement('canvas')
    this.canvas.width = WIDTH
    this.canvas.height = HEIGHT

    this.ctx = this.canvas.getContext('2d')

    body.appendChild(this.canvas)

    this.ball = new Ball(WIDTH, HEIGHT, WIDTH / 2, HEIGHT / 2)

  }

  start () {

    this.tick()

  }

  tick () {

    this.update()
    this.draw()

    window.setTimeout(() => {
      this.tick()
    }, 1000 / 60)
  }

  update () {

    let blue = 'rgb(0, 152, 255)'
    this.ctx.fillStyle = blue

    this.ball.update()

  }

  draw () {

    this.ctx.fillRect(0, 0, 800, 400)

    this.ball.draw(this.ctx)

  }
}

export default Game
