window.onload = addEventListener("load", function(){
    var mainBtn = document.querySelector(".main-button");
    var content = mainBtn.querySelector(".message-content");
    mainBtn.onclick = function(e){
        var target = e.target;

        if(!target.classList.contains("message"))
            return;
        if(target.classList.contains("message-wrapper"))
            target = target.firstElementChild;
        if(target.tagName = "LI")
            target = target.parentNode;
            
            var preview = target.parentNode.querySelector(".preview");

            preview.classList.toggle("truncate");
        };

/*-----체크박스----*/
var allCheck = document.querySelector(".all-check");
let check= document.querySelectorAll(".message-check");
let checkName = document.getElementsByName("check[]");
// let checkedMessage[] = null;


    /*-----전체 선택----*/
    allCheck.onclick = function(){
        for(var i = 0; i < checkName.length; i++){
            if(allCheck.checked == true)
                checkName[i].checked = true;
            else if(allCheck.checked == false)
                checkName[i].checked = false;
        }
    }

    /*-----개별 선택값 배열에 담기----*/
    check.onclick = function(e){
        var target = e.target;

        // checkedMessage[] = target.value;
    }

    
});

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
}

popupFunction();