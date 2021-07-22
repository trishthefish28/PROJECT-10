var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["d397e717-43b2-4d36-9025-0aa1c7d1c8ba","c4c8f881-3538-4ce1-9938-3d789f1b614f","61810331-87a2-4176-b8a4-d0282c96d4f5","8ad5425b-2eca-474a-89a4-39a5d70588c2","99f12568-1da6-4314-a570-fc17205e1d07"],"propsByKey":{"d397e717-43b2-4d36-9025-0aa1c7d1c8ba":{"name":"rocket","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"ud4lJPsBPX34hC82wZ_TgxIqB7cjK4Gm","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/d397e717-43b2-4d36-9025-0aa1c7d1c8ba.png"},"c4c8f881-3538-4ce1-9938-3d789f1b614f":{"name":"fire","sourceUrl":"assets/api/v1/animation-library/gamelab/Vpm2NFEps_oE31XgKrZcMenFgsoDyWrh/category_fantasy/gameplayadventure_03.png","frameSize":{"x":232,"y":399},"frameCount":1,"looping":true,"frameDelay":2,"version":"Vpm2NFEps_oE31XgKrZcMenFgsoDyWrh","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":232,"y":399},"rootRelativePath":"assets/api/v1/animation-library/gamelab/Vpm2NFEps_oE31XgKrZcMenFgsoDyWrh/category_fantasy/gameplayadventure_03.png"},"61810331-87a2-4176-b8a4-d0282c96d4f5":{"name":"meteor","sourceUrl":null,"frameSize":{"x":211,"y":215},"frameCount":1,"looping":true,"frameDelay":12,"version":"fxAe1t59W8lcO5utwop5s8n8mSUc8e1o","categories":["aquatic_objects"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":211,"y":215},"rootRelativePath":"assets/61810331-87a2-4176-b8a4-d0282c96d4f5.png"},"8ad5425b-2eca-474a-89a4-39a5d70588c2":{"name":"background","sourceUrl":"assets/api/v1/animation-library/gamelab/T167cO7veEolJu4MdK3thTgLhnqD_rJB/category_backgrounds/background_landscape09.png","frameSize":{"x":400,"y":399},"frameCount":1,"looping":true,"frameDelay":2,"version":"T167cO7veEolJu4MdK3thTgLhnqD_rJB","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":399},"rootRelativePath":"assets/api/v1/animation-library/gamelab/T167cO7veEolJu4MdK3thTgLhnqD_rJB/category_backgrounds/background_landscape09.png"},"99f12568-1da6-4314-a570-fc17205e1d07":{"name":"winning","sourceUrl":null,"frameSize":{"x":61,"y":61},"frameCount":1,"looping":true,"frameDelay":12,"version":"8EbVv7qswMDJENmykNMaR6DrynZcZstN","categories":["board_games_and_cards"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":61,"y":61},"rootRelativePath":"assets/99f12568-1da6-4314-a570-fc17205e1d07.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//shapes
var back = createSprite(200,200,1000,10000);
back.setAnimation("background");
var lives = 0;
var ball = createSprite(20,200,20,20);
var obstacle1 = createSprite(80,150,20,20);
var obstacle2 = createSprite(160,250,20,20);
var obstacle3 = createSprite(235,150,20,20);
var obstacle4 = createSprite(310,250,20,20);
ball.setAnimation("rocket");
obstacle1.setAnimation("fire");
obstacle2.setAnimation("meteor");
obstacle3.setAnimation("fire");
obstacle4.setAnimation("meteor");
ball.scale = 0.1;
obstacle1.scale = 0.1;
obstacle2.scale = 0.1;
obstacle3.scale = 0.1;
obstacle4.scale = 0.1;

// edges
createEdgeSprites();

//colors
ball.shapeColor = "green";
obstacle1.shapeColor = "red";
obstacle2.shapeColor = "red";
obstacle3.shapeColor = "red";
obstacle4.shapeColor = "red";

//velocities
obstacle1.velocityY = 8;
obstacle2.velocityY = -8;
obstacle3.velocityY = 8;
obstacle4.velocityY = -8;


function draw(){
  background("black");
  

//bounce
  obstacle1.bounceOff(edges);
  obstacle1.bounceOff(edges);
  obstacle2.bounceOff(edges);
  obstacle2.bounceOff(edges);
  obstacle3.bounceOff(edges);
  obstacle3.bounceOff(edges);
  obstacle4.bounceOff(edges);
  obstacle4.bounceOff(edges);
  
//movement
  if (keyDown("right")){
    ball.x = ball.x + 3; 
  }
  if (keyDown("left")){
    ball.x = ball.x - 3;
  }
  
//reset
  if(
     ball.isTouching(obstacle1)||
     ball.isTouching(obstacle2)||
     ball.isTouching(obstacle3)||
     ball.isTouching(obstacle4))
  {
     ball.x = 20;
     ball.y = 200;
     lives = lives + 1;
  }
  text("Lives: " + lives,200,50);
  strokeWeight(0);

//win
  if (ball.isTouching(rightEdge)){
    ball.setAnimation("winning");
    ball.scale = 5;
  }
  drawSprites();
}


// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
