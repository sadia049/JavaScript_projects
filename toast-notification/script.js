
let successmsg = `<i class="fa-regular fa-circle-check"></i>Successfully submitted`
let errormsg = `<i class="fa-solid fa-circle-xmark"></i>Error!Try again`
let invalidmsg = `<i class="fa-solid fa-circle-exclamation"></i>Invalid message`
toastBox = document.getElementById('toastbox')
function showToast(msg){

   let toast = document.createElement("div")
   toast.classList.add('toast')
   toast.innerHTML = msg
   toastBox.appendChild(toast)

   if(msg.includes('Error')){
      toast.classList.add('error')
   
   }

   else if(msg.includes('Invalid')){
      toast.classList.add('invalid')
   }

   setTimeout(()=>{
      toast.remove()
   },3000)



}