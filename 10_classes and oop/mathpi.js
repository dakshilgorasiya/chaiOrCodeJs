const descripter = Object.getOwnPropertyDescriptor(Math, "PI");

// console.log(descripter);

const a = {
    name: "a",
    price: 25,
    isAvailable: true,

    orderChai: function () {
        console.log("code fat gaya");
    },
};

// console.log(a);

// Object.defineProperty(a, "price", {
//     writable: false,
//     enumerable: false,
// });

// console.log(Object.getOwnPropertyDescriptor(a, "price"));

// for (let [key, value] of Object.entries(a)) {  // object is not iterable but using entries we can iterate it
//     console.log(`${key} : ${value}`);
// }


Object.defineProperty(a, 'name', {
    enumerable: false
})

Object.defineProperty(a, 'price', {
    enumerable: false
})

Object.defineProperty(a, 'isAvailable', {
    enumerable: false
})

for (let [key, value] of Object.entries(a)) {
    // object is not iterable but using entries we can iterate it
    if (typeof value !== "function") console.log(`${key} : ${value}`);
}
