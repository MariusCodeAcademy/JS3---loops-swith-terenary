// if (age <= 17) {
//   console.log('vaikas');
// } else if (age <= 60) {
//   console.log('suauges');
// } else if (age <= 100) {
//   console.log('saulelydis');
// } else {
//   console.log('nezinau ar tiesa kad naudojiesi kompiuteriu...');
// }

let age = 100;

// make age a switch
console.log(true === age <= 17);
switch (true) {
  case age <= 17:
    console.log('vaikas');
    break;
  case age <= 60:
    console.log('suauges');
    break;
  case age <= 100:
    console.log('saulelydis');
  default:
    console.log('nezinau ar tiesa kad naudojiesi kompiuteriu...');
}
