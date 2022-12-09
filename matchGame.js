let case1;
let case3;
let case4 = [];
let case4Num = 0;
let schedule = [];
let scheduleNum = 0;
let case6;
let case7 = [];
let case7Num = 0;
let case9;
let case9Back;
let case9BackX = 0;
let barY_1 = 0;
let barY = 0;
// let barY_2 = 450;
let barSpeed = 5; // 여기를 늘리면 눈을 깜박이는 속도가 빨라집니다
let barGrav = 0.03;

let imageAlpha0 = 0;
let imageAlpha1 = 0;
let imageAlpha2 = 0;
let imageAlpha3 = 0;
let imageAlpha4 = 0;
let imageAlpha5 = 0;
let imageAlpha6 = 0;
let imageAlpha7 = 0;
let imageAlpha8 = 0;
let imageAlpha9 = 0;

let case9Y = 0;
let case9Speed = 0.8;
let timestamp = 0;

// 엔딩용 추가
let case59;
let case60;
let case61;
let case62;
let case63;
let case64;
let case65;
let case66;
let case67;
let case69;
let case70;

let imageAlpha59 = 0;
let imageAlpha60 = 0;
let imageAlpha61 = 0;
let imageAlpha62 = 0;
let imageAlpha63 = 0;
let imageAlpha64 = 0;
let imageAlpha65 = 0;
let imageAlpha66 = 0;
let imageAlpha67 = 0;
let imageAlpha68 = 0;
let imageAlpha69 = 0;
let imageAlpha70 = 0;
// 여기까지

let correctMatch;
let correctMatchTiming;
let matchGameResult;

let pts = [];

let matchGameScore = 0;

let matchGameScore1 = 0;
let matchGameScore2 = 0;
let matchGameScore3 = 0;

let matchGameScoreIsTrue = false;

let anwerRow;
let answerColumn;
let questionRow;
let questionColumn;
let clickNum = 0;

let wrongAnswerDelayCount = 2;
let wrongAnswerTiming = 0;
let wrongAnswerDelay = false;

// let rightAnswerTiming = 0;
let stageStartTiming = 0;
let stageStart = true;

let stop = false;

let dialogue_x;
let dialogue_y;
let dialogue_w;
let dialogue_h;

let book_x;
let book_y;
let book_w;
let book_h;
let tab_x;
let tab_y;
let tab_w;
let tab_h;
let click_book0 = false;
let click_book1 = false;
let click_book2 = false;
let click_book3 = false;
let click_book4 = false;
let click_book5 = false;

let hideLine = false;

function intro1() {
  //눈꺼풀
  tint(255, imageAlpha1);
  image(case1, 0, 140, width, height);
  // filter(BLUR,5);
  fill(0);
  rectMode(CORNERS);
  rect(0, 0, width, height / 2 - barY_1);
  rect(0, height, width, height / 2 + barY_1);
  barY_1 += barSpeed;
  barSpeed += barGrav;

  if (barY_1 > 150) {
    barY_1 = 150;
    barSpeed = -barSpeed;
  } else if (barY_1 < 0) {
    barY_1 = 0;
    barSpeed = -barSpeed;
  }
  if (barY_1 == 150) barY++;

  if (barY == 3) {
    barY = 3;
    barSpeed = 0;
    barGrav = 0;
    barY_1 = 150;
  }
  imageAlpha1 += 10;

  introTextBox(1, 180, 650, 1200, 200);
}

function intro2() {
  //자기소개
  push();
  image(case1, 0, 140, width, height);
  fill(0);
  rectMode(CORNERS);
  rect(0, 0, width, height / 2 - 150);
  rect(0, height, width, height / 2 + 150);
  tint(255, imageAlpha2);
  image(_background, 0, 0, width, height);
  pop();

  introTextBox(2, 180, 350, 1200, 200);
  imageAlpha2 += 10;
}

function intro3() {
  push();
  image(_background, 0, 0, width, height);
  tint(255, imageAlpha3);
  image(case3, 0, 0, width, height);
  pop();

  introTextBox(3, 180, 650, 1200, 200);
  imageAlpha3 += 10;
}

