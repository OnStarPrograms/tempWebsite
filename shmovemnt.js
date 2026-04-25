

var IntroActive = false;
var ProgramActive = false;
var TeachActive = false;
var gameActive = false;
var rulesActive = false;
var chatroomActive = false;
var ringActive = false;
var mouseX = 0;
var mouseY = 0;
var startMX = 0;
var startMY = 0;

var intro = document.getElementById('introduction');
var program = document.getElementById('programmer');
var teach = document.getElementById('teacher');
var game = document.getElementById('game');
var chatroom = document.getElementById('chatroom');
var ring = document.getElementById('aero_ring');

intro.style.position = 'absolute';
program.style.position = 'absolute';
teach.style.position = 'absolute';
game.style.position = 'absolute';
chatroom.style.position = 'absolute';
ring.style.position = 'absolute';

var progVisible = true;
var teachVisible = true;
var studentVisible = true;
var doomVisible = true;

document.addEventListener('mousemove', function(event) {
    mouseX = event.clientX;
    mouseY = event.clientY;
});


function moveIntroStart() {
  const rect = intro.getBoundingClientRect();
  startMX = mouseX-rect.left;
  startMY = mouseY-rect.top;
  IntroActive = true;
}
function moveIntroEnd() {
  IntroActive = false;
}

function moveProgramStart() {
  const rect = program.getBoundingClientRect();
  startMX = mouseX-rect.left;
  startMY = mouseY-rect.top;
  ProgramActive = true;
}
function moveProgramEnd() {
  ProgramActive = false;
}
function moverulesStart() {
  const rect = rules.getBoundingClientRect();
  startMX = mouseX-rect.left;
  startMY = mouseY-rect.top;
  rulesActive = true;
}
function moverulesEnd() {
  rulesActive = false;
}


function moveTeachStart() {
  const rect = teach.getBoundingClientRect();
  startMX = mouseX-rect.left;
  startMY = mouseY-rect.top;
  TeachActive = true;
}
function moveTeachEnd() {
  TeachActive = false;
}

function moveChatroomStart() {
  const rect = chatroom.getBoundingClientRect();
  startMX = mouseX-rect.left;
  startMY = mouseY-rect.top;
  chatroomActive = true;
}
function moveChatroomEnd() {
  chatroomActive = false;
}

function moveGameStart() {
  const rect = game.getBoundingClientRect();
  startMX = mouseX-rect.left;
  startMY = mouseY-rect.top;
  gameActive = true;
}
function moveGameEnd() {
  gameActive = false;
}

function moveRingStart() {
  const rect = ring.getBoundingClientRect();
  startMX = mouseX-rect.left;
  startMY = mouseY-rect.top;
  ringActive = true;
}
function moveRingEnd() {
  ringActive = false;
}


var rules = document.getElementById('rules');
function toggleRules(){
  rules.classList.toggle('hidden');
}

function toggle(name){
  name.classList.toggle('hidden');
}

var allmoveIntro = false;
var allmoveprogram = false;
var allmovegame = false;
var allmoveTeach = false;
var allmoverules = false;
var allmoveChatroom = false;
var allmoveRing = false;
var addZ = 1;

//clearAll();
window.requestAnimationFrame(gameLoop);

function gameLoop() {
    offloadX = startMX;
    offloadY = startMY;
    if (IntroActive === true){
      intro.style.left = (mouseX-offloadX-30)+'px';
      intro.style.top = (mouseY-offloadY-30)+'px';
      if (allmoveIntro == false){
        intro.style.zIndex += addZ;
        addZ+= 1;
        allmoveIntro = true;
        allmoveprogram = false;
        allmovegame = false;
        allmoveTeach = false;
        allmoverules = false;
        allmoveChatroom = false;
        allmoveRing = false;
      }
    }

    

    if (ProgramActive === true){
      program.style.left = (mouseX-offloadX-30)+'px';
      program.style.top = (mouseY-offloadY-30)+'px';
      if (allmoveprogram == false){
        program.style.zIndex += addZ;
        addZ+= 1;
        allmoveIntro = false;
        allmoveprogram = true;
        allmovegame = false;
        allmoveTeach = false;
        allmoverules = false;
        allmoveChatroom = false;
        allmoveRing = false;
      }
    }


    if (TeachActive === true){
      teach.style.left = (mouseX-offloadX-30)+'px';
      teach.style.top = (mouseY-offloadY-30)+'px';
      if (allmoveTeach == false){
        teach.style.zIndex += addZ;
        addZ+= 1;
        allmoveIntro = false;
        allmoveprogram = false;
        allmovegame = false;
        allmoveTeach = true;
        allmoverules = false;
        allmoveChatroom = false;
        allmoveRing = false;
      }
    }

    

    if (gameActive === true){
      game.style.left = (mouseX-offloadX-30)+'px';
      game.style.top = (mouseY-offloadY-30)+'px';
      if (allmovegame == false){
        game.style.zIndex += addZ;
        addZ+= 1;
        allmoveIntro = false;
        allmoveprogram = false;
        allmovegame = true;
        allmoveTeach = false;
        allmoverules = false;
        allmoveChatroom = false;
        allmoveRing = false;
      }
    }
    if (rulesActive === true){
      rules.style.left = (mouseX-offloadX-30)+'px';
      rules.style.top = (mouseY-offloadY-30)+'px';
      if (allmoverules == false){
        rules.style.zIndex += addZ;
        addZ+= 1;
        allmoveIntro = false;
        allmoveprogram = false;
        allmovegame = false;
        allmoveTeach = false;
        allmoverules = true;
        allmoveChatroom = false;
        allmoveRing = false;
      }
    }

    if (chatroomActive === true){
      chatroom.style.left = (mouseX-offloadX-30)+'px';
      chatroom.style.top = (mouseY-offloadY-30)+'px';
      if (allmoveChatroom == false){
        chatroom.style.zIndex += addZ;
        addZ+= 1;
        allmoveIntro = false;
        allmoveprogram = false;
        allmovegame = false;
        allmoveTeach = false;
        allmoverules = false;
        allmoveChatroom = true;
        allmoveRing = false;
      }
    }

    if (ringActive === true){
      ring.style.left = (mouseX-offloadX-30)+'px';
      ring.style.top = (mouseY-offloadY-30)+'px';
      if (allmoveRing == false){
        ring.style.zIndex += addZ;
        addZ+= 1;
        allmoveIntro = false;
        allmoveprogram = false;
        allmovegame = false;
        allmoveTeach = false;
        allmoverules = false;
        allmoveChatroom = false;
        allmoveRing = true;
      }
    }

    window.requestAnimationFrame(gameLoop);
}

