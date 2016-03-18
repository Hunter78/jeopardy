$( document ).ready(function(){
var count = 0;
var cellsId1 =[];
var cellsId2 =[];
var question = document.getElementById('question');
var  form = document.createElement('form');
var watsonTotal = 0;
var playerTotal = 0;
var watsonMagicNumber = 8000;
var timerId;
var key;
gameTotal();
  form.className = "formShow";
  form.innerHTML = "<input id='easy' class='' type='text' autocomplete='off'>"; 

  btn4 = document.createElement("BUTTON");  
  t4 = document.createTextNode("BUY WATSON A BEER $500");   
  btn4.appendChild(t4);
  btn4.id = "beer";  
  btn4.className = "center";                                
  document.body.appendChild(btn4);  
  btn4.addEventListener('click', beer);


  btn5 = document.createElement("BUTTON");  
  t5 = document.createTextNode("BUY WATSON A WHISKY SHOT $1000");   
  btn5.appendChild(t5);
  btn5.id ="whisky";  
  btn5.className = "center";                                
  document.body.appendChild(btn5);  
  btn5.addEventListener('click', whisky);


  btn6 = document.createElement("BUTTON");  
  t6 = document.createTextNode("PLAY WITH MUSIC");   
  btn6.appendChild(t6);
  btn6.id ="music"; 
  btn6.className = "center";                               
  document.body.appendChild(btn6);  
  btn6.addEventListener('click', (function(){
    music = document.getElementById('playing');
    music.innerHTML = "<audio id ='theme' controls src='jeopardy-theme-song/Jeopardy-theme-song.mp3' type='audio/mpeg'></audio>";
    music.style= "hidden";
    music.children[0].play();
    $("audio").css('visibility','hidden');
  }));

// function round() {
//   if (count === 30) {
//   btn = document.createElement("BUTTON");  
//   t = document.createTextNode("CONTINUE ON TO FINAL JEOPARDY");   
//   btn.appendChild(t);                                
//   document.body.appendChild(btn);  
//   btn.addEventListener('click', function(){
//   document.getElementById('container1').className = "clear";
//   document.getElementById('container3').className = "";
  // document.getElementById('container2').className = "";
  // btn.removeEventListener('click', round2);
  // document.body.removeChild(btn);  
  // finalJeopardy();
  // });
//   }
// }

// function finalJeopardy(){
// typingTest = document.getElementById('finalQuestion');
// typingTest.innerHTML ="<p>sdsddf</p>";
// // typingTest.addEventListener('click', answer);

// }


// I didn't finish round 2
// function round2(){
//   if (count === 60) {
//   btn2 = document.createElement("BUTTON");  
//   t2 = document.createTextNode("FINAL JEOPARDY");   
//   btn2.appendChild(t2);                                
//   document.body.appendChild(btn2);  
//   btn2.addEventListener('click', function(){
//   document.getElementById('container1').className = "clear";
//   document.getElementById('container2').className = "clear";
//   document.getElementById('container3').className = "";
//   btn2.removeEventListener('click', final);
//   document.body.removeChild(btn2);

//   });
//   }
// }

function final(){
  if (count === 30) {
    console.log("final ran");
  btn3 = document.createElement("button");  
  t3 = document.createTextNode("PLAY AGAIN?");   
  btn3.appendChild(t3);  
  btn3.className = "center";                              
  document.body.appendChild(btn3);
  btn3.addEventListener('click', playAgain);
  checkWinner();
  }
}


  btn7 = document.createElement("BUTTON");  
  t7 = document.createTextNode("STOP MUSIC");   
  btn7.appendChild(t7);
  btn7.id ="stopMusic";
  btn7.className = "center";                                
  document.body.appendChild(btn7);  
  btn7.addEventListener('click', (function(){
    music = document.getElementById('playing');
    music.innerHTML = "<audio id ='theme' controls src='jeopardy-theme-song/Jeopardy-theme-song.mp3' type='audio/mpeg'></audio>";
    $("audio").css('visibility','hidden');
  }));


  for (var i = 0; i < 60; i++){
    if (i<30){
      cellsId1.push(i);
    }
    if (i>30){
    cellsId2.push(i);
    }
  
    if (i<6) {
    cells = document.createElement('td');
    cells.title = 200;
    cells.id = i;
    cells.className = "c" + i;
    cells.innerHTML = "<p>$200</p>"; 
    document.getElementById('row1').appendChild(cells);
    cells.addEventListener('click', askQuestion);
    }
  
    else if (i<12) {
    cells = document.createElement('td');
    cells.title = 400;
    cells.id = i;
    cells.className = "c" + i;
    cells.innerHTML = "<p>$400</p>"; 
    document.getElementById('row2').appendChild(cells);
    cells.addEventListener('click', askQuestion);
    }
  
    else if (i<18) {
    cells = document.createElement('td');
    cells.title = 600;
    cells.id = i;
    cells.className = "c" + i;
    cells.innerHTML = "<p>$600</p>"; 
    document.getElementById('row3').appendChild(cells);
    cells.addEventListener('click', askQuestion);
    }
  
    else if (i<24) {
    cells = document.createElement('td');
    cells.title = 800;
    cells.id = i;
    cells.className = "c" + i;
    cells.innerHTML = "<p>$800</p>"; 
    document.getElementById('row4').appendChild(cells);
    cells.addEventListener('click', askQuestion);
    }
  
    else  if (i<30) {
    cells = document.createElement('td');
    cells.title = 1000;
    cells.id = i;
    cells.className = "c" + i;
    cells.innerHTML = "<p>$1000</p>"; 
    document.getElementById('row5').appendChild(cells);
    cells.addEventListener('click', askQuestion);
    }
  
    // else  if (i<36) {
    // cells = document.createElement('td');
    // cells.title = 1200;
    // cells.id = i;
    // cells.className = "c" + i;
    // cells.innerHTML = "<p>$1200</p>"; 
    // document.getElementById('row6').appendChild(cells);
    // cells.addEventListener('click', askQuestion);
    // }
  
    // else  if (i<42) {
    // cells = document.createElement('td');
    // cells.title = 1400;
    // cells.id = i;
    // cells.className = "c" + i;
    // cells.innerHTML = "<p>$1400</p>"; 
    // document.getElementById('row7').appendChild(cells);
    // cells.addEventListener('click', askQuestion);
    // }
  
    // else  if (i<48) {
    // cells = document.createElement('td');
    // cells.title = 1600;
    // cells.id = i;
    // cells.className = "c" + i;
    // cells.innerHTML = "<p>$1600</p>"; 
    // document.getElementById('row8').appendChild(cells);
    // cells.addEventListener('click', askQuestion);
    // }
  
    // else  if (i<54) {
    // cells = document.createElement('td');
    // cells.title = 1800;
    // cells.id = i;
    // cells.className = "c" + i;
    // cells.innerHTML = "<p>$1800</p>"; 
    // document.getElementById('row9').appendChild(cells);
    // cells.addEventListener('click', askQuestion);
    // }
  
    // else  if (i<60) {
    // cells = document.createElement('td');
    // cells.title = 2000;
    // cells.id = i;
    // cells.className = "c" + i;
    // cells.innerHTML = "<p>$2000</p>"; 
    // document.getElementById('row10').appendChild(cells);
    // cells.addEventListener('click', askQuestion);
    // }
  }
function askQuestion(){
  final();
  form.className = "formShow";
  form.innerHTML = "<input id='easy' class='' type='text' autocomplete='off'>"; 

  timerId = setTimeout(outOfTime, watsonMagicNumber);
  currentCellId = this.id; 

  if (this.id < 6){
    this.removeEventListener('click', askQuestion);
    this.innerHTML = "<h1>X</h1>";
    key = Object.keys(obj['200'][this.className]);
    console.log(key[0]);
    question.innerHTML = "<p>" + obj['200'][this.className][key[0]] + "<p>";
    document.body.appendChild(form);
    question.className = "expanded";
    $("#easy").focus();
    console.log(form.innerHTML);
    form.id = this.id;
    form.addEventListener('submit', answer);
    // round();
    // round2();
    // final();
  }
  if (this.id > 5 && this.id < 12) {
    this.removeEventListener('click', askQuestion);
    this.innerHTML = "<h1>X</h1>";
    key = Object.keys(obj['400'][this.className]);
    console.log(key[0]);
    question.innerHTML = "<p>" + obj['400'][this.className][key[0]] + "<p>";
    document.body.appendChild(form);
    question.className = "expanded";
    $("#easy").focus();
    console.log(form.innerHTML);
    form.id = this.id;
    form.addEventListener('submit', answer);
    // round();
    // round2();
    // final();
  }
  if (this.id > 11 && this.id < 18) {
    this.removeEventListener('click', askQuestion);
    this.innerHTML = "<h1>X</h1>";
    key = Object.keys(obj[600][this.className]);
    console.log(key[0]);
    question.innerHTML = "<p>" + obj[600][this.className][key[0]] + "<p>";
    document.body.appendChild(form);
    question.className = "expanded";
    $("#easy").focus();
    console.log(form.innerHTML);
    form.id = this.id;
    form.addEventListener('submit', answer);
    // round();
    // round2();
    // final();
  }
  if (this.id > 17 && this.id < 24) {
    this.removeEventListener('click', askQuestion);
    this.innerHTML = "<h1>X</h1>";
    key = Object.keys(obj[800][this.className]);
    console.log(key[0]);
    question.innerHTML = "<p>" + obj[800][this.className][key[0]] + "<p>";
    document.body.appendChild(form);
    question.className = "expanded";
    $("#easy").focus();
    console.log(form.innerHTML);
    form.id = this.id;
    form.addEventListener('submit', answer);
    // round();
    // round2();
    // final();
  }
  if (this.id > 23 && this.id < 30){
    this.removeEventListener('click', askQuestion);
    this.innerHTML = "<h1>X</h1>";
    key = Object.keys(obj[1000][this.className]);
    console.log(key[0]);
    question.innerHTML = "<p>" + obj[1000][this.className][key[0]] + "<p>";
    document.body.appendChild(form);
    question.className = "expanded";
    $("#easy").focus();
    console.log(form.innerHTML);
    form.id = this.id;
    form.addEventListener('submit', answer);
    // round();
    // round2();
    // final();
  }
  // if (this.id < 36){
  //   this.removeEventListener('click', askQuestion);
  //   this.innerHTML = "<h1>X</h1>";
  //   key = Object.keys(obj[1200][this.className]);
  //   console.log(key[0]);
  //   question.innerHTML = "<p>" + obj[1200][this.className][key[0]] + "<p>";
  //   document.body.appendChild(form);
  //   question.className = "expanded";
  //   $("#easy").focus();
  //   console.log(form.innerHTML);
  //   form.id = this.id;
  //   form.addEventListener('submit', answer);
  //   round();
  //   // round2();
  //   final();
  // }
  // if (this.id < 42){
  //   this.removeEventListener('click', askQuestion);
  //   this.innerHTML = "<h1>X</h1>";
  //   key = Object.keys(obj[1400][this.className]);
  //   console.log(key[0]);
  //   question.innerHTML = "<p>" + obj[1400][this.className][key[0]] + "<p>";
  //   document.body.appendChild(form);
  //   question.className = "expanded";
  //   $("#easy").focus();
  //   console.log(form.innerHTML);
  //   form.id = this.id;
  //   form.addEventListener('submit', answer);
  //   round();
  //   // round2();
  //   final();
  // }
  // if (this.id < 48){
  //   this.removeEventListener('click', askQuestion);
  //   this.innerHTML = "<h1>X</h1>";
  //   key = Object.keys(obj[1600][this.className]);
  //   console.log(key[0]);
  //   question.innerHTML = "<p>" + obj[1600][this.className][key[0]] + "<p>";
  //   document.body.appendChild(form);
  //   question.className = "expanded";
  //   $("#easy").focus();
  //   console.log(form.innerHTML);
  //   form.id = this.id;
  //   form.addEventListener('submit', answer);
  //   round();
  //   // round2();
  //   final();
  // }
  // if (this.id < 54){
  //   this.removeEventListener('click', askQuestion);
  //   this.innerHTML = "<h1>X</h1>";
  //   key = Object.keys(obj[1800][this.className]);
  //   console.log(key[0]);
  //   question.innerHTML = "<p>" + obj[1800][this.className][key[0]] + "<p>";
  //   document.body.appendChild(form);
  //   question.className = "expanded";
  //   $("#easy").focus();
  //   console.log(form.innerHTML);
  //   form.id = this.id;
  //   form.addEventListener('submit', answer);
  //   round();
  //   // round2();
  //   final();
  // }
  // if (this.id < 60){
  //   this.removeEventListener('click', askQuestion);
  //   this.innerHTML = "<h1>X</h1>";
  //   key = Object.keys(obj[2000][this.className]);
  //   console.log(key[0]);
  //   question.innerHTML = "<p>" + obj[2000][this.className][key[0]] + "<p>";
  //   document.body.appendChild(form);
  //   question.className = "expanded";
  //   $("#easy").focus();
  //   console.log(form.innerHTML);
  //   form.id = this.id;
  //   form.addEventListener('submit', answer);
  //   round();
    // round2();
  
}

function buzzIn1(){
  count++;
  alert("Watson buzzes in, answers correctly, and just took your money!");
  valueFromCell = document.getElementById(currentCellId);
  watsonTotal += parseInt(valueFromCell.title,10);
  gameTotal();
  question.className = 'hiding';
  form.remove();
  final();
}

function outOfTime(){
  question.className = 'hiding';
  form.remove();
  clearTimeout(timerId);
  buzzIn1();
  }

function answer(e) {
  e.preventDefault();
  count++;
  inputAnswer = document.getElementById('easy').value;
  playerMoney = document.getElementById(form.id);
  console.log(key[0]);
    if (inputAnswer.toLowerCase() === key[0]){
      playerTotal += parseInt(playerMoney.title, 10);
      gameTotal();
    }
    if (inputAnswer.toLowerCase() !== key[0]) {
      playerTotal -= parseInt(playerMoney.title, 10);
      alert(generateInsult()); 
      gameTotal();
       
    }
  question.className = 'hiding';
  form.remove(); 
  clearTimeout(timerId);
  // round();
  // round2();
}

function gameTotal() {
  attachPlayerScore = document.getElementById('player');
  attachPlayerScore.innerHTML = "<p>Player score: " + playerTotal + "</p>"; 
  attachWatsonScore = document.getElementById('watson');
  attachWatsonScore.innerHTML = "<p>Watson score: " + watsonTotal + "</p>";
  final(); 
}

function checkWinner(){
  console.log("kbdckbkdfb");
    if (playerTotal > watsonTotal) {
      alert("Player wins!");
    }
    else if (playerTotal === watsonTotal){
      alert("Its a tie!");
    }
    else {
      alert("Watson wins!");
    }  
}

function playAgain() {
  location.reload();
}

function beer(){
  if (playerTotal > 2499){
    playerTotal-= 2500;
    watsonMagicNumber += 2000;
    gameTotal();
  }
}

function whisky(){
  if (playerTotal > 3999){    
    playerTotal-= 4000;
    watsonMagicNumber += 5000;
    gameTotal();
  }
}

});


