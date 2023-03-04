const selectPlan = (planNumber) => {
    document.querySelector(".plan--selected").classList.remove("plan--selected")
    document.querySelector("#plan"+ planNumber).classList.add("plan--selected")
    
}