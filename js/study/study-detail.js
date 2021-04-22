function init(){
    const prevBtn = document.querySelector('.btn-nav-wrapper > a:first-child');
    const backBtn = document.querySelector('.btn-nav-wrapper > a:nth-child(2)');
    const nextBtn = document.querySelector('.btn-nav-wrapper > a:last-child');

    prevBtn.addEventListener('click', (e) => {
        if(url.indexOf('127.0.0.1') === -1)
            location.href = '/studyin/study/study-detail.html';
        else
            location.href = '../study/study-detail.html';
    });

    backBtn.addEventListener('click', (e) => {
        if(url.indexOf('127.0.0.1') === -1)
            location.href = '/studyin/study/study-list.html';
        else
            location.href = '../study/study-list.html';
    });

    nextBtn.addEventListener('click', (e) => {
        if(url.indexOf('127.0.0.1') === -1)
            location.href = '/studyin/study/study-detail.html';
        else
            location.href = '../study/study-detail.html';
    });
}

init();