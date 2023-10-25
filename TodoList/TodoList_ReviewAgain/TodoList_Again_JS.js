const btn = document.getElementById("btn"); // 버튼
let addValue = document.getElementById("addValue"); // 추가 할 내용
let result = document.getElementById("result"); // 추가 된 내용

// 실수 했던 오류들 : 1.list에 del 삭제버튼이 줄에 맞게 안들어갔다.
//   1번 해결방법 -> 텍스트간에 간격을 늘려준다. 간격이 좁아서 못들어갔던것.


/* 
   재복습하면서 어렵거나 기억이 안났던 부분들
   appendChild() : 부모노드에 추가할 노드를 말하며 리턴 값으로 자식값을 리턴함
   creatElement(매개변수) : 태그이름을 매개변수를 받아 해당 노드를 생성함. 추가로 js에서 html요소 생성이 가능함. 
   textDecoration : "" : 텍스트를  선으로 꾸미는 속성 (line-through : 밑줄 긋기)
   confirm("") : 경고창 띄우기
   */


function addTodo() {
	/*
	 문제 1 : 입력 내용을 받아야하는데 어떻게 받을 것인가?
	 해결 방안 : 입력 받은 addValue의 value 값을 추가하며,
	 추가되는 html 인 요소(li)를 받아오고 html 요소에 입력받은 value 값넣기
	*/	
	
	/*
	 문제 2 : value 넣은걸 어떻게 보여줄건가?
	 해결 방안 : (li)에 추가할 태그의 아이디에 부모노드 사용해서 value값 입력받은 (li)넣기 
	 
	 여기까지가" 내용 추가해서 보여주기 "
	*/	
	
	/*
	 문제 3 : 내용 추가한걸 어떻게 지울건가? 
	 해결 방안 : 방법 두가지 (하나씩 지우기 , 전체 지우기) 
	 위 방법을 사용하기위해 지우는 버튼을 css 처리하고, 클릭시 이벤트 발생 시켜야함
	 하나씩 지우기 방법 : 클릭시 이벤트 발생시키고 부모노드를 사용했기에 부모노드를 찾아 그 해당 부분만 remove 쓰기
	 전체 지우기 방법 : 클릭시 이벤트 발생후 내용이 있는 지 확인 후 없으면 경고창 띄우고,
	 있으면 추가된 전체내용 태그를 사용해 innerText 에 내용 직접 초기화. 그 예외는 프로그램 종료 
	*/
	
	//추가 할 내용이 없다면
	if(addValue.value == false){
		alert("내용을 추가해주세요");
	}
	// creatElement()함수 : 함수 안에있는 요소를 html로 반환합니다.
	else{		
		// li에 해당되는 노드를 생성 -> html요소인 li를 생성
		let list = document.createElement("li");
		// button에 해당 되는 노드를 생성 -> html요소인 button을 생성
		let del = document.createElement("button");
		
		// 생성된 곳에 html요소 넣기
		list.innerHTML = addValue.value;		
		// 추가되는 내용 전체의 자식인 LIST값 리턴
		result.appendChild(list);
		// 추가되는 내용의 자식인 삭제 버튼 값 리턴
		list.appendChild(del);
		
		// 삭제 버튼에 문자 X 넣기
		del.innerText = "X";
		
		// 삭제 버튼에 css 기능 추가
		del.style.border = "none";
		del.style.right = "17px";		
		del.style.float= "right";
		del.style.fontSize ="20px";
		del.style.cursor = "pointer";		
		del.style.marginTop = "10px";
		del.style.position = "relative";
		
		
		// 클릭시 이벤트 추가
		del.addEventListener("click",clearOne);
		
		addValue.value = "";
		addValue.focus();
		// 할일 다한거 클릭시 밑줄 긋기
		list.addEventListener("click", function() {
		
	        list.style.textDecoration = "line-through";
			list.style.color = "gray";
		})		
	}	
}
// 하나만 삭제하는 기능
function clearOne(e) {
	// 이벤트 발생한 곳에서 부모 요소 찾아내기
	// 추가적인설명 : 자식값을 리턴하기 이전에 있는 부모요소를 삭제해야함
	let RemoveOne = e.target.parentElement;
	// 부모 요소 삭제
	RemoveOne.remove();
}
// 한번에 삭제 기능
function clearAll() {
	// confirm() : 경고 창띄우고 true(확인) 일때
	if(confirm("전체다 삭제시키겠습니까?") == true){
		// 만약 내용이 없을 떄
		if(result.innerText ==''){
			alert("지울 목록이 없습니다.");
		}
		// 있을 때
		else {
			result.innerText='';
		}
	}
	//아닐때 끄기
	else {
		return false;
	}
}