function intro4() {
  push();
  image(case3, 0, 0, width, height);
  tint(255, imageAlpha4);
  image(case4[case4Num], 0, 0, width, height);
  pop();

  if (millis() - timestamp > 350) {
    case4Num++;
    timestamp = millis();
    if (case4Num >= 4) case4Num = 4;
  }

  imageAlpha4 += 10;
  introTextBox(4, 180, 650, 1200, 200);
}

function intro5() {
  push();
  image(case4[4], 0, 0, width, height);
  tint(255, imageAlpha5);
  image(case4[0], 0, 0, width, height);
  image(schedule[scheduleNum], 150, 50);
  pop();

  if (millis() - timestamp > 500) {
    scheduleNum++;
    timestamp = millis();
    if (scheduleNum >= 1) scheduleNum = 1;
  }
  imageAlpha5 += 10;
  introTextBox(5, 180, 650, 1200, 200);
}

function intro6() {
  push();
  image(case4[0], 0, 0, width, height);
  image(schedule[1], 150, 50);
  tint(255, imageAlpha6);
  image(case6, 0, 0, width, height);
  pop();
  imageAlpha6 += 10;
  introTextBox(6, 180, 650, 1200, 200);
}

function intro7() {
  push();
  image(case6, 0, 0, width, height);
  tint(255, imageAlpha7);
  image(case7[case7Num], 0, 0, width, height);
  pop();
  if (millis() - timestamp > 500) {
    case7Num++;
    timestamp = millis();
    if (case7Num >= 3) case7Num = 3;
  }
  imageAlpha7 += 10;
  introTextBox(7, 180, 650, 1200, 200);
}

function intro8() {
  push();
  image(case7[3], 0, 0, width, height);
  tint(255, imageAlpha8);
  image(case8, 0, 0, width, height);
  image(case8Clock, 0, 0, width, height);
  // alarmClock.play();
  pop();
  imageAlpha8 += 10;
  introTextBox(8, 180, 650, 1200, 200);
}

function intro9() {
  push();
  image(case8, 0, 0, width, height);
  image(case8Clock, 0, 0, width, height);
  tint(255, imageAlpha9);
  background(255);
  image(case9Back, case9BackX, 0);
  image(case9, 0, case9Y, width, height);
  pop();
  case9BackX -= 0.3;
  case9Y += case9Speed;
  // case9Speed += case9Grav;
  if (case9Y < -15 || case9Y > 15) {
    case9Y = constrain(case9Y, -15, 15);
    case9Speed = -case9Speed;
  }
  introTextBox(9, 180, 650, 1200, 200);
  imageAlpha9 += 10;
}
//엔딩용 추가
function outro1() {
  push();
  tint(255, imageAlpha59);
  image(case59, 0, 0, width, height);
  pop();

  outroTextBox(1, 180, 650, 1200, 200);
  imageAlpha59 += 10;
}

function outro2() {
  push();
  image(case59, 0, 0, width, height);
  tint(255, imageAlpha60);
  image(case60, 0, 0, width, height);
  pop();

  outroTextBox(2, 180, 650, 1200, 200);
  imageAlpha60 += 10;
}

function outro3() {
  push();
  image(case60, 0, 0, width, height);
  tint(255, imageAlpha61);
  image(case61, 0, 0, width, height);
  pop();

  outroTextBox(3, 180, 650, 1200, 200);
  imageAlpha61 += 10;
}

function outro4() {
  push();
  image(case61, 0, 0, width, height);
  tint(255, imageAlpha62);
  image(case62, 0, 0, width, height);
  pop();

  outroTextBox(4, 180, 650, 1200, 200);
  imageAlpha62 += 10;
}

function outro5() {
  push();
  image(case62, 0, 0, width, height);
  tint(255, imageAlpha63);
  image(case63, 0, 0, width, height);
  pop();

  outroTextBox(5, 180, 650, 1200, 200);
  imageAlpha63 += 10;
}

