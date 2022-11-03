
//query selector
// const txt = document.querySelector('.text');
// const button = document.querySelector('.button');

// button.addEventListener("click", function(){
//     text.classList.add("change");
// });

// const namelist= document.querySelectorAll('.namelist');

// for(let user of namelist){
//     user.addEventListener('click', function() {
//         this.style.color = 'lavender'
//     });
// }


//get element by id
// var a=10, b=30;
// var str;
// a=a+b;
// str="sum " +a;

// document.getElementById('text').innerHTML="helloworld"
// document.getElementById('text1').innerHTML=str;

//get element by class

function changestyle(){
    var element = document.getElementsByClassName("text1");
    for(var i=0; i<element.length;i++){
        element[i].style.color="pink";
    }
}
