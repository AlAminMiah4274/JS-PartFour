const nayok = {
    name: 'Al Amin',
    id: 5078,
    address: 'uttara',
    isSingle: true,
    friends: ['sabbir', 'masum', 'rakib'],
    movies: [{ name: 'no 1', year: 2015 }, { name: 'king khan', year: 2018 }],
    act: function () {
        console.log('act like Al Amin');
    },
    car: {
        brand: 'lamborgini',
        price: '16 million',
        made: 2020,
        manufacturer: {
            company: 'tesla',
            ceo: 'elon mask',
            country: 'usa'
        }
    }
};

// console.log(nayok);
console.log(nayok.act);
nayok.act();