function outro6() {
  push();
  image(case63, 0, 0, width, height);
  tint(255, imageAlpha64);
  image(case64, 0, 0, width, height);
  pop();

  outroTextBox(6, 180, 650, 1200, 200);
  imageAlpha64 += 10;
}

function outro7() {
  push();
  image(case64, 0, 0, width, height);
  tint(255, imageAlpha65);
  image(case65, 0, 0, width, height);
  pop();

  outroTextBox(7, 180, 650, 1200, 200);
  imageAlpha65 += 10;
}

function outro8() {
  push();
  image(case65, 0, 0, width, height);
  tint(255, imageAlpha66);
  image(case66, 0, 0, width, height);
  pop();

  outroTextBox(8, 180, 650, 1200, 200);
  imageAlpha66 += 10;
}

function outro9() {
  push();
  image(case66, 0, 0, width, height);
  tint(255, imageAlpha67);
  image(case67, 0, 0, width, height);
  pop();

  outroTextBox(9, 180, 650, 1200, 200);
  imageAlpha67 += 10;
}

function outro10() {
  push();
  image(case64, 0, 0, width, height);
  tint(255, imageAlpha68);
  image(case65, 0, 0, width, height);
  pop();

  outroTextBox(7, 180, 650, 1200, 200);
  imageAlpha68 += 10;
}

function outro11() {
  push();
  image(case65, 0, 0, width, height);
  tint(255, imageAlpha69);
  image(case69, 0, 0, width, height);
  pop();

  outroTextBox(10, 180, 650, 1200, 200);
  imageAlpha69 += 10;
}

function outro12() {
  push();
  image(case69, 0, 0, width, height);
  tint(255, imageAlpha70);
  image(case70, 0, 0, width, height);
  pop();

  outroTextBox(11, 180, 650, 1200, 200);
  imageAlpha70 += 10;
}
//여기까지

function showQuestion(qR, qC) {
  //qR: question Row, qC: question Column
  //그리드 만들기(question location 표시, 마우스 오버시 이미지 전환)
  // console.log(stageStart);
  if (stageStart) {
    callSound.play();
    if (!gameTimer.timerStop) {
      timerSound.play();
    }
    stageStartTiming = millis();
    stageStart = false;
  }
  push();
  noCursor();
  pop();
  // console.log(int((millis() - stageStartTiming) / 1000.0));
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (
        mouseX > 140 + widthOfCard * 2 * c &&
        mouseX < 140 + widthOfCard * 2 * c + widthOfCard * 2 &&
        mouseY > r * heightOfCard * 2 + 140 &&
        mouseY < r * heightOfCard * 2 + 140 + heightOfCard * 2
      ) {
        image(
          ListOfCards_1[r][c],
          widthOfCard * 2 * c + 140,
          heightOfCard * 2 * r + 140,
          widthOfCard * 2,
          heightOfCard * 2
        );
      } else {
        image(
          ListOfCards[r][c],
          widthOfCard * 2 * c + 140,
          heightOfCard * 2 * r + 140,
          widthOfCard * 2,
          heightOfCard * 2
        );
      }
    }
  }
  image(
    ListOfCards_1[qR][qC],
    widthOfCard * 2 * qC + 140,
    heightOfCard * 2 * qR + 140,
    widthOfCard * 2,
    heightOfCard * 2
  );

  // image(sticker, 45, 50 + rows * heightOfCard * 2, 300, 200);
  questionColumn = qC;
  questionRow = qR;
}

function showQuestion_1(qR, qC) {
  if (stageStart) {
    if (timerSound.isPlaying) {
      timerSound.stop();
    }
    helloSound.setVolume(1);
    helloSound.play();
    stageStart = false;
  }
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      image(
        ListOfCards[r][c],
        widthOfCard * 2 * c + 140,
        heightOfCard * 2 * r + 140,
        widthOfCard * 2,
        heightOfCard * 2
      );
    }
  }

  image(
    ListOfCards_1[qR][qC],
    widthOfCard * 2 * qC + 140,
    heightOfCard * 2 * qR + 140,
    widthOfCard * 2,
    heightOfCard * 2
  );
}

