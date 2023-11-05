var gameCanvas = document.getElementById('gameCanvas');
var Canvas = gameCanvas.getContext('2d');

function resizeCanvas() {
    var gameArea = document.getElementById('gameArea');
    var widthToHeight = 16 / 9;
    var newWidth = window.innerWidth;
    var newHeight = window.innerHeight;
    var newWidthToHeight = newWidth / newHeight;
    
    //newWidth = (newHeight / 9) * 16;
    gameArea.style.height = newHeight + 'px';
    gameArea.style.width = newWidth + 'px';

    gameCanvas.width = newWidth;
    gameCanvas.height = newHeight;
    Canvas.fillStyle = 'white';
    Canvas.fillRect(0, 0, gameCanvas.width, gameCanvas.height);
}

resizeCanvas();

const player = new Player({
    position: {
        x: 0,
        y: 0,
    },
    imageSrc: './img/idle.png',
    frameRate: 4,
    animations: {
        Idle: {
            imageSrc: './img/idle.png',
            frameRate: 4,
            frameBuffer: 24,
            loop: true
        },
        IdleLeft: {
            imageSrc: './img/idleLeft.png',
            frameRate: 4,
            frameBuffer: 24,
            loop: true
        },
        Walk: {
            imageSrc: './img/walk.png',
            frameRate: 3,
            frameBuffer: 10,
            loop: true
        },
        WalkLeft: {
            imageSrc: './img/walkLeft.png',
            frameRate: 3,
            frameBuffer: 10,
            loop: true
        },
        Painting: {
            imageSrc: './img/painting.png',
            frameRate: 4,
            frameBuffer: 8,
            loop: true,
            onComplete: () => {
                preventInput = false
                firstTime = true
            }
        }
    }
})

const mouse = {
    x: gameCanvas.width / 2,
    y: gameCanvas.height / 2,
    radius: 150 * (gameCanvas.height / 1080),
    onLink: "none"
}

const page = {
    main: true,
    menu: false,
    gallery: false,
}

function preShow() {
    page.main = false
    document.getElementById('fp-nav').style.display = "none";
    show()
}

function show() {
    page.menu = false
    page.gallery = true
    cursor.classList = "";
    button.style.visibility = "visible"
    button.style.mixBlendMode = "normal"
    button.innerHTML = "scroll to discovery"
    button.style.color = "#000"
    button.style.fontSize = "1rem"
    button.style.fontWeight = 400
    button.style.margin = "25px 0 0 100px"
    closebar.style.display = "block";
    content.style.display = "block"
    if (isMobile) joyDiv.style.display = "flex"
    if (mouse.onLink === "About") {
        text2 = aboutLink.text2
        setContextPos(aboutContext)
    } else if (mouse.onLink === "Project 1") {
        text2 = pharmacyLink.text2
        setContextPos(project1Context)
    } else if (mouse.onLink === "Project 2") {
        text2 = pedestrianLink.text2
        setContextPos(project2Context)
    } else if (mouse.onLink === "Competition") {
        text2 = competitionLink.text2
        setGalleryPos(competitionContext)
    } else if (mouse.onLink === "Activity") {
        text2 = activityLink.text2
        setGalleryPos(activityContext)
    } else if (mouse.onLink === "More") {
        text2 = moreLink.text2
        setGalleryPos(moreContext)
    }
}

let nav = document.getElementById('nav-icon')

nav.addEventListener('click', () => {
    nav.classList.toggle('open')
    joyDiv.style.display = "none"
    if (!page.menu) {
        page.main = false
        page.menu = true
    } else {
        page.main = true
        page.menu = false
        joyDiv.style.display = "flex"
    }
})

function beforeShow(page) {
    mouse.onLink = page
    nav.classList.toggle('open')
    document.getElementById('fp-nav').style.display = "none";
    show()
}

const keys = {
    ArrowRight: {
        pressed: false,
    },
    ArrowLeft: {
        pressed: false,
    },
}

