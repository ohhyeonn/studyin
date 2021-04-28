window.onload = addEventListener("load", function(){
    // var box = document.querySelectorAll(".box");
    
    var chechbox = document.querySelector("checkbox");
    var yes = document.querySelector(".popup-btn");
    var no = document.querySelector(".popup-cancel-btn");
    var upperCircle = document.querySelectorAll(".upper label");
    var lower = document.querySelectorAll(".lower");
    var lowerCircle = document.querySelectorAll(".lower label");
    var hiddenBox = document.querySelectorAll(".hidden-box");
    var radio = document.querySelectorAll("radio");
    
    var deleteBtn = document.querySelector(".delete-btn");
    var inactiveBtn = document.querySelector(".inactive-btn");
    var modifyBtn = document.querySelector(".modify-btn");
    var addBtn = document.querySelector(".add-btn");
    
    
    var popup = document.querySelector(".popup");
    var selected = null;
    
    upperCircle.onclick = function(e){
        e.target.classList.remove("hidden-Box");
    }
    function popup(){
        popup.classList.add("active");
    
        //정말 삭제하겠냐는 popup이 뜬다
    }
    
    function add(){
        console.log("add");
        // input type=text인 동그라미가 생긴다
    }
    
    var selected = function(e){
        // if(!e.target.classList.contain("classnaeme"))
        //         return;
    
        // selected = e.target;
        // selected.classList.toggle("selected");
    
        // return selected;
    }
    
    upper.onclick = function(e){
        hiddenBox.style.display = "initial";
    }
    
    function modify(){
    
    }
    function inactive(){
        console.log("inactive");
        //선택한 동그라미가 비활성화하면 회색으로 바뀐다
    }
    
    function noResult(){
        //동그라미가 없다면, 검색 결과가 없다는 문구가 뜬다
    }
    
    function Result(){
        //검색 결과에 맞는 결과를 내온다
    }
    
    function option(){
        //상태분류에 맞는 결과를 내온다
    }
    
    deleteBtn.addEventListener("click", popup);
    inactiveBtn.addEventListener("click", inactive);
    modifyBtn.addEventListener("click", modify);
    addBtn.addEventListener("click", add);
    upper.addEventListener("click", radio);
    });