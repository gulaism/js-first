// Task 1
let orders = [
        {
                        id: 'comp21',
                        date: '3.3.24',
                        payment_type: 'cash',
                        cargo_address: 'Azerbaijan',
                        products: [
                                 {
                                                id: '12345',
                                                title: 'Mac',
                                                url: 'https://kontakt.az/mac15',
                                                price: '3300'
                                 },
                                 {
                                                id: '54321',
                                                title: 'Asus',
                                                url: 'https://kontakt.az/asustuf',
                                                price: '3100'
                                 }
                        ],
                        customer_id: '1249',
                        seller: {
                                        id: '9421',
                                        name: 'Kontakt Home'
                        }
        }
]
for(let order of orders){
        let kargo = 0
        for(let product of order.products){
                kargo += product.price * 0.15 
        }
        console.log('Toplam kargo: ', kargo)
}



// Task 2
console.log('Her bir ededin kvadrati: ')
let number = [1, 5, 6, 8, 15, 20, 4];
for(i = 0; i < number.length; i++){
        console.log(Math.pow(number[i], 2))
}
console.log('Cut ededler: ')
for(i = 0; i < number.length; i++){
        if(number[i]%2==0) console.log(number[i])
}
console.log('3-e bolunenlerin cemi: ')
sum=0
for(i = 0; i < number.length; i++) {
        if(number[i]%3==0) sum+=number[i];
}
console.log(sum)



// Task 3
let fruits = ['alma', 'armud', 'banan', 'çiyələk'];
for(let fruit of fruits){
        console.log(fruit.toUpperCase())
}
count=0
for(let fruit of fruits){
        if(fruit.includes('a')) count++;
}
console.log(count)



// Task 4
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
		surname: "İsmayilov",
		scores: [78, 81, 94]
	}
]
for(let student of students){
        let sum=0
        for(let score of student.scores){
             sum += score  
        }
        if(sum / student.scores.length >= 60 && sum / student.scores.length < 70) console.log(`${student.name} ${student.surname}: normal`)
        else if(sum / student.scores.length >= 70 && sum / student.scores.length < 80) console.log(`${student.name} ${student.surname}: yaxsi`)
        else if(sum / student.scores.length >= 80 && sum / student.scores.length < 90) console.log(`${student.name} ${student.surname}: ela`)
        else console.log(`${student.name} ${student.surname}: qeyri-kafi`)
}
