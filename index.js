// Index.js 파일
window.addEventListener('scroll', function() {
    const section = document.querySelector('.highlight-section');
    if (!section) return; // 요소가 없을 때 에러 방지

    const scrollY = window.scrollY;
    
    // 0에서 300px까지 내려갈 때 투명도 1 -> 0.2
    let opacity = 1 - (scrollY / 300);
    
    // 값 제한
    opacity = Math.max(0.2, Math.min(1, opacity));
    
    section.style.opacity = opacity;
    
    // 만약 투명도가 너무 낮아지면 클릭도 막는 게 좋습니다
    section.style.pointerEvents = opacity < 0.3 ? 'none' : 'auto';
});
