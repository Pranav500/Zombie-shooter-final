var bg,bgImg, bgMusic, homeScreen, skinsScreen, zombiedexScreen, controlScreen;
var manequin, manequin2, manequin3, manequin4, manequin5;
var soldierImg, player, shooterImg, spaceRaiderImg, agentImg;
var zombie, zombieGroup, zombieAni, allGroup;
var armouredZombie, armouredZombieImg, armouredZombieHurt, armouredZombieGroup;
var giantZombie, giantZombieGroup, giantZombieAni, giantZombieHurt;
var fastZombie, fastZombieAni, fastZombieGroup;
var bullet, bulletImg, bulletGroup;
var scrolldex, scrolldexImg, zombRight, zombLeft;
var boss, bossImg, bossGroup, bossHurt;
var scroll, scrollImg, selected, selectedImg;
var play, playImg;
var mute, on, off;
var arrowRight, arrowLeft, arrowRightImg, arrowLeftImg;
var freeze, freezeImg, freezeGrey;
var heart5, heart4, heart3, heart2, heart1, heart, extraLife, extraLife;
var maximumMessage, maximumImage;
var explosion, win, lose;
var skins, skinsImg, home, homeImg, zombiedex, zombiedexImg, controls, controlsImg;
var retry, retryImg;
var invisWall;
var music = 2;
var pages = 1;
var gameState = 0;
var hurtTimer = 2;
var hearts = 3;
var timer = 0;
var spawning = 0;
var cooldown = 3;
var freezeTimer = 10;
var giantCount = 0;
var bossCount = 0;
var armourCount = 0;
var score = 0;

function preload(){
  
  spaceRaiderImg = loadImage("spaceRaider.png")
  shooterImg = loadImage("shooter.png")
  armouredZombieImg = loadImage("armouredZombie.png")
  armouredZombieHurt = loadImage("armouredZombieHurt.png")
  skinsScreen = loadImage("skinsScreen.png")
  agentImg = loadImage("agent.png")
  soldierImg = loadImage("soldier.png")
  retryImg = loadImage("reset.png")
  off = loadImage("soundOff.jpg")
  on = loadImage("soundOn.jpg")
  playImg = loadImage("play.png")
  selectedImg = loadImage("selected.png")
  homeImg = loadImage("home.png")
  controlsImg = loadImage("controls.png")
  controlScreen = loadImage("controlScreen.png")
  scrollImg = loadImage("scroll.png")
  bossImg = loadImage("boss.png")
  freezeImg = loadImage("freeze.png")
  skinsImg = loadImage("skins.png")
  zombiedexImg = loadImage("zombieDex.png")
  freezeGrey = loadImage("freezeGrey.png")
  scrolldexImg = loadImage("zombScroll.png")

  heart3 = loadImage("heart_3.png")
  heart2 = loadImage("heart_2.png")
  heart1 = loadImage("heart_1.png")
  heart4 = loadImage("heart_4.png")
  heart5 = loadImage("heart_5.png")
  maximumImage = loadImage("heart_message.png")

  arrowRightImg = loadImage("arrowRight.png")
  arrowLeftImg = loadImage("arrowLeft.png")

  zombieAni = loadAnimation("zombie3.png","zombie4.png")
  giantZombieAni = loadImage("GiantZombie.png")
  fastZombieAni = loadImage("FastZombie.png")
  bgImg = loadImage("Background.png")
  homeScreen = loadImage("homeScreen.png")
  bulletImg = loadImage("bullet.png")
  zombiedexScreen = loadImage("zombieScreen.png")

  bgMusic = loadSound("bgMusic.mp3")
  explosion = loadSound("explosion.mp3")
  lose = loadSound("lose.mp3")
}

