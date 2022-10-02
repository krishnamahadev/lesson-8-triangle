const inputangle = document.querySelectorAll(".angle-input");

const checkbutton = document.querySelector("#check-button");

const dispoutput = document.querySelector("#display-here");



console.log(checkbutton);

function calculatesumofangles(angle1, angle2, angle3)
{
    const sumoa = angle1+angle2+angle3;
    console.log(sumoa);

    console.log(typeof sumoa);
    return sumoa;
}


function istriangle()
{
    console.log("hey")
    // calculatesumofangles(inputangle[0].value, inputangle[1].value,inputangle[2].value);
    sumoa = calculatesumofangles(Number(inputangle[0].value), Number(inputangle[1].value),Number(inputangle[2].value));
    console.log(sumoa);

    if(Number(inputangle[0].value) && Number(inputangle[1].value)&&Number(inputangle[2].value))
    {
        if(sumoa!= 180)
        {
            dispoutput.innerText="Entered angles do not form a triangle"
        }
        else
        {
            dispoutput.innerText="Entered angles do form a triangle! Kudos"
        }
    }
    else
    {
        dispoutput.innerText="please enter all the fields properly"
    }
    

}


checkbutton.addEventListener("click",istriangle);
