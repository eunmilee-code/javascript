const deliveryForm = document.getElementById('deliveryForm');

deliveryForm.addEventListener('submit', function(event) {
    // 폼 제출의 기본 동작(페이지 리로드)을 방지
    event.preventDefault();

    const nameElement = document.getElementById('name');
    const addressElement = document.getElementById('address');
    const phoneElement = document.getElementById('phone');
    const deliveryOptionElement = document.getElementById('deliveryOption');
    const memoElement = document.getElementById('memo');

    alert(`이름: ${nameElement.value}\n주소: ${addressElement.value}\n전화번호: ${phoneElement.value}\n배송 옵션: ${deliveryOptionElement.value}\n배송 메모: ${memoElement.value}\n\n정보가 성공적으로 제출되었습니다!`);

    deliveryForm.reset();
    // // 입력 필드 내용 삭제
    // nameElement.value = '';
    // addressElement.value = '';
    // phoneElement.value = '';
    // deliveryOptionElement.selectedIndex = 0; // 첫 번째 옵션을 기본으로 선택
    // memoElement.value = '';
});