function setup() {
  
  createCanvas(windowWidth - 20,windowHeight - 20);
  bg = createSprite(displayWidth/2-20,displayHeight/2 - 95,20,20)
  bg.addImage("bg",bgImg)
  bg.addImage("skin",skinsScreen)
  bg.addImage("home",homeScreen)
  bg.addImage("controler",controlScreen)
  bg.addImage("zombiedex",zombiedexScreen)
  bg.scale = 1.7;
  bgMusic.play()
  
  zombieGroup = new Group();
  giantZombieGroup = new Group();
  fastZombieGroup = new Group();
  bulletGroup = new Group();
  bossGroup = new Group();
  armouredZombieGroup = new Group();
  extraLifeGroup = new Group();
  allGroup = new Group();

  player = createSprite(200, displayHeight-300, 50, 50);
  player.addImage("shooter",shooterImg)
  player.addImage("soldier",soldierImg)
  player.addImage("spaceRaider",spaceRaiderImg)
  player.addImage("agent", agentImg)
  player.scale = 0.3

  maximumMessage = createSprite(100 ,height - 70, 20,20)
  maximumMessage.addImage("message", maximumImage);
  maximumMessage.scale = 0.4;
  maximumMessage.visible = false;

  scroll = createSprite(width - 150, 50)
  scroll.addImage("scroll", scrollImg)
  scroll.scale = 0.2;

  freeze = createSprite(width - 100, height - 70, 20, 20)
  freeze.addImage("freeze", freezeImg);
  freeze.addImage("freezing", freezeGrey);
  freeze.scale = 0.2;

  invisWall = createSprite(20,0,5,height + 8000);
  invisWall.visible = false

  heart = createSprite(100,50,20,20);
  heart.scale = 0.2;
  heart.addImage("heart",heart1)
  heart.addImage("hearts",heart2)
  heart.addImage("heartss",heart3)
  heart.addImage("heartsss",heart4)
  heart.addImage("heartssss",heart5)

  retry = createSprite(70,100,20,20)
  retry.addImage("reset",retryImg)
  retry.scale = 0.1;

  skins = createSprite(70,height - 50,20,20);
  skins.addImage("skins",skinsImg)
  skins.scale = 0.4;
  home = createSprite(70,height - 280,20,20)
  home.addImage("homer",homeImg)
  home.scale = 0.4;
  zombiedex = createSprite(70,height - 130,20,20)
  zombiedex.addImage("zombs",zombiedexImg)
  zombiedex.scale = 0.4;
  controls = createSprite(70,height - 210,20,20)
  controls.addImage("controls",controlsImg)
  controls.scale = 0.4;

  mute = createSprite(130,100,20,20)
  mute.addImage("on",on)
  mute.addImage("off",off)
  mute.changeImage("on",on)
  mute.scale = 0.1;

  play = createSprite(width/2, height/2 + 100, 20,20)
  play.addImage("play",playImg)
  play.scale = 0.3;

  selected = createSprite(width/2, height/2 + 200, 20, 20)
  selected.addImage("selected", selectedImg)
  selected.scale = 0.1;

  scrolldex = createSprite(width/2,height/2 + 80,20,20)
  scrolldex.addImage("vertical",scrolldexImg)
  scrolldex.scale = 0.5;

  zombRight = createSprite((width/4)*3 + 100,height/2,20,20)
  zombRight.addAnimation("zombie",zombieAni);
  zombRight.addImage("giantZombie",giantZombieAni);
  zombRight.addImage("FastZombie",fastZombieAni);
  zombRight.addImage("ouch", armouredZombieHurt);
  zombRight.addImage("boss",bossImg);

  zombLeft = createSprite(width/4 - 100,height/2,20,20)
  zombLeft.addAnimation("zombie",zombieAni);
  zombLeft.addImage("giantZombie",giantZombieAni);
  zombLeft.addImage("FastZombie",fastZombieAni);
  zombLeft.addImage("armour",armouredZombieImg);
  zombLeft.addImage("boss",bossImg);

  arrowRight = createSprite(width/2 + 260, height/2 + 80,20,20)
  arrowRight.addImage("right",arrowRightImg)
  arrowRight.scale = 0.4;

  arrowLeft = createSprite(width/2 - 260, height/2 + 80,20,20)
  arrowLeft.addImage("left",arrowLeftImg)
  arrowLeft.scale = 0.4;

  manequin = createSprite(width/2, height/2 + 50, 20,20)
  manequin.addImage("shooter", shooterImg)
  manequin.addImage("soldier", soldierImg)
  manequin.addImage("spaceRaider", spaceRaiderImg)
  manequin.addImage("agent", agentImg)
  manequin.scale = 1.2;
  manequin2 = createSprite(width/2 + 400, height/2 + 50, 20,20)
  manequin2.addImage("soldier", soldierImg)
  manequin2.scale = 0.8
  manequin3 = createSprite(width/2 - 200, height/2 + 50, 20,20)
  manequin3.addImage("shooter", shooterImg)
  manequin3.scale = 0.8;
  manequin4 = createSprite(width/2 + 200, height/2 + 50, 20, 20)
  manequin4.addImage("spaceRaider", spaceRaiderImg)
  manequin4.scale = 0.8
  manequin5 = createSprite(width/2 - 400, height/2 + 50, 20, 20)
  manequin5.addImage("agent", agentImg)
  manequin5.scale = 0.8
  freezeTimer = 15;
}  

