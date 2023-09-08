//soal 1
console.log("soal no 1")
const kalimat1 = "Andini sangat mencintai kamu selamanya"
const kalimat2 = "Gunung bromo tak akan mampu menggambarkan besarnya cintaku padamu"
let ganti

function changeWord(selectedText, changedText, text) {

    if (text == kalimat1) {
        textOK = text.replace(selectedText, changedText)
        return textOK
    } else if (text == kalimat2) {
        textOK = text.replace(selectedText, changedText)
        return textOK
    }
}

console.log(changeWord("sangat", "ingin", kalimat1))
console.log(changeWord("bromo", "semeru", kalimat2))


//soal 2
console.log("")
console.log("soal no 2")
checkTypeNumber = (givenNumber) => {
    if (Number.isInteger(givenNumber) && givenNumber % 2 == 0) {
        const genap = "GENAP"
        return genap
    } else if (Number.isInteger(givenNumber) && givenNumber % 2 != 0) {
        const ganjil = "GANJIL"
        return ganjil
    } else {
        const error = "Invalid data type"
        return error
    }
}

console.log(checkTypeNumber(2))
console.log(checkTypeNumber(3))
console.log(checkTypeNumber(1))
console.log(checkTypeNumber("3"))
console.log(checkTypeNumber({}))
console.log(checkTypeNumber([]))
console.log(checkTypeNumber())


//soal no 3
console.log("")
console.log("soal no 3")

getAngkaTerbesarKedua = (personName) => {
    if (Array.isArray(personName)) {
        const angkaTerbesar = Math.max(...personName)
        const angkaTerbesarKedua = Math.max(...personName.filter(value => value < angkaTerbesar))
        return angkaTerbesarKedua
    } else {
        return "Parameter harus diisi dan haruslah array yang dimasukan"
    }

    // return typeof (personName)


}

const dataAngka = [9, 4, 7, 7, 4, 3, 2, 2, 8]

console.log(getAngkaTerbesarKedua(dataAngka))
console.log(getAngkaTerbesarKedua(0))
console.log(getAngkaTerbesarKedua())


//soal 4
console.log("")
console.log("soal no 4")
const dataPenjualanPakAldi = [{
        namaProduct: 'Sepatu Futsal Nike Vapor Academy 8',
        hargaSatuan: 760000,
        kategori: "Sepatu Sport",
        totalTerjual: 90,
    },
    {
        namaProduct: 'Sepatu Warrior Tristan Black Brown High',
        hargaSatuan: 960000,
        kategori: "Sepatu Sneaker",
        totalTerjual: 37,
    },
    {
        namaProduct: 'Sepatu Warrior Tristan Maroon High ',
        kategori: "Sepatu Sneaker",
        hargaSatuan: 360000,
        totalTerjual: 90,
    },
    {
        namaProduct: 'Sepatu Warrior Rainbow Tosca Corduroy',
        hargaSatuan: 120000,
        kategori: "Sepatu Sneaker",
        totalTerjual: 90,
    }
]


hitungTotalPenjulan = (dataPenjualan) => {

    if (Array.isArray(dataPenjualan)) {
        let totalPenjualan = 0;

        dataPenjualan.map((value, i) => {
            const tunjuk = value[i]

            if (Number.isInteger(value.totalTerjual)) {
                totalPenjualan += value.totalTerjual;
            } else {
                return "Properti totalTerjual harus memiliki tipe data number"
            }

        })

        return totalPenjualan;
    } else {
        return "yang anda masukan haruslah array"
    }

}

console.log(hitungTotalPenjulan(dataPenjualanPakAldi))

//soal no 5
console.log("")
console.log("soal no 5")

const dataPenjualanNovel = [{
        idProduct: 'BOOK002421',
        namaProduk: 'Pulang - Pergi',
        penulis: 'Tere Liye',
        hargaBeli: 60000,
        hargaJual: 86000,
        totalTerjual: 150,
        sisaStok: 17,
    },
    {
        idProduct: 'BOOK002351',
        namaProduk: 'Selamat Tinggal',
        penulis: 'Tere Liye',
        hargaBeli: 75000,
        hargaJual: 103000,
        totalTerjual: 171,
        sisaStok: 20,
    },
    {
        idProduct: 'BOOK002941',
        namaProduk: 'Garis Waktu',
        penulis: 'Fiersa Besari',
        hargaBeli: 67000,
        hargaJual: 99000,
        totalTerjual: 213,
        sisaStok: 5,
    },
    {
        idProduct: 'BOOK002941',
        namaProduk: 'Laskar Pelangi',
        penulis: 'Andrea Hirata',
        hargaBeli: 55000,
        hargaJual: 68000,
        totalTerjual: 20,
        sisaStok: 56,
    },
];

function formatRupiah(angka) {
    const formatter = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
    });
    return formatter.format(angka);
}

getInfoPenjualan = (dataPenjualan) => {
    const {
        totalKeuntungan,
        totalModal
    } = dataPenjualanNovel.reduce(
        (accumulator, produk) => {
            const keuntunganPerProduk = (produk.hargaJual - produk.hargaBeli) * produk.totalTerjual;
            accumulator.totalKeuntungan += keuntunganPerProduk;
            accumulator.totalModal += produk.hargaBeli * produk.totalTerjual;
            return accumulator;
        }, {
            totalKeuntungan: 0,
            totalModal: 0
        }
    );


    const produkTerlaris = dataPenjualanNovel.reduce((terlaris, produk) => {
        if (produk.totalTerjual > terlaris.jumlahTerlaris) {
            return {
                produkTerlaris: produk.namaProduk,
                jumlahTerlaris: produk.totalTerjual
            };
        }
        return terlaris;
    }, {
        produkTerlaris: '',
        jumlahTerlaris: 0
    });


    const penulisTerlarisMap = dataPenjualanNovel.reduce((penulisMap, produk) => {
        const penulis = produk.penulis;
        const totalTerjual = produk.totalTerjual;
        penulisMap.set(penulis, (penulisMap.get(penulis) || 0) + totalTerjual);
        return penulisMap;
    }, new Map());

    let penulisTerlaris = '';
    let jumlahTerlarisPenulis = 0;

    penulisTerlarisMap.forEach((totalTerjual, penulis) => {
        if (totalTerjual > jumlahTerlarisPenulis) {
            penulisTerlaris = penulis;
            jumlahTerlarisPenulis = totalTerjual;
        }
    });


    const persentaseKeuntungan = Math.round((totalKeuntungan / totalModal) * 100) + "%";


    const hasil = {
        totalKeuntungan: formatRupiah(totalKeuntungan),
        totalModal: formatRupiah(totalModal),
        persentaseKeuntungan,
        produkTerlaris: produkTerlaris.produkTerlaris,
        penulisTerlaris,
    };

    return hasil;
}

console.log(getInfoPenjualan(dataPenjualanNovel));