// 1.할일 추가 2.특정 목록 삭제 3.경고창
// document : 웹에 존재하는 html를 접근하기위한 객체
// getElementByIdE : 이벤트 아이디 가져오기위함
const btn = document.getElementById('btn'); //버튼 
let addValue = document.getElementById('addValue'); // 할일 추가
let result = document.getElementById('result'); // 추가된 할일


// html에서 onclick을 사용해서 addTodo() 함수 발생
function addTodo() {	
	// addValue 값 넣는 곳에 값이 없으면 내용 입력 알림
	if(addValue.value == false){
		alert("내용을 입력하세요");
	}
	// 값이 있다면
	else{
		// list 라는곳에  createElement 요소 즉 javascript 에서 html 요소(li)를 가져오기위함 
		let list = document.createElement("li");
		// del 라는 곳에 html에 있는 button 요소 가져오기
		let del = document.createElement('button');
		/* html(li) 요소를 가져온 list에 html 요소를 바꿔 주기위해 innerHTML 사용*/
		/* 예를 들어 html에 있는 홍길동이라는 요소를 이순신으로 바꿔주기 위해 innerHTML 사용*/
		list.innerHTML = addValue.value;
		// 부모 노드를 추가하기 위해 appendChild 사용
		// 부모를 추가하는 식으로 저장
		result.appendChild(list); // 추가된 할일에 할일 리스트 추가하기
		list.appendChild(del); // 할일 리스트 추가시 삭제버튼도 추가하기
		del.innerText = "X"; // 삭제 버튼에 'X' 문자 추가하기
		// style 속성을 이용해서 css 기능 구현 가능
		del.style.fontSize = "20px";
		del.style.border = "none";
		// float 띄워서 위치 오른쪽으로 즉) X 문자를 오른쪽으로 위치
		del.style.float = "right";
		del.style.right = "17px";
		del.style.marginTop = "10px";
		del.style.cursor = "pointer";
		// addEventListener 에서 클릭 이라는 요소를 했을 시 deleteList함수 발생
		del.addEventListener("click" , deleteList); // 삭제 버튼 클릭시 리스트 지우기
		del.style.position = 'relative'; // 자기 자신 기준으로 위치
	
	
	
	
	addValue.value = ""; // 할일 입력창 초기화
	addValue.focus(); // 강제 커서 깜빡임 -> 입력할 때 마다 창클릭 번거러움 x 입력이 가능해지게끔
	list.addEventListener("click" , function() { // 할일 완료 후 클릭시 밑줄 표시
		// textDecoration 텍스트를 선으로 꾸밀 수 있으며 line-through : 가운데 줄 긋기
 		list.style.textDecoration = "line-through";		
		list.style.color = "gray"; // 클릭시 색변환		
	})
	}	
}

// 할일 목록 삭제시
// deleteList 이벤트 키(e) 받을 시 
function deleteList(e){ // 삭제 버튼 (X) 클릭시
	//  target : 이벤트가 발생한 대상 객체 해당
	let removeOne = e.target.parentElement; // 선택한 목록 한개만 지우기(부모 객체 지우기)
	// .remove() 요소 삭제
	removeOne.remove();
}


// 모두 삭제 기능 이벤트 발생시 (html)요소 onclick
function allClearList(e) {
	// confirm(" ") 확인창 띄우기
	if(confirm("정말 삭제하시겠습니까?") == true){ // 취소 메세지가 true일떄
		// innerHTML vs innerText 
		// text 는 텍스트 값을 가져오고   html는 html 이나 xml 가져온다
		// 쉽게 생각해서 html는 html이 요소 안에 포함 되고 (즉 html로 완성된걸 가져옴)
		// text는 요소 안에 html이 포함이 안되서 텍스트 값을 가져옴
		if(result.innerText==''){ // 만약 내용이 없으면
			// alert("") 알람
			alert("입력할 목록이 없습니다."); // 없다고 알림
		}
		else {
			reuslt.innerText = ''; // 있으면 내용 전체 삭제
		}
	}
	else { /// 취소 메세지가 false 일때
		return false; // 삭제 취소
	}
}
