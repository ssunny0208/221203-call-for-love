let introText = [];
let text1_1 = [];
let text1_1_selection = [];
let text1_2 = [];
let text1_2_selection = [];
let text2_1 = [];
let text2_1_selection = [];
let text2_2 = [];
let text2_2_selection = [];
let text2_3 = [];

let quiz_1 = [];
let quiz_1_1 = [];
let quiz_2 = [];
let quiz_2_1 = [];
let quiz_3 = [];
let quiz_3_1 = [];

let rows;
let cols;
let maxMatch;
let widthOfCard;
let heightOfCard;

function loadDialogue() {
  text1_1 = [
    //돌발전화 1-1
    "P:오늘 점심은 뭐예요?",
    "M:휴... 또 당신이군요.",
    "P:ㅎㅎ 왜이렇게 날카로워요. 베일 뻔했잖아요. 점심 못 먹었어요?",
    "M:점심은 무슨... 먹을 시간도 없네요.",
    "P:웬일로 제 말에 대답을 해줘요?",
    "M:대답해줘도 불만인 거예요 이제?",
    "P:그럴 리가요. ㅎㅎ 바빠도 뭐라도 챙겨 먹어야죠.",
    "P:저는 방금 " +
      _name +
      "씨 회사 근처에 새로 생긴 데서 브런치 먹고 오는 길이에요.",
    "M:누구 놀려요? 아주 좋으시겠네요.",
    "P:놀리다니요~ 좋은 정보 알려주는 거죠.",
    "P:거기 괜찮더라구요? 다음에 한번 가보세요~ 저랑 가보면 더 좋구 ㅎㅎ",
    "M:네-에. 아주 감사하네요. ",
    "P:아보카도 좋아하죠?",
    "M:그건 또 어떻게 알았어요?",
    "P:다 방법이 있죠~ 일하다 잠깐 쉴 틈 생기면 잠깐 내려와요.",
    "M:네? 그건 또 뭔...",
    "P:ㅎㅎ 맛있게 먹어요~",
    "D:전화를 툭 끊는다",
    "M:(뭐야 왜 자기 할 말만 하고 전화를 끊어...?)",
    "D:마침 일에 집중이 안 되길래 나가서 커피라도 사 올 겸 1층으로 향한다",
    "D:1층에 내려오자, 테이블에 놓인 아보카도 샌드위치와 뜨거운 아메리카노가 보인다.",
    "D:Jake에게 문자 보내기",
  ];
  text1_1_selection = [
    //돌발전화 1-1 선택지
    "1) 고마워요, 잘 먹을게요. 당신한테도 예쁜 구석이 있네요",
    "2) 이왕이면 아아로 사다 주시지~ 그래도 뭐, 잘 먹을게요. Thanks!",
    "3)	저 오늘부로 아보카도 안 먹어요, 다시 가져가서 당신네 집 개나 주든지 알아서 하세요. ",
  ];
  // console.log(text1_1);

  text1_2 = [
    "P:퇴근 아직인가요?",
    "M:전화 받는 거 보면 모르세요?",
    "P:어이쿠, 여전히 싸늘하시네. 왜 또 화가 나셨을까? 오늘도 야근 확정?",
    "M:아뇨... 그런 게 아니라 그냥 연말이라 그런지 싱숭생숭해서요... 왠지 외롭고 쓸쓸하네요.",
    "P:에이, 왜요~ 연말이라는 건 더 행복하고 다이나믹할 내년이 곧! 이라는 뜻 아니겠어요?",
    "M:Jake씨는 인생이 막 행복하고, 매일매일이 새롭고, 기대되고 막 그런가봐요?",
    "P:ㅎㅎ 당연하죠, 언제쯤 " +
      _name +
      "씨가 마음의 문을 열게 될지 너무 설레고 기대된달까?",
    "M:아... 예...",
    "P:그래서, 오늘 퇴근은 언제 해요?",
    "M:곧 할 거 같은데... 왜요?",
    "P:퇴근 늦으면 집까지 데려다 주려고 했죠. 위험하잖아.",
    "M:됐네요~ 제가 뭐 어린 애도 아니고.",
    "P:" + _name + "씨 동네 가로등 고장났잖아요... 그럼 어둡고 위험하지.",
    "M:아 그거, 이제 고쳐졌어요. 신경 써주신 건 감사해요.",
    "P:우와, 감사 인사도 할 줄 아는 사람이었어요?",
    "M:(빠직) (......)",
    "P:헐 화났다. 이제 그만 놀려야겠다.",
    "P:아, " +
      _name +
      "씨 퇴근하게 하려면 얼른 전화 끊어야지. 오늘 하루도 수고 많았어요~ 푹 쉬어요.",
  ];
  text1_2_selection = [
    "1) 네, 고마워요. 들어가세요.",
    "2) 드디어 당신으로부터 해방이네요. 아무튼 위로(?) 고마워요...",
    "3) (아무 말 없이 뚝 끊는다.)",
  ];
  text2_1 = [
    "P:오늘 비오는데 우산 챙기셨어요?",
    "M:휴,오늘은 전화 왜 안 거시나 했네. 근데 이 날씨에 무슨 비? 눈이면 눈이지...",
    "P:이거 봐, 이렇게 냉담한 반응이면 제 눈에서 비가 내린다구요...ㅜ,ㅜ",
    "M:많이 한가하신가봐요? 농담할 시간도 있고?",
    "P:ㅎㅎ 그냥 걱정돼서요, 오늘 진짜 눈 많이 온대요. 미끄러지지 않게 조심해요.",
    "M:(이를 살짝 깨물며) 네, 고마워요.",
    "P:아니 그거 알아요?",
    "P:저 이번에 프랭크 시나트라 연말콘서트 티켓 구했어요!",
    "M:헐? 프랭크 시나트라요? 진짜요?",
    "P:와아, 이렇게 신난 목소리 처음 듣네요.",
    "M:아니 프랭크 시나트라면 제가 유일하게 앨범까지 다 사 모은 가수예요, 대박",
    "P:그쵸, 진짜 대박이죠. 아니 그래서 이번주 토요일에 제 친구랑 보러가려구~",
    "M:네에... 그렇구나... (실망한 기색이 역력)",
    "P:했 었 는 데! 급한 일이 생겼다네요... 혹시 시간 돼요?",
    "M:(?! 이게 웬 떡) 저요?",
    "P:여기 우리 말고 또 전화 엿듣고 있는 사람 있어요? 나랑 갈래요?",
  ];
  text2_1_selection = [
    "1) 헐 저야 너무 좋죠 ㅜ 덕분에 귀호강 잔뜩 하고 오겠네요...!",
    "2) 음... 뭐 시간이랑 일정이랑 확인해보구요!",
    "3) 아 그럼 그 티켓 제가 살게요. 당신 말고 친구랑 갔다 오고 싶어서요.",
  ];
  text2_2 = [
    "P:🎶 Jingle bell, jingle bell, jingle bell rock 🎶 Jingle bells swing and jingle bells ring",
    "M:(웃으며) 프랭크 시나트라가 전화 건 줄 알았네요.",
    "P:제가 콘서트 티켓 구해다줬다고 너무 갑자기 친절해진 거 아녜요?",
    "M:그럼요~ 요 정도 호의는 베풀어 드려야지 ㅎㅎ.",
    "P:" + _name + "씨한테 저는 그냥 도구에 불과한 존재라는 거군요. ㅜㅜ",
    "M:상처받은 척 안 통해요~",
    "P:이래서 내가 " +
      _name +
      "씨한테 빠졌나봐요... 쿨해... 멋있어... 늘 짜릿해...",
    "M:진짜 부담스러운 거 알죠.",
    "P:ㅎㅎ 일 열심히 해요. 안녕!",
    "M:웬일로 일찍 저를 놓아주시네요.",
    "P:저도 나름 바쁜 사람이예요. 비록 " +
      _name +
      "씨는 저를 거들떠도 안봐주지만..",
    "M:말에 사족을 안붙이면 죽는 병이라도 걸렸어요? 왜 바쁜데요, 오늘은.",
    "P:아 저 오늘 불우이웃 돕기 연말 행사 있거든요~ 정리할 게 이것저것 많네요.",
    "M: 오, 봉사도 해요? 진짜 대단하시다.",
    "P: 제가 한 대단 하죠.",
    "M: 아니 사실 저도 그런 거에 관심 많거든요!",
    "P: 아 진짜? 그럼 이번 행사 저랑 같이 갈래요?",
  ];
  text2_2_selection = [
    "1) (어머나...) Jake 씨의 데이트 신청을 받아준다.",
    "2) (가만보자... 얜 내 스타일은 아닌데. 아까 전화 건 여자와 연결해준다.)",
  ];

  text2_3 = [
    "P:2$%#@@%^ 야보세여?",
    "M:안녕하세요, 어디로 연결해드릴까요?",
    "P:언니이... 제 사랑의 짝대기 좀 연결해주세요... 오늘 같은 날에도 나는 혼자 술 마시구... 힝...",
    "M:네?... ",
    "D:(고민에 빠진다...)",
  ];
  for (let i = 0; i < text1_1.length; i++) {
    text1_1[i] = new Text(text1_1[i]);
  } //돌발전화 1-1
  for (let i = 0; i < text1_1_selection.length; i++) {
    text1_1_selection[i] = new Selection(
      1210,
      380 + i * 130,
      350,
      120,
      text1_1_selection[i]
    );
  } //돌발전화 1-1 선택지
  for (let i = 0; i < text1_2.length; i++) {
    text1_2[i] = new Text(text1_2[i]);
  } //돌발전화 1-2
  for (let i = 0; i < text1_2_selection.length; i++) {
    text1_2_selection[i] = new Selection(
      1210,
      380 + i * 130,
      350,
      120,
      text1_2_selection[i]
    );
  } //돌발전화 1-2 선택지
  for (let i = 0; i < text2_1.length; i++) {
    text2_1[i] = new Text(text2_1[i]);
  } //돌발전화 2-1
  for (let i = 0; i < text2_1_selection.length; i++) {
    text2_1_selection[i] = new Selection(
      1210,
      380 + i * 130,
      350,
      120,
      text2_1_selection[i]
    );
  } //돌발전화 2-1 선택지
  for (let i = 0; i < text2_2.length; i++) {
    text2_2[i] = new Text(text2_2[i]);
  } //돌발전화 2-2
  for (let i = 0; i < text2_2_selection.length; i++) {
    text2_2_selection[i] = new Selection(
      1210,
      420 + i * 130,
      350,
      120,
      text2_2_selection[i]
    );
  } //돌발전화 2-3
  for (let i = 0; i < text2_3.length; i++) {
    text2_3[i] = new Text(text2_3[i]);
  }
}

