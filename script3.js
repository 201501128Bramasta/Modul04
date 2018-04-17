var person = new Object();

person["firtname"]="Augustinus";
person["lastname"]="Bramasta";

var firstNameProperty = "firstname";

console.log(person);
console.log(person[firstNameProperty]);

console.log(person.firtname);
console.log(person.lastname);

person.address =new Object();
person.address.street="Perum. GPA";
person.address.city="Purbalingga";
person.address.state="INDONESIA";

console.log(person.address.street);
console.log(person.address.city);
console.log(person["address"]["state"]);