let stage = 0;
let enter = 0;
let _name = "";

let dayStart = true;
let dayStartTiming;

let loveScore = 0;

let loveResult1 = false;
let loveResult2 = false;

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
  submitButton = new Button(360, 810);
  enterButton = new Button(1500, 800); // 돌발전화 진행 버튼, button.js
  nextButton = new Button(1350, 800); // 돌발전화 진행 버튼, button.js
  resetButton = new Reset(1450, 50);
  gameTimer = new Timer(20, 1225, 280 + 100, 320, 50); // 게임 타이머, timer.js
  randomQuizLoad();
  noCursor();
  introSound.setVolume(0.5);
}

function draw() {
  image(_background, 0, 0, width, height);
  switch (stage) {
    case 0:
      image(startPage, 0, 0, width, height);
      push();
      fill(255);
      textSize(25);
      text("Player Name : ", 100, 795);
      pop();
      push();
      fill(256);
      rectMode(CORNER);
      rect(100, 810, 250, 50);
      submitButton.show();
      pop();
      push();
      fill(0);
      textSize(30);
      text(_name, 120, 840);
      pop();

      break;
    case 1:
      //오프닝 1
      push();
      intro1();
      pop();
      introNextButton.show();
      print("stage 1");
      break;
    case 2:
      //오프닝 2
      push();
      intro2();
      pop();
      introNextButton1.show();
      break;
    case 3:
      //오프닝 3
      push();
      intro3();
      pop();
      introNextButton.show();
      break;
    case 4:
      //오프닝 4
      push();
      intro4();
      pop();
      introNextButton.show();
      break;
    case 5:
      //오프닝 5
      push();
      intro5();
      pop();
      introNextButton.show();
      break;
    case 6:
      //오프닝 6
      push();
      intro6();
      pop();
      introNextButton.show();
      break;
    case 7:
      //오프닝 7
      push();
      intro7();
      pop();
      introNextButton.show();
      break;
    case 8:
      //오프닝 8
      push();
      intro8();
      pop();
      introNextButton.show();
      break;
    case 9:
      //오프닝 9
      push();
      intro9();
      pop();
      introNextButton.show();
      break;
    case 10:
      //게임설명화면1
      push();
      fill(255, 231, 173);
      noStroke();
      rect(0, 700, width, 200);
      pop();
      image(gameRule, 0, 0, width, height);

      break;
    case 11:
      //튜토리얼 1
      stage++;
      break;
    case 12:
      //튜토리얼 2
      stage++;
      break;
    case 13:
      //튜토리얼 3
      stage++;
      break;
    case 14:
      //튜토리얼 4
      stage++;
      break;
    case 15:
      //튜토리얼 5
      stage++;
    case 16:
      //튜토리얼 6
      stage++;
    case 17:
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
        stageStart = true;
      }
      // stage++;
      break;
    case 18: //23일 오전 게임
      cursorOn = false;
      matchGameDraw_1(quiz_1_1[0]);
      break;
    case 19:
      matchGameDraw_2(quiz_2_1[0]);
      break;
    case 20:
      matchGameDraw_3(quiz_3_1[0]);
      break;
    case 21:
      //돌발전화 시작
      cursorOn = true;
      stage++;
      break;
    case 22: //돌발전화 1-1
      image(_background_1, 0, 0, width, height);
      showQuestion_1(6, 9);

      push();
      fill(0);
      textAlign(LEFT);
      textSize(30);
      text("Jake", 1250, 830);
      pop();

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
    case 23: //돌발전화 선택지 1-1
      image(_background_1, 0, 0, width, height);
      showQuestion_2(6, 9);
      // image(dialog, dialogue_x, dialogue_y, 500, 600);

      for (let i = 0; i < text1_1_selection.length; i++) {
        text1_1_selection[i].display();
      }

      break;
    case 24:
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
        stageStart = true;
      }
      break;
    case 25: //23일 오후 게임
      cursorOn = false;
      matchGameDraw_2(quiz_2_1[1]);
      break;
    case 26:
      matchGameDraw_3(quiz_3_1[1]);
      break;
    case 27:
      matchGameDraw_1(quiz_1_1[1]);
      break;
    case 28:
      //돌발전화 시작
      cursorOn = true;
      stage++;
      break;
    case 29: //돌발전화 1-2
      image(_background_1, 0, 0, width, height);
      showQuestion_1(6, 9);
      // image(dialog, dialogue_x, dialogue_y, 500, 600);

      push();
      fill(0);
      textAlign(LEFT);
      textSize(30);
      text("Jake", 1250, 830);
      pop();

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
    case 30: //돌발전화 선택지 1-2
      image(_background_1, 0, 0, width, height);
      showQuestion_2(6, 9);
      for (let i = 0; i < text1_2_selection.length; i++) {
        text1_2_selection[i].display();
        stageStart = true;
      }
      break;
    case 31:
      //중간결과
      textSize(20);
      text("23일 실적", 1320, 350);
      text("Perfect: " + matchGameScore3, 1320, 450);
      text("Great: " + matchGameScore2, 1320, 530);
      text("Not Bad: " + matchGameScore1, 1320, 610);
      text(
        "Fail: " + (6 - (matchGameScore1 + matchGameScore2 + matchGameScore3)),
        1320,
        690
      );
      nextButton.show();
      break;
    case 32:
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
        stageStart = true;
      }
      // stage++;
      break;
    case 33: //24일 오전 게임
      cursorOn = false;
      matchGameDraw_1(quiz_1_1[2]);
      break;
    case 34:
      matchGameDraw_2(quiz_2_1[2]);
      break;
    case 35:
      matchGameDraw_1(quiz_1_1[3]);
      break;
    case 36:
      //돌발전화 시작
      cursorOn = true;
      stage++;
      break;
    case 37: //돌발전화 2-1
      image(_background_1, 0, 0, width, height);
      showQuestion_1(6, 9);
      // image(dialog, dialogue_x, dialogue_y, 500, 600);
      push();
      fill(0);
      textAlign(LEFT);
      textSize(30);
      text("Jake", 1250, 830);
      pop();

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
    case 38: //돌발전화 선택지 2-1
      image(_background_1, 0, 0, width, height);
      showQuestion_2(6, 9);
      // image(dialog, dialogue_x, dialogue_y, 500, 600);
      for (let i = 0; i < text2_1_selection.length; i++) {
        text2_1_selection[i].display();
      }
      break;
    case 39:
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
        stageStart - true;
      }
      break;
    case 40: //24일 오후 게임
      cursorOn = false;
      matchGameDraw_3(quiz_3_1[2]);
      break;
    case 41:
      matchGameDraw_2(quiz_2_1[3]);
      break;
    case 42:
      matchGameDraw_2(quiz_2_1[4]);
      break;
    case 43:
      //돌발전화 시작
      cursorOn = true;
      stage++;
      break;
    case 44: //돌발전화 2-3 (의문의 여자)
      image(_background_1, 0, 0, width, height);
      showQuestion_3(2, 0);
      push();
      fill(0);
      textAlign(LEFT);
      textSize(30);
      text("???", 1250, 830);
      pop();

      enterButton.show();
      if (enter <= text2_3.length) {
        for (let i = 0; i < enter; i++) {
          text2_3[i].showDialogue();
        }
      }
      if (enter == text2_3.length + 1) {
        stage++;
        enter = 0;
        stageStart = true;
      }
      break;
    case 45: //돌발전화 2-2
      image(_background_1, 0, 0, width, height);
      showQuestion_1(6, 9);
      push();
      fill(0);
      textAlign(LEFT);
      textSize(30);
      text("Jake", 1250, 830);
      pop();

      enterButton.show();
      if (loveScore <= 3) {
        if (enter <= text2_2_1.length) {
          for (let i = 0; i < enter; i++) {
            text2_2_1[i].showDialogue();
          }
        }
        if (enter == text2_2_1.length + 1) {
          stage++;
          enter = 0;
        }
      } else if (loveScore > 3) {
        if (enter <= text2_2.length) {
          for (let i = 0; i < enter; i++) {
            text2_2[i].showDialogue();
          }
        }
        if (enter == text2_2.length + 1) {
          stage++;
          enter = 0;
        }
      }
      break;
    case 46: //돌발전화 선택지 2-2
      image(_background_1, 0, 0, width, height);
      showQuestion_2(6, 9);
      // image(dialog, dialogue_x, dialogue_y, 500, 600);
      if (loveScore <= 3) {
        for (let i = 0; i < text2_2_1_selection.length; i++) {
          text2_2_1_selection[i].display();
        }
      } else if (loveScore > 3) {
        for (let i = 0; i < text2_2_selection.length; i++) {
          text2_2_selection[i].display();
        }
      }
      break;
    case 47:
      //중간결과
      textSize(20);
      text("24일 실적", 1320, 350);
      text("Perfect: " + matchGameScore3, 1320, 450);
      text("Great: " + matchGameScore2, 1320, 530);
      text("Not Bad: " + matchGameScore1, 1320, 610);
      text(
        "Failure: " +
          (6 - (matchGameScore1 + matchGameScore2 + matchGameScore3)),
        1320,
        690
      );
      nextButton.show();
      break;
    // case 48:
    //   //중간결과
    //   textSize(20);
    //   textAlign(CENTER);
    //   text("최종결과", 1350, 350);
    //   text("실적: " + matchGameScore + "/36", 1350, 450);
    //   text("호감도: " + loveScore + "/6", 1350, 530);
    //   // if (loveResult) {
    //   //   text("외롭지 않은 크리스마스", 1350, 610);
    //   // } else text("외로운 크리스마스", 1350, 610);

    //   text("-The END-", 1350, 690);
    //   break;
    case 59:
      push();
      outro1();
      pop();
      introNextButton.show();
      break;
    case 60:
      push();
      outro2();
      pop();
      introNextButton.show();
      break;
    case 61:
      push();
      outro3();
      pop();
      introNextButton.show();
      break;
    case 62:
      push();
      outro4();
      pop();
      introNextButton.show();
      break;
    case 63:
      push();
      outro5();
      pop();
      introNextButton.show();
      break;
    case 64:
      push();
      outro6();
      pop();
      introNextButton.show();
      break;
    case 65:
      push();
      outro7();
      pop();
      introNextButton.show();
      break;
    case 66:
      push();
      outro8();
      pop();
      introNextButton.show();
      break;
    case 67:
      push();
      outro9();
      pop();
      introNextButton.show();
      break;
    case 68:
      push();
      outro10();
      pop();
      introNextButton.show();
      break;
    case 69:
      push();
      outro11();
      pop();
      introNextButton.show();
      break;
    case 70:
      push();
      outro12();
      pop();
      introNextButton.show();
      break;
    //여기까지
  }

  if (cursorOn) {
    image(cursor, mouseX - 20, mouseY - 20, 40, 40);
  }
  resetButton.reset_show();
}
function keyPressed() {
  if (stage == 0) {
    if (keyCode == BACKSPACE && _name.length > 0) {
      _name = _name.slice(0, -1);
    } else if (keyCode >= 65 && keyCode <= 90) _name += key;
  }
  // if (stage == 10) {
  //   if (keyCode == ENTER) {
  //     stage++;
  //     introSound.setVolume(0.2);
  //   }
  // }
}
function mouseClicked() {
  resetButton.reset();
  switch (stage) {
    case 0:
      if (submitButton.over()) {
        introSound.loop();
      }
      submitButton.next(1);
      break;
    case 1:
      introNextButton.next(1);
      break;
    case 2:
      introNextButton1.next(1);
      break;
    case 3:
      introNextButton.next(1);
      break;
    case 4:
      introNextButton.next(1);
      break;
    case 5:
      introNextButton.next(1);
      break;
    case 6:
      introNextButton.next(1);
      break;
    case 7:
      introNextButton.next(1);
      break;
    case 8:
      introNextButton.next(1);
      break;
    case 9:
      introNextButton.next(1);
      if (introNextButton.over()) {
        introSound.setVolume(0.2);
      }
      break;
    case 10:
      stage++;
      break;
    case 11:
      introNextButton.next(1);
      break;
    case 12:
      introNextButton.next(1);
      break;
    case 13:
      introNextButton.next(1);
      break;
    case 14:
      introNextButton.next(1);
      break;
    case 15:
      introNextButton.next(1);
      break;
    case 16:
      // if (introNextButton.over()) {
      //   introSound.setVolume(0.2);
      // }
      introNextButton.next(1);
      break;
    case 18:
      clickBook(); // 힌트책 클릭
      if (!click_book0) {
        showMatch(quiz_1_1[0]); //answer location과 일치하는지 확인
      }
      break;
    case 19:
      clickBook();
      if (!click_book0) {
        showMatch(quiz_2_1[0]);
      }
      break;
    case 20:
      clickBook();
      if (!click_book0) {
        showMatch(quiz_3_1[0]);
      }
      break;
    case 22:
      if (enterButton.over()) {
        //enter 버튼을 누르면 dialogue가 update된다
        enter++;
        if (enter <= text1_1.length) {
          for (let j = 0; j < enter; j++) {
            text1_1[j].goUp();
          }
        }
      }
      break;
    case 23:
      for (let i = 0; i < text1_1_selection.length; i++) {
        text1_1_selection[i].next(1);
      }
      if (text1_1_selection[0].over()) {
        loveScore += 2;
      } else if (text1_1_selection[1].over()) {
        loveScore += 1;
      } else if (text1_1_selection[2].over()) {
        loveScore += 0;
      }
      break;
    case 25:
      clickBook();
      if (!click_book0) {
        showMatch(quiz_2_1[1]); //answer location과 일치하는지 확인
      }
      break;
    case 26:
      clickBook();
      if (!click_book0) {
        showMatch(quiz_3_1[1]);
      }
      break;
    case 27:
      clickBook();
      if (!click_book0) {
        showMatch(quiz_1_1[1]);
      }
      break;
    case 29:
      if (enterButton.over()) {
        //enter 버튼을 누르면 dialogue가 update된다
        enter++;

        if (enter <= text1_2.length) {
          for (let j = 0; j <= enter - 1; j++) {
            text1_2[j].goUp();
          }
        }
      }
      break;
    case 30:
      for (let i = 0; i < text1_2_selection.length; i++) {
        text1_2_selection[i].next(1);
      }
      if (text1_2_selection[0].over()) {
        loveScore += 2;
      } else if (text1_2_selection[1].over()) {
        loveScore += 1;
      } else if (text1_2_selection[2].over()) {
        loveScore += 0;
      }
    case 31:
      if (nextButton.over()) {
        matchGameScore1 = 0;
        matchGameScore2 = 0;
        matchGameScore3 = 0;
      }
      nextButton.next(1);
      break;
    case 33:
      clickBook(); // 힌트책 클릭
      if (!click_book0) {
        showMatch(quiz_1_1[2]); //answer location과 일치하는지 확인
      }
      break;
    case 34:
      clickBook();
      if (!click_book0) {
        showMatch(quiz_2_1[2]);
      }
      break;
    case 35:
      clickBook();
      if (!click_book0) {
        showMatch(quiz_1_1[3]);
      }
      break;
    case 37:
      if (enterButton.over()) {
        //enter 버튼을 누르면 dialogue가 update된다
        enter++;

        if (enter <= text2_1.length) {
          for (let j = 0; j <= enter - 1; j++) {
            text2_1[j].goUp();
          }
        }
      }
      break;
    case 38:
      for (let i = 0; i < text2_1_selection.length; i++) {
        text2_1_selection[i].next(1);
      }
      if (text2_1_selection[0].over()) {
        loveScore += 2;
      } else if (text2_1_selection[1].over()) {
        loveScore += 1;
      } else if (text2_1_selection[2].over()) {
        loveScore += 0;
      }
      break;
    case 40:
      clickBook();
      if (!click_book0) {
        showMatch(quiz_3_1[2]); //answer location과 일치하는지 확인
      }
      break;
    case 41:
      clickBook();
      if (!click_book0) {
        showMatch(quiz_2_1[3]);
      }
      break;
    case 42:
      clickBook();
      if (!click_book0) {
        showMatch(quiz_2_1[4]);
      }
      break;
    case 44:
      if (enterButton.over()) {
        //enter 버튼을 누르면 dialogue가 update된다
        enter++;

        if (enter <= text2_3.length) {
          for (let j = 0; j <= enter - 1; j++) {
            text2_3[j].goUp();
          }
        }
      }
      break;
    case 45:
      if (enterButton.over()) {
        //enter 버튼을 누르면 dialogue가 update된다
        enter++;
        if (loveScore <= 3) {
          if (enter <= text2_2_1.length) {
            for (let j = 0; j <= enter - 1; j++) {
              text2_2_1[j].goUp();
            }
          }
        } else if (loveScore > 3) {
          if (enter <= text2_2.length) {
            for (let j = 0; j <= enter - 1; j++) {
              text2_2[j].goUp();
            }
          }
        }
      }
      break;
    case 46:
      if (loveScore <= 3) {
        for (let i = 0; i < text2_2_1_selection.length; i++) {
          text2_2_1_selection[i].next(13);
        }
        if (text2_2_1_selection[0].over()) {
          // loveScore += 1;
          loveResult1 = false; // 호감도 낮음, 여자랑 연결도 X
        } else if (text2_2_1_selection[1].over()) {
          loveScore += 0;
          loveResult1 = true; // 호감도 낮음, 여자랑 연결은 해줌
        }
      } else if (loveScore > 3) {
        for (let i = 0; i < text2_2_selection.length; i++) {
          text2_2_selection[i].next(13);
        }
        if (text2_2_selection[0].over()) {
          // loveScore += 1;
          loveResult2 = true; // 호감도 높음, 연애도 함
        } else if (text2_2_selection[1].over()) {
          loveScore += 0;
          loveResult2 = false; //호감도 높음, 연애 안함
        }
      }

    case 59:
      //공통 엔딩-1
      introNextButton.next(1);
      break;
    case 60:
      //공통 엔딩-2
      introNextButton.next(1);
      break;
    case 61:
      //공통 엔딩-3
      if (
        matchGameScore >= 20 &&
        (loveResult1 == true || loveResult1 == false || loveResult2 == false)
      ) {
        //if 성과 우수 & (데이트 false OR 호감도 미달),
        introNextButton.next(1);
      } else if (
        matchGameScore < 20 &&
        (loveResult2 == false || loveResult1 == true || loveResult1 == false)
      ) {
        //if 성과 미달 & (데이트 false OR 호감도 미달), introNextButton.next(4);
        introNextButton.next(4);
      } else if (matchGameScore >= 20 && loveResult2 == true) {
        //if 성과 우수 & 데이트 true, introNextButton.next(7);
        introNextButton.next(7);
      }
      break;
    case 62:
      //우수 사원 O, 연애 X-1
      introNextButton.next(1);
      break;
    case 63:
      //우수 사원 O, 연애 X-2
      introNextButton.next(1);
      break;
    case 64:
      //우수 사원 O, 연애 X-3
      break;
    case 65:
      //우수 사원 X, 연애 X-1
      introNextButton.next(1);
      break;
    case 66:
      //우수 사원 X, 연애 X-2
      introNextButton.next(1);
      break;
    case 67:
      //우수 사원 X, 연애 X-3
      break;
    case 68:
      //우수 사원 O, 연애 O-1
      introNextButton.next(1);
      break;
    case 69:
      //우수 사원 O, 연애 O-2
      introNextButton.next(1);
      break;
    case 70:
      //우수 사원 O, 연애 O-3
      break;
    //여기까지
  }
}
