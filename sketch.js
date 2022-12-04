let stage = 0;
let enter = 0;
let _name = "";
// let nameInput;
// let nameButton;

function preload() {
  setupListOfCard();
  setupListOfDialogue();
  randomQuizLoad();
}

function setup() {
  createCanvas(1600, 900);
  textFont(mukmul);
  introNextButton = new Button(1180, 720);
  introNextButton1 = new Button(1180, 430);
  submitButton = new Button(width / 2 + 130, height / 2 - 25);
  enterButton = new Button(1350, 800); // 돌발전화 진행 버튼, button.js
  nextButton = new Button(1350, 800); // 돌발전화 진행 버튼, button.js
  gameTimer = new Timer(15, 1225, 280 + 100, 320, 50); // 게임 타이머, timer.js
  // nameInput = createInput();
  // nameInput.position(500, 700);
  // nameButton = createButton("submit");
  // nameButton.mousePressed(nameButtonRemove());
  // nameButton.position(nameInput.x + nameInput.width, 700);

  // _name = nameInput.value();
  // temptxt = "어린이여러분";
  // print(temptxt.slice(0, -1));
  // temptxt = temptxt.slice(0,-1);
}

// let nbr = 0;
// function nameButtonRemove() {
//   nbr++;
//   print("nbr" + nbr);
//   if (nbr == 2) {
//     nameInput.remove();
//     nameButton.remove();
//     _name = nameInput.value();
//     stage++;

//     print("nameButtonRemove");
//   }
// }

