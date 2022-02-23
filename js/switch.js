'use strict';
// savaites dienu sk konvertavimas i zodzius
// 1-7
let savDn = 1;

// if (savDn === 1) {
//   console.log(`Pasirinkta diena: ${savDn} === Pirmadienis`);
// } else if (savDn === 2) {
//   console.log(`Pasirinkta diena: ${savDn} === Antradienis`);
// } else if (savDn === 3) {
//   console.log(`Pasirinkta diena: ${savDn} === Treciadienis`);
// } else if (savDn === 4) {
//   console.log(`Pasirinkta diena: ${savDn} === Ketvirtadienis`);
// } else if (savDn === 5) {
//   console.log(`Pasirinkta diena: ${savDn} === Penktadienis`);
// } else if (savDn === 6) {
//   console.log(`Pasirinkta diena: ${savDn} === Savaitgalis`);
// } else if (savDn === 7) {
//   console.log(`Pasirinkta diena: ${savDn} === Savaitgalis`);
// } else {
//   console.log(`Pasirinkta diena: ${savDn} sis skaiciu netinkamas dienai`);
// }

switch (savDn) {
  case 1:
    // vygdomas kodas kai savDn === 1
    console.log(`Pasirinkta diena: ${savDn} === Pirmadienis`);
    // break - toliau nebetikrinam ir iseinam is switch
    break;
  case 2:
    console.log(`Pasirinkta diena: ${savDn} === Antradienis`);
    break;
  case 3:
    console.log(`Pasirinkta diena: ${savDn} === Treciadienis`);
    break;
  case 4:
    console.log(`Pasirinkta diena: ${savDn} === Ketvirtadienis`);
    break;
  case 5:
    console.log(`Pasirinkta diena: ${savDn} === Penktadienis`);
    break;
  case 6:
    console.log(`Pasirinkta diena: ${savDn} === Savaitgalis`);
    break;
  case 7:
    console.log(`Pasirinkta diena: ${savDn} === Savaitgalis`);
    break;
  default:
    console.log(`Pasirinkta diena: ${savDn} sis skaiciu netinkamas dienai`);
}
