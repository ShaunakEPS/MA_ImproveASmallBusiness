var score = 0;
function changeBG (element) {
    document.getElementById(element).style.backgroundColor = "red";
}
function makeAble (elemente) {
    document.getElementById(elemente).disabled = false;
}
function question1() {
    let question1Answer = document.getElementById("question1-answer");
    let question1Answer1selected = document.getElementById("question1.1").checked;
    let question1Answer2selected = document.getElementById("question1.2").checked;
    let question1Answer3selected = document.getElementById("question1.3").checked;
    if (question1Answer1selected) {
        question1Answer.innerHTML = "Correct. This rule is known as touch-move-touch-take."
        score = score + 1;
    }
    if (question1Answer2selected) {
        question1Answer.innerHTML = "Incorrect. Touch-move-touch-take would apply here."
        changeBG("question1Grid")
    }
    if (question1Answer3selected) {
        question1Answer.innerHTML = "Incorrect. The clock never stops ticking in a chess game."
        changeBG("question1Grid")
    }
    document.getElementById("question1.1").disabled = true;
    document.getElementById("question1.2").disabled = true;
    document.getElementById("question1.3").disabled = true;
    document.getElementById("submitQ1").disabled = true;
}
function question2() {
    let question2Answer = document.getElementById("question2-answer");
    let question2Answer1selected = document.getElementById("question2.1").checked;
    let question2Answer2selected = document.getElementById("question2.2").checked;
    let question2Answer3selected = document.getElementById("question2.3").checked;
    if (question2Answer1selected) {
        question2Answer.innerHTML = "Incorrect. There are exceptions to this."
        changeBG("question2Grid")
    }
    if (question2Answer2selected) {
        question2Answer.innerHTML = "Incorrect. Teams with numbers not equaling 5 would mess up the pairings, and grouping new teams would be upsetting for people."
        changeBG("question2Grid")
    }
    if (question2Answer3selected) {
        question2Answer.innerHTML = "Correct. These are the exceptions outlined in the rulebook."
        score = score + 1;
    }
    document.getElementById("question2.1").disabled = true;
    document.getElementById("question2.2").disabled = true;
    document.getElementById("question2.3").disabled = true;
    document.getElementById("submitQ2").disabled = true;
}
function question3() {
    let question3Answer = document.getElementById("question3-answer");
    let question3Answer1selected = document.getElementById("question3.1").checked;
    let question3Answer2selected = document.getElementById("question3.2").checked;
    let question3Answer3selected = document.getElementById("question3.3").checked;
    if (question3Answer1selected) {
        question3Answer.innerHTML = "Incorrect. K.castleK is not the kingside castling notation."
        changeBG("question3Grid")
    }
    if (question3Answer2selected) {
        question3Answer.innerHTML = "Correct. 0-0 is the kingside castling notation."
        score = score + 1;
    }
    if (question3Answer3selected) {
        question3Answer.innerHTML = "Incorrect. 0-K-R is not the kingside castling notation."
        changeBG("question3Grid")
    }
    document.getElementById("question3.1").disabled = true;
    document.getElementById("question3.2").disabled = true;
    document.getElementById("question3.3").disabled = true;
    document.getElementById("submitQ3").disabled = true;
}
function question4() {
    let question4Answer = document.getElementById("question4-answer");
    let question4Answer1selected = document.getElementById("question4.1").checked;
    let question4Answer2selected = document.getElementById("question4.2").checked;
    let question4Answer3selected = document.getElementById("question4.3").checked;
    if (question4Answer1selected) {
        question4Answer.innerHTML = "Incorrect, though it is close."
        changeBG("question4Grid")
    }
    if (question4Answer2selected) {
        question4Answer.innerHTML = "Correct."
        score = score + 1;
    }
    if (question4Answer3selected) {
        question4Answer.innerHTML = "Incorrect. All competitive chess games have a time control."
        changeBG("question4Grid")
    }
    document.getElementById("question4.1").disabled = true;
    document.getElementById("question4.2").disabled = true;
    document.getElementById("question4.3").disabled = true;
    document.getElementById("submitQ4").disabled = true;
}
function question5() {
    let question5Answer = document.getElementById("question5-answer");
    let question5Answer1selected = document.getElementById("question5.1").checked;
    let question5Answer2selected = document.getElementById("question5.2").checked;
    let question5Answer3selected = document.getElementById("question5.3").checked;
    if (question5Answer1selected) {
        question5Answer.innerHTML = "Incorrect, but close. Think a bit more."
        changeBG("question5Grid")
    }
    if (question5Answer2selected) {
        question5Answer.innerHTML = "Incorrect, en passant doesn't work like that."
        changeBG("question5Grid")
    }
    if (question5Answer3selected) {
        question5Answer.innerHTML = "Correct."
        score = score + 1;
    }
    document.getElementById("question5.1").disabled = true;
    document.getElementById("question5.2").disabled = true;
    document.getElementById("question5.3").disabled = true;
    document.getElementById("submitQ5").disabled = true;
}
function question6() {
    let question6Answer = document.getElementById("question6-answer")
    let question6Answer1selected = document.getElementById("question6.1").checked;
    let question6Answer2selected = document.getElementById("question6.2").checked;
    let question6Answer3selected = document.getElementById("question6.3").checked;
    if (question6Answer1selected) {
        question6Answer.innerHTML = "Incorrect. The rules aren't that strict."
        changeBG("question6Grid")
    }
    if (question6Answer2selected) {
        question6Answer.innerHTML = "Correct."
        score = score + 1;
    }
    if (question6Answer3selected) {
        question6Answer.innerHTML = "Incorrect. Using the bathroom isn't a viable reason for pausing the clock."
        changeBG("question6Grid")
    }
    document.getElementById("question6.1").disabled = true;
    document.getElementById("question6.2").disabled = true;
    document.getElementById("question6.3").disabled = true;
    document.getElementById("submitQ6").disabled = true;
}
function question7() {
    let question7Answer = document.getElementById("question7-answer")
    let question7Answer1selected = document.getElementById("question7.1").checked;
    let question7Answer2selected = document.getElementById("question7.2").checked;
    let question7Answer3selected = document.getElementById("question7.3").checked;
    if (question7Answer1selected) {
        question7Answer.innerHTML = "Correct. Good job analyzing this position carefully."
        score = score + 1;
    }
    if (question7Answer2selected) {
        question7Answer.innerHTML = "Incorrect. Re8 may appear to be checkmate, but white's light-squared bishop will block and deliver discovered checkmate on black's king with the rook. Analyze the position more carefully next time."
        changeBG("question7Grid")
    }
    if (question7Answer3selected) {
        question7Answer.innerHTML = "Incorrect. It should be clear that someone is getting mated here..."
        changeBG("question7Grid")
    }
    document.getElementById("question7.1").disabled = true;
    document.getElementById("question7.2").disabled = true;
    document.getElementById("question7.3").disabled = true;
    document.getElementById("submitQ7").disabled = true;
}
function question8() {
    let question8Answer = document.getElementById("question8-answer")
    let question8Answer1selected = document.getElementById("question8.1").checked;
    let question8Answer2selected = document.getElementById("question8.2").checked;
    let question8Answer3selected = document.getElementById("question8.3").checked;
    if (question8Answer1selected) {
        question8Answer.innerHTML = "Incorrect. While a notation sheet would allow for any result to be determined, a single position cannot show draw by mutual agreement, a forfeit, a resignation, threefold repetition, or a draw by the 50 or 75-move rule."
        changeBG("question8Grid")
    }
    if (question8Answer2selected) {
        question8Answer.innerHTML = "Incorrect, though it is generally good to flag down a judge regardless."
        changeBG("question8Grid")
    }
    if (question8Answer3selected) {
        question8Answer.innerHTML = "Correct."
        score = score + 1;
    }
    document.getElementById("question8.1").disabled = true;
    document.getElementById("question8.2").disabled = true;
    document.getElementById("question8.3").disabled = true;
    document.getElementById("submitQ8").disabled = true;
}
function question9() {
    let question9Answer = document.getElementById("question9-answer")
    let question9Answer1selected = document.getElementById("question9.1").checked;
    let question9Answer2selected = document.getElementById("question9.2").checked;
    let question9Answer3selected = document.getElementById("question9.3").checked;
    if (question9Answer1selected) {
        question9Answer.innerHTML = "Correct. White can respond to this by kicking black's knight away immediately with e5. It is important to play Nf3 after that to prevent Qh4+, but after Nf3, d4 can be played to give white a really solid center. Bxf4 also becomes available here to win the pawn back."
        score = score + 1;
    }
    if (question9Answer2selected) {
        question9Answer.innerHTML = "Incorrect, because white is able to take the center and win back the pawn by playing e5, Nf3 (stopping Qh4+), d4, and Bxf4."
        changeBG("question9Grid")
    }
    if (question9Answer3selected) {
        question9Answer.innerHTML = "Incorrect. Ng4 just hangs the knight to Qxg4."
        changeBG("question9Grid")
    }
    document.getElementById("question9.1").disabled = true;
    document.getElementById("question9.2").disabled = true;
    document.getElementById("question9.3").disabled = true;
    document.getElementById("submitQ9").disabled = true;
}
function question10() {
    let question10Answer = document.getElementById("question10-answer")
    let question10Answer1selected = document.getElementById("question10.1").checked;
    let question10Answer2selected = document.getElementById("question10.2").checked;
    let question10Answer3selected = document.getElementById("question10.3").checked;
    if (question10Answer1selected) {
        question10Answer.innerHTML = "Correct."
        score = score + 1;
    }
    if (question10Answer2selected) {
        question10Answer.innerHTML = "Incorrect."
        changeBG("question10Grid")
    }
    if (question10Answer3selected) {
        question10Answer.innerHTML = "Incorrect. Chess Company of America is a made-up thing."
        changeBG("question10Grid")
    }
    document.getElementById("question10.1").disabled = true;
    document.getElementById("question10.2").disabled = true;
    document.getElementById("question10.3").disabled = true;
    document.getElementById("submitQ10").disabled = true;
}
function GetResults() {
    if (document.getElementById("submitQ1").disabled && document.getElementById("submitQ2").disabled && document.getElementById("submitQ3").disabled && document.getElementById("submitQ4").disabled && document.getElementById("submitQ5").disabled && document.getElementById("submitQ6").disabled && document.getElementById("submitQ7").disabled && document.getElementById("submitQ8").disabled && document.getElementById("submitQ9").disabled && document.getElementById("submitQ10").disabled) {
        document.getElementById("results").innerHTML = "Final score is " + score + " out of 10 questions correct."
    }
}
