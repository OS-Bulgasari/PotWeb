window.addEventListener('scroll', function() {
    const section = document.querySelector('.highlight-section');
    const scrollY = window.scrollY;
    
    // 0~300px 스크롤 시 서서히 흐려짐 (최저 투명도 0.2)
    let opacity = 1 - (scrollY / 300);
    if (opacity < 0.2) opacity = 0.2;
    
    section.style.opacity = opacity;
});