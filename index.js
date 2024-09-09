import VanillaTilt from "vanilla-tilt"
import "./style.css"
VanillaTilt.init(document.querySelectorAll("button"), {
        max: 45,
        speed: 500,
        reverse: true,
});


// Select all navigation buttons
const navButtons = document.querySelectorAll('button');

navButtons.forEach(button => {
  button.addEventListener('click', () => {

let target = button.getAttribute('data-target')
let commonClass = 'navElements'
let selected = document.querySelector(`.${target}`);

let notSelected = document.querySelectorAll(`.${commonClass}:not(.${target})`)
notSelected.forEach((e)=>{
    e.style.display = 'none'
})


selected.style.display = 'block'
if(selected.id === 'about'){
  const frontImg = document.getElementById('frontImg')
 
  frontImg.style.display = 'none'

}

else if(selected.id != 'about'){
    const frontImg = document.getElementById('frontImg')
    frontImg.style.display = 'block'
}


console.log(notSelected)





 

       }
     )
   }
)



