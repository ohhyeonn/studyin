const init = () => {
    const group = document.querySelectorAll('.item');
    const url = location.hostname;
    group.forEach(ele => {
        ele.addEventListener('click', (e) => {
            if(e.target.classList.contains('dropout-btn'))
                return;
            if(url.indexOf('127.0.0.1') === -1)
                location.href = '/studyin/mypage/mystudy-list.html';
            else
                location.href = '../mypage/mystudy-list.html';
        });
    });
}

init();