function draw() {
  background(0);
  drawSprites();
  cooldownTimer();

  if (mousePressedOver(skins)) {
    gameState = 2
  }
  if (mousePressedOver(home)) {
    gameState = 0
  }
  if (mousePressedOver(controls)) {
    gameState = 3
  }
  if (mousePressedOver(zombiedex)) {
    gameState = 4
  }

  if (gameState === 4) {
    bg.changeImage("zombiedex",zombiedexScreen)
    bg.scale = 1.4;
    play.visible = false;
    manequin.visible = false;
    manequin2.visible = false;
    manequin3.visible = false;
    manequin4.visible = false;
    manequin5.visible = false;
    selected.visible = false;

    if (mousePressedOver(arrowRight) && pages <= 4 && cooldown === 0) {
      pages += 1;
      cooldown = 2;
    }
    if (mousePressedOver(arrowLeft) && pages >= 2 && cooldown === 0) {
      pages -= 1;
      cooldown = 2;
    }

    zombRight.addAnimation("zombie",zombieAni);
    zombRight.addImage("giantZombie",giantZombieAni);
    zombRight.addImage("FastZombie",fastZombieAni);
    zombRight.addImage("ouch", armouredZombieHurt);
    zombRight.addImage("boss",bossImg);

    if (pages === 1) {
      zombLeft.changeAnimation("zombie",zombieAni);
      zombRight.changeAnimation("zombie",zombieAni);
      zombLeft.scale = 0.15;
      zombRight.scale = 0.15;
      fill("black")
      textSize(20)
      text("THE BASIC ZOMBIE", width/2 - 170, height/2 + 40)
      text("THAT WILL SPAWN REGULARLY", width/2 - 170, height/2 + 60)
      text("HE HAS A MOVEMENT SPEED OF 3", width/2 - 170, height/2 + 80)
      text("AND 1 HITPOINTS", width/2 - 170, height/2 + 100)
      text("HE WILL ONLY SPAWN", width/2 - 170, height/2 + 120)
      text("UNTIL YOU REACH 500 POINTS", width/2 - 170, height/2 + 140)
      text("HE REWARDS YOU WITH 10 POINTS", width/2 - 170, height/2 + 160)
    }
    if (pages === 2) {
      zombRight.changeImage("FastZombie",fastZombieAni);
      zombLeft.changeImage("FastZombie",fastZombieAni);
      zombLeft.scale = 0.7;
      zombRight.scale = 0.7;
      fill("black")
      textSize(20)
      text("A FAST ZOMBIE", width/2 - 170, height/2 + 40)
      text("THAT WILL SPAWN QUITE REGULARLY", width/2 - 170, height/2 + 60)
      text("HE HAS A MOVEMENT SPEED OF 5", width/2 - 170, height/2 + 80)
      text("AND 1 HITPOINTS", width/2 - 170, height/2 + 100)
      text("HE REWARDS YOU WITH 20 POINTS", width/2 - 170, height/2 + 120)
    }
    if (pages === 3) {
      zombRight.changeImage("giantZombie",giantZombieAni);
      zombLeft.changeImage("giantZombie",giantZombieAni);
      zombLeft.scale = 0.6;
      zombRight.scale = 0.6;
      fill("black")
      textSize(20)
      text("A GIANT ZOMBIE", width/2 - 170, height/2 + 40)
      text("THAT WILL SPAWN QUITE RARELY", width/2 - 170, height/2 + 60)
      text("HE HAS A MOVEMENT SPEED OF 1", width/2 - 170, height/2 + 80)
      text("AND 3 HITPOINTS", width/2 - 170, height/2 + 100)
      text("HE REWARDS YOU WITH 40 POINTS", width/2 - 170, height/2 + 120)
    }
    if (pages === 4) {
      zombRight.changeImage("ouch", armouredZombieHurt);
      zombLeft.changeImage("armour",armouredZombieImg);
      zombLeft.scale = 0.9;
      zombRight.scale = 0.9;
      fill("black")
      textSize(20)
      text("AN ARMOURED ZOMBIE", width/2 - 170, height/2 + 40)
      text("THAT WILL SPAWN REGULARLY", width/2 - 170, height/2 + 60)
      text("HE HAS A MOVEMENT SPEED OF 3", width/2 - 170, height/2 + 80)
      text("AND 2 HITPOINTS", width/2 - 170, height/2 + 100)
      text("BUT HE WILL ONLY SPAWN", width/2 - 170, height/2 + 120)
      text("AFTER YOU REACH 500 POINTS", width/2 - 170, height/2 + 140)
      text("HE REWARDS YOU WITH 10 POINTS", width/2 - 170, height/2 + 160)
    }
    if (pages === 5) {
      zombRight.changeImage("boss",bossImg);
      zombLeft.changeImage("boss",bossImg);
      zombLeft.scale = 0.5;
      zombRight.scale = 0.5;
      fill("black")
      textSize(20)
      text("THE BOSS ZOMBIE", width/2 - 170, height/2 + 40)
      text("THAT WILL SPAWN VERY RARELY", width/2 - 170, height/2 + 60)
      text("HE HAS A MOVEMENT SPEED OF 1", width/2 - 170, height/2 + 80)
      text("AND 10 HITPOINTS", width/2 - 170, height/2 + 100)
      text("HE REWARDS YOU WITH 200 POINTS", width/2 - 170, height/2 + 120)
    }
  }
  if (gameState === 4) {
    scrolldex.visible = true;
    zombRight.visible = true;
    zombLeft.visible = true;
    arrowRight.visible = true;
    arrowLeft.visible = true;
  }
  else {
    scrolldex.visible = false;
    zombRight.visible = false;
    zombLeft.visible = false;
    arrowRight.visible = false;
    arrowLeft.visible = false;
  }

  if (gameState === 3) {
    bg.changeImage("controler",controlScreen)
    bg.scale = 1.2
    manequin4.visible = false;
    manequin5.visible = false;
    manequin.visible = false;
    manequin2.visible = false;
    manequin3.visible = false;
    selected.visible = false;
    play.visible = false;
  }

  if (gameState === 2) {
    bg.changeImage("skin",skinsScreen)
    manequin4.visible = true;
    selected.visible = true;
    manequin5.visible = true;
    manequin.visible = true;
    manequin2.visible = true;
    manequin3.visible = true;
    play.visible = false;

    if (mousePressedOver(manequin2)) {
      manequin.changeImage("soldier",soldierImg)
      player.changeImage("soldier",soldierImg)
    }
    if (mousePressedOver(manequin3)) {
      manequin.changeImage("shooter",shooterImg)
      player.changeImage("shooter",shooterImg)
    }
    if (mousePressedOver(manequin4)) {
      manequin.changeImage("spaceRaider",spaceRaiderImg)
      player.changeImage("spaceRaider",spaceRaiderImg)
    }
    if (mousePressedOver(manequin5)) {
      manequin.changeImage("agent",agentImg)
      player.changeImage("agent",agentImg)
    }
  }
  else  if (gameState === 0){
    manequin4.visible = false;
    manequin5.visible = false;
    manequin.visible = false;
    manequin2.visible = false;
    manequin3.visible = false;
    selected.visible = false;
  }

  if (gameState === 0) {
    bg.changeImage("home", homeScreen)
    bg.scale = 1.4;

    selected.visible = false;
    skins.visible = true;
    play.visible = true;
    heart.visible = false;
    player.visible = false;
    scroll.visible = false;
    freeze.visible = false;
    spawning = 1;
    timer = 5;

    if (mousePressedOver(play)) {
      gameState = 1;
      spawning = 1;
      timer = 0;
    }
  }

  if (spawning === 0) {
    if (score < 500) {
      createZombies();
    }
    else {
      createArmouredZombies();
    }
    createGiantZombies();
    createFastZombies();
    createBoss();
  }

  if(!bgMusic.isPlaying() && music === 1) {
    bgMusic.play();
  }

  if (music === 2) {
    mute.changeImage("off", off)
  }
  else if (music === 1) {
    mute.changeImage("on", on)
  }

  if(music === 1 && mousePressedOver(mute)) {
    music = 2;
    console.log("working")
  }
  if(music === 2 && mousePressedOver(mute)) {
    music = 1;
  }

  if (mousePressedOver(retry)){
    window.location.reload();
  }
 
  if (gameState === 1) {
    bg.changeImage("bg", bgImg)
    bg.scale = 1.7;
    console.log(freezeTimer)

    manequin4.visible = false;
    manequin5.visible = false;
    manequin.visible = false;
    manequin2.visible = false;
    manequin3.visible = false;
    play.visible = false;
    controls.visible = false;
    skins.visible = false;
    zombiedex.visible = false;
    home.visible = false;
    heart.visible = true;
    player.visible = true;
    scroll.visible = true;
    freeze.visible = true;

    if (hearts === 5) {
      heart.changeImage("heartssss",heart5)
    }
    if (hearts === 4) {
      heart.changeImage("heartsss",heart4)
    }
    if (hearts === 3) {
      heart.changeImage("heartss",heart3)
    }
    if (hearts === 2) {
      heart.changeImage("hearts",heart2)
    }
    if (hearts === 1) {
      heart.changeImage("heart",heart1)
    }
    if (hearts <= 0) {
      heart.visible = false;
      spawning = 1;
      timer = 5;
      gameOver();
    }

    if (allGroup.isTouching(invisWall)) {
      hearts -= 1;
      lose.play();
      allGroup.destroyEach()
    }

    freezeTimerCooldown();
    TimerCooldown();

    if (mousePressedOver(freeze) && freezeTimer === 0 && timer === 0) {
      timer = 5
      if (timer > 0){
        allGroup.setVelocityXEach(0)
        spawning = 1
        freezeTimer = 15;
      }
    }
    if (timer === 0) {
      spawning = 0;
      zombieGroup.setVelocityXEach(-3)
      armouredZombieGroup.setVelocityXEach(-3)
      fastZombieGroup.setVelocityXEach(-5)
      giantZombieGroup.setVelocityXEach(-1)
      bossGroup.setVelocityXEach(-1)
    }

    if(keyDown("UP_ARROW")||keyDown("w")){
      player.y = player.y-5
    }
    if(keyDown("DOWN_ARROW")||keyDown("s")){
      player.y = player.y+5
    }

    if(keyWentDown("space") && cooldown === 0){
      shootBullet();
      cooldown = 3;
    }

    if (freezeTimer === 0) {
      freeze.changeImage("freeze", freezeImg)
    }
    else if(freezeTimer > 0) {
      freeze.changeImage("freezing", freezeGrey)
    }

    if(zombieGroup.isTouching(bulletGroup)) {
      for(var i = 0; i < zombieGroup.length; i++) {
        var b = zombieGroup[i].x;
        var c = zombieGroup[i].y;
        for(var j = 0; j < bulletGroup.length; j++){
          if(zombieGroup[i].isTouching(bulletGroup[j])) {
            zombieGroup[i].destroy();
            bulletGroup[j].destroy();
            score += 10;
            explosion.play()
          }
          var a = Math.round(random(1,40))
          if (a === 1) {
            extraLife = createSprite(b,c,20,20);
            extraLife.addImage("heart",heart1);
            extraLife.scale = 0.2;
            extraLifeGroup.add(extraLife)
            extraLifeGroup.setVelocityXEach(-1)
          } 
        }
      }
    }
    for(var j = 0; j < bulletGroup.length; j++){
      for(var k = 0; k < extraLifeGroup.length; k++) {
        if (bulletGroup[j].isTouching(extraLifeGroup[k]) && hearts < 5) {
          extraLifeGroup[k].destroy();
          bulletGroup[j].destroy();
          hearts += 1;
          explosion.play();
        }
      }
    }

    if (hearts === 5){
      maximumMessage.visible = true;
    }
    else {
      maximumMessage.visible = false;
    }


    if(fastZombieGroup.isTouching(bulletGroup)) {
      for(var i = 0; i < fastZombieGroup.length; i++) {
        var b = fastZombieGroup[i].x;
        var c = fastZombieGroup[i].y;
        for(var j = 0; j < bulletGroup.length; j++){
          if(fastZombieGroup[i].isTouching(bulletGroup[j])) {
            fastZombieGroup[i].destroy();
            bulletGroup[j].destroy();
            score += 20;
            explosion.play()
            var a = Math.round(random(1,30))
            if (a === 1) {
              extraLife = createSprite(b,c,20,20);
              extraLife.addImage("heart",heart1);
              extraLife.scale = 0.2;
              extraLifeGroup.add(extraLife)
              extraLifeGroup.setVelocityXEach(-1)
            }
          }
        }
      }
    }

    if(giantZombieGroup.isTouching(bulletGroup)) {
      for(var i = 0; i < giantZombieGroup.length; i++) {
        for(var j = 0; j < bulletGroup.length; j++){
          if(giantZombieGroup[i].isTouching(bulletGroup[j])) {
            bulletGroup[j].destroy();
            giantCount += 1
            if (giantCount === 3) {
              giantZombieGroup[i].destroy();
              giantCount = 0
              score += 40
            }
            var a = Math.round(random(1,20))
            if (a === 1) {
              extraLife = createSprite(b,c,20,20);
              extraLife.addImage("heart",heart1);
              extraLife.scale = 0.2;
              extraLifeGroup.add(extraLife)
              extraLifeGroup.setVelocityXEach(-1)
            }
          }
        }
      }
    }

    for(var i = 0; i < armouredZombieGroup.length; i++) {
      for(var j = 0; j < bulletGroup.length; j++){
        if(armouredZombieGroup[i].isTouching(bulletGroup[j])) {
          bulletGroup[j].destroy();
          armourCount += 1
          armouredZombieGroup[i].changeImage("ouch", armouredZombieHurt)
          if (armourCount === 2) {
            armouredZombieGroup[i].destroy();
            armourCount = 0
            score += 10
            var a = Math.round(random(1,40))
            if (a === 1) {
              extraLife = createSprite(b,c,20,20);
              extraLife.addImage("heart",heart1);
              extraLife.scale = 0.2;
              extraLifeGroup.add(extraLife)
              extraLifeGroup.setVelocityXEach(-1)
              }
            }
          }
        }
      }

    if(bossGroup.isTouching(bulletGroup)) {
      for(var i = 0; i < bossGroup.length; i++) {
        var b = bossGroup[i].x;
        var c = bossGroup[i].y;
        for(var j = 0; j < bulletGroup.length; j++){
          if(bossGroup[i].isTouching(bulletGroup[j])) {
            bulletGroup[j].destroy();
            bossCount += 1;
            explosion.play()
            if (bossCount === 10) {
              bossGroup[i].destroy();
              bossCount = 0;
              score += 200;
              var a = Math.round(random(1,20))
              if (a === 1) {
                extraLife = createSprite(b,c,20,20);
                extraLife.addImage("heart",heart1);
                extraLife.scale = 0.2;
                extraLifeGroup.add(extraLife)
                extraLifeGroup.setVelocityXEach(-1)
              } 
            } 
          }
        }
      }
    }
    textSize(25)
    fill("black");
    textFont("Times New Roman")
    strokeWeight(3)
    stroke("black")
    text("SCORE:" + score, width - 205, 55)
  }
}