const background_1 = new Sprite({
    position: {
        x: 0,
        y: 0,
    },
    scale: 3,
    imageSrc: './img/background-1.avif'
})
const background_2 = new Sprite({
    position: {
        x: 1920,
        y: 0,
    },
    scale: 3,
    imageSrc: './img/background-2.avif'
})
const background_3 = new Sprite({
    position: {
        x: 3840,
        y: 0,
    },
    scale: 3,
    imageSrc: './img/background-3.avif'
})
const background_4 = new Sprite({
    position: {
        x: 5760,
        y: 0,
    },
    scale: 3,
    imageSrc: './img/background-4.avif'
})
const background_5 = new Sprite({
    position: {
        x: 7680,
        y: 0,
    },
    scale: 3,
    imageSrc: './img/background-5.avif'
})
const background_6 = new Sprite({
    position: {
        x: 9600,
        y: 0,
    },
    scale: 3,
    imageSrc: './img/background-6.avif'
})
const background_7 = new Sprite({
    position: {
        x: 11520,
        y: 0,
    },
    scale: 3,
    imageSrc: './img/background-7.avif'
})
const background_8 = new Sprite({
    position: {
        x: 13440,
        y: 0,
    },
    scale: 3,
    imageSrc: './img/background-8.avif'
})
const background_9 = new Sprite({
    position: {
        x: 15360,
        y: 0,
    },
    scale: 3,
    imageSrc: './img/background-9.avif'
})
const background_10 = new Sprite({
    position: {
        x: 17280,
        y: 0,
    },
    scale: 3,
    imageSrc: './img/background-10.avif'
})

const layerBack2_1 = new Sprite({
    position: {
        x: 4544,
        y: 333,
    },
    imageSrc: './img/back2-1.avif'
})
const layerBack2_2 = new Sprite({
    position: {
        x: 5510,
        y: 457,
    },
    imageSrc: './img/back2-2.avif'
})
const layerBack2_3 = new Sprite({
    position: {
        x: 5945,
        y: 445,
    },
    imageSrc: './img/back2-3.avif'
})
const layerBack2_4 = new Sprite({
    position: {
        x: 8878,
        y: 457,
    },
    imageSrc: './img/back2-2.avif'
})
const layerBack2_5 = new Sprite({
    position: {
        x: 9394,
        y: 570,
    },
    imageSrc: './img/back2-4.avif'
})
const layerBack2_6 = new Sprite({
    position: {
        x: 9923,
        y: 570,
    },
    imageSrc: './img/back2-4.avif'
})
const layerBack2_7 = new Sprite({
    position: {
        x: 11366,
        y: 457,
    },
    imageSrc: './img/back2-2.avif'
})
const layerBack2_8 = new Sprite({
    position: {
        x: 12279,
        y: 445,
    },
    imageSrc: './img/back2-3.avif'
})
const layerBack2_9 = new Sprite({
    position: {
        x: 12649,
        y: 333,
    },
    imageSrc: './img/back2-1.avif'
})

const layerBack_1 = new Sprite({
    position: {
        x: 11157,
        y: 282,
    },
    imageSrc: './img/back-1.avif'
})
const layerBack_2 = new Sprite({
    position: {
        x: 3935,
        y: 354,
    },
    imageSrc: './img/back-2.avif'
})
const layerBack_3 = new Sprite({
    position: {
        x: 14413,
        y: 354,
    },
    imageSrc: './img/back-2.avif'
})
const layerBack_4 = new Sprite({
    position: {
        x: 9121,
        y: 512,
    },
    imageSrc: './img/back-3.avif'
})
const layerBack_5 = new Sprite({
    position: {
        x: 4882,
        y: 512,
    },
    imageSrc: './img/back-3.avif'
})
const layerBack_6 = new Sprite({
    position: {
        x: 10384,
        y: 216,
    },
    imageSrc: './img/back-4.avif'
})
const layerBack_7 = new Sprite({
    position: {
        x: 7209,
        y: 216,
    },
    imageSrc: './img/back-4.avif'
})
const layerBack_8 = new Sprite({
    position: {
        x: 7834,
        y: 367,
    },
    imageSrc: './img/back-5.avif'
})
const layerBack_9 = new Sprite({
    position: {
        x: 5664,
        y: 367,
    },
    imageSrc: './img/back-5.avif'
})
const layerBack_10 = new Sprite({
    position: {
        x: 13344,
        y: 367,
    },
    imageSrc: './img/back-5.avif'
})

