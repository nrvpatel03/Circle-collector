
$(document).ready(function(){

    //generate a random Number for computer between 19 and 120.
    function  generateRanNum(){
        return Math.floor(Math.random() * 101) + 19;
    }

    //generate a unique array that contains unique random numbers between 1 and 12.
    function generateRanValArr(){
        var uniqueArr = [];
        //create a loop to add to the unique array.
        for(var w=0; w<4;w++){
            //create a random variable to store a random number between 1 and 12
            var ran = Math.floor(Math.random()*11) + 1;
            //if the uniqueArr does not contain the number, add it.
            if(uniqueArr.indexOf(ran) == -1){
                uniqueArr.push(ran);
                //otherwise, decrease w by one so the loop will start over again undil it succeeds to move
                //on to the next iteration
            }else{
                w-=1;
            }
        }
        return uniqueArr;
    }
    function resetGame(uArr, ranNum, score, wins, loss){
        $("#blue").attr("value",uArr[0]);
        $("#red").attr("value",uArr[1]);
        $("#yellow").attr("value",uArr[2]);
        $("#green").attr("value",uArr[3]);
        $("#scoreNum").text(score);
        $("#wins").text("Wins: " + wins);
        $("#loss").text("Loss: " + loss);
        $("#randomNum").text("Target Number: " + ranNum);
        console.log( $("#blue").attr("value"),
        $("#red").attr("value"),
        $("#yellow").attr("value"),
        $("#green").attr("value",));
    }
//use u arr to store the unique array then pull each value to start and set them for the circles below.
    var uArr = generateRanValArr();
    var ranNum = generateRanNum();
    var score = 0;
    var wins = 0;
    var loss = 0;
    //beginning game setup
    resetGame(uArr,ranNum,score,wins,loss);    


    $(".circle").click(function(){
        //console.log($(this).attr("value"));
        score += parseInt($(this).attr("value"));
        $("#scoreNum").text(score);
        if(score == ranNum){
            $("#winorLoseText").text("You win!!!");
            uArr = generateRanValArr();
            ranNum = generateRanNum();
            score = 0;
            wins += 1;
            resetGame(uArr,ranNum,score,wins,loss);
            
        }else if(score >= ranNum){
            $("#winorLoseText").text("You Lose!!!");
            uArr = generateRanValArr();
            ranNum = generateRanNum();
            score = 0;
            loss += 1;
            resetGame(uArr,ranNum,score,wins,loss);
        }
    });

    


});