// const numbers = [15, 45, 78, 58, 51];
// // for (let i = 0; i < numbers.length; i++) {
// //     const number = numbers[i];
// //     console.log(number);
// // }

// for (const number of numbers) {
//     console.log(number);
// }

// const products = [
//     { id: 1, name: 'xaomi phone one night', price: 19000 },
//     { id: 2, name: 'mac book air', price: 22000 },
//     { id: 3, name: 'iphone', price: 119000 },
//     { id: 4, name: 'lenevo yoga laptop 2025', price: 15000 },
//     { id: 5, name: 'dell inspiron laptop', price: 35000 },
//     { id: 6, name: 'samsung Phone note 7', price: 85000 },
//     { id: 7, name: 'nokia old age Phone gone', price: 20000 },
//     { id: 8, name: 'Phone one', price: 13000 },
//     { id: 8, name: 'M1 chip not chip LapTop', price: 13000 }
// ];
// // for (const product of products) {
// //     console.log(product);
// // }

// function matchedProducts(products, search) {
//     let matched = [];
//     for (const product of products) {
//         if (product.name.toLowerCase().includes(search.toLowerCase())) {
//             matched.push(product);
//         }
//     }
//     return matched;
// }
// const result = matchedProducts(products, 'laptop');
// console.log(result);

// ****************** //

const products = [
    { id: 1, name: 'xaomi phone one night', price: 19000 },
    { id: 2, name: 'mac book air', price: 22000 },
    { id: 3, name: 'iphone', price: 119000 },
    { id: 4, name: 'lenevo yoga laptop 2025', price: 15000 },
    { id: 5, name: 'dell inspiron laptop', price: 35000 },
    { id: 6, name: 'samsung Phone note 7', price: 85000 },
    { id: 7, name: 'nokia old age Phone gone', price: 20000 },
    { id: 8, name: 'Phone one', price: 13000 },
    { id: 8, name: 'M1 chip not chip LapTop', price: 13000 }
];
function matchedProducts(products, search) {
    let matched = [];
    for (const product of products) {
        if (product.name.toLowerCase().includes(search.toLowerCase())) {
            matched.push(product);
        }
    }
    return matched;
}
const result = matchedProducts(products, 'phone');
console.log(result);