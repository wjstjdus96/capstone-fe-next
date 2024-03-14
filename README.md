# [프론트엔드 디벨롭] 유튜브 댓글 분석 웹서비스

![capstone-fe-next vercel app_](https://github.com/wjstjdus96/capstone-fe-next/assets/77755620/15f729bf-1eb9-4209-8387-91b3845510e4)

졸업 프로젝트로 진행하였던 유튜브 댓글 분석 웹 서비스인 'TubaAna'의 프론트엔드를 next.js를 사용하여 디벨롭시킨 프로젝트입니다.

</br>

## 🌐 프로젝트 링크

[TubaAna 바로가기](https://capstone-fe-next.vercel.app/)

</br>

## 📃 로컬 실행 방법

```
$ git clone https://github.com/wjstjdus96/capstone-fe-next
$ cd capstone-fe-next
$ npm run dev
```

</br>

## 🚀 개발환경

- 언어 : <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=TypeScript&logoColor=white">
- 프론트 : <img src="https://img.shields.io/badge/NextJS-000000?style=flat&logo=nextdotjs&logoColor=white"> <img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=white">
- 배포 : <img src="https://img.shields.io/badge/Vercel-000000?style=flat&logo=vercel&logoColor=white">
- 라이브러리 : <img src="https://img.shields.io/badge/SCSS-CC6699?style=flat&logo=sass&logoColor=white"> <img src="https://img.shields.io/badge/ChartJS-FF6384?style=flat&logo=chartdotjs&logoColor=white"> <img src="https://img.shields.io/badge/D3.js-F9A03C?style=flat&logo=d3dotjs&logoColor=white"> <img src="https://img.shields.io/badge/Swiper-6332F6?style=flat&logo=swiper&logoColor=white"> <img src="https://img.shields.io/badge/React Slick-FF880F?style=flat"> 등

</br>

# 📺 화면 구성

메인 페이지
![tube1](https://github.com/wjstjdus96/tennis-community/assets/77755620/c1948560-313e-4012-becf-701647fc5076)

분석 페이지
![tube2](https://github.com/wjstjdus96/tennis-community/assets/77755620/9cf453fc-df45-4e9a-9257-c2ece7439e5b)
</br>

## 🗂 폴더구조

```
/src
┣ 📁api
┣ 📁app
┣ 📁assets
┣ 📁components
┣ 📁const
┣ 📁contexts
┣ 📁hooks
┣ 📁styles
┣ 📁types
```

</br>

## ⚙️ 기능 설명

- Home
  - 서비스에 대한 소개
  - 유튜브 영상 url 입력창
    (해당 프로젝트는 프론트엔드만 구현하였기 때문에 분석 결과를 낼 수 없어서 임시로 더미데이터를 삽입하였습니다.)
  - 유튜브 인기동영상 리스트
- Dashboard
  - 긍정부정 댓글 비율 항목 - 전체 댓글의 긍정 부정 비율을 도넛차트 형식으로 구현
  - 긍정부정 댓글 항목 - 긍정부정 정도가 가장 높은 순의 댓글 내용 자동 수직 슬라이더 형태로 구현
  - 키워드 항목 - 가장 많이 노출된 키워드를 워드 클라우드 형식으로 구현
  - 댓글 작성 시간 분포 항목 - 월별 댓글 작성 개수를 라인 차트 형식으로 구현
  - 좋아요 높은 순 댓글 정렬 항목 - 좋아요가 높은 순의 댓글을 테이블 형식으로 구현
  - 연관동영상 항목 - 연관동영상을 슬라이더 형태로 나열하고 분석결과와 영상을 링크를 통해 바로 볼 수 있게 구현
