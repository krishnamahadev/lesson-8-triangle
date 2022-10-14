const inputangle = document.querySelectorAll(".angle-input");

const checkbutton = document.querySelector("#check-button");

const dispoutput = document.querySelector("#display-here");

var flag

console.log(checkbutton);

function calculatesumofangles(angle1, angle2, angle3)
{
    const sumoa = angle1+angle2+angle3;
    console.log(sumoa);

    console.log(typeof sumoa);
    return sumoa;
}


// function istriangle()
// {
//     console.log("hey")
//     // calculatesumofangles(inputangle[0].value, inputangle[1].value,inputangle[2].value);
//     sumoa = calculatesumofangles(Number(inputangle[0].value), Number(inputangle[1].value),Number(inputangle[2].value));
//     console.log(sumoa);

//     if(Number(inputangle[0].value) && Number(inputangle[1].value)&&Number(inputangle[2].value))
//     {
//         if(sumoa!= 180)
//         {
//             dispoutput.innerText="Entered angles do not form a triangle"
//         }
//         else
//         {
//             dispoutput.innerText="Entered angles do form a triangle! Kudos"
//         }
//     }
//     else
//     {
//         dispoutput.innerText="please enter all the fields properly"
//     }
    

// }

function checkinputvalues(angle1, angle2, angle3)
{
    if (angle1 < 0 || angle2 <0 || angle3 <0)
    {
        dispoutput.innerText="please enter postive values for angles";
        flag = 0;
    }
    else if (angle1 && angle2 && angle3)
    {
        flag = 1
    }
    else
    {
        dispoutput.innerText="please enter all the fields properly"
    }
}

function istriangle()
{
    console.log("hey")
    // calculatesumofangles(inputangle[0].value, inputangle[1].value,inputangle[2].value);
    sumoa = calculatesumofangles(Number(inputangle[0].value), Number(inputangle[1].value),Number(inputangle[2].value));
    console.log(sumoa);

    checkinputvalues(Number(inputangle[0].value), Number(inputangle[1].value),Number(inputangle[2].value))

    if(flag===1)
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

}



checkbutton.addEventListener("click",istriangle);
