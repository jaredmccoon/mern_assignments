const express = require('express')
const faker = require("faker");
const app = express()
console.log(app)
const port = 8000

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );


class User {
    constructor() {
        this.someId = faker.datatype.number(),
        this.firstName = faker.name.firstName(),
        this.lastName = faker.name.lastName(),
        this.phoneNumber = faker.phone.phoneNumber(),
        this.email = faker.internet.password()
    };
};

class Company {
    constructor() {
        this.someId = faker.datatype.number(),
        this.name = faker.company.companyName(),
        this.address = {
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    };
};

let newUser = new User();

let newCompany = new Company();

app.get("/api/users/new", (req, res)=>{
    res.json(newUser);
})
app.get("/api/companies/new", (req, res)=>{
    res.json(newCompany);
})
app.get("/api/user/company", (req, res)=>{
    res.json({
        user: newUser,
        company: newCompany
    });
});


app.listen( port, () => console.log(`Listening on port: ${port}`) );