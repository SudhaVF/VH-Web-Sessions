/* Generic Function with Array */

function getFirstElement<T>(items:T[]): T {
    return items[0];
}
console.log(getFirstElement<number>([1,2,3]));
console.log(getFirstElement<string>(["a","b"]));