function showQuestion_2(qR, qC) {
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      image(
        ListOfCards[r][c],
        widthOfCard * 2 * c + 140,
        heightOfCard * 2 * r + 140,
        widthOfCard * 2,
        heightOfCard * 2
      );
    }
  }
  image(
    ListOfCards_1[qR][qC],
    widthOfCard * 2 * qC + 140,
    heightOfCard * 2 * qR + 140,
    widthOfCard * 2,
    heightOfCard * 2
  );
}

function showQuestion_3(qR, qC) {
  if (stageStart) {
    helloSound_1.setVolume(1);
    helloSound_1.play();
    stageStart = false;
  }
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      image(
        ListOfCards[r][c],
        widthOfCard * 2 * c + 140,
        heightOfCard * 2 * r + 140,
        widthOfCard * 2,
        heightOfCard * 2
      );
    }
  }

  image(
    ListOfCards_1[qR][qC],
    widthOfCard * 2 * qC + 140,
    heightOfCard * 2 * qR + 140,
    widthOfCard * 2,
    heightOfCard * 2
  );
}

function showLine() {
  if (!hideLine) {
    pts = [
      createVector(
        widthOfCard * (2 * questionColumn) + 176,
        heightOfCard * (2 * questionRow + 1) + 140
      ),
      createVector(
        (3 * (widthOfCard * (2 * questionColumn) + 176) + mouseX) / 4,
        heightOfCard * (2 * questionRow + 1) + 262
      ),
      createVector(
        (widthOfCard * (2 * questionColumn) + 176 + 3 * mouseX) / 4,
        mouseY + 150
      ),
      createVector(mouseX, mouseY),
    ];
    if (!correctMatch) {
      push();
      noFill();
      stroke(89, 216, 93);
      strokeWeight(6);
      bezier(
        pts[0].x,
        pts[0].y,
        pts[1].x,
        pts[1].y,
        pts[2].x,
        pts[2].y,
        pts[3].x,
        pts[3].y
      );
      pop();
    }
    push();
    // noCursor();
    image(wire, mouseX - 15, mouseY - 15, 30, 30);
    pop();
  } else {
    image(cursor, mouseX - 20, mouseY - 20, 40, 40);
  }
}

function showQuestionName(_num) {
  push();
  fill(0);
  textSize(30);
  text(dictionary_4[_num], 1200, 510);
  pop();
}

function showHint_1(_text) {
  //숫자게임 질문지
  dialogue_x = 1115;
  dialogue_y = 280;
  dialogue_w = 380;
  dialogue_h = 130;
  // image(dialog, dialogue_x, dialogue_y, 500, 620);
  image(dialogue_W, dialogue_x + 80, dialogue_y + 250, dialogue_w, dialogue_h);
  fill(0);
  textSize(20);
  textWrap(WORD);
  text(
    dictionary_1[_text],
    dialogue_x + 140,
    dialogue_y + 290,
    dialogue_w - 80,
    dialogue_h
  );
  // print(_text);
  // print(dictionary_1[_text]);
}
function showHint_2(_text) {
  //이름게임 질문지
  dialogue_x = 1115;
  dialogue_y = 280;
  dialogue_w = 380;
  dialogue_h = 130;
  // image(dialog, dialogue_x, dialogue_y, 500, 620);
  image(dialogue_W, dialogue_x + 80, dialogue_y + 250, dialogue_w, dialogue_h);
  fill(0);
  textSize(20);
  textWrap(WORD);
  text(
    dictionary_2[_text],
    dialogue_x + 140,
    dialogue_y + 290,
    dialogue_w - 80,
    dialogue_h
  );
}
function showHint_3(_text) {
  //관공서 게임 질문지
  dialogue_x = 1115;
  dialogue_y = 280;
  dialogue_w = 380;
  dialogue_h = 130;
  // image(dialog, dialogue_x, dialogue_y, 500, 620);
  image(dialogue_W, dialogue_x + 80, dialogue_y + 250, dialogue_w, dialogue_h);
  fill(0);
  textSize(20);
  textWrap(WORD);
  text(
    dictionary_3[_text],
    dialogue_x + 140,
    dialogue_y + 290,
    dialogue_w - 80,
    dialogue_h
  );
}

