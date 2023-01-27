// let s = "Zbcdefg";
// let n = "gfedcbZ";

// let a = s.split("");

// // console.log(a);
// let b = a.sort();
// let c = b.reverse();
// let d = c.join("");
// console.log(d);

////////////////////////////
// let arr = [4, 3, 2, 1];

// // console.log(arr.splice(arr.indexOf(Math.min(...arr)), 1));

// // arr.splice(arr.indexOf(Math.min(...arr)), 1);
// // if (arr.length < 1) return [-1];
// // return arr;

// ////////////////

// const min = Math.min(...arr);
// // return arr.length !== 1 ? arr.filter((i) => i !== min) : [-1];

// console.log();

//////////////////////////////////
// absolutes = [4, 7, 12];
// signs = [true, false, true];

////////////////////////////////////////

// console.log(
//   absolutes.reduce((acc, val, i) => acc + val * (signs[i] ? 1 : -1), 0)
// );

// console.log(absolutes.reduce((acc, val, i) => signs[i]));

// let answer = 0;
// absolutes.forEach((v, i) => {
//   if (signs[i]) {
//     answer += v;
//   } else {
//     answer -= v;
//   }
// });
// return answer;

// let a = absolutes.forEach((item, index) => {
//   return item;
// });

// console.log(a);

///////////////////////////////
// function solution(absolutes, signs) {
//     let answer = 0;
//     for (let i = 0; i < absolutes.length; i++) {
//         signs[i] ? answer += absolutes[i] : answer -= absolutes[i]
//     }
//     return answer;
// }

// let numbers = [1, 2, 3, 4, 6, 7, 8, 0];

// console.log(numbers.reduce((cur, acc) => cur+acc, 0));

// function solution(numbers) {
//     let answer = 0;

//     for(let i = 0; i <= 9; i++) {
//         if(!numbers.includes(i)) answer += i;
//     }

//     return answer;
// }

///////////////////////////////////////////////
// let s = "abcde";

// s.slice(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);

// let n = 3;
// const waterMelon = (n) => {
//   return "수박".repeat(n / 2) + (n % 2 === 1 ? "수" : "");
// };

// const waterMelon = n => "수박".repeat(n).slice(0,n);

// let a = [1, 2, 3, 4];
// let b = [-3, -1, 0, 2];

// console.log(a.reduce((cur, acc, i) => (cur += a[i] * b[i]), 0));

// console.log(
//   s
//     .split("")
//     .sort((a, b) => (a < b ? 1 : -1))
//     .join("")
// );

// console.log(b.sort((a, b) => (a < b ? 1 : -1)));

// let left = 13;
// let right = 17;
// // let array = [];
// let count = 0;
// let temp = [];

// for (let i = left; i <= right; i++) {
//   let tempcount = 0;
//   let isodd = false;
//   for (let j = 1; j <= Math.sqrt(i); j++) {
//     if (Math.pow(j, 2) == i) {
//       tempcount += j;
//       isodd = true;
//       console.log(tempcount, "홀수경우");
//       continue;
//     }
//     if (i % j == 0) {
//       tempcount += j + i / j;
//       console.log(tempcount, i, j, i / j);
//     }
//   }
//   if (!isodd) {
//     count += tempcount;
//   } else count -= tempcount;
// }
// console.log(count);

// console.log(temp);
// let test = [];
// // console.log(array);
// for (let i = 0; i < array.length; i++) {
//   if (array[i] == 1 && i !== 0) {
//     test.push(count);
//     count = 0;
//   }
//   count++;
// }
// let ct = 0;
// test.push(count);
// // console.log(test);
// for (let i = 0; i < temp.length; i++) {
//   let b = Number(temp[i]);

//   if (test[i] % 2 == 0) {
//     ct += b;
//   }
//   if (test[i] % 2 !== 0) {
//     ct -= b;
//   }
//   // console.log(b);
//   // if (test[i] % 2 == 0) {
//   // }
// }
// // console.log(ct);

// let s = "5f1234";
// let regex = /[a-zA-Z]/;

// let a = s.match(regex);
// if (a == null && (s.length == 4 || s.length == 6)) {
//   console.log(true);
// } else console.log(false);

// const len = s.length;
// if (len !== 4 || len !== 6) {
//   return false;
// }

// const parseNum = Number(s);
// console.log(parseNum);

// if (parseNum !== NaN) return true;
// else return false;