const layerMiddleBack_1 = new Sprite({
    position: {
        x: 3840,
        y: 150,
    },
    imageSrc: './img/middleBack-1.avif'
})
const layerMiddleBack_2 = new Sprite({
    position: {
        x: 12720,
        y: 440,
    },
    imageSrc: './img/middleBack-2.avif'
})
const layerMiddleBack_3 = new Sprite({
    position: {
        x: 6030,
        y: 70,
    },
    imageSrc: './img/middleBack-3.avif'
})
const layerMiddleBack_4 = new Sprite({
    position: {
        x: 7354,
        y: 685,
    },
    imageSrc: './img/middleBack-4.webp'
})
const layerMiddleBack_5 = new Sprite({
    position: {
        x: 15180,
        y: 638,
    },
    imageSrc: './img/middleBack-5.webp'
})
const layerMiddleBack_6 = new Sprite({
    position: {
        x: 11400,
        y: 722,
    },
    imageSrc: './img/middleBack-6.webp'
})

const layerpharmacy = new Sprite({
    position: {
        x: 6230,
        y: 333,
    },
    imageSrc: './img/pharmacyShop.avif'
})

const aboutLink = new Sprite({
    position: {
        x: 4676,
        y: 400,
    },
    imageSrc: './img/about.avif',
    event: 'button',
    text: 'About',
    text2: 'About Me'
})

const pharmacyLink = new Sprite({
    position: {
        x: 7150,
        y: 494,
    },
    imageSrc: './img/pharmacy.avif',
    event: 'button',
    text: 'Project 1',
    text2: 'Searching | Thai Pharmacopoeia'
})

const pedestrianLink = new Sprite({
    position: {
        x: 8043,
        y: 296,
    },
    imageSrc: './img/pedestrian.png',
    event: 'button',
    text: 'Project 2',
    text2: 'Smart Pedestrian Button'
})

const competitionLink = new Sprite({
    position: {
        x: 10265,
        y: 133,
    },
    imageSrc: './img/competition.png',
    event: 'button',
    text: 'Competition',
    text2: 'Competition'
})

const activityLink = new Sprite({
    position: {
        x: 12054,
        y: 274,
    },
    imageSrc: './img/activity.png',
    event: 'button',
    text: 'Activity',
    text2: 'Activity'
})

const moreLink = new Sprite({
    position: {
        x: 14067,
        y: 166,
    },
    imageSrc: './img/more.png',
    event: 'button',
    text: 'More',
    text2: 'More'
})

const musician = new Sprite({
    position: {
        x: 12392,
        y: 555,
    },
    imageSrc: './img/musician.png',
    frameRate: 4,
    frameBuffer: 12,
    loop: true,
})

const layerMiddleFront_1 = new Sprite({
    position: {
        x: 9600,
        y: 731,
    },
    imageSrc: './img/middleFront-1.webp'
})
const layerMiddleFront_2 = new Sprite({
    position: {
        x: 11677,
        y: 685,
    },
    imageSrc: './img/middleFront-2.webp'
})
const layerMiddleFront_3 = new Sprite({
    position: {
        x: 14400,
        y: 678,
    },
    imageSrc: './img/middleFront-3.webp'
})
const layerMiddleFront_4 = new Sprite({
    position: {
        x: 12099,
        y: 459,
    },
    imageSrc: './img/middleFront-4.webp'
})

const pharmacist = new Sprite({
    position: {
        x: 6325,
        y: 620,
    },
    imageSrc: './img/pharmacist.png',
    frameRate: 4,
    frameBuffer: 12,
    loop: true,
})

const wigwagger = new Sprite({
    position: {
        x: 8110,
        y: 585,
    },
    imageSrc: './img/flagIdle.png',
    frameRate: 4,
    animations: {
        Idle: {
            imageSrc: './img/flagIdle.png',
            frameRate: 4,
            frameBuffer: 24,
            loop: true
        },
        FlagDown: {
            imageSrc: './img/flagDown.png',
            frameRate: 3,
            frameBuffer: 6,
            loop: false
        },
        FlagUp: {
            imageSrc: './img/flagUp.png',
            frameRate: 3,
            frameBuffer: 6,
            loop: false,
            onComplete: () => {
                wigwaggerState = 1
            }
        },
    }
})

