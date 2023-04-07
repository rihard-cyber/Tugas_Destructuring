// Destructuring Array
const listSiswa = ["Budi", "Mina", "Ani", "Tama"];

const [siswa1, siswa2, siswa3, siswa4] = listSiswa;

console.log(siswa1); // Budi
console.log(siswa2); // Mina
console.log(siswa3); // Ani
console.log(siswa4); // Tama

// Destructuring Object
const listProduct = {
  buah: "Apel",
  sayur: "Kangkung",
  daging: "Ayam",
};

const { buah: b, sayur: s, daging: d } = listProduct;

console.log(b); // Apel
console.log(s); // Kangkung
console.log(d); // Ayam

// Destructuring Function
function getDataSiswa(nama, alamat) {
  return {
    nama,
    alamat,
  };
}

const { nama, alamat } = getDataSiswa("Budi", "Jakarta");

console.log(nama); // Budi
console.log(alamat); // Jakarta

// Alias dan Default Value
const listHarga = {
  buah: 10000,
  sayur: 5000,
  daging: 15000,
};

const {
  buah: hargaBuah = 3000,
  sayur: hargaSayur,
  daging: hargaDaging,
} = listHarga;

console.log(hargaBuah); // 10000
console.log(hargaSayur); // 5000
console.log(hargaDaging); // 15000