// let price = 3;
// let money = 20;
// let count = 4;
// let lastprice = 0;
// let answer = 0;

// for (let i = 1; i <= count; i++) {
//   lastprice += price * i;
// }
// if (money > lastprice) {
//   console.log(0);
// } else answer = lastprice - money;

// console.log(answer);

// let arr1 = [
//   [1, 2],
//   [2, 3],
// ];
// let arr2 = [
//   [3, 4],
//   [5, 6],
// ];

// let answer = 0;
// let array = [];
// // let a = [];
// // let last = "";
// // let sum = [];
// // let a = new Array(arr1.length);
// // console.log(a);
// console.log(arr2[1].length);
// for (let i = 0; i < arr1.length; i++) {
//   // console.log(arr1[0][0] + arr2[0][0]);
//   // console.log(arr1[0][1] + arr2[0][1]);
//   let sum = [];
//   for (let j = 0; j < arr2.length; j++) {
//     if (!isNaN(arr1[i][j] + arr2[i][j])) {
//       sum.push(arr1[i][j] + arr2[i][j]);
//     }
//   }
//   array.push(sum);
// }
// console.log(array);

// / let arr1 = [
//     //   [1, 2],
//     //   [2, 3],
//     // ];
//     // let arr2 = [
//     //   [3, 4],
//     //   [5, 6],
//     // ];

// return arr1.map((a,i) => a.map((b, j) => b + arr2[i][j]));

//////////////////////////
// function sumMatrix(A,B){
//     var answer;
//   answer = A.map((a, i) => {
//     return a.map((val, idx) => {
//         val += B[i][idx];
//       return val;
//     })
//   })

//     return answer;
// }

// let answer;

// answer = arr1.map((a, b) => {
//   return a.map((c, d) => {
//     c += arr2[b][d];
//     return c;
//   });
// });
// // console.log(answer);
// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// // 8시 44분

// let input = [];
// let star=""
// rl.on('line', function (line) {
//     input = line.split(' ');
// }).on('close', function () {
//     // console.log(Number(input[0]));
//     for(let i=0;i<input[0];i++){
//         star+="*"
//          console.log(star)

// let star = "";

// let a = 10;
// let b = 4;

// for (let i = 1; i <= b; i++) {
//   star = "*".repeat(a);
//   console.log(star);
// }

// let n = 3;
// let m = 12;
// let result = [3, 12];
// let n1 = 2;
// let m2 = 5;
// let result2 = [1, 10];
// let sum = [];
// let array = [];
// let arraytwo = [];
// let arraythree = [];

// for (let i = 1; i <= m; i++) {
//   if (m % i == 0) {
//     array.push(i);
//   }
// }

// for (let j = 1; j <= n; j++) {
//   if (n % j == 0) {
//     arraytwo.push(j);
//   }
// }

// for (let i = 0; i < array.length + arraytwo.length; i++) {
//   for (let j = 0; j < array.length + arraytwo.length; j++) {
//     if (array[i] == arraytwo[j] && array[i] !== undefined) {
//       sum.push(array[i]);
//     }
//   }
// }
// let ar = [];
// let a = sum.sort((a, b) => b - a);

// // console.log(a[0]);
// let gg = Math.max(n, m);
// // let test = [3, 0];
// // a.filter((item) => (item == test[0] ? ar.push(item) : []));
// // console.log(ar);
// // console.log(gg);
// let artwo = [];
// for (let i = 1; i <= n + m; i++) {
//   ar.push(n * i);
//   artwo.push(m * i);
// }
// console.log(artwo);

// let test = ar.filter((item) => {
//   return (
//     item ==
//     artwo.filter((item) => {
//       return item;
//     })
//   );
// });
// // console.log(test);
// let test = artwo.map((item) => {
//   return item;
// });

// // console.log(ar);
// // console.log(artwo);
// let temp = [];
// for (let i = 0; i < ar.length; i++) {
//   for (let j = 0; j < artwo.length; j++) {
//     // console.log("ar[i] : ", ar[i], "  artwo[j] : ", artwo[j]);
//     if (ar[i] == artwo[j]) {
//       temp.push(ar[i]);
//       break;
//     }
//   }
// }
// // let artemp = temp.sort((a, b) => a - b);
// // console.log(artemp[0]);
// // console.log(temp[0]);

// arraythree.push(a[0]);
// arraythree.push(temp[0]);
// console.log(arraythree);
