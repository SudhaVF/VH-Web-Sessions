function merge<T,U>(obj1: T, obj2: U): T & U {
    return { ...obj1, ...obj2};
}
const result = merge({name:"Sudha"}, {age:22});
console.log(result);