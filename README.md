<div>

<h2>❤️ Pinterest Clone 합동세미나 DeskToP 7조</h2>
	<h3>🔗 배포링크 : https://pinterestclone-ten.vercel.app/home </h3>
<br/>
<img width="350px" alt="image" src="https://github.com/GOSOPT-CDS-TEAM7-DeskTop/Frontend/assets/91375979/6296ea35-e381-4802-bb4d-0058af731ff7">
<br />    
<br />    


</div>

<h2> 🎨 Pinterest Clone 기능 </h2>

<h3> 1️⃣ 홈화면  </h3>
<img width="750" alt="image" src="https://github.com/GOSOPT-CDS-TEAM7-DeskTop/Frontend/assets/91375979/cb891606-843b-4ec1-bc59-2c2061374818">
<br />
<br />    
- pinterest logo , 만들기버튼 , 유저프로필 이미지 클릭시 해당 페이지로 이동 <br />    
- 전체 게시물 불러오기 , 게시물 검색기능 <br />    

<h3> 2️⃣ 핀게시물 상세보기 </h3>
<img width="750" alt="image" src="https://github.com/GOSOPT-CDS-TEAM7-DeskTop/Frontend/assets/91375979/55553c46-6628-4d32-ba08-975d1bba20f7">
<br />
<br />
- 핀게시물 상세정보 가져오기 api  <br />
- 팔로우 , 저장 버튼 api 기능 <br />
- 이미지 클릭시 새창 띄우기 <br />
- 뒤로가기 버튼 클릭시 home 으로 이동 <br /> 
- 댓글작성 및 생성 api <br />    

<h3> 3️⃣ 마이페이지 </h3>
<img width="750" alt="image" src="https://github.com/GOSOPT-CDS-TEAM7-DeskTop/Frontend/assets/91375979/9a8799e9-184a-482c-8316-cb0ad5f455f8">

<br />
<br /> 
- Recoil 로 저장한 유저데이터 불러와서 유저프로필 출력하기 <br />    
- 저장한 게시물 불러오기 <br />    

<h3> 4️⃣ 핀생성페이지 </h3>
<img width="750" alt="image" src="https://github.com/GOSOPT-CDS-TEAM7-DeskTop/Frontend/assets/91375979/3c400f9d-e836-48fa-8671-9fc2c4bcbda7">

<br />
<br /> 
- 이미지 업로드 후 미리보기 <br />    
- 이미지 서버로 전송 <br />    


<h2> 🌈 웨비들 역할분담 </h2>

<table align="center">
    <tr align="center">
        <td style="min-width: 150px;">
            <a href="">
              <img src="https://avatars.githubusercontent.com/u/91375979?v=4" width="200" alt="정찬우 사진">
              <br />
              <b>Chanwoo-Jeong</b>
            </a>
        </td>
        <td style="min-width: 150px;">
            <a href="">
              <img src="https://avatars.githubusercontent.com/u/49463954?v=4" width="200" alt="깃허브계정-프로필사진">
              <br />
              <b>kwonET</b>
            </a>
        </td>
        <td style="min-width: 150px;">
            <a href="">
              <img src="https://avatars.githubusercontent.com/u/91827379?v=4" width="200" alt="깃허브계정-프로필사진">
              <br />
              <b>yesongoget</b>
            </a>
        </td>
	<td style="min-width: 150px;">
            <a href="">
              <img src="https://avatars.githubusercontent.com/u/69576360?v=4" width="200" alt="깃허브계정-프로필사진">
              <br />
              <b>woogisea</b>
            </a>
        </td>
    </tr>
    <tr align="center">
        <td>
            정찬우 <br/>
        </td>
       <td>
            권보미 <br/>
      </td>
       <td>
            손예현 <br/>
      </td>
       <td>
            정재욱 <br/>
      </td>
    </tr>
  	<tr align="center">
        <td>
            전체게시물API <br/> 게시물검색API
      </td>
       <td>
            저장, 팔로우 API <br/> 댓글생성 API 
      </td>
       <td>
            유저프로필API & Recoil <br/> 저장된핀게시물API
      </td>
       <td>
            핀생성 API <br/>
      </td>
    </tr>
      	<tr align="center">
        <td>
            홈화면 <br/>
      </td>
       <td>
            핀상세보기 <br/>
      </td>
       <td>
            마이페이지 <br/>
      </td>
       <td>
            핀생성페이지 <br/>
      </td>
    </tr>
</table>

<h2> 🛠 기술스택 </h2>

```
   - 프론트 : React.js
   - 스타일 : styled-components 
   - 서버 통신 : axios
   - 전역상태관리 : Recoil
```
<br/>

<h2>  📄 컨벤션 및 브랜치 전략 </h2>
https://utopian-cuticle-7bc.notion.site/d4601df3d86c4472ad36812e2ef9604e

<br/>

<h2> 📁 폴더 구조 </h2>

```
|-- 📁 node_modules
|-- 📁 public
|-- 📁 src
	|-- 📁 asset
		|-- 📁 icon
		|-- 📁 images
	|-- 📁 components 
		|-- 📁 common (button , input 등 재사용의 가장 작은 단위)
		|-- 📁 layout (헤더바 , 게시물 섹션 , 프로필 섹션 등 재사용될만한 큼지막한 단위)
		|-- 📁 Home(Home 에서 쓰일 컴포넌트 모음)
		|-- 📁 PinDetail (PinDetail 에서 쓰일 컴포넌트 모음)
		|-- 📁 Mypage (Mypage 에서 쓰일 컴포넌트 모음)
		|-- 📁 Upload (Upload 에서 쓰일 컴포넌트 모음)
	|-- 📁 pages
		|-- Home.tsx (메인 랜딩페이지 : 찬우)
		|-- PinDetail.tsx (게시물보기 : 보미)
		|-- Mypage.tsx ( 마이페이지 : 예현)
		|-- Upload.tsx ( 게시물업로드 : 재욱)
	|-- 📁 hooks (커스텀 훅을 담아두는 폴더)
	|-- 📁 atoms (Recoil 전역적으로 사용될 상태 폴더)
		|-- atom.ts (ex.유저정보 등 필요 atom)
	|-- 📁 styles ( GlobalStyles , theme.ts )
	|-- 📁 utils ( 재사용이 높은 함수모음 폴더 )
|-- Router.tsx (라우터 파일) 
|-- App.tsx
|-- main.tsx
|-- .eslintrc.json
|-- .gitignore
|-- .prettierrc
|-- README.md
|-- package.json
|-- tsconfig.json 
|-- yarn.lock
```


<br/>