function createZombies() {
  if (frameCount % 80 === 0) {
    var zombie = createSprite(width - 100,Math.round(random(100,height - 100)),50,50)
    zombie.addAnimation("zombie",zombieAni)
    zombie.scale = 0.04;
    zombieGroup.add(zombie);
    allGroup.add(zombie)
    zombieGroup.setVelocityXEach(-3)
  }
}

function createArmouredZombies() {
  if (frameCount % 80 === 0) {
    var armouredZombie = createSprite(width - 100,Math.round(random(100,height - 100)),50,50)
    armouredZombie.addImage("ouch", armouredZombieHurt)
    armouredZombie.addImage("armour",armouredZombieImg)
    armouredZombie.changeImage("armour",armouredZombieImg)
    armouredZombie.scale = 0.3;
    armouredZombieGroup.add(armouredZombie);
    allGroup.add(armouredZombie)
    armouredZombieGroup.setVelocityXEach(-3)
  }
}

function createFastZombies() {
  if (frameCount % 200 === 0) {
    var fastZombie = createSprite(width - 100,Math.round(random(100,height - 100)),50,50)
    fastZombie.addImage("FastZombie",fastZombieAni)
    fastZombie.scale = 0.2;
    fastZombieGroup.add(fastZombie);
    allGroup.add(fastZombie);
    fastZombieGroup.setVelocityXEach(-5)
  }
}

