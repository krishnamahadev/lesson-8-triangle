
const quizform = document.querySelector(".quiz-form")



const submitbutton = document.querySelector("#submit-answer");
const outputscore = document.querySelector("#score");


const corrans = ["90°","right angle","one right angle","Equilateral triangle","30°"];



// const score = 0;

function validateanswer()
{
    let score=0;
    let index=0;
    const formresults = new FormData(quizform);

    //this will give the entries from the form

    // for(let entries_form of formresults.entries())
    // {
    //     console.log(entries_form);
    // }



    for(let entries_form_values of formresults.values())
    {
        console.log(entries_form_values);
        // const answersfromform = entries_form_values
        // console.log(answersfromform)
        // console.log(typeof answersfromform)


        if(entries_form_values===corrans[index])
        {
            score=score+1;
            
        }
        else
        {
            score=score-1;
        }
        index=index+1
    }
    console.log(score);
    outputscore.innerText="Your score is (-ve marking for wrong answer) = "+score;
}



submitbutton.addEventListener("click",validateanswer);


