console.log('terenary');

let gender = 'female';
let ats;

if (gender === 'male') {
  ats = 'vyras';
} else {
  ats = 'moteris';
}

// terenary operator
// salyga ? JEI TRUE : JEI FALSE
// gender === 'male' ? (ats = 'vyras') : (ats = 'moteris');

ats = gender === 'male' ? 'vyras' : 'moteris';
// ats = gender === 'male' ? '' : 'moteris';
// ats = gender === 'male' ? 'vyras' : '';

console.log(`Jus esate ${ats}`);

// sikurti boolean kintamaji isItRaining
let isItRaining = true;

isItRaining === true ? console.log('dabar lyja') : console.log('dabar giedra');

// parasyti su ternary operatorium atspausdinam ar parasom ar dabar lyje arba dabar giedra

// susikurti buildingArea kintamaji
// ternary operator
let buildingArea = 600;
let size = buildingArea > 500 ? 'large' : 'medium';
console.log(`this building is ${size}`);
// jei reikme didene nei 500 tai atspausdinam "large building"
// jei reikme mazesne nei 500 tai atspausdinam "medium building"

// let isRaining = false;
// let sunShine = true;
// let clouds = true;

// nested ternary (advance not rekomended)
// const weather =
//   isRaining === true
//   ? 'Lyja'
//   : sunShine === true ? 'sauleta' : 'debesuota';
