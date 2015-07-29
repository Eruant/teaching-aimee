class Ball {

  constructor (width, height, x, y) {

    this.x = x
    this.y = y
    this.width = width
    this.height = height

    this.size = 20

    this.speedX = 2
    this.speedY = 2

    this.color = 'rgb(255, 0, 0)'

  }

  changeColor () {

    let r = Math.floor(Math.random() * 255)
    let g = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)

    this.color = `rgb(${r}, ${g}, ${b})`
  }

  update () {

    this.x = this.x + this.speedX
    this.y = this.y + this.speedY

    if (this.x > this.width || this.x < 0) {
      this.speedX = -this.speedX
      this.changeColor()
    }
    if (this.y > this.height || this.y < 0) {
      this.speedY = -this.speedY
      this.changeColor()
    }

  }

  draw (ctx) {

    ctx.save()
    ctx.translate(-(this.size / 2), -(this.size / 2))
    ctx.fillStyle = this.color
    ctx.fillRect(this.x, this.y, this.size, this.size)
    ctx.restore()

  }

}

export default Ball
