const initLostFind = function(){
    const idBtn = document.querySelector('.id-btn');
    const pwBtn = document.querySelector('.pw-btn');
    const idInfo = document.querySelector('.id-info');
    const pwInfo = document.querySelector('.pw-info');
    
    idBtn.addEventListener('click', (e) => {
        e.target.classList.add('on');
        pwBtn.classList.remove('on');
        idInfo.classList.add('active');
        pwInfo.classList.remove('active');
    });

    pwBtn.addEventListener('click', (e) => {
        e.target.classList.add('on');
        idBtn.classList.remove('on');
        pwInfo.classList.add('active');
        idInfo.classList.remove('active');
    });
}

window.addEventListener('load', initLostFind);