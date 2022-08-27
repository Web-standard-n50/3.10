console.log("Programm started")



// let a = 12;

// myFunc();


// function myFunc() {
//     console.log(a);
// }

// function myFunc2() {
//     console.log(a);
// }
// myFunc2();


// if (true) {
//     console.log(a);
// } else {

// }


// function abs(a) {
//     return a < 0 ? -a : a;
// }

// var a = -12;

// a = Math.abs(a);
// console.log(a);

// const WALK_SPEED = 3.6;
// const BICYCLE_SPEED = 20.1;
// const CAR_SPEED = 70;
// const PLANE_SPEED = 800;

/*
 * @params distance -> integer
 * @params speed -> integer
 * @return time -> string
 */
// function calculateTime(distance, speed) {
//     let result = distance / speed;

//     let hours = Math.floor(result);
//     result = (result - hours) * 60;

//     let minute = Math.floor(result);
//     result = (result - minute) * 60;

//     let seconds = Math.floor(result);

//     return `${hours} soat ${minute} minut ${seconds} sekund`
// }




// var myFormEl = document.querySelector(".myForm");
// var distanceInputEl = document.querySelector(".distance");

// var walkEl = document.querySelector(".walk");
// var bicycleEl = document.querySelector(".bicycle");
// var carEl = document.querySelector(".car");
// var planeEl = document.querySelector(".plane");



// myFormEl.addEventListener('submit', function (event) {
//     event.preventDefault();
//     console.log("Form is ready");

//     let masofa = distanceInputEl.value - 0;
//     walkEl.textContent = calculateTime(masofa, WALK_SPEED);
//     bicycleEl.textContent = calculateTime(masofa, BICYCLE_SPEED);
//     carEl.textContent = calculateTime(masofa, CAR_SPEED);
//     planeEl.textContent = calculateTime(masofa, PLANE_SPEED);

// })


// var arr = [12, 1, 4, 113, 145, "salom", "hello", {
//     age: 21
// }];

// arr.push("12", 13)

// arr.pop()
// arr.pop()
// arr.pop()
// arr.pop()
// console.log(arr.pop())
// console.log(arr)

// arr.unshift(12, 13, 14, 5, 1);

// console.log(arr.shift())

// console.log(arr)
// console.log(arr.reverse())

// console.log(arr[4])

// arr[11] = "a";
// arr[10] = 20;
// console.log(arr)
// console.log(arr[10]);

// var arr = [12, 1, 4, 12, 121, 21];

// arr[5] = undefined;

// console.log(arr);

// console.log(arr[0])
// console.log(arr[arr.length - 1])

// var number1 = [];
// var arr2 = []
// var arr1 = new Array(12).fill(1, 2, 10);
// console.log(arr1)
// console.log(arr2)

// var x0xData = [
//     ['x', 'o', 'o'],
//     ['x', 'x', 'o'],
//     ['o', 'o', 'x']
// ]

// console.log(x0xData)

// var arr = [1, 4, 3, 1, 2, 6, 7, 8];
// console.log(arr.length)
// console.log(arr)

// arr['b'] = 12;
// arr['a'] = 'a';
// arr[11] = 12
// console.log(arr)
// console.log(arr.length)

// console.log("Noto'g'ri qiymat", arr['c'])

// for (let i = 0; i <= 100; i += 2) {
//     console.log(i)
// }


// var array1 = [12, 1, -9, 2];

// let sum = 0;
// for (let i = 0; i < array1.length; i++) {
//     sum += array1[i];
// }

// console.log(sum);

// let arr3 = [1, 2, 4, 90, 91, 31, 42, 24, 1];


// function resort(arr) {
//     let newArr = [];
//     for (let i = 0; i < Math.ceil(arr.length / 2); i++) {
//         newArr.push(arr[i]);
//         newArr.push(arr[arr.length - 1 - i]);
//     }
//     newArr.pop()
//     return newArr;
// }

// console.log(resort(arr3))

// let arr = [3.02, -3.65, 5, -9];

// function normalizeNumbers(a) {
//     for (let i = 0; i < a.length; i++) {
//         a[i] = Math.round(a[i]);
//         a[i] = a[i] < 0 ? -a[i] : a[i];
//     }
//     return a
// }
// arr = normalizeNumbers(arr)
// console.log(arr)

// var parentEl = document.querySelector(".parent")
// parentEl.classList.add('d-flex', 'justify-content-center', 'align-items-center')

// var newEl = document.createElement('input');
// console.log(newEl);
// newEl.style.width = "200px";
// newEl.style.height = "100px";
// newEl.style.backgroundColor = 'red';
// newEl.textContent = "Welcome";

// parentEl.appendChild(newEl)

// newEl.setAttribute('value', 12);
// newEl.setAttribute('type', 'number')
// // document.body.appendChild(newEl)
const users = [];

var myForm = document.querySelector('.my-form');

var userListEl = document.querySelector('.user-list');
var myNameInputEl = document.querySelector('.my-name');
myForm.addEventListener('submit', function (event) {
    event.preventDefault();

    users.push(myNameInputEl.value);
    myNameInputEl.value = ""
    console.log(users);
    renderUsers(users);
})

renderUsers(users)
function renderUsers(u) {
    userListEl.innerHTML = null;
    for (let i = 0; i < u.length; i++) {
        let singleUserEl = document.createElement('div');
        singleUserEl.className = "p-2 rounded border mt-1 mb-2"
        singleUserEl.textContent = u[i];
        userListEl.appendChild(singleUserEl);
    }
}