const layerFront_1 = new Sprite({
    position: {
        x: 5348,
        y: 584,
    },
    imageSrc: './img/front-1.avif'
})
const layerFront_2 = new Sprite({
    position: {
        x: 11959,
        y: 255,
    },
    imageSrc: './img/front-2.avif'
})
const layerFront_3 = new Sprite({
    position: {
        x: 4095,
        y: 628,
    },
    imageSrc: './img/front-3.avif'
})
const layerFront_4 = new Sprite({
    position: {
        x: 13335,
        y: 662,
    },
    imageSrc: './img/front-4.webp'
})


const layerBrickFloor = new Sprite({
    position: {
        x: 8095,
        y: 795,
    },
    imageSrc: './img/brickfloor.png'
})
const layerfloor_1 = new Sprite({
    position: {
        x: 3840,
        y: 770,
    },
    imageSrc: './img/floor.avif'
})
const layerfloor_2 = new Sprite({
    position: {
        x: 5760,
        y: 770,
    },
    imageSrc: './img/floor.avif'
})
const layerfloor_3 = new Sprite({
    position: {
        x: 11520,
        y: 770,
    },
    imageSrc: './img/floor.avif'
})
const layerfloor_4 = new Sprite({
    position: {
        x: 13440,
        y: 770,
    },
    imageSrc: './img/floor.avif'
})
const layerheadFloorLeft = new Sprite({
    position: {
        x: 7680,
        y: 770,
    },
    imageSrc: './img/headFloorLeft.avif'
})
const layerheadFloorRight = new Sprite({
    position: {
        x: 11325,
        y: 770,
    },
    imageSrc: './img/headFloorRight.avif'
})
const layersideFloorLeft = new Sprite({
    position: {
        x: 3665,
        y: 784,
    },
    imageSrc: './img/sideFloorLeft.avif'
})
const layersideFloorRight = new Sprite({
    position: {
        x: 15360,
        y: 770,
    },
    imageSrc: './img/sideFloorRight.avif'
})
const layerbridgeLeft = new Sprite({
    position: {
        x: 0,
        y: 690,
    },
    imageSrc: './img/bridgeLeft.avif'
})
const layerbridgeRight = new Sprite({
    position: {
        x: 15360,
        y: 690,
    },
    imageSrc: './img/bridgeRight.avif'
})

const layerFront2_1 = new Sprite({
    position: {
        x: 7436,
        y: 248,
    },
    imageSrc: './img/front2-1.avif',
})
const layerFront2_2 = new Sprite({
    position: {
        x: 5728,
        y: 709,
    },
    imageSrc: './img/front2-2.avif',
})
const layerFront2_3 = new Sprite({
    position: {
        x: 11460,
        y: 729,
    },
    imageSrc: './img/front2-3.avif',
})
const layerFront2_4 = new Sprite({
    position: {
        x: 15094,
        y: 729,
    },
    imageSrc: './img/front2-3.avif',
})
const layerFront2_5 = new Sprite({
    position: {
        x: 3761,
        y: 690,
    },
    imageSrc: './img/front2-4.avif',
})
const layerFront2_6 = new Sprite({
    position: {
        x: 11971,
        y: 690,
    },
    imageSrc: './img/front2-5.avif',
})
const layerFront2_7 = new Sprite({
    position: {
        x: 14505,
        y: 736,
    },
    imageSrc: './img/front2-6.avif',
})

const camera = {
    position: {
        x: -(player.position.x - ((gameCanvas.width / 2) - (player.width / 8))),
        y: 0,
    }
}

let preventInput = false
let firstTime = false
let state = 1
let firstMove = false
let speed = 5;
let interact
let wigwaggerState = 1
var joy

