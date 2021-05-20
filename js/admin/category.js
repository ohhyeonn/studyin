const delBtn = document.querySelector('.del-btn');
const activateBtn = document.querySelector('.activate-btn');
const editBtn = document.querySelector('.edit-btn')

cancelBtn = document.querySelector('.cancel-btn');
confirmBtn = document.querySelector('.confirm-btn');
addBtn = document.querySelector('.add-btn');

let everyBox = document.querySelector('every-box');
let box = document.querySelector('.box');
let cardCount = 0;

/*-----체크박스----*/
// let check = everyBox.querySelectorAll('input');

    /*-----개별 선택값 배열에 담기----*/
    box.onclick = function(e){
        var target = e.target;

        // checkedMessage[] = target.value;
    }



    /*---체크된 카드 비활성화---*/
    activateBtn.addEventListener('click',function(){
        for(let i in check){
            if(check[i].checked == true){
            // let selected = check[i].checked.value;
            // console.log(selected);
            console.log(check[i].nextElementSibling);
            check[i].nextElementSibling.classList.toggle("inactive");
            check[i].checked=false;
            }
            //selected 비활성화로 db 변경
        }
    });

    /*---lower 박스 보이기---*/
    let upperBox = document.querySelector('.upper-box');
    let lower = document.querySelector('.lower');
    upperBox.addEventListener('click', function(e){
        if(e.target.tagName != "LABEL") {
            console.log("text");
            return;
        };
        
        lower.classList.toggle('d-none');
        });
    
    /*---체크된 카드 순서 변경---*/
    /*let upBtn = document.querySelector(".up-btn");
    let downBtn = document.querySelector(".down-btn");
    let inputLabel = main.querySelectorAll("input+label");
    upBtn.addEventListener('click', function(){
        for(let i in check){
            //위 노드와 바꿔치기
            if(check[i].checked == true){
                console.log(inputLabel[0]);
                let parentDiv = check[i].parentNode;
                let checkWrapper = check[i]+inputLabel;;
                let checkWrapper2 = inputLabel[i].nextElementSibling+inputLabel[i].nextElementSibling.nextElementSibling;
                console.log(checkWrapper,checkWrapper2);
                let newNode = parentDiv.replaceChild(checkWrapper, checkWrapper2);
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

            //db order--s
            }
        }
    });*/


    /*----추가----*/


    editBtn.addEventListener('click', (e) => {
        delBtn.classList.add('d-none');
        editBtn.classList.add('d-none');
        activateBtn.classList.add('d-none');

        cancelBtn.classList.remove('d-none');
        confirmBtn.classList.remove('d-none');
        addBtn.classList.remove('d-none');

        for(var i in label)
            label[i].innerHTML = `<input type="text" value="${label[i].innerText}">`;
        

        let container = null;
        everyBox.addEventListener('click', (e) => {
            if(!e.target.classList.contains('click-box')) return;
            
            
            container = e.target;
            if(e.target.classList.contains('box'))
                container = e.target.querySelector(".box>div");

            container.style.backgroundColor = "#e1dfdf";
            container.parentNode.style.backgroundColor = "#e1dfdf";
            
            addBtn.addEventListener('click', function(){
                let newBox = `<input type="checkbox" id="Algorithm" name="0"><label class="" for="l1"><input type="text" value=""></label>`;
                
                
                container.insertAdjacentHTML("beforeend", newBox);
                container.style.backgroundColor = "white";
                container.parentNode.style.backgroundColor = "white";
                container = null;
                e.target = null;
                cardCount++;
                console.log(cardCount);
            });
        });
    });

        cancelBtn.addEventListener('click', function(){
            confirmBtn.classList.add('d-none');
            addBtn.classList.add('d-none');
            cancelBtn.classList.add('d-none');

            delBtn.classList.remove('d-none');
            editBtn.classList.remove('d-none');
            activateBtn.classList.remove('d-none');

            for(var i in label) {
                label[i].innerHTML = `기존값db`;

            while(cardCount > 0){
                container.lastChild.remove();
                --cardCount;
                console.log(cardCount);
                }
           }
    });

       
        
        

        confirmBtn.addEventListener('click', function(){
            confirmBtn.classList.add('d-none');
            addBtn.classList.add('d-none');
            cancelBtn.classList.add('d-none');

            delBtn.classList.remove('d-none');
            editBtn.classList.remove('d-none');
            activateBtn.classList.remove('d-none');

            label = document.querySelectorAll('.label'); 
            for(var i in label)
                 label[i].innerHTML = `새로운값db`;
            cardCount = 0;
        });
 
  

    

    const popupFunction = () => {
        const popup = document.querySelector('.popup');
    
        delBtn.addEventListener('click', (e) => {
            e.preventDefault();

            popup.classList.toggle('flex-active');
        });
    
        popup.addEventListener('click', (e) => {
            e.preventDefault();

            if(!e.target.classList.contains('popup-btn') && !e.target.classList.contains('popup-cancel-btn')) return;
            popup.classList.toggle('flex-active');
        });
    
    };
    
    popupFunction();