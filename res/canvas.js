const canvas = document.querySelector('.canvas')
let ctx = canvas.getContext('2d')

canvas.width = innerWidth - 1
canvas.height = innerHeight - 1

let gravity = .2

const particles = []

class Particle {
    constructor(x, y, radius) {
        this.position = {
            x: x,
            y: y
        }
        
        this.velocity = {
            x: (Math.random() - .5) * 8,
            y: (Math.random() - 1.2) * 8
        }
        
        this.radius = radius
        this.friction = .98
    }

    draw() {
        ctx.beginPath()
        ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--active')
        ctx.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI)
        ctx.fill()
    }

    update() {
        this.draw()
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
        
        this.velocity.x *= this.friction
        this.velocity.y *= this.friction
        
        this.velocity.y += gravity
    }
}

addEventListener('click', (e) => {
    for (let i = 0; i < 1; i++) {
        particles.push(new Particle(e.x, e.y, 5))
    }
})

function animate() {
    requestAnimationFrame(animate)
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    particles.forEach((particle, index) => {
        particle.update()

        if (particle.position.y + particle.velocity.y >= canvas.height - particle.radius) {
            particles.push(new Particle(particle.position.x, particle.position.y, particle.radius / 2))
            particles.push(new Particle(particle.position.x, particle.position.y, particle.radius / 2))
            particles.splice(index, 1)
        }

        if (particle.radius <= 1) {
            particles.splice(index, 1)
        }
    })
}

animate()

addEventListener('resize', () => {
    canvas.width = innerWidth - 1
    canvas.height = innerHeight - 1
})