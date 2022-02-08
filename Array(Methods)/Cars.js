const Cars = [
"Datsun",
"Mercedes",
"Volvo",
"BMW",
"Fiat",
"Toyota",
"Citroen",
"Tesla",
"Opel"
]

console.log(Cars.toLocaleString())

console.log(Cars.join(" "))

console.log("Brand removed: " +Cars.pop())

console.log("New array values: "+Cars)

Cars.push("Mazda")

console.log("Brand added: " + Cars[Cars.length-1] + " at index " + Cars.indexOf(Cars[Cars.length-1]))

console.log(Cars)

Cars.unshift("Nissan")

console.log("Brand added: " + Cars[Cars.length-Cars.length] + " at index " + Cars.indexOf(Cars[Cars.length-Cars.length]))

console.log(Cars)

Cars.splice(2, 0, "Kia","Seat","Peugeot");

console.log("Brands: Kia, Seat,Peugeot added")

console.log(Cars)

Cars.splice(Cars.indexOf("Fiat"), 1);

console.log("Brand removed: Fiat")

Cars.splice(Cars.indexOf("Peugeot"),Cars.length)

console.log(Cars)
