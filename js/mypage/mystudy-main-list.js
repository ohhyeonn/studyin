const init = () => {
    const group = document.querySelectorAll('.item');
    group.forEach(ele => {
        ele.addEventListener('click', () => {
            if(url.indexOf('127.0.0.1') === -1)
                location.href = '/studyin/mypage/mystudy-list.html';
            else
                location.href = '../mypage/mystudy-list.html';
        });
    });
}

init();