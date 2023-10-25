// DOM 요소 참조
const cmInput = document.getElementById('cmInput');
const convertButton = document.getElementById('convertButton');
const result = document.getElementById('result');

// 버튼 클릭 이벤트 리스너 등록
convertButton.addEventListener('click', function() {
    // 입력된 센티미터 값을 가져와서 숫자로 변환
    const cmValue = parseFloat(cmInput.value);
    // 유효한 숫자가 입력되었는지 확인
    if (!isNaN(cmValue)) {
        // 센티미터를 인치로 변환
        const inchesValue = cmValue / 2.54;
        // 결과 텍스트를 설정
        result.textContent = `${cmValue} cm is approximately ${inchesValue.toFixed(2)} inches.`;
    } else {
        // 유효하지 않은 값이 입력된 경우 오류 메시지 표시
        result.textContent = "Please enter a valid number.";
    }
});
