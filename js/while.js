// kol ciklas

let i = 100;
while (i < 10) {
  // ciklo body
  console.log('I do while cycle');
  i++;
}

// do while
i = 100;
do {
  console.log('Do I do while cycle' + i);
  i++;
} while (i < 10);

// ridenti kauliukus tol kol ismesim 12
let points;
do {
  points = Math.floor(Math.random() * 11) + 2;
  console.log(`isridenau ${points}`);
} while (points !== 12);

// ---------------------------- while ciklas -----------------------------
// While ciklas yra naudojamas, kuomet sunku/neįmanoma nustatyti iteracijų skaičiaus
// Taip pat jis yra lankstensnis už for ciklą, nes žingsnis gali kisti ir prieš kodo bloko vykdymą
{
  console.log('--------------- WHILE CIKLAS ------------------');
  let i = 0; // ← Pradinio/darbinio kintamojo deklaravimas
  while (i < 10) {
    //      ↑
    // tęstinumo/baigtinė salyga
    // i++;
    console.log('i:', i);
    i++; // ← - žingsnis
  }
  console.log('');
}
