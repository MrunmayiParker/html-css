function* generators(){
    let i=0;
    // yield 1;
    // yield 2;
    // yield 3;
    // yield 4;
    while(true){
        yield i;
        i++;
    }
}

const gen = generators();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
