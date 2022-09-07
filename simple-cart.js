// const shoppingCart = [
//     { name: 'shirt', price: 2500 },
//     { name: 'shoe', price: 3000 },
//     { name: 'tShirt', price: 1000 },
//     { name: 'pant', price: 1800 },
//     { name: 'belt', price: 1100 }
// ];

// function totalCost(products) {
//     let sum = 0;
//     for (let i = 0; i < products.length; i++) {
//         const product = products[i];
//         sum = sum + product.price;
//     }
//     return sum;
// }

// const expence = totalCost(shoppingCart);
// console.log('Total price of today expence:', expence);

// ************ //

const shoppingCart = [
    { name: 'shirt', price: 2750 },
    { name: 'pant', price: 1700 },
    { name: 'tShirt', price: 900 },
    { name: 'shoe', price: 3500 },
    { name: 'belt', price: 1230 },
];

function totalCost(products) {
    let sum = 0;
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        sum = sum + product.price;
    }
    return sum;
}

const expence = totalCost(shoppingCart);
console.log('total expence today:', expence);