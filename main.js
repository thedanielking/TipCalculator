const resetBtn = document.getElementById("resetBtn");
const tip = document.querySelectorAll(".tip");
const customInput = document.getElementById("custom");

tip.forEach(item =>{
    item.addEventListener("click", ()=>{
        tip.forEach(i =>{
            i.classList.remove("activeLi");
        })
        item.classList.add("activeLi");
    });
})

const selectTip = (amount)=>{
    tip.forEach(item =>{
        if(item.classList.contains("activeLi") && item.firstChild == customInput){
            amount = customInput.value;
        }else if(item.classList.contains("activeLi")){
            amount = item.textContent;
        }

    })

    amount = Number(amount.replace("%",""));
    return amount;
}

const calcAmount = (tipPercent, bill, numberOfPeople)=>{
    const errorMessage = document.getElementById("errorMessage");
    const errorParagraph = document.getElementById("error");

    if(numberOfPeople == 0){
        errorMessage.classList.add("displayNone");
        errorParagraph.style.display = "block";

    }else{
        errorMessage.classList.remove("displayNone");
        errorParagraph.style.display = "none";

        let answer1 = (bill/numberOfPeople);
        let tipPerPerson = answer1 * (tipPercent/100);

        let totalPerPerson = answer1 + tipPerPerson;

        const Amount1 = document.getElementById("tipPerPerson");
        const Amount2 = document.getElementById("totalpPerPerson");

        Amount1.textContent = `$${tipPerPerson.toFixed(2)}`;
        Amount2.textContent = `$${totalPerPerson.toFixed(2)}`;

        activateResetBtn(resetBtn, Amount1, Amount2);
    }

    

}


const activateResetBtn = (btn, tip, total)=>{
    btn.classList.add("activeBtn");
    
    btn.addEventListener("click", ()=>{
        tip.textContent = `$0.00`;
        total.textContent = `$0.00`;
        btn.classList.remove("activeBtn")
    })
}


document.body.addEventListener("keypress", (e)=>{
    if (e.key == "Enter"){

        const bill = Number(document.getElementById("bill").value);

        const numberOfPeople = Number(document.getElementById("numberOfPeople").value);

        

        let amount = selectTip();
        calcAmount(amount, bill, numberOfPeople);

    }
})























