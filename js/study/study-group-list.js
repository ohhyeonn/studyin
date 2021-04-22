function init(){
    const studyGroupList = document.querySelector('.study-group-list');
    const groupItem = document.querySelectorAll('.group-item');
    const lastItem = document.querySelectorAll('.last-item');
    groupItem.forEach( ele => {
        ele.addEventListener('click', (e) => {
            location.href = '../study/study-main-detail.html';
        })
    });

    lastItem.forEach( ele => {
        ele.addEventListener('click', (e) => {
            location.href = '../study/study-main-list.html';
        })
    })
};

init();