function animate() {
    window.requestAnimationFrame(animate);
    Canvas.fillStyle = 'white';
    Canvas.fillRect(0, 0, gameCanvas.width, gameCanvas.height);
    
    Canvas.save()
    Canvas.translate(camera.position.x, 0)
    
    background_1.update()
    background_2.update()
    background_3.update()
    background_4.update()
    background_5.update()
    background_6.update()
    background_7.update()
    background_8.update()
    background_9.update()
    background_10.update()
    layerBack2_1.update()
    layerBack2_2.update()
    layerBack2_3.update()
    layerBack2_4.update()
    layerBack2_5.update()
    layerBack2_6.update()
    layerBack2_7.update()
    layerBack2_8.update()
    layerBack2_9.update()
    layerBack_1.update()
    layerBack_2.update()
    layerBack_3.update()
    layerBack_4.update()
    layerBack_5.update()
    layerBack_6.update()
    layerBack_7.update()
    layerBack_8.update()
    layerBack_9.update()
    layerBack_10.update()
    layerMiddleBack_1.update()
    layerMiddleBack_2.update()
    layerMiddleBack_3.update()
    layerMiddleBack_4.update()
    layerMiddleBack_5.update()
    layerMiddleBack_6.update()
    layerpharmacy.update()

    aboutLink.update()
    pharmacyLink.update()
    pedestrianLink.update()
    competitionLink.update()
    activityLink.update()
    moreLink.update()

    musician.update()
    layerMiddleFront_1.update()
    layerMiddleFront_2.update()
    layerMiddleFront_3.update()
    layerMiddleFront_4.update()
    pharmacist.update()
    wigwagger.update()

    player.checkForHorizontalCanvasCollision()
    player.update();

    layerFront_1.update()
    layerFront_2.update()
    layerFront_3.update()
    layerFront_4.update()
    layerBrickFloor.update()
    layerfloor_1.update()
    layerfloor_2.update()
    layerfloor_3.update()
    layerfloor_4.update()
    layerbridgeLeft.update()
    layerbridgeRight.update()
    layerheadFloorLeft.update()
    layerheadFloorRight.update()
    layersideFloorLeft.update()
    layersideFloorRight.update()
    layerFront2_1.update()
    layerFront2_2.update()
    layerFront2_3.update()
    layerFront2_4.update()
    layerFront2_5.update()
    layerFront2_6.update()
    layerFront2_7.update()

    player.velocity.x = 0;
    layerBack2_1.velocity.x = 0
    layerBack2_2.velocity.x = 0
    layerBack2_3.velocity.x = 0
    layerBack2_4.velocity.x = 0
    layerBack2_5.velocity.x = 0
    layerBack2_6.velocity.x = 0
    layerBack2_7.velocity.x = 0
    layerBack2_8.velocity.x = 0
    layerBack2_9.velocity.x = 0
    layerBack_1.velocity.x = 0
    layerBack_2.velocity.x = 0
    layerBack_3.velocity.x = 0
    layerBack_4.velocity.x = 0
    layerBack_5.velocity.x = 0
    layerBack_6.velocity.x = 0
    layerBack_7.velocity.x = 0
    layerBack_8.velocity.x = 0
    layerBack_9.velocity.x = 0
    layerBack_10.velocity.x = 0

    Canvas.restore()
}

animate()

