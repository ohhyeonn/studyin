window.onload = addEventListener("load", function(){
    var mainBtn = document.querySelector(".main-button");

    mainBtn.onclick = function(e){
        var target = e.target;

        //message-wrapper의 자식들을 클릭하면 no가 나오는 문제
        if(!target.classList.contains("message-wrapper"))
            console.log("no");
        
        var trun = target.querySelectorAll(".truncate");
        for(var i in trun)
            // toggle에서 오류 
            i.classList.toggle("truncate");
    }
});