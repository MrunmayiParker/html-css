let p = new Promise((resolve, reject) =>{
    let a = 1+1;
    if(a==2){
        resolve('success')
    }
    else{
        reject('failed')
    }
});

p.then((message)=>{
    console.log('this is ' +message)
}).catch((message) =>{
    console.log('catch message ' +message)
})
