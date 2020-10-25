const dino = document.querySelector('.dino')
const background = document.querySelector('.background')
let inJunping = false
let position = 0

const handleKeyUp = (e) => {
  if (e.keyCode === 32) {
    if (!inJunping) {
      jump()
    }
  }
}

const jump = () => {
  inJunping = true

  let upInteval = setInterval(() => {
    if (position >= 150) {
      clearInterval(upInteval)

      let downInterval = setInterval(() => {
        if (position <= 0) {
          clearInterval(downInterval)
          inJunping = false
        } else {
          position -= 20

          dino.style.bottom = position + 'px'
        }
      }, 20)
    } else {
      position += 20

      dino.style.bottom = position + 'px'
    }
  }, 20)
}

function createCactus() {
  const cactus = document.createElement('div')
  let cactusPosition = 1000
  let radomTime = Math.random() + 6000

  cactus.classList.add('cactus')
  cactus.style.left = 1000 + 'px'
  background.appendChild(cactus)

  let leftInterval = setInterval(() => {
    if (cactusPosition < -60) {
      clearInterval(leftInterval)
      background.removeChild(cactus)
    } else if (cactusPosition > 0 && cactusPosition < 60 && position < 60) {
      setInterval(leftInterval)
      document.body.innerHTML = "<h1 class='game-over'>Fim de Jogo</h1>"
    } else {
      cactusPosition -= 10
      cactus.style.left = cactusPosition + 'px'
    }
  }, 20)

  setTimeout(createCactus, radomTime)
}

createCactus()
document.addEventListener('keyup', handleKeyUp)
