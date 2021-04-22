const init = () => {
    const group = document.querySelectorAll('.item');
    const url = location.hostname;
    group.forEach(ele => ele.addEventListener('click', () => {
        if(url.indexOf('127.0.0.1') === -1)
            location.href = '/studyin/study/study-detail.html'
        else
            location.href = '../study/study-detail.html'
    }));

    const deleteBtn = document.querySelectorAll('.delete-btn');
    const popup = document.querySelector('.popup');

    deleteBtn.forEach(ele => ele.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        popup.classList.add('active');
    }));

    const cancelBtn = document.querySelectorAll('.popup-cancel-btn');

    cancelBtn.forEach(ele => ele.addEventListener('click', (e) => {
        e.preventDefault();
        // e.stopPropagation();
        popup.classList.remove('active');
    }));
};
init();