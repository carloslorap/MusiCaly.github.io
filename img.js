const songs = [{
    id: '1',
    songname: `Alan Walker - Faded <div class="subtitle">Alan Walker</div>`,
    poster: "img/faded.jpg"
},
{
    id: '2',
    songname: `Alan Walker - Alone <div class="subtitle">Alan Walker</div>`,
    poster: "img/alone.jpg"

},
{
    id: '3',
    songname: `Alan Walker-Power  <div class="subtitle">Alan Walker</div>`,
    poster: "img/power.jpg"

},
{
    id: '4',
    songname: `Alan Walker - The Spectre <div class="subtitle">Alan Walker</div>`,
    poster: "img/spetrec.jpg"

},
{
    id: '5',
    songname: `Alan Walker - New Heart <div class="subtitle">Alan Walker</div>`,
    poster: "img/heart.jpg"

},
{
    id: '6',
    songname: `Despechá <div class="subtitle">Rosalia</div>`,
    poster: "img/12.jpg"

},
{
    id: '7',
    songname: `La Bachata  <div class="subtitle">Manuel Turizo</div>`,
    poster: "img/13.jpg"

},
{
    id: '8',
    songname: `Titi Me Pregunto  <div class="subtitle">Bad Bunny</div>`,
    poster: "img/14.jpg"

},
{
    id: '9',
    songname: `LOKERA  <div class="subtitle">Rauw Alejandro</div>`,
    poster: "img/15.jpg"

},
{
    id: '10',
    songname: `Ultra Solo  <div class="subtitle">Polima Wescoast</div>`,
    poster: "img/16.jpg"

},
{
    id: '11',
    songname: `La noche de anoche  <div class="subtitle">BadBunny y Rosalia</div>`,
    poster: "img/17.jpg"

},
{
    id: '12',
    songname: `Me Porto Bonito <div class="subtitle">BadBunny</div>`,
    poster: "img/18.jpg"

},


]

Array.from(document.getElementsByClassName('songItem')).forEach((element, i) => {
    element.getElementsByTagName('img')[0].src = songs[i].poster;
    element.getElementsByTagName('h5')[0].innerHTML = songs[i].songname;
});