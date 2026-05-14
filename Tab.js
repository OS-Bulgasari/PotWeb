/* Event.js */
function showContent(event, tabId) {
    event.preventDefault();

    // 1. 모든 컨텐츠 숨기기
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => {
        content.classList.remove('active');
    });

    // 2. 모든 탭 버튼에서 active 클래스 제거 (글자색 강조 해제)
    const links = document.querySelectorAll('.tab-link');
    links.forEach(link => {
        link.classList.remove('active');
    });

    // 3. 선택한 컨텐츠 보이기
    document.getElementById(tabId).classList.add('active');

    // 4. 클릭한 버튼에 active 클래스 추가 (글자색 강조)
    event.currentTarget.classList.add('active');
}