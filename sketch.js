let stage = 0;
let enter = 0;
let _name = "";

let dayStart = true;
let dayStartTiming;

let introIsLooping = true;
// let outroIsLooping = false;
let cursorOn = true;

function preload() {
  setupListOfCard();
  setupListOfDialogue();
  setUpSound();
}

function setup() {
  createCanvas(1600, 900);
  textFont(mukmul);
  introNextButton = new Button(1180, 720);
  introNextButton1 = new Button(1180, 430);
  submitButton = new Button(width / 2 + 130, height / 2 - 25);
  enterButton = new Button(1350, 800); // 돌발전화 진행 버튼, button.js
  nextButton = new Button(1350, 800); // 돌발전화 진행 버튼, button.js
  gameTimer = new Timer(20, 1225, 280 + 100, 320, 50); // 게임 타이머, timer.js
  randomQuizLoad();
  noCursor();
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
      background(220);
      if (introIsLooping) {
        introSound.setVolume(0.3);
        introSound.loop();
        introIsLooping = false;
      }
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
      background(255);
      image(gameRule, 40, 0, 1520, 855);
      push();
      fill(0);
      textAlign(CENTER);
      textSize(30);
      text("Press Enter To Start", width / 2, 860);
      pop();
      break;
    case 11:
      //23일 오전 스타트
      if (dayStart) {
        dayStartTiming = millis();
        dayStart = false;
      }
      image(calendar1, 250, height / 2 - 300, 1000, 600);
      push();
      fill(0);
      textAlign(CENTER);
      textSize(30);
      text("12", 750, 350);
      textSize(60);
      text("23", 750, height / 2);
      textSize(30);
      text("AM 9:00", 750, height / 2 + 100);
      textSize(60);
      strokeWeight(3);
      fill(0, 0, 255);
      text(3 - int((millis() - dayStartTiming) / 1000), 750, 230);
      pop();
      if (3 - int((millis() - dayStartTiming) / 1000) == 0) {
        stage++;
        dayStart = true;
      }
      // stage++;
      break;
    case 12: //23일 오전 게임
      cursorOn = false;
      matchGameDraw_1(quiz_1_1[0]);
      break;
    case 13:
      matchGameDraw_1(quiz_1_1[1]);
      break;
    case 14:
      matchGameDraw_2(quiz_2_1[0]);
      break;
    case 15:
      matchGameDraw_3(quiz_3_1[0]);
      break;
    case 16:
      //돌발전화 시작
      cursorOn = true;
      stage++;
      break;
    case 17: //돌발전화 1-1
      image(_background_1, 0, 0, width, height);
      showQuestion_1(7, 9);

      enterButton.show();
      if (enter <= text1_1.length) {
        for (let i = 0; i < enter; i++) {
          text1_1[i].showDialogue();
        }
      }
      if (enter == text1_1.length + 1) {
        stage++;
        enter = 0;
      }
      break;
    case 18: //돌발전화 선택지 1-1
      image(_background_1, 0, 0, width, height);
      showQuestion_2(7, 9);
      // image(dialog, dialogue_x, dialogue_y, 500, 600);

      for (let i = 0; i < text1_1_selection.length; i++) {
        text1_1_selection[i].display();
      }

      break;
    case 19:
      //23일 오후 시작
      if (dayStart) {
        dayStartTiming = millis();
        dayStart = false;
      }
      image(calendar1, 250, height / 2 - 300, 1000, 600);
      push();
      fill(0);
      textAlign(CENTER);
      textSize(30);
      text("12", 750, 350);
      textSize(60);
      text("23", 750, height / 2);
      textSize(30);
      text("PM 1:00", 750, height / 2 + 100);
      textSize(60);
      strokeWeight(3);
      fill(0, 0, 255);
      text(3 - int((millis() - dayStartTiming) / 1000), 750, 230);
      pop();
      if (3 - int((millis() - dayStartTiming) / 1000) == 0) {
        stage++;
        dayStart = true;
      }
      break;
    case 20: //23일 오후 게임
      cursorOn = false;
      matchGameDraw_2(quiz_2_1[1]);
      break;
    case 21:
      matchGameDraw_1(quiz_1_1[2]);
      break;
    case 22:
      matchGameDraw_3(quiz_3_1[1]);
      break;
    case 23:
      matchGameDraw_2(quiz_2_1[2]);
      break;
    case 24:
      //돌발전화 시작
      cursorOn = true;
      stage++;
      break;
    case 25: //돌발전화 1-2
      image(_background_1, 0, 0, width, height);
      showQuestion_1(7, 9);
      // image(dialog, dialogue_x, dialogue_y, 500, 600);

      enterButton.show();
      if (enter <= text1_2.length) {
        for (let i = 0; i < enter; i++) {
          text1_2[i].showDialogue();
        }
      }
      if (enter == text1_2.length + 1) {
        stage++;
        enter = 0;
      }
      break;
    case 26: //돌발전화 선택지 1-2
      image(_background_1, 0, 0, width, height);
      showQuestion_2(7, 9);
      for (let i = 0; i < text1_2_selection.length; i++) {
        text1_2_selection[i].display();
      }
      break;
    case 27:
      //중간결과
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
    case 28:
      //23일 오전 스타트
      if (dayStart) {
        dayStartTiming = millis();
        dayStart = false;
      }
      image(calendar1, 250, height / 2 - 300, 1000, 600);
      push();
      fill(0);
      textAlign(CENTER);
      textSize(30);
      text("12", 750, 350);
      textSize(60);
      text("24", 750, height / 2);
      textSize(30);
      text("AM 9:00", 750, height / 2 + 100);
      textSize(60);
      strokeWeight(3);
      fill(0, 0, 255);
      text(3 - int((millis() - dayStartTiming) / 1000), 750, 230);
      pop();
      if (3 - int((millis() - dayStartTiming) / 1000) == 0) {
        stage++;
        dayStart = true;
      }
      // stage++;
      break;
    case 29: //24일 오전 게임
      cursorOn = false;
      matchGameDraw_3(quiz_3_1[2]);
      break;
    case 30:
      matchGameDraw_1(quiz_1_1[3]);
      break;
    case 31:
      matchGameDraw_1(quiz_1_1[4]);
      break;
    case 32:
      matchGameDraw_2(quiz_2_1[3]);
      break;
    case 33:
      //돌발전화 시작
      cursorOn = true;
      stage++;
      break;
    case 34: //돌발전화 2-1
      image(_background_1, 0, 0, width, height);
      showQuestion_1(7, 9);
      // image(dialog, dialogue_x, dialogue_y, 500, 600);

      enterButton.show();
      if (enter <= text2_1.length) {
        for (let i = 0; i < enter; i++) {
          text2_1[i].showDialogue();
        }
      }
      if (enter == text2_1.length + 1) {
        stage++;
        enter = 0;
      }
      break;
    case 35: //돌발전화 선택지 2-1
      image(_background_1, 0, 0, width, height);
      showQuestion_2(7, 9);
      // image(dialog, dialogue_x, dialogue_y, 500, 600);
      for (let i = 0; i < text2_1_selection.length; i++) {
        text2_1_selection[i].display();
      }
      break;
    case 36:
      //24일 오후 시작
      if (dayStart) {
        dayStartTiming = millis();
        dayStart = false;
      }
      image(calendar1, 250, height / 2 - 300, 1000, 600);
      push();
      fill(0);
      textAlign(CENTER);
      textSize(30);
      text("12", 750, 350);
      textSize(60);
      text("24", 750, height / 2);
      textSize(30);
      text("PM 1:00", 750, height / 2 + 100);
      textSize(60);
      strokeWeight(3);
      fill(0, 0, 255);
      text(3 - int((millis() - dayStartTiming) / 1000), 750, 230);
      pop();
      if (3 - int((millis() - dayStartTiming) / 1000) == 0) {
        stage++;
        dayStart = true;
      }
      break;
    case 37: //24일 오후 게임
      cursorOn = false;
      matchGameDraw_2(quiz_2_1[4]);
      break;
    case 38:
      matchGameDraw_3(quiz_3_1[3]);
      break;
    case 39:
      matchGameDraw_1(quiz_1_1[5]);
      break;
    case 40:
      matchGameDraw_2(quiz_2_1[5]);
      break;
    case 41:
      //돌발전화 시작
      cursorOn = true;
      stage++;
      break;
    case 42: //돌발전화 2-3(의문의 여자)
      image(_background_1, 0, 0, width, height);
      showQuestion_1(2, 0);
      enterButton.show();
      if (enter <= text2_3.length) {
        for (let i = 0; i < enter; i++) {
          text2_3[i].showDialogue();
        }
      }
      if (enter == text2_3.length + 1) {
        stage++;
        enter = 0;
      }
      break;
    case 43: //돌발전화 2-2
      image(_background_1, 0, 0, width, height);
      showQuestion_1(7, 9);

      enterButton.show();
      if (enter <= text2_2.length) {
        for (let i = 0; i < enter; i++) {
          text2_2[i].showDialogue();
        }
      }
      if (enter == text2_2.length + 1) {
        stage++;
        enter = 0;
      }

      break;
    case 44: //돌발전화 선택지 2-2
      image(_background_1, 0, 0, width, height);
      showQuestion_2(7, 9);
      // image(dialog, dialogue_x, dialogue_y, 500, 600);
      for (let i = 0; i < text2_2_selection.length; i++) {
        text2_2_selection[i].display();
      }
      break;
    case 45:
      //중간결과
      textSize(20);
      text("24일 실적", 1320, 350);
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
    image(cursor, mouseX - 20, mouseY - 20, 40, 40);
  }
}
function keyPressed() {
  if (stage == 0) {
    if (keyCode == BACKSPACE && _name.length > 0) {
      _name = _name.slice(0, -1);
    } else if (keyCode >= 65 && keyCode <= 90) _name += key;
  }
  if (stage == 10) {
    if (keyCode == ENTER) {
      stage++;
    }
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
      if (!click_book0) {
        showMatch(quiz_1_1[0]); //answer location과 일치하는지 확인
      }
      break;
    case 13:
      clickBook();
      if (!click_book0) {
        showMatch(quiz_1_1[1]);
      }
      break;
    case 14:
      clickBook();
      if (!click_book0) {
        showMatch(quiz_2_1[0]);
      }
      break;
    case 15:
      clickBook();
      if (!click_book0) {
        showMatch(quiz_3_1[0]);
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
      if (!click_book0) {
        showMatch(quiz_2_1[1]); //answer location과 일치하는지 확인
      }
      break;
    case 21:
      clickBook();
      if (!click_book0) {
        showMatch(quiz_1_1[2]);
      }
      break;
    case 22:
      clickBook();
      if (!click_book0) {
        showMatch(quiz_3_1[1]);
      }
      break;
    case 23:
      clickBook();
      if (!click_book0) {
        showMatch(quiz_2_1[2]);
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
    case 27:
      nextButton.next(1);
      break;
    case 29:
      clickBook(); // 힌트책 클릭
      if (!click_book0) {
        showMatch(quiz_3_1[2]); //answer location과 일치하는지 확인
      }
      break;
    case 30:
      clickBook();
      if (!click_book0) {
        showMatch(quiz_1_1[3]);
      }
      break;
    case 31:
      clickBook();
      if (!click_book0) {
        showMatch(quiz_1_1[4]);
      }
      break;
    case 32:
      clickBook();
      if (!click_book0) {
        showMatch(quiz_2_1[3]);
      }
      break;
    case 34:
      if (enterButton.over()) {
        //enter 버튼을 누르면 dialogue가 update된다
        enter++;

        for (let j = 0; j <= enter - 1; j++) {
          text2_1[j].goUp();
        }
      }
      break;
    case 35:
      for (let i = 0; i < text2_1_selection.length; i++) {
        text2_1_selection[i].next(1);
      }
      break;
    case 37:
      clickBook();
      if (!click_book0) {
        showMatch(quiz_2_1[4]); //answer location과 일치하는지 확인
      }
      break;
    case 38:
      clickBook();
      if (!click_book0) {
        showMatch(quiz_3_1[3]);
      }
      break;
    case 39:
      clickBook();
      if (!click_book0) {
        showMatch(quiz_1_1[5]);
      }
      break;
    case 40:
      clickBook();
      if (!click_book0) {
        showMatch(quiz_2_1[5]);
      }
      break;
    case 42:
      if (enterButton.over()) {
        //enter 버튼을 누르면 dialogue가 update된다
        enter++;

        for (let j = 0; j <= enter - 1; j++) {
          text2_3[j].goUp();
        }
      }
      break;
    case 43:
      if (enterButton.over()) {
        //enter 버튼을 누르면 dialogue가 update된다
        enter++;

        for (let j = 0; j <= enter - 1; j++) {
          text2_2[j].goUp();
        }
      }
      break;
    case 44:
      for (let i = 0; i < text2_2_selection.length; i++) {
        text2_2_selection[i].next(1);
      }
    case 45:
      nextButton.next(1);
  }
}
