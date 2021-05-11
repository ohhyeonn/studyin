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
                            <div style=" display: flex; padding-top: 5px;  ">
                                <div style="display: inline-block;"> 삭제 하시겠습니까? </div><input style=" border-radius: 10px; border-style: none; cursor: pointer; background-color: #00618b; color: white; width: 40px; margin-left : auto" type="button" value="네"><input style=" border-radius: 10px; background-color: #00618b; color: white; border-style: none; cursor: pointer; width: 50px; margin-left : 15px" type="button" value="아니요">
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
                            <div style=" display: flex; padding-top: 5px;  ">
                                <div style="display: inline-block;"> 삭제 하시겠습니까? </div><input style=" border-radius: 10px; border-style: none; cursor: pointer; background-color: #00618b; color: white; width: 40px; margin-left : auto" type="button" value="네"><input style=" border-radius: 10px; background-color: #00618b; color: white; border-style: none; cursor: pointer; width: 50px; margin-left : 15px" type="button" value="아니요">
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

        }else if(e.target.classList.contains("modify")){
            let node = e.target;
            console.log(node);
            let editHTML = `
            <textarea class="text-area" style =" height:30px; box-sizing:border-box; padding: 5px 5px; overflow: hidden; display: block; min-height : 30px; width: 95%; size: 14px; outline: none; resize: none; "> 만나서 좋아요</textarea>
            <div style = "display:  flex; justify-content: flex-end; margin-top: 5px;">    
                <span style=" border-radius: 10px; color: white; text-align: center; line-height: 30px; background-color: #00618b;  display: inline-block; width: 53px; height:30px; margin-right: 5px; cursor: pointer;" type="button" value="수정">수정</span>
                <span style=" border-radius: 10px; color: white; text-align: center; line-height: 30px; background-color: #00618b;  display: inline-block; width: 53px; height:30px; margin-right: 30px; cursor: pointer;" type="button" value="수정">취소</span>  
            </div>
            `;
            while(!node.classList.contains("dropdown")){
                node = node.parentElement;

            } 
            node.previousElementSibling.classList.add("d-none"); //// d-none 이고 취소하면 다시 나타내주면되고 수정하면 json 아예 다불러오게한다 ㅇㅋ
            node.insertAdjacentHTML("beforebegin",editHTML);

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