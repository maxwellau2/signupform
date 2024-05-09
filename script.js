// const btn_submit = document.getElementById("btn-submit")
const input_pw = document.getElementById("password")
const input_cnfm_pw = document.getElementById("confirm_password")

// btn_submit.addEventListener("click", ()=>{
//     console.log(btn_cnfm_pw.value);
//     console.log(btn_pw.value);
// })

// input_pw.addEventListener("blur", ()=>{
//     if (input_cnfm_pw.value != input_pw.value){
        
//     }
// })

input_cnfm_pw.addEventListener("blur", (e)=>{
    if (e.target.value != input_pw.value){
        alert("must be d dsame")
    }
})