const button = document.getElementById('btn');
// console.log(button);
const colorText = document.getElementById('color');

button.addEventListener('click',() => {
    
    // document.body.style.backgroundColor = 'red';
    
    // 배열 디스트럭처링(Destructuring) - de(프랑스어, 반대의) + Structure(구조)
    // 배열이라는 구조를 분해해서, 할당(Assignment)
    const [r, g, b] = getRandomNumbers(0, 255);
    console.log(r, g, b);
    
    const rgbColor = `rgb(${r}, ${g}, ${b})`; // 2번 이상 사용되기 때문에 변수로 추출
    // In CSS, { background-color : rgb(5, 225, 13); }
    document.body.style.backgroundColor = rgbColor; // 배경색 변경
    colorText.style.color = rgbColor; // rgb 텍스트의 색상 변경
    colorText.textContent = rgbColor; // rgb 텍스트 자체 변경
});

// 세 개의 랜덤값이 담긴 배열 반환
function getRandomNumbers(min, max) {
    const randomRGBArray = [];

    for (let i = 0; i < 3; i++) {
        const randomNumber = Math.floor(Math.random() * ( max - min + 1)) + min;
        randomRGBArray.push(randomNumber);
    }

    return randomRGBArray;
}