function active() {
    window.requestAnimationFrame(active);

    if (!page.main || (aboutLink.distance >= mouse.radius && pharmacyLink.distance >= mouse.radius && pedestrianLink.distance >= mouse.radius && competitionLink.distance >= mouse.radius && activityLink.distance >= mouse.radius && moreLink.distance >= mouse.radius)) {
        cursor.classList = "";
        cursor.style.opacity = 0
    }
    
    if (cursor.classList.value === 'button') {
        cursor.addEventListener('click', preShow)
    } else {
        cursor.removeEventListener('click', preShow)
    }

    
    if (keys.ArrowRight.pressed && page.main) {
        if (!firstMove) {
            firstMove = true
            direction.style.opacity = 0
            setTimeout(() => {
                direction.style.display = "none"
            }, 600);
        }
        firstTime = false
        state = 1
        clearTimeout(interact)
        player.switchSprite('Walk')
        player.velocity.x = speed;
        player.lastDirection = 'right'
        player.shouldPanCameraToTheLeft({gameCanvas, camera})
    } else if (keys.ArrowLeft.pressed && page.main) {
        if (!firstMove) {
            firstMove = true
            direction.style.opacity = 0
            setTimeout(() => {
                direction.style.display = "none"
            }, 600);
        }
        firstTime = false
        state = 1
        clearTimeout(interact)
        player.switchSprite('WalkLeft')
        player.velocity.x = -speed;
        player.lastDirection = 'left'
        player.shouldPanCameraToTheRight({gameCanvas, camera})
    } else {
        if (state === 1) {
            state = 2
            if (player.lastDirection === 'right') player.switchSprite('Idle')
            else player.switchSprite('IdleLeft')
            interact = setTimeout(() => {
                if (player.hitbox.position.x >= aboutLink.position.x && player.hitbox.position.x + player.hitbox.width <= aboutLink.position.x + aboutLink.width) {
                    if (!firstTime) {
                        player.currentFrame = 0
                        preventInput = true
                        player.switchSprite('Painting')
                        player.currentAnimation.isActive = false
                    }
                }
            }, 2000);
        }
    }
    if (player.hitbox.position.x + player.hitbox.width >= aboutLink.position.x && player.hitbox.position.x <= aboutLink.position.x + aboutLink.width) {
        if (!preventInput) {
            let navBar = document.querySelector('.navbar.active');
            let currentNav = document.querySelector('.aboutNav');
            navBar.classList.remove('active');
            currentNav.classList.add('active');
        }
    }
    if (player.hitbox.position.x + player.hitbox.width >= layerpharmacy.position.x && player.hitbox.position.x <= layerpharmacy.position.x + layerpharmacy.width) {
        if (!preventInput) {
            let navBar = document.querySelector('.navbar.active');
            let currentNav = document.querySelector('.pharmacyNav');
            navBar.classList.remove('active');
            currentNav.classList.add('active');
        }
    }
    if (player.hitbox.position.x + player.hitbox.width >= pedestrianLink.position.x && player.hitbox.position.x <= pedestrianLink.position.x + pedestrianLink.width) {
        if (wigwaggerState === 1) {
            wigwaggerState = 2
            wigwagger.currentFrame = 0
            wigwagger.switchSprite('FlagDown')
        } 
        if (!preventInput) {
            let navBar = document.querySelector('.navbar.active');
            let currentNav = document.querySelector('.pharmacyNav');
            navBar.classList.remove('active');
            currentNav.classList.add('active');
        }  
    } else if (wigwaggerState === 2) {
        wigwaggerState = 3
        wigwagger.currentFrame = 0
        wigwagger.switchSprite('FlagUp')
        wigwagger.currentAnimation.isActive = false
    } else if (wigwaggerState === 1) wigwagger.switchSprite('Idle')
    if (player.hitbox.position.x + player.hitbox.width >= pedestrianLink.position.x && player.hitbox.position.x <= pedestrianLink.position.x + pedestrianLink.width) {
        if (!preventInput) {
            let navBar = document.querySelector('.navbar.active');
            let currentNav = document.querySelector('.pedestrianNav');
            navBar.classList.remove('active');
            currentNav.classList.add('active');
        }
    }
    if (player.hitbox.position.x + player.hitbox.width >= competitionLink.position.x && player.hitbox.position.x <= competitionLink.position.x + competitionLink.width) {
        if (!preventInput) {
            let navBar = document.querySelector('.navbar.active');
            let currentNav = document.querySelector('.competitionNav');
            navBar.classList.remove('active');
            currentNav.classList.add('active');
        }
    }
    if (player.hitbox.position.x + player.hitbox.width >= activityLink.position.x && player.hitbox.position.x <= activityLink.position.x + activityLink.width) {
        if (!preventInput) {
            let navBar = document.querySelector('.navbar.active');
            let currentNav = document.querySelector('.activityNav');
            navBar.classList.remove('active');
            currentNav.classList.add('active');
        }
    }
    if (player.hitbox.position.x + player.hitbox.width >= moreLink.position.x && player.hitbox.position.x <= moreLink.position.x + moreLink.width) {
        if (!preventInput) {
            let navBar = document.querySelector('.navbar.active');
            let currentNav = document.querySelector('.moreNav');
            navBar.classList.remove('active');
            currentNav.classList.add('active');
        }
    }

    if (joy !== undefined && !preventInput) {
        if (joy.GetX() > 0) {
            let walkR = setInterval(() => {
                keys.ArrowRight.pressed = true
                if(joy.GetX() <= 0) {
                    clearInterval(walkR);
                    keys.ArrowRight.pressed = false
                }
            }, 50);
        }
        else if (joy.GetX() < 0) {
            let walkL = setInterval(() => {
                keys.ArrowLeft.pressed = true
                if(joy.GetX() >= 0) {
                    clearInterval(walkL);
                    keys.ArrowLeft.pressed = false
                }
                clearInterval(walkL);
            }, 50);
        }
        else {
            keys.ArrowRight.pressed = false
            keys.ArrowLeft.pressed = false
        }
    }
}
active()

window.addEventListener('keydown', (event) => {
    if (!preventInput) {
        switch (event.key) {
            case 'ArrowRight':
            keys.ArrowRight.pressed = true
            break
            case 'ArrowLeft':
            keys.ArrowLeft.pressed = true
            break
        }
    }
})

