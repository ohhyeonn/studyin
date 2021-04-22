const init = () => {
    const group = document.querySelectorAll('.item');
    group.forEach(ele => {
        ele.addEventListener('click', () => {
            location.href = '../mypage/mystudy-list.html';
        });
    });
}

init();