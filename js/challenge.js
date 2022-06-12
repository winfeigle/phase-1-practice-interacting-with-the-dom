const counter = document.querySelector('#counter')

const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')

const pauseBtn = document.querySelector('#pause')
const heartBtn = document.querySelector('#heart')

const submitBtn = document.querySelector('#submit')
const form = document.querySelector('#comment-form')

let isPaused = false;
let time = 0;





//PAUSE AND PLAY THE COUNTER
setInterval(() => {
    if(!isPaused){
        
        time += 1;
        counter.innerText = time;
    }
    }, 1000)

    function resume(){
        isPaused = false
        pauseBtn.innerText = 'pause'

        minusBtn.disabled = false
        plusBtn.disabled = false
        heartBtn.disabled = false
        submitBtn.disabled = false
    }
    function pause(){
        isPaused = true
        pauseBtn.innerText = 'resume'

        minusBtn.disabled = true
        plusBtn.disabled = true
        heartBtn.disabled = true
        submitBtn.disabled = true
    }

    pauseBtn.addEventListener('click', () => {
        isPaused === false ? pause() : resume()
    })


//ADD AND SUBTRACT FROM COUNTER
 plusBtn.addEventListener('click', () => {
    counter.innerText = time++;
 })

 minusBtn.addEventListener('click', () => {
    counter.innerText = time--;
 })








//POSTING LIKES TO THE DOM
const likesObj = {}

const postLike = () => {

    const li = document.createElement('li')
    let numLikes = 0;

    
    li.textContent = `${counter.textContent} has been liked ${numLikes + 1} times`
    document.querySelector('.likes').appendChild(li)

}

heart.addEventListener('click', postLike)



//POSTING COMMENTS
form.addEventListener('submit', (e) => {
    e.preventDefault()

    const comment = document.querySelector('#comment-input').value;

    const p = document.createElement('p')
    p.textContent = comment;

    document.querySelector('div#list').append(p)

    form.reset()
})
