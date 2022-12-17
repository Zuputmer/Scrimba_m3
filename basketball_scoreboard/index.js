let score_1 = 0;
let score_2 = 0;

let score1_str = document.getElementById("score_1")
let score2_str = document.getElementById("score_2")

function update_scores(){
    score1_str.textContent = score_1;
    score2_str.textContent = score_2;
}

update_scores();

function addpnt(pnt,target){
    if (target == "1"){
        switch(pnt){
            case 1:
                score_1+=1;
                break;
            case 2:
                score_1+=2;
                break;
            case 3:
                score_1+=3;
                break;
            default:
                console.log("Hit default case");
                break;
        }
    }
    else if (target == "2"){
        switch(pnt){
            case 1:
                score_2+=1;
                break;
            case 2:
                score_2+=2;
                break;
            case 3:
                score_2+=3;
                break;
            default:
                console.log("Hit default case");
                break;
        }
    }
update_scores();
}

