function init(){
    const studyGroupList = document.querySelector('.study-group-list');
    const groupItem = document.querySelectorAll('.group-item');
    const lastItem = document.querySelectorAll('.last-item');
    const url = location.hostname;
    groupItem.forEach( ele => {
        ele.addEventListener('click', (e) => {
            e.stopPropagation();
            if(url.indexOf('127.0.0.1') === -1)
                location.href = '/studyin/study/study-main-detail.html';
            else
                location.href = '../study/study-main-detail.html';
        })
    });

    lastItem.forEach( ele => {
        ele.addEventListener('click', (e) => {
            if(url.indexOf('127.0.0.1') === -1)
                location.href = '/studyin/study/study-main-list.html';
            else
                location.href = '../study/study-main-list.html';
        })
    })
};

init();
