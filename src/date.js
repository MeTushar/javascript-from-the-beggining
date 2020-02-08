let date;
//You can create a date using new keyword
const today = new Date();

//You can create any date you want
let doj = new Date("11/12/2018");
// doj = new Date('11/12/2018 11:25');
// doj = new Date('sept 1 2018');

//you can get different values from date object
date = today.getMonth();
//it will return you a number & starts from 0
//which means january is 0

date = today.getDay();
//it start counting day from sunday & sunday equals 1

date = today.getDate();

date = today.getFullYear();

date = today.getHours();
date = today.getMinutes();
date = today.getSeconds();
date = today.getMilliseconds();
date = today.getTime();

//You can also set values

doj.setMonth(0);
doj.setDate(1);
doj.setFullYear("2015");
doj.setHours("11");
doj.setMinutes("11");
doj.setSeconds("11");

console.log(doj);
console.log(date);
