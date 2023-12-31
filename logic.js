const $ = e => document.querySelector(e)

const speaker = $('img')
const changeMusicBtn = $('#change-music-btn')
const audio = $('#audio')

speaker.addEventListener('click', e => {
  audio.paused ? audio.play() : audio.pause();
  speaker.classList.toggle('stopped')
})

changeMusicBtn.addEventListener('click', e => {
  audio.pause()
  speaker.classList.add('stopped')
  audio.setAttribute('src', chooseRandomAudio())
  audio.play()
  speaker.classList.remove('stopped')
})


function chooseRandomAudio() {
  const audios = [
    'https://mir1.kashoob.com/audio/202212/enc_16704920669072276211589.mp3',
    'https://mir1.kashoob.com/audio/202312/enc_17024950508165142833009.mp3',
    'https://mir1.kashoob.com/audio/202311/enc_17009347358486038235115.mp3',
    'https://mir1.kashoob.com/audio/202312/enc_17024317206652988061556.mp3',
    'https://mir1.kashoob.com/audio/202312/enc_17025153673524976168630.mp3',
  ]
  const randomIndex = Math.floor(Math.random() * audios.length)
  return audios[randomIndex]
}