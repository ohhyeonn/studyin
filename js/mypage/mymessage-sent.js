window.onload = addEventListener("load", function(){
    var mainBtn = document.querySelector(".main-button");
    var content = mainBtn.querySelector(".message-content");
    mainBtn.onclick = function(e){
        var target = e.target;

        //message-wrapper의 자식들을 클릭하면 no가 나오는 문제
        if(!target.classList.contains("message"))
            return;
        
        else{
            var title = target.parentNode.querySelector(".mes-title");
            var preview = target.parentNode.querySelector(".preview");

            title.classList.toggle("truncate");
            preview.classList.toggle("truncate");
        }
    }
});