//// "qr""qc""ar""ac" : "질문"
//// question row, question column, answer row, answer column

function setupListOfDialogue() {
  mukmul = loadFont("icon/a먹물명조L.ttf");
  dictionary_1 = {
    //숫자게임
    3549: "	Manhattan의 1x30-5번한테 전화 걸어주세요. 	",
    "0934": "	Bronx의 √25번한테 전화 걸어주세요. 	",
    7204: "	Queens의 12보다 작은 짝수 개수만큼의 번호로 연결해주세요. 	",
    6458: "	Brooklyn의 19를 5로 나누었을 때의 나머지만큼의 번호로 연결해주세요.	",
    "0073": "	Bronx의 3x8번한테 전화 걸어주세요.	",
    1379: "	Brooklyn의 1+2+3+4+5번으로 연결해주세요. 	",
    1110: "	Queens의 3!번으로 전화 걸어주세요. 	",
    5839: "	Manhattan의 10-2x2+14번으로 연결 부탁해요. 	",
    6773: "	Bronx의 12x4÷2번으로 전화 걸어주세요.	",
    7503: "	Queens의 29를 7로 나눈 몫만큼의 번호로 연결해주세요. 	",
    7857: "	Brooklyn의 0.6x5번으로 전화 연결해주세요. 	",
    3019: "	Manhattan의 5x(3!-4)번으로 전화 연결해주세요. 	",
    4222: "	Queens의 3x3+4번으로 연결 부탁해요.	",
    6444: "	Bronx의 16-3x2번으로 전화 걸어주세요. 	",
    7156: "	Brooklyn의 (3.14-2.94)x10번으로 전화 걸어주세요. 	",
    7301: "	Queens의 √36-√16번으로 연결해주세요.	",
  };
  dictionary_2 = {
    //이름찾기게임
    "0359": "	Charles에게 전화를 걸고 싶은데, 연결해주실 수 있을까요?	",
    1567: "	제 친구 Michael에게 오랜만에 안부를 전하고 싶네요.	",
    1238: "	Andrew의 목소리는 정말 아름다워요. 당신도 그의 목소리를 들어보겠어요?	",
    3145: "	Joe Gardner라는 사람을 찾고 있어요. 	",
    3350: "	Luis에게 전화를 걸고 싶은데, 연결해주실 수 있을까요?	",
    3705: "	제 친구 Miranda에게 오랜만에 안부를 전하고 싶네요. 	",
    4035: "	Christine의 목소리는 정말 아름다워요. 당신도 그의 목소리를 들어보겠어요?	",
    4627: "	Lou Miller라는 사람을 찾고 있어요. 	",
    2849: "	Peter에게 전화를 걸고 싶은데, 연결해주실 수 있을까요?	성은 V로 시작했던거 같은데..",
    5341: "	제 친구 Joanne에게 오랜만에 안부를 전하고 싶네요. 	",
    4239: "	Terence Fletcher이라는 사람을 찾고 있어요.	",
    6025: "	Egon의 목소리는 정말 아름다워요. 당신도 그의 목소리를 들어보겠어요?		",
    6204: "	Otto에게 전화를 걸고 싶은데, 연결해주실 수 있을까요?	",
    2176: "	제 친구 Frank에게 오랜만에 안부를 전하고 싶네요. 	",
    2356: "	Amy의 목소리는 정말 아름다워요. 당신도 그의 목소리를 들어보겠어요?	",
    1761: "	Bobby Rydell이라는 사람을 찾고 있어요. 	",
  };
  dictionary_3 = {
    //관공서 게임
    "0626": "	멀리 전학 간 내 친구 찰리에게 편지를 부치고 싶어요...!	",
    4948: "	우리 애가 다쳤는데... 무릎이 빨갛게 부풀어오르고 그래요... 어떡하죠?	",
    1354: "	곧 크리스마스니까 우리 엄마 선물 주고싶어요… 적금 깨야 될 것 같아요. 	",
    3226: "	아들네 집으로 내가 만든 쿠키~ 좀 보내고 싶군요... 	",
    7802: "	하... 진짜 어쩌죠? 지금 애가 나올 거 같아요... 아내가 너무 힘들어 하는데...	",
    5655: "	8개월 된 우리 딸이 어디가 아픈지 계속 우네요... 이마가 너무 뜨거운데... 	",
    7118: "	우리 집 보석이 없어졌어요! 그거 진짜 귀하게 구한 건데... 	",
    5063: "	저 여기 양말 공장 앞인데, 아무래도 불이 난 거 같아요... 큰일이예요.	",
  };
  dictionary_4 = {
    30: "	Roger	",
    31: "	Mimi	",
    32: "	Mark	",
    33: "	Tom	",
    34: "	Angel	",
    40: "	Maureen	",
    41: "	Joanne	",
    42: "	L.B.	",
    43: "	Miguel	",
    44: "	Bobby	",
    50: "	Luis	",
    51: "	Tony	",
    52: "	Don	",
    53: "	Johnny	",
    54: "	은행B	",
    60: "	Graham	",
    61: "	Bobby	",
    62: "	Vito	",
    63: "	소방서	",
    64: "	Peter	",
    70: "	Thomas	",
    71: "	Mark	",
    72: "	Jack	",
    73: "	Emilio	",
    74: "	Virgil	",
    "05": "	Miranda	",
    "06": "	Andrea	",
    "07": "	Emily	",
    "08": "	Nigel	",
    "09": "	Christian	",
    15: "	Nate	",
    16: "	Holly	",
    17: "	Paul	",
    18: "	경찰서	",
    19: "	Raymond	",
    25: "	Egon	",
    26: "	우체국	",
    27: "	Lou	",
    28: "	Daphne	",
    29: "	Rose	",
    35: "	Christine	",
    36: "	Therese	",
    37: "	Carol	",
    38: "	Andrew	",
    39: "	Terence	",
    45: "	Joe	",
    46: "	Dorothea	",
    47: "	Deborah	",
    48: "	정형외과	",
    49: "	Peter	",
    23: "	Dylan	",
    11: "	Edward	",
    "00": "	Pepper	",
    "01": "	Michelle	",
    "02": "	산부인과	",
    "03": "	Harold	",
    "04": "	Otto	",
    10: "	Miles	",
    12: "	Peter	",
    13: "	Thaddeus	",
    14: "	Margot	",
    20: "	J.Daniel	",
    21: "	Merritt	",
    22: "	Henley	",
    24: "	은행A	",
    55: "	내과	",
    56: "	Amy	",
    57: "	Rosa	",
    58: "	Raymond	",
    59: "	Charles	",
    65: "	Terence	",
    66: "	Regina	",
    67: "	Michael	",
    68: "	Norm	",
    69: "	Jake	",
    75: "	Adrian	",
    76: "	Frank	",
    77: "	Jenny	",
    78: "	Constantine	",
    79: "	Gordon	",
  };
  introText = [
    "오늘은 1947년 12월 23일.",
    "나는 전화교환원, 누군가의 목소리를                      그것이 닿아야 하는 곳에 전해주는 일을 한다.",
    "거리마다 트리가 늘어선 걸 보니                       올해도 벌써 끝이 다가오네.",
    "'업무가 밀려 있으니 너는 꼭 나와서 일해야 한다!'",
    "난 연말에도 예외 없이 출근이구나......",
    "매일 출근하는 건 똑같지만                                        어쩐지 싱숭생숭한 기분인걸.",
    "올 연말은 따뜻하게 보낼 수 있을 줄 알았는데......",
    "벌써 시간이 이렇게 됐나? 출근이나 해야겠다.",
    "오늘은 또 어떤 전화가 나를 기다리고 있을까?",
  ];
}
function introTextBox(i, x, y, w, h) {
  push();
  // imageAlpha = 230;
  // tint(255, imageAlpha);
  image(textBox_2, x, y, w, h);
  textAlign(CENTER, CENTER);
  textSize(38);
  textWrap(WORD);
  text(introText[i - 1], x + 130, y + 40, 900, 100);
  pop();
}

