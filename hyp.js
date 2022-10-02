const baseb = document.querySelector("#base-b");

const heighth = document.querySelector("#height-h");

const checkbutton = document.querySelector("#check-button");

const hynans = document.querySelector("#hyp-answer");


function calhyp()
{
    if(Number(baseb.value) && Number(heighth.value))
    {
        sq = calc();
        hynans.innerText = "Hypotenuse is = "+sq;
    }
    else
    {
        hynans.innerText = "Please enter the fields properly";
    }
    

}

function calc()
{
    const sq =Math.sqrt((Number(baseb.value)*Number(baseb.value))+(Number(heighth.value)*Number(heighth.value)))
    return sq;
}


checkbutton.addEventListener("click",calhyp);
