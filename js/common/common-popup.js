const popupFunction = () => {
    const deleteBtn = document.querySelectorAll('.delete-btn');
    const popup = document.querySelector('.popup');

    deleteBtn.forEach(ele => ele.addEventListener('click', (e) => {
        e.preventDefault();
        //e.stopPropagation();
        popup.classList.toggle('flex-active');
    }));

    popup.addEventListener('click', (e) => {
        e.preventDefault();
        // e.stopPropagation();
        if(!e.target.classList.contains('popup-btn') && !e.target.classList.contains('popup-cancel-btn')) return;
        popup.classList.toggle('flex-active');
    });

    // disable a tag of btn group
    const btnGroup = document.querySelector('.btn-group');
    if(btnGroup){
        btnGroup.addEventListener('click', e => {
           let target = e.target;
           if (target.tagName.toLowerCase() !== 'a') return;
           e.preventDefault();
           
           let label = target.querySelector('.reply');
           
           if(!label) return;
           let messageBtn = document.querySelector('#message-btn');
           messageBtn.checked = true;
        });
    }
}

popupFunction();