'use strict';
// let i = 0;
// while (i < 10) {
//   // ciklo body
//   console.log('I do while cycle ' + i);
//   i = i + 3;
// }

// for
for (let i = 0; i < 10; i++) {
  // console.log('I do for for cycle ' + (i + 1));
}

// sudeti visus skaiciu nuo 1 iki 6
let sum = 0;
for (let i = 1; i <= 66; i++) {
  // console.log(i);
  sum = i + sum;
}
console.log('sum ===', sum);

// atspausdinti skaicius nuo 15 iki 55

// atspausdinti skaicius nuo 100 iki 40 mazajancia tvarka

// atspausdinti skaicius nuo -50 iki 300 kas trecia skaiciu

// sudauginti skaicius nuo 60 iki 70

// paimti skaicius nuo 2 iki 10 ir isvesti ju vidurki su for ciklo pagalba

// paimti skaicius nuo 11 iki 22 ir atspausdinti kiekviena skaiciu padauginta is 2

// paimti skaicius nuo 11 iki 22 ir atspausdinti kiekviena skaiciu padauginta is 2 ir prideta 7

//       ↓  - pradinis/darbinis kintamasis - įvyksta tik vieną kartą.
//       ↓
//       ↓        ↓ - tęstinumo/baigtinė salygą - tikrinama kiekvieną kart, prieš vykdant ciklo vykdymo bloką
//       ↓        ↓                               Jeigu salyga - true, kodas kartojamas. Kuomet salyga false - ciklas nutraukiamas.
console.log('--------------- FOR CIKLAS ------------------');
for (
  let i = 0;
  i < 10;
  i++ //                       ↑ - žingsnis - vykdomas kiekvieną kart, kuomet pabaigiamas vykdyti ciklo vykdymo blokas
) {
  // → → → → → → Ciklo vykdymo bloko pradžia/atidarymas → → → → → → |
  console.log('i:', i); //                                          |
} // → → → → → → Ciklo vykdymo bloko pabaiga/uždarymas  → → → → → → |
console.log('');
/*
  Iteracija - vienas ciklo vykdymo bloko įvykdymas;
  Iteratorius - kitamasis, kuris įtakoja ciklo salyga ir keičiasi su kiekviena iteracija.
  Iteruoti - vykdyti ciklo vykdymo bloką su vis kita reikšme. 

  Labai dažnai ciklas yra naudojamas atlikti veiksmus su masyvo elementais. Dažnas posakis yra:
  -- 'iteruoti per masyva' (iterate through array) - tai reiškia, atlikti veiksmus su kiekvienu masyvo elementu.
*/
