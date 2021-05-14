// dropdown menu를 위한 구현
window.addEventListener("load", function () {

    var main = document.querySelector("main");

    main.addEventListener("click", function (e) {

        if (!(main.querySelector(".dropdown.selected") == null)) {
            var dropdown = main.querySelector(".dropdown.selected");
            var menu = dropdown.querySelector(".menu");
            menu.classList.toggle("d-none");
            dropdown.classList.toggle("selected");
            return;
        }

        if (!(e.target.classList.contains("trigger") || e.target.classList.contains("dropdown")))
            return;
        else if (e.target.classList.contains("trigger"))
            var dropdown = e.target.parentElement.parentElement;
        else if (e.target.classList.contains("dropdown"))
            var dropdown = e.target;

        var menu = dropdown.querySelector(".menu");
        dropdown.classList.toggle("selected");
        menu.classList.toggle("d-none");
    });
});




/// .content 부분 delete 구현
window.addEventListener("load", function(){
    var screen = document.createElement("div");
    var alert = document.createElement("div");
    alert.innerHTML = `<div style=" size: 20px; height: 30px; line-height: 30px; border-bottom: 1px #E3E3E3 solid;">
                                댓글삭제
                            </div>
                            <div style=" display: flex; padding-top: 8px;  ">
                                <div style="display: inline-block;"> 삭제 하시겠습니까? </div><input class="yes-button" style=" border-radius: 10px; border-style: none; cursor: pointer; background-color: #00618b; color: white; width: 40px; margin-left : auto" type="button" value="네"><input class="no-button" style=" border-radius: 10px; background-color: #00618b; color: white; border-style: none; cursor: pointer; width: 50px; margin-left : 15px" type="button" value="아니요">
                            </div>
                    `;
    document.querySelector(".content").addEventListener("click",function(e){ 

        if(e.target.classList.contains("delete")){
            screen.style.width = "100%";
            screen.style.height = "100%";
            screen.style.backgroundColor = "black";
            screen.style.position = "fixed";
            screen.style.top = "0px";
            screen.style.opacity = "0";
            screen.style.transition = "0.1s";
            screen.style.zIndex = "100";

            setTimeout(function(){


                screen.style.opacity = "0.7";


            },1);
            alert.style.width = "400px";
            alert.style.height = "80px";
            alert.style.padding = "10px";
            alert.style.backgroundColor = "#ffffff";
            alert.style.position = "fixed";
            alert.style.top = "calc(50% - 50px)";
            alert.style.left = "calc(50% - 200px)";
            alert.style.opacity = "0";
            alert.style.transition = "0.1s";
            alert.style.zIndex ="101";

            setTimeout(function(){


                alert.style.opacity = "1";


            },1);
        
            
            document.body.append(screen);
            document.body.append(alert);
            
            alert.querySelector(".no-button").onclick = function(){
                screen.style.opacity = "0";
                alert.style.opacity = "0";
                screen.remove();
                alert.remove();

            };

        }



    });




        
    screen.addEventListener("click", function(){


        screen.style.opacity = "0";
        alert.style.opacity = "0";
        screen.remove();
        alert.remove();

    });


});