function showMatch([qR, qC, aR, aC]) {
  //정답 매치(마우스클릭)
  if (
    mouseX > 140 + widthOfCard * 2 * aC &&
    mouseX < 140 + widthOfCard * 2 * aC + widthOfCard * 2 &&
    mouseY > aR * heightOfCard * 2 + 140 &&
    mouseY < aR * heightOfCard * 2 + 140 + heightOfCard * 2
  ) {
    correctMatch = true; //answer location을 클릭하면 참

    correctMatchTiming = millis();
    matchGameResult = (correctMatchTiming - stageStartTiming) / 1000.0;

    matchGameScoreIsTrue = true;
  } else {
    //wrong location을 클릭하면, wrongAnswerDelay가 참
    wrongAnswerDelayCount = 2;
    if (wrongAnswerDelayCount > 0) {
      wrongAnswerDelay = true;
    }
    if (wrongAnswerDelayCount == 0) {
      wrongAnswerDelay = false;
    }
  }
  //answer location 값 저장
  answerColumn = aC;
  answerRow = aR;

  if (
    mouseX > 140 &&
    mouseX < 140 + widthOfCard * 20 &&
    mouseY > 140 &&
    mouseY < 140 + heightOfCard * 16
  ) {
    clickNum++;
    wrongAnswerTiming = millis();
  } // 오답 클릭 시 "아니에요"가 2초 동안 팝업하기 위해 타이밍과 오답 횟수 저장
  console.log(clickNum);
}

function showAnswer() {
  //정답 매치 결과(드로우)
  if (correctMatch) {
    image(
      ListOfCards_1[answerRow][answerColumn],
      widthOfCard * 2 * answerColumn + 140,
      heightOfCard * 2 * answerRow + 140,
      widthOfCard * 2,
      heightOfCard * 2
    );
    push();
    noFill();
    stroke(89, 216, 93);
    strokeWeight(6);
    (pts[1] = createVector(
      (3 * (widthOfCard * (2 * questionColumn) + 176) +
        widthOfCard * (2 * answerColumn) +
        171) /
        4,
      heightOfCard * (2 * questionRow + 1) + 262
    )),
      (pts[2] = createVector(
        (widthOfCard * (2 * questionColumn) +
          171 +
          3 * (widthOfCard * (2 * answerColumn) + 176)) /
          4,
        heightOfCard * (2 * answerRow + 1) + 140 + 150
      ));
    pts[3] = createVector(
      widthOfCard * (2 * answerColumn) + 176,
      heightOfCard * (2 * answerRow + 1) + 140
    );
    bezier(
      pts[0].x,
      pts[0].y,
      pts[1].x,
      pts[1].y,
      pts[2].x,
      pts[2].y,
      pts[3].x,
      pts[3].y
    );
    pop();
    image(
      dialogue_W,
      dialogue_x + 80,
      dialogue_y + 400,
      dialogue_w,
      dialogue_h
    );

    fill(0);
    textAlign(LEFT);
    textSize(20);
    if (
      !stageStart &&
      matchGameResult > 0 &&
      matchGameResult <= gameTimer.maxTime / 3
    ) {
      if (!callSuccessSound_1.isPlaying()) {
        callSuccessSound_1.play();
      }
      text("최고예요!", dialogue_x + 140, dialogue_y + 460);
      if (matchGameScoreIsTrue) {
        matchGameScore += 3;
        matchGameScore3++;
        matchGameScoreIsTrue = false;
      }
    } else if (
      !stageStart &&
      matchGameResult > gameTimer.maxTime / 3 &&
      matchGameResult <= (gameTimer.maxTime * 2) / 3
    ) {
      if (!callSuccessSound_2.isPlaying()) {
        callSuccessSound_2.play();
      }
      text("고마워요", dialogue_x + 140, dialogue_y + 460);
      if (matchGameScoreIsTrue) {
        matchGameScore += 2;
        matchGameScore2++;
        matchGameScoreIsTrue = false;
      }
    } else if (
      !stageStart &&
      matchGameResult > (gameTimer.maxTime * 2) / 3 &&
      matchGameResult <= gameTimer.maxTime
    ) {
      if (!callSuccessSound_3.isPlaying()) {
        callSuccessSound_3.play();
      }
      text("휴.. 겨우 연결했네", dialogue_x + 140, dialogue_y + 460);
      if (matchGameScoreIsTrue) {
        matchGameScore += 1;
        matchGameScore1++;
        matchGameScoreIsTrue = false;
      }
    }
  }

  if (
    //오답 시 "아니에요" 2초간 팝업
    wrongAnswerDelay &&
    (millis() - wrongAnswerTiming) / 1000.0 < wrongAnswerDelay
  ) {
    if (!correctMatch) {
      if (!callFailureSound.isPlaying()) {
        callFailureSound.setVolume(0.5);
        callFailureSound.play();
      }
      image(
        dialogue_W,
        dialogue_x + 80,
        dialogue_y + 400,
        dialogue_w,
        dialogue_h
      );
      fill(0);
      textAlign(LEFT);
      textSize(20);
      text("아니에요", dialogue_x + 140, dialogue_y + 460);
    }
  } else {
    wrongAnswerDelay = false;
  }
}

