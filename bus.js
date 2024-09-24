document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menuIcon');
    const menu = document.querySelector('.menu');

    // ☰ 버튼 클릭 시 슬라이드 메뉴 열기/닫기
    menuIcon.addEventListener('click', function() {
        if (menu.style.right === "0px") {
            menu.style.right = "-250px"; // 메뉴 숨기기
        } else {
            menu.style.right = "0px"; // 메뉴 보이기
        }
    });

    // 화면의 아무 곳이나 클릭했을 때 슬라이드 메뉴를 닫기
    document.body.addEventListener('click', function(event) {
        if (menu.style.right === "0px" && !menu.contains(event.target) && event.target !== menuIcon) {
            menu.style.right = "-250px"; // 메뉴 숨기기
        }
    });
});
