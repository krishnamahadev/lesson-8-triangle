
const sideinput = document.querySelectorAll(".side-input");

// console.log(sideinput);

const findarea = document.querySelector("#check-button");

const outputmsg = document.querySelector("#output-area")


var flag;



function calcbintoh(a,b)
{
    const bh = a*b;
    return bh;
}


// function areoft()
// {
//     // console.log("Hey");
//     if(Number(sideinput[0].value)&&Number(sideinput[1].value))
//     {
//         const bh=calcbintoh(Number(sideinput[0].value),Number(sideinput[1].value));
//         const areaoftriangle = (1/2)*bh;
//         outputmsg.innerText = "Are of traingle is "+areaoftriangle;
//     }
//     else
//     {
//         outputmsg.innerText = "Please enter the inputs properly!"
//     }
    
// }

function checkinputvalues(side1, side2)
{
    if(side1 < 0 || side2 < 0)
    {
        flag = 0;
        outputmsg.innerText = "Please enter positive values for the inputs!"
    }
    else if(Number(sideinput[0].value)&&Number(sideinput[1].value))
    {
        flag =1
    }
    else
    {
        outputmsg.innerText = "Please enter the inputs properly!"
    }
}

function areoft()
{
    // console.log("Hey");

    checkinputvalues(Number(sideinput[0].value), Number(sideinput[1].value))
    if(flag===1)
    {
        const bh=calcbintoh(Number(sideinput[0].value),Number(sideinput[1].value));
        const areaoftriangle = (1/2)*bh;
        outputmsg.innerText = "Are of traingle is "+areaoftriangle;
    }

    
}


findarea.addEventListener("click",areoft);


