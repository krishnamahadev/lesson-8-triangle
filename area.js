
const sideinput = document.querySelectorAll(".side-input");

// console.log(sideinput);

const findarea = document.querySelector("#check-button");

const outputmsg = document.querySelector("#output-area")





function calcbintoh(a,b)
{
    const bh = a*b;
    return bh;
}


function areoft()
{
    // console.log("Hey");
    if(Number(sideinput[0].value)&&Number(sideinput[1].value))
    {
        const bh=calcbintoh(Number(sideinput[0].value),Number(sideinput[1].value));
        const areaoftriangle = (1/2)*bh;
        outputmsg.innerText = "Are of traingle is "+areaoftriangle;
    }
    else
    {
        outputmsg.innerText = "Please enter the inputs properly!"
    }
    
}


findarea.addEventListener("click",areoft);


