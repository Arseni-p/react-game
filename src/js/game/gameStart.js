import playSteps from '../sounds/playSteps';

export const gameStart = () => {
    let speedX = 0;
    let speedY = 0;
    let posStay = 5;
    let trexMoveImg = -100;
    let posCount = -100;
    let move = false;
    let moveDown = false;
    let jump = false;
    let dinoMoveOn;
    let dinoMoveDown;
    let posGround = 0;
    let posCactus;
    let speedGround = -1;
    let pointsCount = 0;
    const timeInterval = 2000;
    const paddingLeft = 50;
    const speedXPlus = 5;
    const speedXMinus = -5;
    const speedYPlus = 10;
    const speedYMinus = -10;
    const paddingRight = 10;
    const bottomPos = 100;
    const outHeight = 100;
    const gameDino = document.querySelector('.game__dino');
    const cactus = document.querySelector('.cactus');
    const ground = document.querySelector('.ground');
    const points = document.querySelector('.points');
    const startCactusPos = cactus.offsetLeft;
    posCactus = cactus.offsetLeft;

    function dinoMoving() {
      trexMoveImg += posCount;
      posCount *= -1;
      gameDino.style.backgroundPositionX = `${trexMoveImg}px`;
    }

    let groundMoveing = setInterval(() => {speedGround--}, timeInterval);
    let cactusMoveing = setInterval(() => {}, timeInterval);
    let pointsMoveing = setInterval(() => {
      pointsCount++;
      points.textContent = pointsCount;
    }, 1000);

      document.addEventListener('keydown', (event) => {
        event.preventDefault();
        if ((event.code === 'ArrowRight' || event.code === 'ArrowLeft') && window.location.pathname.slice(1) === 'game') {
          if (!move) {
            let action = 'run'
            playSteps(action)
            dinoMoveOn = setInterval(() => { dinoMoving() }, 100);
            move = true;
          }
        }
  
        if (event.code === 'ArrowRight') { 
          speedX = speedXPlus;
        }
        if (event.code === 'ArrowLeft') {
          speedX = speedXMinus;
        }
        function jumping(gameDino){
          if(gameDino.classList === "dino__jump--up"){return}
          gameDino.classList.add("dino__jump--up");
          setTimeout(() => {
              gameDino.classList.remove("dino__jump--up");
          }, 500);
      }

        if (event.code === 'ArrowUp' && window.location.pathname.slice(1) === 'game') {
          jumping(gameDino)
          if (!jump) {
            let action = 'jump';
            playSteps(action);
            jump = true;
          }
        }
      })
  
      document.addEventListener('keyup', (event) => {
        if (event.code === 'ArrowRight' || event.code === 'ArrowLeft') {
          speedX = 0;
          clearInterval(dinoMoveOn);
          gameDino.style.backgroundPositionX = `${posStay}px`;
          move = false;
        }
  
        if (event.code === 'ArrowUp') {
          jump = false;
        }
      });

    let posX = gameDino.offsetLeft;
    let posY = bottomPos;

    let gameOn = window.requestAnimationFrame(gameMoving);
    function gameMoving() {
      if (window.location.pathname.slice(1) !== 'game') {
        cancelAnimationFrame(gameOn);
      }

      posGround += speedGround;
      posCactus += speedGround;
      ground.style.backgroundPositionX = `${posGround}px`;
      cactus.style.left = `${posCactus}px`;
      if (cactus.offsetLeft < 0) {
        posCactus = startCactusPos;
        cactus.style.left = `${posCactus}px`;
      }
      
      if (gameDino.offsetLeft < 0) {
        posX = 0;
        gameDino.style.left = `${posX}px`;
      }
      posX +=speedX;
      gameDino.style.left = `${posX}px`;

      if (window.location.pathname.slice(1) === 'game') {
        if (
          cactus.offsetLeft < gameDino.offsetLeft + gameDino.offsetWidth
          ) {
          clearInterval(groundMoveing);
          clearInterval(cactusMoveing);
          clearInterval(pointsMoveing);
          gameDino.style.backgroundPositionX = '-300px'
          cancelAnimationFrame(gameOn);
        } else {
          window.requestAnimationFrame(gameMoving);
        } 
      }
    }
}

export default gameStart;