class Button {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.w = 50;
    this.h = 50;
    this.textSize = 20;
  }
  over() {
    //마우스오버 시 참
    if (dist(this.x + 25, this.y + 25, mouseX, mouseY) < 25) {
      return true;
    } else {
      return false;
    }
  }
  show() {
    //기본 사각형 버튼
    if (this.over()) {
      push();
      tint(80, 20, 10, 180);
      image(introNext, this.x, this.y, this.w, this.h);
      pop();
    } else image(introNext, this.x, this.y, this.w, this.h);
    // textFont(mukmul);
    textAlign(LEFT);
  }
  next(n) {
    //스테이지 넘기는 버튼
    if (this.over()) {
      if (stage == 0) {
        loadDialogue();
      } else if (stage == 27) {
        matchGameScore1 = 0;
        matchGameScore2 = 0;
        matchGameScore3 = 0;
      }
      stage = stage + n;
      stageStart = true;
      clickNum = 0;
      correctMatch = false;
    }
  }
}
class Selection {
  constructor(x, y, w, h, _text) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.text = _text;
    this.textSize = 20;
  }
  over() {
    let x2 = this.x + this.w;
    let y2 = this.y + this.h;
    if (this.x < mouseX && mouseX < x2 && this.y < mouseY && mouseY < y2) {
      return true;
    } else return false;
  }
  display() {
    if (this.over()) {
      image(option_box_1, this.x, this.y, this.w, this.h);
    } else image(option_box, this.x, this.y, this.w, this.h);
    // textFont(mukmul);
    textAlign(LEFT);
    textSize(this.textSize);
    fill(0);
    textWrap(WORD);
    text(this.text, this.x + 10, this.y + 30, this.w - 20, this.h);
  }
  next(n) {
    //스테이지 넘기는 버튼
    if (this.over()) {
      stage = stage + n;
      stageStart = true;
      clickNum = 0;
      correctMatch = false;
    }
  }
}

class Text {
  constructor(text) {
    this.text = text;
    this.x = 1050 + 150;
    this.y = 790;
    this.w = 330;
    this.h = 100;
    this.splitString = split(this.text, ":"); // :을 기준으로 text split, 말풍선 구분
  }
  showDialogue() {
    textAlign(LEFT);
    fill(0);
    textWrap(WORD);
    if (this.splitString[0] == "P") {
      //"P"=흰말풍선
      // print("P");
      image(dialogue_W, this.x, this.y, this.w, this.h);
      text(this.splitString[1], this.x + 40, this.y + 30, this.w - 40, this.h);
    } else if (this.splitString[0] == "M") {
      //"M"=연두색 말풍선
      // print("M");
      image(dialogue_YG, this.x + 40, this.y, this.w, this.h);
      text(this.splitString[1], this.x + 60, this.y + 30, this.w - 40, this.h);
    } else if (this.splitString[0] == "D") {
      //"D"=지시문
      textAlign(CENTER);
      // print("D");
      // image(textBox_2, this.x + 20, this.y, this.w, this.h);
      text(this.splitString[1], this.x + 35, this.y + 30, this.w - 40, this.h);
    }
  }
  goUp() {
    //말풍선 한칸씩 위로 이동, dialogue box를 넘어가면 없어짐
    this.y -= 120;
    if (this.y < 250) {
      this.y = -999;
    }
  }
}

class Timer {
  constructor(maxTime, _x, _y, _w, _h) {
    this.maxTime = maxTime;
    this.now = 0;
    this.x = _x;
    this.y = _y;
    this.w = _w;
    this.h = _h;
    this.timerStop = false;
    this.stopFrameCount = 0;
    this.stopFrameCountIsTrue = true;
    this.answerDelayCount = 2;
  }
  bar() {
    image(timerBar, this.x, this.y, this.w, this.h);
    push();
    fill(255, 231, 173);
    stroke(0);
    strokeWeight(2);
    rectMode(CORNERS);
    rect(
      this.x + this.w,
      this.y + 1,
      this.x + (this.w * (this.maxTime - this.now)) / this.maxTime,
      this.y + this.h - 1
    );
    pop();
  }
  setUpTimer() {
    // if (!this.timerStop && frameCount % 60 == 0 && this.now > 0) {
    //   this.now--;
    // }
    if (
      !this.timerStop &&
      int((millis() - stageStartTiming) / 1000.0) >= this.now &&
      this.now < this.maxTime
    ) {
      this.now++;
    }

    if (this.now == this.maxTime) {
      if (this.stopFrameCountIsTrue) {
        this.stopFrameCount = frameCount;
        this.stopFrameCountIsTrue = false;
      }
      if (
        frameCount % 40 == this.stopFrameCount % 40 &&
        this.answerDelayCount > 0
      ) {
        this.answerDelayCount--;
        if (!callFailureSound.isPlaying()) {
          callFailureSound.setVolume(0.5);
          callFailureSound.play();
        }
      }
      if (this.answerDelayCount > 0) {
        image(
          dialogue_W,
          dialogue_x + 80,
          dialogue_y + 400,
          dialogue_w,
          dialogue_h
        );
        fill(0);
        textAlign(LEFT);
        textFont(mukmul);
        textSize(20);
        text("실망이에요", dialogue_x + 120, dialogue_y + 430);
      }
      if (this.answerDelayCount == 0) {
        if (callFailureSound.isPlaying()) {
          callFailureSound.stop();
        }
        clickNum = 0;
        this.now = 0;
        correctMatch = false;
        this.timerStop = false;
        this.answerDelayCount = 2;
        stageStart = true;
        this.stopFrameCountIsTrue = true;
        stage++;
      }
    }
    if (correctMatch) {
      this.timerStop = true;
      if (this.stopFrameCountIsTrue) {
        this.stopFrameCount = frameCount;
        this.stopFrameCountIsTrue = false;
      }
    }
    if (this.timerStop) {
      timerSound.stop();
      if (
        frameCount % 40 == this.stopFrameCount % 40 &&
        this.answerDelayCount > 0
      ) {
        this.answerDelayCount--;
      }
      if (this.answerDelayCount == 0) {
        if (callSuccessSound_1.isPlaying()) {
          callSuccessSound_1.stop();
        } else if (callSuccessSound_2.isPlaying()) {
          callSuccessSound_2.stop();
        } else if (callSuccessSound_3.isPlaying()) {
          callSuccessSound_3.stop();
        }
        clickNum = 0;
        this.now = 0;
        correctMatch = false;
        this.timerStop = false;
        this.answerDelayCount = 2;
        stageStart = true;
        this.stopFrameCountIsTrue = true;
        stage++;
      }
    }
  }
}
