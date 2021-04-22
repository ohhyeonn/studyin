function init(){
    const item = document.querySelectorAll('.item');
    item.forEach( ele => {
        ele.addEventListener('click', (e) =>{
            location.href = 'study-detail.html';
        });
    })
};

init();
