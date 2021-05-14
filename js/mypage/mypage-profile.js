
const popupFunction = () => {
    const modifyBtn = document.querySelectorAll('.modify-btn');
    const byeBtn = document.querySelectorAll('.bye-btn');
    const popup = document.querySelector('.popup');

    modifyBtn.forEach(ele => ele.addEventListener('click', (e) => {
        e.preventDefault();
        //e.stopPropagation();
        popup.classList.toggle('flex-active');
    }));

    byeBtn.forEach(ele => ele.addEventListener('click', (e) => {
        let popupContent = document.querySelector('.popup-content');
        e.preventDefault();
        //e.stopPropagation();
        popupContent.textContent="정말 탈퇴하시겠습니까?";
        popup.classList.toggle('flex-active');
    }));

    popup.addEventListener('click', (e) => {
        e.preventDefault();
        // e.stopPropagation();
        if(!e.target.classList.contains('popup-btn') && !e.target.classList.contains('popup-cancel-btn')) return;
        popup.classList.toggle('flex-active');
    });
}
popupFunction();