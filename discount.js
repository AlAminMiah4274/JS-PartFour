/*
1. First 100 -----> 100tk
2. Second 100 ----> 90tk
3. Rest ----------> 70tk
*/

// function ticketPrice(ticketQuantity) {
//     const first100Rate = 100;
//     const second100Rate = 90;
//     const restTicketRate = 70;

//     if (ticketQuantity <= 100) {
//         const price = ticketQuantity * first100Rate;
//         return price;
//     }
//     else if (ticketQuantity <= 200) {
//         const first100TicketPrice = 100 * first100Rate;
//         const restTicketQuantity = ticketQuantity - 100;
//         const restTicketPrice = restTicketQuantity * second100Rate;
//         const totalPrice = first100TicketPrice + restTicketPrice;
//         return totalPrice;
//     }
//     else {
//         const first100TicketPrice = 100 * first100Rate;
//         const Second100TicketPrice = 100 * second100Rate;
//         const restTicketQuantity = ticketQuantity - 200;
//         const restTicketPrice = restTicketQuantity * restTicketRate;
//         const totalCost = first100TicketPrice + Second100TicketPrice + restTicketPrice;
//         return totalCost;
//     }
// }

// const prices = ticketPrice(230);
// console.log('Tickets price are:', prices);

// *********** //

function ticketPrice(ticketQuantity) {
    const first100Rate = 100;
    const second100Rate = 90;
    const restTicketRate = 70;

    if (ticketQuantity <= 100) {
        const price = ticketQuantity * first100Rate;
        return price;
    }
    else if (ticketQuantity <= 200) {
        const first100TicketPrice = 100 * first100Rate;
        const restTicketQuantity = ticketQuantity - 100;
        const restTicketPrice = restTicketQuantity * second100Rate;
        const totalPrice = first100TicketPrice + restTicketPrice;
        return totalPrice;
    }
    else {
        const first100TicketPrice = 100 * first100Rate;
        const Second100TicketPrice = 100 * second100Rate;
        const restTicketQuantity = ticketQuantity - 200;
        const restTicketPrice = restTicketQuantity * restTicketRate;
        const totalCost = first100TicketPrice + Second100TicketPrice + restTicketPrice;
        return totalCost;
    }
}
const ticketCost = ticketPrice(201);
console.log('Total amount:', ticketCost);