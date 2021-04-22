const init = () => {
    const group = document.querySelectorAll('.item');
    const url = location.hostname;
    group.forEach(ele => {
        ele.addEventListener('click', () => {
            if(url.indexOf('127.0.0.1') === -1)
                location.href = '/studyin/mypage/mystudy-members.html';
            else
                location.href = '../mypage/mystudy-members.html';
        });
    });
}

init();