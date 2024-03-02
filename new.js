/* Task 1. 
 let orders = 
    {
            id: 'comp',
            date: '01.03.2024',
            payment_type: 'digital',
            cargo_address: 'Azerbaijan, Baku',
            products: [
                 {
                        id: 'mac_15',
                        title: 'Macbook Air 15',
                        url: 'https://kontakt.az/az/notbuk-apple-macbook-air-15-mqkx3rua-midnight',
                        price: '3599.99 AZN'
                 },
                 {
                        id: 'acer_nitro',
                        title: 'Acer Nitro 5',
                        url: 'https://kontakt.az/az/notbuk-acer-nitro-5-an515-nh-qfmer-00g',
                        price: '3299.99 AZN'
                 }
            ],
            customer_id: '123456789',
            seller: {
                    id: '987654321',
                    name: 'Kontakt Home'
            }
    }
console.log(orders);

let price1 = parseFloat(orders.products[0].price)
let price2 = parseFloat(orders.products[1].price)
let kargo1 = price1 * 0.15
let kargo2 = price2 * 0.15 
console.log("Toplam kargo: ", kargo1 + kargo2) */






/* Task 2 
let number = [1, 5, 6, 8, 15, 20, 4];
console.log("Reqemlerin kvadrati: ");
for(i = 0; i < number.length; i++){
        console.log(Math.pow(number[i], 2));
}

console.log("Cut ededler: ")
for(i = 0; i < number.length; i++){
        if(number[i] % 2 == 0) console.log(number[i]);
}

sum = 0
for(i = 0; i < number.length; i++){
        if(number[i] % 3 == 0) sum += number[i];
}
console.log("3-e qaliqsiz bolunen ededlerin cemi: ", sum) */






/* Task 3
 let fruits = ['alma', 'armud', 'banan', 'çiyələk'];
for(i = 0; i < fruits.length; i++){
        console.log(fruits[i].toUpperCase());
}


let count2 = 0;
for(i = 0; i < fruits.length; i++){
        let count = 0;
        for(j = 0; j < fruits[i].length; j++){
                if(fruits[i][j] === 'a'){
                        count++
                        break;
                } 
        } 
        if(count) count2++;
}
console.log(count2) */





/* Task 4
let students = [
	{
		name: "Orxan",
		surname: "Abbasov",
		scores: [60, 70, 80]
	},
	{
		name: "Kenan",
		surname: "Zeynalov",
		scores: [74, 83, 89]
	},
	{
		name: "Fərid",
		surname: "İsmayılov",
		scores: [78, 81, 94]
	}
]
for(i = 0; i < students.length; i++){
        let overall_score = 0;
        for(j = 0; j < students.scores.length; j++){
                average = overall_score + students[i][j];
        }
        if(average / students.scores.length > 60 && average / students[scores].length < 70) console.log('normal')
        else if(average / students.scores.length > 70 && average / students[scores].length < 80) console.log('yaxsi')
        else if(average / students.scores.length > 80 && average / students[scores].length < 90) console.log('ela')
} */