function createGiantZombies() {
  if (frameCount % 500 === 0) {
    var giantZombie = createSprite(width - 100,Math.round(random(100,height - 100)),50,50)
    giantZombie.addImage("giantZombie",giantZombieAni);
    giantZombie.scale = 0.3;
    giantZombieGroup.add(giantZombie);
    allGroup.add(giantZombie);
    giantZombieGroup.setVelocityXEach(-1)
  }
}

function shootBullet() {
  bullet = createSprite(200,player.y,20,20)
  bullet.addImage("bullet",bulletImg);
  bullet.scale = 0.07;
  bulletGroup.add(bullet)
  bulletGroup.setVelocityXEach(15)
  cooldown = 2
}

function cooldownTimer() {
  if (frameCount % 10 === 0 && cooldown > 0) {
    cooldown -= 1;
  }
}

function freezeTimerCooldown() {
  if (frameCount % 80 === 0 && freezeTimer > 0 && timer === 0) {
    freezeTimer -=1;
  }
}

function TimerCooldown() {
  if (frameCount % 40 === 0 && timer > 0) {
    timer -= 1;
  }
}

function createBoss() {
  if(frameCount % 3000 === 0){
    boss = createSprite(width - 100,Math.round(random(100,height - 100)),50,50)
    boss.addImage("boss",bossImg);
    boss.scale = 0.3;
    bossGroup.add(boss)
    allGroup.add(boss)
    bossGroup.setVelocityXEach(-1)
  }
}

function gameOver() {
  swal({
    title: `Game Over!` ,
    text: "You are dead, the zombies have gotten to you, try again!",
    imageURL: "https://cdn.shopify.com/s/files/1/1061/1924/products/Thumbs_Down_Sign_Emoji_Icon_ios10_grande.png",
    imageSize: "100*100",
    confirmButtonText:"Press Restart to continue"
  })
}
