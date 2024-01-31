import { IAnalysisData } from "@/types/data";
import bar from "../assets/chart-icon/bar-chart.png";
import card_slider from "../assets/chart-icon/card-slider.png";
import doughnut from "../assets/chart-icon/doughnut-chart.png";
import line from "../assets/chart-icon/line-chart.png";
import priority from "../assets/chart-icon/priority-slider.png";
import wordcloud from "../assets/chart-icon/wordcloud.png";

export const description_list = [
  {
    name: "긍정 부정 비율",
    sub: "전체 댓글의 긍정 부정 비율을 나타냅니다.",
    image: doughnut,
  },
  {
    name: "긍정 부정 댓글",
    sub: "전체 댓글 중 긍정 부정 Top5 댓글을 나타냅니다.",
    image: priority,
  },
  {
    name: "키워드",
    sub: "가장 빈번하게 언급된 키워드를 나타냅니다. 글자 크기가 클수록 많이 언급된 것입니다. ",
    image: wordcloud,
  },
  {
    name: "댓글 작성 시간",
    sub: "시간대 별 작성된 댓글 개수를 나타냅니다.",
    image: line,
  },
  {
    name: "좋아요 많은 댓글",
    sub: "좋아요가 많은 순서대로 댓글을 나타냅니다.",
    image: bar,
  },
  {
    name: "연관 동영상",
    sub: "연관 동영상을 나타냅니다. 바로 연관동영상의 분석결과를 볼 수 있습니다.",
    image: card_slider,
  },
];