function draw() {
  // background(220);
  image(_background, 0, 0, width, height);
  switch (stage) {
    //matchGameDraw_1 : 숫자 게임
    //matchGameDraw_2 : 이름 게임
    //matchGameDraw_3 : 관공서 게임
    case 0:
      // 게임 시작화면
      // nameButton.mousePressed(nameButtonRemove());
      // print("stage 0");
      background(220);
      push();
      fill(0);
      textSize(20);
      text("Player Name : ", width / 2 - 125, height / 2 - 40);
      pop();
      push();
      fill(256);
      rectMode(CENTER);
      rect(width / 2, height / 2, 250, 50);
      submitButton.show();
      pop();
      push();
      fill(0);
      textSize(30);
      text(_name, width / 2 - 120, height / 2 + 7);
      pop();

      break;
    case 1:
      //오프닝 1
      intro1();
      introNextButton.show();
      print("stage 1");
      break;
    case 2:
      //오프닝 2
      intro2();
      introNextButton1.show();
      break;
    case 3:
      //오프닝 3
      intro3();
      introNextButton.show();
      break;
    case 4:
      //오프닝 4
      intro4();
      introNextButton.show();
      break;
    case 5:
      //오프닝 5
      intro5();
      introNextButton.show();
      break;
    case 6:
      //오프닝 6
      intro6();
      introNextButton.show();
      break;
    case 7:
      //오프닝 7
      intro7();
      introNextButton.show();
      break;
    case 8:
      //오프닝 8
      intro8();
      introNextButton.show();
      break;
    case 9:
      //오프닝 9
      intro9();
      introNextButton.show();
      break;
    case 10:
      //게임설명화면1
      stage++;
      break;
    case 11:
      //23일 오전 스타트
      stage++;
      break;
    case 12: //23일 오전 게임
      matchGameDraw_1(1, 1, 1, 0); //question location (3,5), answer location (4,9)
      break;
    case 13:
      matchGameDraw_1(6, 4, 4, 4);
      break;
    case 14:
      matchGameDraw_3(7, 1, 1, 8);
      break;
    case 15:
      matchGameDraw_3(4, 9, 4, 8);
      break;
    case 16:
      //돌발전화 시작
      stage++;
      break;
    case 17: //돌발전화 1-1
      cursorOn = true;
      showQuestion(7, 9);
      // image(dialog, dialogue_x, dialogue_y, 500, 600);

      enterButton.show();
      for (let i = 0; i < enter; i++) {
        text1_1[i].showDialogue();
      }
      if (enter == text1_1.length) {
        stage++;
        enter = 0;
      }
      break;
    case 18: //돌발전화 선택지 1-1
      cursorOn = true;
      showQuestion(7, 9);
      // image(dialog, dialogue_x, dialogue_y, 500, 600);
      for (let i = 0; i < text1_1_selection.length; i++) {
        text1_1_selection[i].display();
      }
      break;
    case 19:
      //23일 오후 시작
      stage++;
      break;
    case 20: //23일 오후 게임
      matchGameDraw_1(6, 4, 5, 8); //question location (3,5), answer location (4,9)
      break;
    case 21:
      matchGameDraw_1(3, 0, 1, 9);
      break;
    case 22:
      matchGameDraw_3(5, 0, 6, 3);
      break;
    case 23:
      matchGameDraw_3(1, 3, 5, 4);
      break;
    case 24:
      //돌발전화 시작
      stage++;
      break;
    case 25: //돌발전화 1-2
      cursorOn = true;
      showQuestion(7, 9);
      // image(dialog, dialogue_x, dialogue_y, 500, 600);

      enterButton.show();
      for (let i = 0; i < enter; i++) {
        text1_2[i].showDialogue();
      }
      if (enter == text1_2.length) {
        stage++;
        enter = 0;
      }

      break;
    case 26: //돌발전화 선택지 1-2
      cursorOn = true;
      showQuestion(7, 9);
      // image(dialog, dialogue_x, dialogue_y, 500, 600);
      for (let i = 0; i < text1_2_selection.length; i++) {
        text1_2_selection[i].display();
      }
      break;
    case 27:
      //중간결과
      cursorOn = true;
      textSize(20);
      text("23일 실적", 1320, 350);
      text("최고예요: " + matchGameScore3, 1320, 450);
      text("고마워요: " + matchGameScore2, 1320, 530);
      text("분발하세요: " + matchGameScore1, 1320, 610);
      text(
        "실망이에요: " +
          (8 - (matchGameScore1 + matchGameScore2 + matchGameScore3)),
        1320,
        690
      );
      nextButton.show();
      break;
  }
  if (cursorOn) {
    image(cursor, mouseX - 35, mouseY - 35, 70, 70);
  }
}
function keyPressed() {
  if (stage == 0) {
    if (keyCode == BACKSPACE && _name.length > 0) {
      _name = _name.slice(0, -1);
    } else if (keyCode >= 65 && keyCode <= 90) _name += key;
  }
}
function mouseClicked() {
  introNextButton.next(1);
  introNextButton1.next(1);
  switch (stage) {
    case 0:
      submitButton.next(1);
      break;
    case 12:
      clickBook(); // 힌트책 클릭
      if (!click_book) {
        showMatch(1, 0); //answer location과 일치하는지 확인
      }
      break;
    case 13:
      clickBook();
      if (!click_book) {
        showMatch(4, 4);
      }
      break;
    case 14:
      clickBook();
      if (!click_book) {
        showMatch(1, 8);
      }
      break;
    case 15:
      clickBook();
      if (!click_book) {
        showMatch(4, 8);
      }
      break;
    case 17:
      if (enterButton.over()) {
        //enter 버튼을 누르면 dialogue가 update된다
        enter++;

        for (let j = 0; j <= enter - 1; j++) {
          text1_1[j].goUp();
        }
      }
      break;
    case 18:
      for (let i = 0; i < text1_1_selection.length; i++) {
        text1_1_selection[i].next(1);
      }
      break;
    case 20:
      clickBook();
      if (!click_book) {
        showMatch(5, 8); //answer location과 일치하는지 확인
      }
      break;
    case 21:
      clickBook();
      if (!click_book) {
        showMatch(1, 9);
      }
      break;
    case 22:
      clickBook();
      if (!click_book) {
        showMatch(6, 3);
      }
      break;
    case 23:
      clickBook();
      if (!click_book) {
        showMatch(5, 4);
      }
      break;
    case 25:
      if (enterButton.over()) {
        //enter 버튼을 누르면 dialogue가 update된다
        enter++;

        for (let j = 0; j <= enter - 1; j++) {
          text1_2[j].goUp();
        }
      }
      break;
    case 26:
      for (let i = 0; i < text1_2_selection.length; i++) {
        text1_2_selection[i].next(1);
      }
      break;
    case 27:
      nextButton.next(1);
  }
}