function setupListOfCard() {
  widthOfCard = 45;
  heightOfCard = 30;

  rows = 8;
  cols = 10;

  maxMatch = 2;

  ListOfCards = new Array(rows);
  for (let i = 0; i < rows; i++) {
    ListOfCards[i] = [];
  }

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 5; j++) {
      ListOfCards[i][j] = loadImage("icon/card1.PNG");
    }
  }
  for (let i = 3; i < rows; i++) {
    for (let j = 5; j < cols; j++) {
      ListOfCards[i][j] = loadImage("icon/card2.PNG");
    }
  }
  for (let i = 3; i < rows; i++) {
    for (let j = 0; j < 5; j++) {
      ListOfCards[i][j] = loadImage("icon/card3.PNG");
    }
  }
  for (let i = 0; i < 5; i++) {
    for (let j = 5; j < cols; j++) {
      ListOfCards[i][j] = loadImage("icon/card4.PNG");
    }
  }
  ListOfCards_1 = new Array(rows);
  for (let i = 0; i < rows; i++) {
    ListOfCards_1[i] = [];
  }

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 5; j++) {
      ListOfCards_1[i][j] = loadImage("icon/card1_1.PNG");
    }
  }
  for (let i = 3; i < rows; i++) {
    for (let j = 5; j < cols; j++) {
      ListOfCards_1[i][j] = loadImage("icon/card2_1.PNG");
    }
  }
  for (let i = 3; i < rows; i++) {
    for (let j = 0; j < 5; j++) {
      ListOfCards_1[i][j] = loadImage("icon/card3_1.PNG");
    }
  }
  for (let i = 0; i < 5; i++) {
    for (let j = 5; j < cols; j++) {
      ListOfCards_1[i][j] = loadImage("icon/card4_1.PNG");
    }
  }
  hiddenPhoto_1 = loadImage("icon/test_1.PNG");

  // callingPhoto = loadImage("icon/call.PNG");
  // correctPhoto = loadImage("icon/correct.PNG");
  // wrongPhoto = loadImage("testimage/wrong.PNG");

  dialogue_W = loadImage("icon/ver2_white.png");
  dialogue_YG = loadImage("icon/ver2_green.png");
  dialogue_B = loadImage("icon/ver2_blue.png");
  dialogue_P = loadImage("icon/ver2_pink.png");
  option_box = loadImage("icon/기본.PNG");
  option_box_1 = loadImage("icon/기본_1.PNG");
  // option_box_2 = loadImage("icon/마우스오버_데이트함.PNG");
  textBox_2 = loadImage("icon/textBox_2.png");
  book = loadImage("icon/book.png");
  book_over = loadImage("icon/book_over.png");
  book_address1 = loadImage("icon/book_address1.png");
  book_address2 = loadImage("icon/book_address2.png");
  book_address3 = loadImage("icon/book_address3.png");
  book_map = loadImage("icon/book_map.png");
  book_mapOffice = loadImage("icon/book_mapOffice.png");
  tab1 = loadImage("icon/tab1.png");
  tab1_1 = loadImage("icon/tab1_1.png");
  tab2 = loadImage("icon/tab2.png");
  tab2_1 = loadImage("icon/tab2_1.png");
  tab3 = loadImage("icon/tab3.png");
  tab3_1 = loadImage("icon/tab3_1.png");
  tab4 = loadImage("icon/tab4.png");
  tab4_1 = loadImage("icon/tab4_1.png");
  tab5 = loadImage("icon/tab5.png");
  tab5_1 = loadImage("icon/tab5_1.png");
  _background = loadImage("icon/background.jpg");
  _background_1 = loadImage("icon/background_1.jpg");
  timerBar = loadImage("icon/timer.png");
  wire = loadImage("icon/wire.png");
  cursor = loadImage("icon/cursor.png");
  case1 = loadImage("icon/case1.png");
  case3 = loadImage("icon/case3.JPG");
  for (let i = 0; i < 5; i++) {
    case4[i] = loadImage("icon/case4-" + i + ".PNG");
  }
  case6 = loadImage("icon/case6.PNG");
  for (let i = 0; i < 4; i++) {
    case7[i] = loadImage("icon/case7-" + i + ".PNG");
  }
  for (let i = 0; i < 2; i++) {
    schedule[i] = loadImage("icon/schedule" + i + ".PNG");
  }
  case8 = loadImage("icon/case8.PNG");
  case8Clock = loadImage("icon/case8Clock.PNG");
  case9 = loadImage("icon/case9.PNG");
  case9Back = loadImage("icon/case9Back.jpg");
  introNext = loadImage("icon/next.png");
  reset = loadImage("icon/reset.png");
  gameRule = loadImage("icon/gamerule.png");
  calendar1 = loadImage("icon/calendar1.png");
  startPage = loadImage("icon/start.PNG");
}