/// .coments부분 dropdown menu delete 구현
/// 댓글부분 수정 구현
window.addEventListener("load", function(){
    var screen = document.createElement("div");
    var alert = document.createElement("div");
    alert.innerHTML = `<div style=" size: 20px; height: 30px; line-height: 30px; border-bottom: 1px #E3E3E3 solid;">
                                댓글삭제
                            </div>
                            <div style=" display: flex; padding-top: 8px;">
                                <div style="display: inline-block;"> 삭제 하시겠습니까? </div><input class="yes-button" style=" border-radius: 10px; border-style: none; cursor: pointer; background-color: #00618b; color: white; width: 40px; margin-left : auto" type="button" value="네"><input class="no-button" style=" border-radius: 10px; background-color: #00618b; color: white; border-style: none; cursor: pointer; width: 50px; margin-left : 15px" type="button" value="아니요">
                            </div>
                    `;
    document.querySelector(".comments").addEventListener("click",function(e){ 

        if(e.target.classList.contains("delete")){
            screen.style.width = "100%";
            screen.style.height = "100%";
            screen.style.backgroundColor = "black";
            screen.style.position = "fixed";
            screen.style.top = "0px";
            screen.style.opacity = "0";
            screen.style.transition = "0.1s";
            screen.style.zIndex = "100";

            setTimeout(function(){


                screen.style.opacity = "0.7";


            },1);
            alert.style.width = "400px";
            alert.style.height = "80px";
            alert.style.padding = "10px";
            alert.style.backgroundColor = "#ffffff";
            alert.style.position = "fixed";
            alert.style.top = "calc(50% - 50px)";
            alert.style.left = "calc(50% - 200px)";
            alert.style.opacity = "0";
            alert.style.transition = "0.1s";
            alert.style.zIndex ="101";

            setTimeout(function(){


                alert.style.opacity = "1";


            },1);
        
            
            document.body.append(screen);
            document.body.append(alert);
            
            alert.querySelector(".no-button").onclick = function(){
                screen.style.opacity = "0";
                alert.style.opacity = "0";
                screen.remove();
                alert.remove();

            };

        }else if(e.target.classList.contains("modify") || e.target.classList.contains("modify-buttons-no")){

            let node = e.target;

            while(!node.classList.contains("item")){
                node = node.parentElement;

            } 
            // 노드에서 .modify 얘도 d-none 해주고 취소 누르면 다시 풀어주고 저건 삭제하고 그런거 해줘야댐  아래 주석 참고
            let innerText = node.querySelector(".item > .item-text").innerText;
            let modifyTextarea = node.querySelector(".item > .modify-textarea");
            let modifyButtons = node.querySelector(".item > .modify-buttons");
            node.querySelector(".item > .item-text").classList.toggle("d-none"); //// d-none 이고 취소하면 다시 나타내주면되고 수정하면 json 아예 다불러오게한다 ㅇㅋ
            modifyTextarea.innerText = innerText;
            modifyTextarea.classList.toggle("d-none");
            modifyButtons.classList.toggle("d-none");
        }



    });




    screen.addEventListener("click", function(){


        screen.style.opacity = "0";
        alert.style.opacity = "0";
        screen.remove();
        alert.remove();

    });


});




//// main 태그 안에서 keydown 이나 keyup 일어날때 text-area 라는 클래스가 늘어나거나 줄어들게 된다.
window.addEventListener("load", function(){
    var content= window.document.querySelector("main");
 
    content.addEventListener("keydown",function(e){

        if(e.target.classList.contains("text-area")){
            e.target.style.height = "0px";
            e.target.style.height = (e.target.scrollHeight)+"px";
        }


    });
    
    
    content.addEventListener("keyup",function(e){
        if(e.target.classList.contains("text-area")){
            e.target.style.height = "0px";
            e.target.style.height = (e.target.scrollHeight)+"px";

        }

        
    });





});






/// scrollYOffset이 증가하거나 감소하면 글쓰기버튼 사라져볼게하는 이벤트 
window.addEventListener("load",function(){
    let textWriteIcon = window.document.querySelector(".text-write-icon");
    let previousScrollYOffset = 0;



    let scrollHandler =  function(){
        window.removeEventListener("scroll", scrollHandler);

        let currentScrollYOffset = window.scrollY;
        if(currentScrollYOffset > previousScrollYOffset){
            
            textWriteIcon.style.opacity = 0;
            
            window.setTimeout(function(){
                
                textWriteIcon.classList.add("d-none");
                window.addEventListener("scroll",scrollHandler);
                previousScrollYOffset = window.scrollY; 


            },300);




        } else if(currentScrollYOffset < previousScrollYOffset){

          
            textWriteIcon.classList.remove("d-none");
            window.setTimeout(function(){

                textWriteIcon.style.opacity = 1;

            },1);

            window.setTimeout(function(){
                
                window.addEventListener("scroll",scrollHandler);
                previousScrollYOffset = window.scrollY;

            },300);
           



            
        }



    };



    window.addEventListener("scroll",scrollHandler);







});