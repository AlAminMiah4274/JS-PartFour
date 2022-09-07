// const phones = [
//     { name: 'vivo', camera: '15MP', storage: 32, price: 30000, color: 'blue' },
//     { name: 'samsung', camera: '20MP', storage: 64, price: 22000, color: 'white' },
//     { name: 'iphone', camera: '20MP', storage: 128, price: 92000, color: 'skyblue' },
//     { name: 'xaomi', camera: '15MP', storage: 32, price: 27000, color: 'blue' },
//     { name: 'oppo', camera: '15MP', storage: 64, price: 20000, color: 'golden' },
//     { name: 'nokia', camera: '30MP', storage: 64, price: 52000, color: 'black' },
// ];

// function highestStorage(phones) {
//     let largest = phones[0];
//     for (let i = 0; i < phones.length; i++) {
//         const phone = phones[i];
//         if (phone.storage > largest.storage) {
//             largest = phone;
//         }
//     }
//     return largest;
// }

// const mySeletion = highestStorage(phones);
// console.log(mySeletion);

// ********* //

const phones = [
    { name: 'vivo', camera: '15MP', storage: 32, price: 30000, color: 'blue' },
    { name: 'samsung', camera: '20MP', storage: 64, price: 22000, color: 'white' },
    { name: 'iphone', camera: '20MP', storage: 128, price: 92000, color: 'skyblue' },
    { name: 'xaomi', camera: '15MP', storage: 32, price: 27000, color: 'blue' },
    { name: 'oppo', camera: '15MP', storage: 64, price: 20000, color: 'golden' },
    { name: 'nokia', camera: '30MP', storage: 64, price: 52000, color: 'black' },
];

function cheapestPhone(phones) {
    let cheapest = phones[0];
    for (let i = 0; i < phones.length; i++) {
        const phone = phones[i];
        if (phone.price < cheapest.price) {
            cheapest = phone;
        }
    }
    return cheapest;
}

const mySeletion = cheapestPhone(phones);
console.log(mySeletion);