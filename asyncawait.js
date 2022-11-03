// async function myDisplay() {
//   let myPromise = new Promise(function(resolve) {
//     setTimeout(function() {
//         resolve("I have arrived");
//     }, 3000);
//   });
//   document.getElementById("demo").innerHTML = await myPromise;
// }
// myDisplay();

async function display() {
    let prom = new Promise((resolve) =>{
        setTimeout(() => {
            resolve("arrived");
        },3000);
    })
    document.getElementById("demo").innerHTML= await prom;

   
}

display();