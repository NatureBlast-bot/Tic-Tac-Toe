let boxes=document.querySelectorAll(".box");
const resetbtn=document.querySelector("#reset");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let newBtn=document.querySelector("#newbtn");

let playerO=true;
let count=0; //to check draaw

const win=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        console.log("Box is clicked");
        if(playerO){
            //Player O turn
            box.innerText="O";
            playerO=false;
        }
        else{
            //Player X turn
            box.innerText="X";
            playerO=true;
        }
        //To disable changing value
        box.disabled=true;
        count++;

        let iswinnner=checkwinner();

        if(count===9 && !isWinner){
            gamedraw();
        }
    });
    
});

const gamedraw=()=>{
    msg.innerHTML=`Game is a Draw!`;
    msgContainer.classList.remove("hide");
    disablebox();
};


const checkwinner=()=>{
    for(let pattern of win){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;

        if(pos1!="" && pos2!=="" && pos3!=""){
            if(pos1===pos2 && pos2===pos3){
                console.log("Winner Winner ! Chicken Dinner: ",pos1);

                showwinner(pos1);
            }
        }
    }
};

const disablebox=()=>{
    for(let b of boxes){
        b.disabled=true;
    }
};

const enablebox=()=>{
    for(b of boxes){
        b.disabled=false;
        b.innerText="";
    }
};

let showwinner=(winner)=>{
    msg.innerHTML=`<i><b>Winner is ${winner}</b></i>`;
    msgContainer.classList.remove("hide");
    disablebox();
};

let reset=()=>{
    playerO=true;
    enablebox();
    msgContainer.classList.add("hide");
};

newBtn.addEventListener("click",reset);
resetbtn.addEventListener("click",reset);




