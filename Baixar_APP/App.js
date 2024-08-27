const wind = document.getElementById('wind');
const lin = document.getElementById('lin');
const Mac = document.getElementById('Mac');
const andr = document.getElementById('andr');
const iOS = document.getElementById('iOS');

wind.addEventListener('click', () => {
     window.open('https://apps.microsoft.com/detail/9ncbcszsjrsb?rtc=1&hl=pt-br&gl=BR');
})

lin.addEventListener('click', () => {
     window.open('https://www.spotify.com/br-pt/download/linux/');
})

Mac.addEventListener('click', () => {
     window.open('https://www.spotify.com/id-id/download/mac/');
})

andr.addEventListener('click', () => {
     window.open('https://play.google.com/store/apps/details?id=com.spotify.music&hl=pt_BR&pli=1');
})

iOS.addEventListener('click', () => {
     window.open('https://apps.apple.com/br/app/spotify-m%C3%BAsicas-e-podcasts/id324684580');
})