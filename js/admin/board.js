/*-----체크박스----*/
let allCheck = document.querySelector(".all-check");
let check= document.querySelectorAll(".check");
let checkName = document.getElementsByName("check[]");
let selected = [];

let delBtn = document.querySelector('.del-btn');
let activateBtn = document.querySelector('.activate-btn');
let editBtn = document.querySelector('.edit-btn')

let cancelBtn = document.querySelector('.cancel-btn');
let confirmBtn = document.querySelector('.confirm-btn');
let addBtn = document.querySelector('.add-btn');

let mainCard = document.querySelector('.main-card');
let cardContent = document.querySelectorAll('.card-title'); 
let cardCount = 0;
    /*-----전체 선택----*/
    allCheck.onclick = function(){
        for(var i in checkName){
            if(checkName[i].checked == true)
                checkName[i].checked = false;
        }
        for(var i in checkName){
                checkName[i].checked = true;
        }
    }

    
    /*-----개별 선택값 배열에 담기----*/


    
    /*---체크된 카드 순서 변경---*/
    let upBtn = document.querySelector(".up-btn");
    let downBtn = document.querySelector(".down-btn");
    upBtn.addEventListener('click', function(){
        for(let i in check){
            //위 노드와 바꿔치기
            if(check[i].checked == true){
                let checkWrapper = check[i].parentNode;
                let checkWrapper2 = checkWrapper.previousElementSibling;
                let newNode = mainCard.replaceChild(checkWrapper, checkWrapper2);
                checkWrapper.insertAdjacentElement('afterend', newNode);

            //db order++
            }
        }
    });
    downBtn.addEventListener('click', function(){
        for(let i in check){
            //아래 노드와 바꿔치기
            if(check[i].checked == true){
                let checkWrapper = check[i].parentNode;
                let checkWrapper2 = checkWrapper.nextElementSibling;
                let newNode = mainCard.replaceChild(checkWrapper, checkWrapper2);
                checkWrapper.insertAdjacentElement('beforebegin', newNode);

            //db order++
            }
        }
    });

    /*---체크된 카드 비활성화---*/
    activateBtn.addEventListener('click',function(){
        for(let i in check){
            if(check[i].checked == true){
            // let selected = check[i].checked.value;
            // console.log(selected);
            check[i].parentNode.classList.toggle("inactive");
            }
            //selected 비활성화로 db 변경
        }
    });


    /*----추가----*/




    editBtn.addEventListener('click', (e) => {
        console.log('edit event start')
        delBtn.classList.add('d-none');
        editBtn.classList.add('d-none');
        activateBtn.classList.add('d-none');

        cancelBtn.classList.remove('d-none');
        confirmBtn.classList.remove('d-none');
        addBtn.classList.remove('d-none');

        
        for(var i in cardContent)
            cardContent[i].innerHTML = `<input type="text" value="${cardContent[i].innerText}">`;
        console.log(cardCount);
 
        
    });
      
    cancelBtn.addEventListener('click', function(e){
        console.log('cancel event start');
        confirmBtn.classList.add('d-none');
        addBtn.classList.add('d-none');
        cancelBtn.classList.add('d-none');

        delBtn.classList.remove('d-none');
        editBtn.classList.remove('d-none');
        activateBtn.classList.remove('d-none');

        for(var i in cardContent)
            cardContent[i].innerHTML = `기존값db`;

            while(cardCount > 0){
                mainCard.lastChild.remove();
                --cardCount;
            }
    });
        
        addBtn.addEventListener('click', function(){
            console.log("text");
            card = `<div class="card-wrapper">
                            <input class="check" type="checkbox" name="check[]" value="">
                            <span class="card-content">
                            <span class="card-title truncate"><input type="text" value=""></span>
                            <span class="date">생성일(최근 글): <span class="recent-date"> 현재 시각</span></span>
                            <span class="status">카테고리 수: 0 </span>
                            <span class="status">상태: 활성화</span>
                            </span>
                        </div>`;
                        
            mainCard.insertAdjacentHTML("beforeend", card);
            cardCount++;
            console.log(cardCount);
        });

        confirmBtn.addEventListener('click', function(){
            confirmBtn.classList.add('d-none');
            addBtn.classList.add('d-none');
            cancelBtn.classList.add('d-none');

            delBtn.classList.remove('d-none');
            editBtn.classList.remove('d-none');
            activateBtn.classList.remove('d-none');

            cardContent = document.querySelectorAll('.card-title'); 
            for(var i in cardContent)
                cardContent[i].innerHTML = `새로운값db`;

            cardCount = 0;
        });

 
    

    const popupFunction = () => {
        const popup = document.querySelector('.popup');
        const delBtn = document.querySelectorAll('.del-btn');
    
        delBtn.forEach(ele => ele.addEventListener('click', (e) => {
            e.preventDefault();

            popup.classList.toggle('flex-active');
        }));
    
        popup.addEventListener('click', (e) => {
            e.preventDefault();

            if(!e.target.classList.contains('popup-btn') && !e.target.classList.contains('popup-cancel-btn')) return;
            popup.classList.toggle('flex-active');
        });
    
    }
    
    popupFunction();