export const analysis_data: IAnalysisData[] = [
  {
    videoId: "1",
    title:
      "너 나랑 자려고 계속 만나는 거 모를 줄 알아? [연애의 참견] EP.188 | KBS Joy 230815 방송",
    thumbnail:
      "https://i.ytimg.com/vi/j4HbqwZN2CE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCwO3WATeQ7grZDQN4b7dXV-DF1HQ",
    percent: 40.4,
    top5_text: [
      "18:45 눈물연기 미쳤다.. 나도 슬픔😭😭",
      "저 여자를 사랑하는 것보다 더 많이 사랑해줄 사람이 없는 게 아니라 저 여자만큼 궁합이 잘 맞는 사람을 찾기 힘든 거겠지.. 말은 똑바로 해라 제발 더 사랑할 사람은 찾자면 찾을 수 있으니까 속지마세요ㅠ",
      "믿고보는 서화님 연기력👍이름 바꾸신거도 찰떡이에요❤️❤️❤️",
      "연참에서 이 여자분이 연기 제일잘하는거같음ㅇㅇ얼굴도 이쁘고 비율도 좋고 잘만 다듬으면 더좋은 배우될듯 ㅎㅎ",
      "17:43 진짜 이게 말이야 빙구야 죄인취급하냐니 ㅋㅋㅋㅋㅋㅋㅋ \n 여자가 이제 못해먹겠다고 그만하자는데 왠 죄인 타령이야. 지가 찔리니까 죄인 취급당한다고 생각하는거겠지 \n 그리고 찌질하게 다시와서 잘해보자는건 뭐야. 어휴 진짜 여자분 제발 다른남자 만나요",
    ],
    low5_text: [
      "짜증나서. 보다끔",
      "여자 약간발연긔..",
      "아 연기 답답해서 보다끔.. 둘다 연기 공부 더해야될듯",
    ],
    keyword: [
      "연기",
      "주인공",
      "연참",
      "쓰레기",
      "눈물",
      "헤어지지",
      "연락",
      "연애",
    ],
    most_likes: [
      {
        count: 354,
        text: "안녕하세요 여주 역\n 윤서화 입니다 :) \n재밌게 봐주시고 , \n다들  좋은 저녁시간 보내세요🫶🏻",
      },
      {
        count: 300,
        text: "나랑 정기적으로 자주는 여자를 또 꼬시자니 너무 번거롭고 귀찮네. 역시 쉬운 건 너 밖에 없다.",
      },
      {
        count: 233,
        text: "아니 썸 타고 말고의 문제가 아니라.. 사랑하는 사람이 따로 있는데 파트너가 존재한다는 게 문제 있는 거 아닌가..?",
      },
      {
        count: 190,
        text: "사람은 절대안고쳐짐 고쳐쓰는게아니죠 못이휘면 다른못으로 박아야지 펴서못씁니다.\n그렇게 당하고 또당하고 또당하고 자업자득.\n그렇게 펑펑 슬퍼해놓고 또만나려고 생각중인거보니 본인도 어지간히 생각이없는듯요ㅋㅋ",
      },
      {
        count: 100,
        text: "이언니 나오는 편마다 옷도 이쁘고 얼굴도 이쁘고 다이뻐ㅜㅜ옷이 사람빨 받는걸까....옷 어디서 사세요😭",
      },
    ],
    relation_video: [
      {
        id: "LUgTC9nC9AY&t=12s",
        thumbnail:
          "https://i.ytimg.com/vi/LUgTC9nC9AY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCwO3WATeQ7grZDQN4b7dXV-DF1HQ",
        title:
          "[EP.98] 400일 기념일에 '조각' 케이크 사온 남친 심리 [연애의 참견3] | KBS Joy 211116 방송",
      },
      {
        id: "DufV-syAQWY&t=1299s",
        thumbnail:
          "https://i.ytimg.com/vi/DufV-syAQWY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCwO3WATeQ7grZDQN4b7dXV-DF1HQ",
        title: "연애의 참견 역대급 하남자 모음zip.📁",
      },
      {
        id: "30TfJ6GgFUo",
        thumbnail:
          "https://i.ytimg.com/vi/30TfJ6GgFUo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCwO3WATeQ7grZDQN4b7dXV-DF1HQ",
        title: "퇴사하고 싶을 때 특",
      },
      {
        id: "ayarNaLqLnM&t=49s",
        thumbnail:
          "https://i.ytimg.com/vi/ayarNaLqLnM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCwO3WATeQ7grZDQN4b7dXV-DF1HQ",
        title:
          "연락 안 된다고 혼자 상견례 날짜 잡아버리는 시한폭탄 남친 [연애의 참견] | KBS Joy 230530 방송",
      },
    ],
    time: [
      { date: "22/10", count: 103 },
      { date: "22/11", count: 89 },
      { date: "22/12", count: 34 },
      { date: "23/01", count: 76 },
      { date: "23/02", count: 44 },
      { date: "23/03", count: 23 },
      { date: "23/04", count: 20 },
      { date: "23/05", count: 30 },
      { date: "23/06", count: 12 },
      { date: "23/07", count: 5 },
      { date: "23/08", count: 9 },
    ],
  },
  {
    videoId: "2",
    title:
      "11평 신혼집에 살아요 l 주방이 작아서 공간 활용에 신경을 많이 썼어요 l 신당 아파트 전세",
    thumbnail:
      "https://i.ytimg.com/vi/591h-kl9I0w/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCwO3WATeQ7grZDQN4b7dXV-DF1HQ",
    percent: 70.6,
    top5_text: [
      "살림 진짜 야무지게 잘하시는듯~보여주기식이 아니라 더 집중해서 보았습니다.\n좁은공간을 활용해서 저렇게 정리하기가 쉽지않거든요ㅎ",
      "와 훈훈한 남편분과 \n똑부러지고 알뜰살뜰하신 아내분의 조합이네요/n보기 너무 좋아요 항상  행복하세요!😊",
      "저도 신당주민으로서 장단점 확실하게 공감하네요!:) 서울은 정말 집값 미쳐서 이것도 잘 사는 거예요ㅠㅠ 없이 시작했다는 분들 보고… 충격이에요😢 룸메님 부부 부럽네요 화이팅❤",
      "저도 25살에 결혼해서 방하나짜리 10평집에서 신혼생활 했었는데 추억들이 생각나는 시간이네요❤",
      "살림 너무 잘하시는데 소스류나 양념류는 원래 용기에서 옮겨담으면 더 빨리 변질되기 쉬워요. 왜냐면 옮기는 통이 완벽하게 살균된 상태가 아니라 웬만하면 소스나 양념류는 샀을때 고대로 보관하는게 좋습니다.",
    ],
    low5_text: [
      "짐이 너무 많네요..짐만 정리해도 집이 넓어보일텐데..",
      "ㅎㅎ아직 신혼 한달이니.....잘지켜보세요",
      "결혼=지옥",
      "로망을 채우려면 다른동네로 가셔야죠",
      "금전적인건 남편분이 브레이크 잘 걸어주시는듯... \n남의 집 살면서는 거주비 아끼고 신축보단 차라리 관리 잘된 구축 투룸 쓰리룸 가서 버티는게 더 가성비 좋은 길.\n어차피 지방 아니고 평범한 급여로 서울에 10평대라도 집을 살거라면 굳이 세 살면서 신축으로 눈 높이 높일 이유가 없음.. 어차피 서울은 너도나도 구축에 수렴하게 되는게 정상이라",
    ],
    keyword: [
      "잘생김",
      "전세",
      "25살",
      "신혼",
      "훈훈한",
      "야무지다",
      "남편",
      "좁은",
    ],
    most_likes: [
      {
        count: 290,
        text: "꺄 !!!!!! 드디어 영상이 올라갔네요🤍 이런 경험은 처음이라 어색하고 횡설수설 말도 많이 했는데 성권님 덕분에 너무 즐겁게 촬영했어요🥹  정말 좋은 추억이 됐습니다아 !!!응원해주시는 댓글들도 너무 힘나고 행복하네요 ㅠㅠㅠㅠㅠ 다들 행복하세요❤️❤️❤️",
      },
      {
        count: 64,
        text: "살림 너무 잘하시는데 소스류나 양념류는 원래 용기에서 옮겨담으면 더 빨리 변질되기 쉬워요. 왜냐면 옮기는 통이 완벽하게 살균된 상태가 아니라 웬만하면 소스나 양념류는 샀을때 고대로 보관하는게 좋습니다.",
      },
      { count: 32, text: "아 어린 부부 넘 야물딱지고 유쾌하고 행복하네요❤❤" },
      { count: 21, text: "진짜 정말로 보기 드문 여성분이시네요\n부럽습니다" },
    ],
    relation_video: [
      {
        id: "NaVaY1Li3Jg",
        thumbnail:
          "https://i.ytimg.com/vi/NaVaY1Li3Jg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCwO3WATeQ7grZDQN4b7dXV-DF1HQ",
        title:
          "자취남의 신혼집 l '결혼식 비용을 집에 쏟아 부었어요' l 일산 아파트 매매 1편",
      },
      {
        id: "vY4NC9f8v2w",
        thumbnail:
          "https://i.ytimg.com/vi/vY4NC9f8v2w/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCwO3WATeQ7grZDQN4b7dXV-DF1HQ",
        title: "집이 동화 같아요.. 너무 예뻤어요 l 용산 투룸 전세",
      },
      {
        id: "KCCEleXkoHU",
        thumbnail:
          "https://i.ytimg.com/vi/KCCEleXkoHU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCwO3WATeQ7grZDQN4b7dXV-DF1HQ",
        title:
          "유행타지 않는 우드톤 인테리어의 집 l 독특하고 예뻐서 바로 계약했어요 l 신대방 전세",
      },
      {
        id: "Ix24Aw92UEs",
        thumbnail:
          "https://i.ytimg.com/vi/Ix24Aw92UEs/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCwO3WATeQ7grZDQN4b7dXV-DF1HQ",
        title:
          "1인가구를 위한 완벽한 집 l 원룸에 점수를 매길 수 있다면 100점입니다 l 제기동 원룸아파트 매매",
      },
    ],
    time: [
      { date: "23/03", count: 67 },
      { date: "23/04", count: 45 },
      { date: "23/05", count: 30 },
      { date: "23/06", count: 10 },
      { date: "23/07", count: 11 },
      { date: "23/08", count: 3 },
    ],
  },
  {
    videoId: "3",
    title: "오늘도 다시 버티고 보는거야...",
    thumbnail:
      "https://i.ytimg.com/vi/S5BeGGNRsiA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCwO3WATeQ7grZDQN4b7dXV-DF1HQ",
    percent: 53.4,
    top5_text: [
      "야간수업 마치고 나서 보는 걍밍경은 최고에요 ❤️ 감성 가득한 영상 뒤엔 편집으로 밤을 새는 언니가 있다.. 영앤리치 언니도 밤 새며 열일하니 저도 이번 한 주 열심히 달려보겠습니다!! 항상 신선한 편집으로 즐거움과 편안함을 선사해주셔서 고맙습니다 ❤️",
      "언니 브이로그는 엔딩까지도 너무너무 멋있어요:)\n사회에 발 들인 시간이 늘어갈수록 바쁘게 그러나 많은 것들을 챙기며 살아가는 언니의 일상이 더 대단하다 느껴지는 것 같아요\n이렇게 살아내기까지 얼마나 많은 백조의 발짓이 필요할지...! 비록 프레임에 담겨 편집된 극히 일부만을 보는 구독자이지만.. 하루의 끝이 좋으면 그날 하루는 좋은 날이래요- 언니의 매일도 몸 마음 건강한 좋은 날들로 기억되길 진심으로 바랍니다💕",
      "직접 편집한다는게 진짜 대단한 거ㅠ 언니 열정 리스펙!!!",
      "이언니 편집 센스 진짜 장난 아님 ㅎㅎ",
      "매번 열심히 사는 밍경언니 보고\n저도 화이팅 하게 되용\n긍정 에너지 뿜뿜✨💗",
    ],
    low5_text: [
      "고독한게 먼지 1도 모르는 사람이 고독을 논하다니... 기분 참 거시기 하게 만드는 능력이 있으시네요",
      "재미없어서 보다 끔",
      "돈복 하나는 터졌네 부럽다",
    ],
    keyword: [
      "갓생",
      "편집실력",
      "라면",
      "엔딩",
      "재밌어",
      "센스",
      "밍경",
      "꼬냑병",
    ],
    most_likes: [
      {
        count: 443,
        text: "편집을 진짜 전문가 이상으로 잘하시는거 같아요\n영상미도 좋지만 지루하지 않게 진짜 잘해..\n팬이라 예쁜모습만 봐도 좋지만 언니의 이런 일상모습도 볼수있어서 좋네요\n건강 챙기면서 일해주세요!",
      },
      {
        count: 334,
        text: "날이 갈수록 늘어가는 편집실력 무엇.. 마지막에 완전 신기ㅋㅋㅋㅋ 민경언니 유튜브 보는 낙으로 살아요 진짜... 너무 재밌어😂❤",
      },
      {
        count: 135,
        text: "진짜 촬영기법부터 흘러가는 모습들이\n너무 자연스럽고 어떻게 이런 흐름을 담아냈는지 대단해여.. 존경합니다..",
      },
      {
        count: 95,
        text: "이번 주 정말 출근하기 싫은 저의 마음을 정화시켜주는 영상이네요,, 열심히 사는 언니의 모습을 보며 저두 한 주 열심히 살아보자는 맘을 다지게 됩니다! 모두 몸과 마음이 단단한 일주일 보내길,,ෆ \n엔딩크레딧 맛집 걍민경🩵",
      },
    ],
    relation_video: [
      {
        id: "ZhqGKSehwZs",
        thumbnail:
          "https://i.ytimg.com/vi/ZhqGKSehwZs/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCwO3WATeQ7grZDQN4b7dXV-DF1HQ",
        title: "공사다망 강민경 (미혼)",
      },
      {
        id: "49QpFT7HRg8",
        thumbnail:
          "https://i.ytimg.com/vi/49QpFT7HRg8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCwO3WATeQ7grZDQN4b7dXV-DF1HQ",
        title:
          "[SUB] 우리 우정 그 정도 아닙니다! 월클 아닙니다..!! | EP.4 다비치 이해리&강민경 | 살롱드립2",
      },
      {
        id: "B_Y2QLZMJEY",
        thumbnail:
          "https://i.ytimg.com/vi/B_Y2QLZMJEY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCwO3WATeQ7grZDQN4b7dXV-DF1HQ",
        title: "냉털집밥",
      },
      {
        id: "srTp9lF1DTo",
        thumbnail:
          "https://i.ytimg.com/vi/srTp9lF1DTo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCwO3WATeQ7grZDQN4b7dXV-DF1HQ",
        title:
          "하이볼 낮술에 장어구이..마라샹궈양갈비라면텐동으로 마무리하는 밤에 보면 살찌는 브이로그",
      },
    ],
    time: [
      { date: "23/07", count: 567 },
      { date: "23/08", count: 300 },
    ],
  },
];
