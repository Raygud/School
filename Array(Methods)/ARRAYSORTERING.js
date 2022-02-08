Cars = [
    
    
    {Name: "Mercedes", Year: 2010, Door: 5, Seats: 5, price: 105000},
    {Name: "Volvo", Year: 2016, Door: 5, Seats: 7, price: 405000},
    {Name: "BMW", Year: 2014, Door: 3, Seats: 2, price: 375000},
    {Name: "Fiat", Year: 2011, Door: 3, Seats: 5, price: 60000},
    {Name: "Toyota", Year: 2016, Door: 7, Seats: 9, price: 450000},
    {Name: "Citroen", Year: 1999, Door: 5, Seats: 5, price: 12000},
    {Name: "Tesla", Year: 2019, Door: 5, Seats: 5, price: 675000},
    {Name: "Opel", Year: 2010, Door: 3, Seats: 5, price: 45000}


]

NameLength = []

// STIGENDE ALFABETISK SORTERING

console.log("STIGENDE ALFABETISK SORTERING")

Cars.sort(function(a, b){
    a.Name = a.Name.toLowerCase() 
    b.Name = b.Name.toLowerCase() 
if(a.Name < b.Name) { return -1; }
if(a.Name > b.Name) { return 1; }
return 0;
})

console.table(Cars)

console.log("STIGENDE ALFABETISK SORTERING")


//FALDENDE ALFABETISK SORTERING (Reverse a-b = b-a)

console.log("FALDENDE ALFABETISK SORTERING (Reverse a-b = b-a)")

Cars.sort(function(b, a){
    a.Name = a.Name.toLowerCase() 
    b.Name = b.Name.toLowerCase() 
if(a.Name < b.Name) { return -1; }
if(a.Name > b.Name) { return 1; }
return 0;
})

console.table(Cars)

console.log("FALDENDE ALFABETISK SORTERING (Reverse a-b = b-a)")


//STIGENDE NUMERISK SORTERING

console.log("STIGENDE NUMERISK SORTERING")


for (let i = 0; i < Cars.length; i++) {

    NameLength.push({"Name": Cars[i].Name,
"Length": Cars[i].Name.length})
    

}

NameLength.sort(function (a, b) {
    return a.Length - b.Length;
});

console.table(NameLength)

console.log("STIGENDE NUMERISK SORTERING")


//FALDENDE NUMERISK SORTERING (Reverse a-b = b-a)

console.log("FALDENDE NUMERISK SORTERING (Reverse a-b = b-a)")

NameLength.sort(function (b, a) {
    return a.Length - b.Length;
});

console.table(NameLength)

console.log("FALDENDE NUMERISK SORTERING (Reverse a-b = b-a)")


//RANDOM SORTERING

console.log("RANDOM SORTERING")

Cars.sort(function(a, b){return 0.5 - Math.random()});

console.table(Cars)

console.log("RANDOM SORTERING")



//SORTERING AF ARRAYS MED OBJEKTER

//Navn - stigende

console.log("Navn - stigende")

Cars.sort(function(b, a){
    a.Name = a.Name.toLowerCase() 
    b.Name = b.Name.toLowerCase() 
if(a.Name < b.Name) { return -1; }
if(a.Name > b.Name) { return 1; }
return 0;
})

console.table(Cars)

console.log("Navn - stigende")


//Årgang - faldende

console.log("Årgang - faldende")

Cars.sort(function (b, a) {
    return a.Year - b.Year;
});

console.table(Cars)

console.log("Årgang - faldende")


//Døre - stigende

console.log("Døre - stigende")

Cars.sort(function (a, b) {
    return a.Door - b.Door;
});

console.table(Cars)

console.log("Døre - stigende")


//Personer - faldende

console.log("Personer - faldende")

Cars.sort(function (b, a) {
    return a.Seats - b.Seats;
});

console.table(Cars)

console.log("Personer - faldende")


//Pris - stigende og faldende

console.log("Pris - stigende og faldende")

Cars.sort(function (a, b) {
    return a.price - b.price;
});

console.table(Cars)

Cars.sort(function (b, a) {
    return a.price - b.price;
});

console.table(Cars)
console.log("Pris - stigende og faldende")