function randomQuizLoad() {
  quiz_1 = [
    [3, 5, 4, 9],
    [0, 9, 3, 4],
    [7, 2, 0, 4],
    [6, 4, 5, 8],
    [0, 0, 7, 3],
    [1, 3, 7, 9],
    [1, 1, 1, 0],
    [5, 8, 3, 9],
    [6, 7, 7, 3],
    [7, 5, 0, 3],
    [7, 8, 5, 7],
    [3, 0, 1, 9],
    [4, 2, 2, 2],
    [6, 4, 4, 4],
    [7, 1, 5, 6],
    [7, 3, 0, 1],
  ];
  quiz_2 = [
    [0, 3, 5, 9],
    [1, 5, 6, 7],
    [1, 2, 3, 8],
    [3, 1, 4, 5],
    [3, 3, 5, 0],
    [3, 7, 0, 5],
    [4, 0, 3, 5],
    [4, 6, 2, 7],
    [2, 8, 4, 9],
    [5, 3, 4, 1],
    [4, 2, 3, 9],
    [6, 2, 0, 4],
    [2, 1, 7, 6],
    [2, 3, 5, 6],
    [1, 7, 6, 1],
  ];
  quiz_3 = [
    [0, 6, 2, 6],
    [4, 9, 4, 8],
    [1, 3, 5, 4],
    [3, 2, 2, 6],
    [7, 8, 0, 2],
    [5, 6, 5, 5],
    [7, 1, 1, 8],
    [5, 0, 6, 3],
  ];
  quiz_1_1 = shuffle(quiz_1);
  quiz_2_1 = shuffle(quiz_2);
  quiz_3_1 = shuffle(quiz_3);
}
function setUpSound() {
  callSound = loadSound("sound/call_efx.wav");
  callFailureSound = loadSound("sound/callFailure_2_efx.wav");
  callSuccessSound_1 = loadSound("sound/callSuccess_1_efx.wav");
  callSuccessSound_2 = loadSound("sound/callSuccess_2_efx.wav");
  callSuccessSound_3 = loadSound("sound/callSuccess_3_efx.wav");
  timerSound = loadSound("sound/timer_efx.wav");
  helloSound = loadSound("sound/hello_5.wav");
  helloSound_1 = loadSound("sound/hello_1.wav");
  introSound = loadSound("sound/Intro_BGM.mp3");
  outroSound = loadSound("sound/Outro_BGM.mp3");
}
