
let initialCount = 0;

const counter = document.querySelector("#value");
const increase = document.querySelector(".increase");
const decrease = document.querySelector(".decrease");
const reset = document.querySelector(".reset");

increase.addEventListener("click", function(){
        initialCount ++;
    counter.textContent = initialCount
})

decrease.addEventListener("click", function(){
    initialCount --;
counter.textContent = initialCount
})

reset.addEventListener("click", function(){
    initialCount = 0;
counter.textContent = initialCount
})


// const btns = document.querySelectorAll(".btn");

//  btns.forEach(function (btn) {
//  btn.addEventListener("click", function(e) {
//      const styles = e.currentTarget.classList;
//      if (styles.contains("increase")){
//          initialCount++;
        
//      } else if (styles.contains("decrease")){
//          initialCount--;
//      } else {
//          initialCount = 0;
//      }
//      counter.textContent = initialCount;
//          });
//  });