function showBook() {
  //힌트 책 (드로우)
  book_x = cols * widthOfCard * 2 + 136;
  book_y = rows * heightOfCard * 2 - 190;
  book_w = 120;
  book_h = 220;
  if (
    mouseX > book_x &&
    mouseX < book_x + book_w &&
    mouseY > book_y &&
    mouseY < book_y + book_h
  ) {
    image(book_over, book_x, book_y, book_w, book_h);
  } else image(book, book_x, book_y, book_w, book_h);

  if (click_book0) {
    tab_x = 90;
    tab_y = 170;
    tab_w = 50;
    tab_h = 80;
    if (click_book1) {
      image(book_map, 0, 0, width, height);
    } else if (click_book2) {
      image(book_address1, 0, 0, width, height);
    } else if (click_book3) {
      image(book_address2, 0, 0, width, height);
    } else if (click_book4) {
      image(book_address3, 0, 0, width, height);
    } else if (click_book5) {
      image(book_mapOffice, 0, 0, width, height);
    }
    if (
      mouseX > tab_x &&
      mouseX < tab_x + tab_w &&
      mouseY > tab_y &&
      mouseY < tab_y + tab_h
    ) {
      image(tab1_1, tab_x, tab_y, tab_w, tab_h);
    } else image(tab1, tab_x, tab_y, tab_w, tab_h);
    if (
      mouseX > tab_x &&
      mouseX < tab_x + tab_w &&
      mouseY > tab_y + (tab_h + 5) * 1 &&
      mouseY < tab_y + (tab_h + 5) * 1 + tab_h
    ) {
      image(tab2_1, tab_x, tab_y + (tab_h + 5) * 1, tab_w, tab_h);
    } else image(tab2, tab_x, tab_y + (tab_h + 5) * 1, tab_w, tab_h);
    if (
      mouseX > tab_x &&
      mouseX < tab_x + tab_w &&
      mouseY > tab_y + (tab_h + 5) * 2 &&
      mouseY < tab_y + (tab_h + 5) * 2 + tab_h
    ) {
      image(tab3_1, tab_x, tab_y + (tab_h + 5) * 2, tab_w, tab_h);
    } else image(tab3, tab_x, tab_y + (tab_h + 5) * 2, tab_w, tab_h);
    if (
      mouseX > tab_x &&
      mouseX < tab_x + tab_w &&
      mouseY > tab_y + (tab_h + 5) * 3 &&
      mouseY < tab_y + (tab_h + 5) * 3 + tab_h
    ) {
      image(tab4_1, tab_x, tab_y + (tab_h + 5) * 3, tab_w, tab_h);
    } else image(tab4, tab_x, tab_y + (tab_h + 5) * 3, tab_w, tab_h);
    if (
      mouseX > tab_x &&
      mouseX < tab_x + tab_w &&
      mouseY > tab_y + (tab_h + 5) * 4 &&
      mouseY < tab_y + (tab_h + 5) * 4 + tab_h
    ) {
      image(tab5_1, tab_x, tab_y + (tab_h + 5) * 4, tab_w, tab_h);
    } else image(tab5, tab_x, tab_y + (tab_h + 5) * 4, tab_w, tab_h);
  }
}
function clickBook() {
  //힌트 책(마우스 클릭)
  if (
    mouseX > book_x &&
    mouseX < book_x + book_w &&
    mouseY > book_y &&
    mouseY < book_y + book_h
  ) {
    click_book0 = !click_book0;
    hideLine = !hideLine;
  }
  if (click_book0) {
    click_book1 = true;
    if (
      mouseX > tab_x &&
      mouseX < tab_x + tab_w &&
      mouseY > tab_y &&
      mouseY < tab_y + tab_h
    ) {
      click_book1 = true;
      click_book2 = false;
      click_book3 = false;
      click_book4 = false;
      click_book5 = false;
    }
    if (
      mouseX > tab_x &&
      mouseX < tab_x + tab_w &&
      mouseY > tab_y + (tab_h + 5) * 1 &&
      mouseY < tab_y + (tab_h + 5) * 1 + tab_h
    ) {
      click_book1 = false;
      click_book2 = true;
      click_book3 = false;
      click_book4 = false;
      click_book5 = false;
    }
    if (
      mouseX > tab_x &&
      mouseX < tab_x + tab_w &&
      mouseY > tab_y + (tab_h + 5) * 2 &&
      mouseY < tab_y + (tab_h + 5) * 2 + tab_h
    ) {
      click_book1 = false;
      click_book2 = false;
      click_book3 = true;
      click_book4 = false;
      click_book5 = false;
    }
    if (
      mouseX > tab_x &&
      mouseX < tab_x + tab_w &&
      mouseY > tab_y + (tab_h + 5) * 3 &&
      mouseY < tab_y + (tab_h + 5) * 3 + tab_h
    ) {
      click_book1 = false;
      click_book2 = false;
      click_book3 = false;
      click_book4 = true;
      click_book5 = false;
    }
    if (
      mouseX > tab_x &&
      mouseX < tab_x + tab_w &&
      mouseY > tab_y + (tab_h + 5) * 4 &&
      mouseY < tab_y + (tab_h + 5) * 4 + tab_h
    ) {
      click_book1 = false;
      click_book2 = false;
      click_book3 = false;
      click_book4 = false;
      click_book5 = true;
    }
  }
}

function matchGameDraw_1([qr, qc, ar, ac]) {
  showQuestion(qr, qc);
  showBook();
  showQuestionName(str(qr) + str(qc));
  showHint_1(str(qr) + str(qc) + str(ar) + str(ac));
  showAnswer();
  gameTimer.setUpTimer();
  gameTimer.bar();
  showLine();
}

function matchGameDraw_2([qr, qc, ar, ac]) {
  showQuestion(qr, qc);
  showBook();
  showQuestionName(str(qr) + str(qc));
  showHint_2(str(qr) + str(qc) + str(ar) + str(ac));
  showAnswer();
  gameTimer.setUpTimer();
  gameTimer.bar();
  showLine();
}

function matchGameDraw_3([qr, qc, ar, ac]) {
  showQuestion(qr, qc);
  showBook();
  showQuestionName(str(qr) + str(qc));
  showHint_3(str(qr) + str(qc) + str(ar) + str(ac));
  showAnswer();
  gameTimer.setUpTimer();
  gameTimer.bar();
  showLine();
}
