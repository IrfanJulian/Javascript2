// 1. Buat lah contoh 10 built-in-function dan jelaskan 

// const number = [1,2,3,4,5,6,18,16,12,15]

// =====Push=====
// Push adalah sebuah method bawaan javascript untuk memasukan sebuah nilai baru ke dalam sebuah array.
// newNumber = number.push(2,7,8)
// console.log(number);

// =====Slice=====
// Slice adalah sebuah method bawaan javascript untuk memotong nilai dalam sebuah Array
// newNumber = number.slice(1, 3)
// console.log(newNumber);

// =====Splice=====
// Splice adalah sebuah method bawaan javascript untuk menghapus dan menambahkan data baru dalam array 
// const newNumber = number.splice(2, 0, 23)
// console.log(number);

// =====Sort=====
// Sort di gunakan untuk mengurutkan angka dalam sebuah Array, bisa digunakan untuk mengukurutkan secara ascending dan descending
// const newNumber = number.sort((a,b) => a-b)
// console.log(newNumber);

// =====Filter=====
// Filter digunakan untuk mencari beberapa nilai dalam sebuah data array 
// const newNumber = number.filter(function(x){
//     return x > 6;
// })
// console.log(newNumber);

// =====Find=====
// const newNumber = number.find(function(x){
//     return x == 12;
// })
// console.log(newNumber);

// =====Join=====
// Join di gunakan untuk menggabungkan sebuah data dalam array 
// const newNumber = number.join('')
// console.log(newNumber);

// =====Pop=====
// Pop digunakan untuk menghapus sebuah nilai terakhir dalam sebuah array 
// const newNumber = number.pop()
// console.log(number);

// =====toString dan toLocaleString=====
// Digunakan untuk mengkonversi array menjadi string.
// let contohToString = ['a','b','c','d','e']
// console.log(contohToString.toString());
// console.log(contohToString.toLocaleString());

// =====toLowerCase dan toUpperCase=====
// toLowerCase di gunakan untuk merubah string menjadi huruf kecil semua. toUpperCase adalah kebalikan dari toLowerCase. 

// 2. Mencari nama dalam data array 

// const name = [
//     "Abigail", "Alexandra", "Alison",
//     "Amanda", "Angela", "Bella",
//     "Carol", "Caroline", "Carolyn",
//     "Deirdre", "Diana", "Elizabeth",
//     "Ella", "Faith", "Olivia", "Penelope"]

// const searchName = (initialName, jumlah, callback) =>{
//     const newName = name.filter((initial => initial.toLowerCase().includes(initialName.toLowerCase())));
//     const resName = newName.slice(0, jumlah)
//     callback(resName)
// }
// let res = (result) =>{
//     console.log(result);
// }
// searchName('l', 3, res)

// 3. Membuat function cari angka dalam sebuah data array 

// const cariAngka = (val1, val2, arrayVal) =>{
//     const data = arrayVal
//     const valRes = data.filter(number => number > val1 && number < val2 )
//     if(val1 > val2){
//         console.log('Angka pertama harus lebih besar dari angka kedua!!');
//     }else if(arrayVal.length < 5){
//         console.log('Nilai dalam array harus 5 atau lebih dari 5');
//     }else if(valRes.length === 0){
//         console.log('Tidak ada angka yang sesuai!');
//     }else{
//         console.log(valRes);
//     }
// }

// cariAngka(1,13,[1,4,8,12,15])
