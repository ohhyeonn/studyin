function init(){
    const item = document.querySelectorAll('.item');
    const url = location.hostname;
    item.forEach( ele => {
        ele.addEventListener('click', (e) =>{
            if(url.indexOf('127.0.0.1') === -1)
                location.href = '/studyin/study/study-main-detail.html';
            else
                location.href = '../study/study-main-detail.html';
        });
    })
}

init();

