setTimeout(() =>{
    console.log('hey')
}, 5000)

// const names = ['shelly', 'penny', 'lily', 'jim']

// names.forEach((name) => console.log(name))

// const myforEach = (arr, cb) =>{
//     for(let i=0;i<arr.length; i++){
//         const element = arr[i];
//         cb(element)
//     }

// }

// myforEach(names,(name)=>{
//     console.log(name);
// })

const loadPokemon =(id,cb )=>{
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(res=>res.json())
    .then(data =>{
        cb(data)
    })
}

loadPokemon(56, (pokemon) => {
console.log(pokemon)
})
