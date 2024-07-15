// 1. 선택박스(Select box)와 '결과' 부분에 해당하는 HTML Tag들을 JS코드 상으로 가져와야함
// JS가 HTML 태그를 제어하기 위해서

const selectButton = 
document.getElementById('cookie');
// HTML 문서(document)야 
// HTML 태그좀 가져와(get), id가 cookie인 태그(element)를
console.log(selectButton);

const result = document.getElementById('result');
console.log(result);

// // 3. 셀렉트 박스가 값이 바뀐 것을 알려주면, 그때 처리할 로직(동작)
function setResult() {
    const choice = selectButton.value; // 셀렉트 박스에서 사용자가 선택한 값

    if (choice === 'one') {
        console.log('착한 아이구나?');
        // 4. 가져온 result 변수에 문자열을 할당해서 화면에 출력
        result.textContent = '착한 아이구나?';
    } else if (choice === 'two') {
        result.textContent = '맞을래?'
    } else {
        result.textContent = '가만히 있어'
    }
}


// // 2. 셀렉트 박스에게 '너가 가지고 있는 선택지 중에 하나가 선택되면(선택지의 값을 바꾼 이벤트, change) 나한테 말좀 해줘'
selectButton.addEventListener('change', setResult);