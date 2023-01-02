# JOB KOREA clone coding

---

![잡코리아 메인](./jobkorealogo.gif)
<br>
<br>

## 프로젝트 소개

---

- 한국의 대표격 구인구지 서비스인 **JOB KOREA**를 클론 코딩하며 **React.js** 복습하기
- **AWS**의 EC2를 이용하여 **mySQL** 연동 및 **Express Server** 구현하기
---
## [완성된 사이트 보러가기](#http://tomntoms.errorcode.help) 

[여기를 누르면 이동합니다](http://tomntoms.errorcode.help)



---
[일반 회원 메인페이지](#일반-회원-메인페이지)

[채용 공고 상세 페이지](#채용-공고-상세-페이지)

[일반 회원 채용 공고 확인 페이지](#일반-회원-채용-공고-확인-페이지)

[채용 공고 지원 현황](#채용-공고-지원-현황)

[기업회원 메인페이지](#기업회원-메인페이지)

[기업회원 마이페이지](#기업회원-마이페이지)

[기업회원 공고등록 비용선택 페이지](#기업회원-공고등록-비용선택-페이지)

[기업회원 공고등 페이지](#기업회원-공고등록-페이지)

[등록한 공고 및 지원자 확인 페이지](#등록한-공고-및-지원자-확인-페이지)

[회원 가입 페이지](#회원-가입-페이지)



#일반 회원 메인페이지
---
- 채용 공고를 메인 페이지에 띄우도록 DB에서 불러오며 로그인 및 쿠키를 이용한 자동로그인 기능 구현
<img src="https://user-images.githubusercontent.com/113357212/209961841-c36c549d-9634-4420-850f-84b3367cc889.png" width="800" height="600"/>
  

#채용 공고 상세 페이지
---
- 채용공고를 DB에서 불러오며 기업의 규모 및 지역으로 분류 가능하도록 구현
<img src="https://user-images.githubusercontent.com/113357212/209960974-5f0ddb3a-fb8c-4460-b4a5-327dc63345da.png" width="800" height="600"/>

#일반 회원 채용 공고 확인 페이지
---
- 채용 공고의 상세내용을 볼 수 있으며 지원 할 수 있는 페이지
- 채용 공고에 지정한 기간이 지나면 지원이 불가능 하도록 즉시 지원 버튼을 마감 버튼으로 변경하도록 구현
<img src="https://user-images.githubusercontent.com/113357212/209961006-04c3ef86-89de-47d7-b162-f5cd2a9fbf62.png" width="800" height="600"/>


#채용 공고 지원 현황
---
- 사용자가 지원한 채용 공고를 볼 수 있는 페이지
- 지원 취소기능과 합격 불합격에 대한 정보를 볼 수 있도록 구현
<img src="https://user-images.githubusercontent.com/113357212/209961030-73eb931e-a814-4ff2-a4e9-f2f7d57785f6.png" width="800" height="600"/>

#기업회원 메인페이지
---
- 회원 가입 및 로그인 시 쿠키를 이용한 자동로그인 기능 구현
<img src="https://user-images.githubusercontent.com/113357212/209960979-cc824eb0-1f31-4d04-9ef8-16c85e34335a.png" width="800" height="600"/>

#기업회원 마이페이지
---
- 기업 회원 정보를 수정할 수 있도록 구현
- 보유한 금액을 추가할 수 있도록 구현
<img src="https://user-images.githubusercontent.com/113357212/209960997-ce70978b-83e7-4945-8371-fc627a6ad452.png" width="800" height="600"/>

#기업회원 공고등록 비용선택 페이지
---
- 채용 공고 등록시 First VVIP와 VVIP를 선택하여 비용 차이를 주도록 구현
- 일반회원 메인페이지 하단에 이 비용에 따른 채용 공고 홍보란이 별도로 존재
<img src="https://user-images.githubusercontent.com/113357212/209960986-94b8830c-5166-476e-9cef-46d955dd2528.png" width="800" height="600"/>

#기업회원 공고등록 페이지
---
- 채용 공고 상세 페이지에 표시할 다양한 정보를 입력할 수 있도록 구현
<img src="https://user-images.githubusercontent.com/113357212/209963766-83f5c8d0-2db8-492f-b1e8-e3a5d763a683.png" width="800" height="600"/>

#등록한 공고 및 지원자 확인 페이지
---
- 등록한 공고를 수정할 수 있도록 구현
- 일반 회원이 지원하면 지원한 회원을 볼 수 있으며 합격 불합격을 선택할 수 있도록 구현
- 합격 불합격의 결과는 일반 회원이 일반 회원 지원 현황 페이지에서 볼 수 있도록 구현
<img src="https://user-images.githubusercontent.com/113357212/209961024-8d057d93-6c46-4db3-a93a-163e1db71109.png" width="800" height="600"/>
<img src="https://user-images.githubusercontent.com/113357212/209960990-b4cedb12-2139-4709-82e0-ff8f2debde93.png" width="800" height="600"/>

#회원 가입 페이지
---
- 카카오 주소 찾기 패키지를 통하여 가입 시 주소를 입력할 수 있도록 구현
- 기업회원의 경우 이 주소를 통하여 채용 공고를 지역으로 분류하는데 사용
- 기업회원은 채용 공고에 올라갈 기업 회원의 정보 및 회사의 로고를 멀터로 입력 받을 수 있도록 구현
- 일반회원은 로그인시 보여줄 회원 사진을 멀터로 입력 받을 수 있도록 구현
<img src="https://user-images.githubusercontent.com/113357212/209961008-749f4907-67a3-4fd1-a297-81dcd11d33b2.png" width="800" height="600"/>
<img src="https://user-images.githubusercontent.com/113357212/209961015-6c80502f-6bf9-4cf2-94a0-109971b90e7a.png" width="800" height="600"/>

  <br>
  <br>

## 기술스택

---

<img src="https://user-images.githubusercontent.com/113357212/209956199-1d04248f-04cb-4c00-b24b-d914e1c73794.png" width="300" height="200"/>
---

## 프로젝트를 진행하며 작성한 노션
---

[노션 발표용 정리 보러가기] : https://yesla.notion.site/ab95407f03fc44f0aa3f8a3bec9cc8ba

[노션 작업 진행 회의록 보러가기] : https://www.notion.so/yesla/JOBKOREA-30f4899cdaca4dbfa6da6ca9ed92194f

---


## 라이센스

---

MIT JJOBKOREA