window.addEventListener('keyup', (event) => {
    if (!preventInput) {
        switch (event.key) {
            case 'ArrowRight':
            keys.ArrowRight.pressed = false
            break
            case 'ArrowLeft':
            keys.ArrowLeft.pressed = false
            break
        }
    }
})

function teleport(place, e) {
    if (!preventInput) {
        preventInput = true;
        onWarp = true;
        let navBar = document.querySelector('.navbar.active');
        navBar.classList.remove('active');
        e.classList.add('active');
        speed = 10;
        if (player.position.x > place) {
            keys.ArrowLeft.pressed = true
            warp = setInterval(() => {
                if (player.position.x <= place) {
                    clearInterval(warp);
                    keys.ArrowLeft.pressed = false
                    speed = 5;
                    preventInput = false;
                }
            }, 50);
        }
        else if (player.position.x < place) {
            keys.ArrowRight.pressed = true
            warp = setInterval(() => {
                if (player.position.x >= place) {
                    clearInterval(warp);
                    keys.ArrowRight.pressed = false
                    speed = 5;
                    preventInput = false;
                }
            }, 50);
        }
    }  
}

function updateSize() {
    resizeCanvas()
    mouse.x = gameCanvas.width / 2
    mouse.y = gameCanvas.height / 2
    mouse.radius = 150 * (gameCanvas.height / 1080)
    background_1.updateSize()
    background_2.updateSize()
    background_3.updateSize()
    background_4.updateSize()
    background_5.updateSize()
    background_6.updateSize()
    background_7.updateSize()
    background_8.updateSize()
    background_9.updateSize()
    background_10.updateSize()
    layerBack2_1.updateSize()
    layerBack2_2.updateSize()
    layerBack2_3.updateSize()
    layerBack2_4.updateSize()
    layerBack2_5.updateSize()
    layerBack2_6.updateSize()
    layerBack2_7.updateSize()
    layerBack2_8.updateSize()
    layerBack2_9.updateSize()
    layerBack_1.updateSize()
    layerBack_2.updateSize()
    layerBack_3.updateSize()
    layerBack_4.updateSize()
    layerBack_5.updateSize()
    layerBack_6.updateSize()
    layerBack_7.updateSize()
    layerBack_8.updateSize()
    layerBack_9.updateSize()
    layerBack_10.updateSize()
    layerMiddleBack_1.updateSize()
    layerMiddleBack_2.updateSize()
    layerMiddleBack_3.updateSize()
    layerMiddleBack_4.updateSize()
    layerMiddleBack_5.updateSize()
    layerMiddleBack_6.updateSize()
    layerpharmacy.updateSize()
    aboutLink.updateSize()
    pharmacyLink.updateSize()
    pedestrianLink.updateSize()
    competitionLink.updateSize()
    activityLink.updateSize()
    moreLink.updateSize()
    musician.updateSize()
    layerMiddleFront_1.updateSize()
    layerMiddleFront_2.updateSize()
    layerMiddleFront_3.updateSize()
    layerMiddleFront_4.updateSize()
    pharmacist.updateSize()
    wigwagger.updateSize()
    player.updateSize()
    layerFront_1.updateSize()
    layerFront_2.updateSize()
    layerFront_3.updateSize()
    layerFront_4.updateSize()
    layerBrickFloor.updateSize()
    layerfloor_1.updateSize()
    layerfloor_2.updateSize()
    layerfloor_3.updateSize()
    layerfloor_4.updateSize()
    layerbridgeLeft.updateSize()
    layerbridgeRight.updateSize()
    layerheadFloorLeft.updateSize()
    layerheadFloorRight.updateSize()
    layersideFloorLeft.updateSize()
    layersideFloorRight.updateSize()
    layerFront2_1.updateSize()
    layerFront2_2.updateSize()
    layerFront2_3.updateSize()
    layerFront2_4.updateSize()
    layerFront2_5.updateSize()
    layerFront2_6.updateSize()
    layerFront2_7.updateSize()
    camera.position.x = - (player.position.x - ((gameCanvas.width / 2) - (player.width / 2)))
}

window.addEventListener('resize', () => {
    updateSize()
});
window.addEventListener('orientationchange', () => {
    updateSize()
});