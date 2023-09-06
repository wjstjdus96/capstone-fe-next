# Nextjs를 활용한 유튜브 댓글 분석 웹서비스 'TubaAna' 마이그레이션 프로젝트

![image](https://github.com/wjstjdus96/capstone-fe-next/assets/77755620/c29d66b7-95e2-4991-9885-980a21b92d47)
졸업 프로젝트로 진행하였던 유튜브 댓글 분석 웹 서비스인 'TubaAna'의 프론트엔드를 next.js를 사용하여 마이그레이션한 새로운 프로젝트입니다.

## 🌐 프로젝트 링크

[TubaAna 바로가기](https://cheery-biscochitos-ee7b8b.netlify.app/)

## 📃 실행 방법

```
$ git clone https://github.com/wjstjdus96/capstone-fe-next
$ cd capstone-fe-next
$ npm start
```

## 🚀 개발환경

- 언어 : <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=TypeScript&logoColor=white">
- 프론트 : <img src="https://img.shields.io/badge/NextJS-000000?style=flat&logo=nextdotjs&logoColor=white"> <img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=white">
- 배포 : <img src="https://img.shields.io/badge/Netlify-00C7B7?style=flat&logo=netlify&logoColor=white">
- 라이브러리 : <img src="https://img.shields.io/badge/Tailwind css-06B6D4?style=flat&logo=tailwindcss&logoColor=white"> <img src="https://img.shields.io/badge/ChartJS-FF6384?style=flat&logo=chartdotjs&logoColor=white"> <img src="https://img.shields.io/badge/D3.js-F9A03C?style=flat&logo=d3dotjs&logoColor=white"> <img src="https://img.shields.io/badge/Swiper-6332F6?style=flat&logo=swiper&logoColor=white"> <img src="https://img.shields.io/badge/React Slick-FF880F?style=flat"> 등


## 🗂 폴더구조

```
/src
┣ 📁app
┣ 📁assets
┣ 📁components
┣ 📁const
┣ 📁contexts
┣ 📁styles
┣ 📁types
```

## ⚙️ 기능 설명
- Home
  - 유튜브 영상 url 입력창
  - 해당 프로젝트는 프론트엔드만 구현하였기 때문에 분석 결과를 낼 수 없어서 임시로
- Dashboard
  - 긍정부정 댓글 비율 항목 - 전체 댓글의 긍정 부정 비율을 도넛차트 형식으로 나타냈다.
  - 긍정부정 댓글 항목 - 긍정부정 정도가 가장 높은 순의 댓글 내용 자동 수직 슬라이더 형태로 나타냈다.
  - 키워드 항목 - 가장 많이 노출된 키워드를 워드 클라우드 형식으로 나타냈다.
  - 댓글 작성 시간 분포 항목 - 월별 댓글 작성 개수를 라인 차트 형식으로 나타냈다.
  - 좋아요 높은 순 댓글 정렬 항목 - 좋아요가 높은 순의 댓글을 테이블 형식으로 나타냈다.
  - 연관동영상 항목 - 연관동영상을 슬라이더 형태로 나열하고 분석결과와 영상을 링크를 통해 바로 볼 수 있게 나타냈다.
