let char = ['sheldon', 'penny', 'leonard', 'raj', 'howard']
// function* tbbt(){
//     let i =0;

//     yield char[i];
//     i++;
//     yield char[i];
//     i++;
//     yield char[i];
//     i++;
//     yield char[i];
//     i++;
//     yield char[i];
//     i++;
//     yield char[i];
//     i++;
    
//     return false;

// }

// let iter = tbbt();
// console.log(iter)

// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());

for(let i in char){
    console.log(i);
}

// let car={
//     make:'chevy',
//     model:'imphala',
//     year: 1972,
//     color:'black'
// }

// for(let property in car){
//     console.log(car[property]);
// }

for(let i of char){
    console.log(i)
}