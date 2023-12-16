const exp = require("express");

const app=exp();


app.get("/",(req,res)=>{
    res.send("Home Page!")
})


app.get("/users",(req,res)=>{
    let result= [
  { id: 1, name: 'Alice', age: 25, email: 'alice@example.com' },
  { id: 2, name: 'Bob', age: 30, email: 'bob@example.com' },
  { id: 3, name: 'Charlie', age: 28, email: 'charlie@example.com' },
  { id: 4, name: 'David', age: 22, email: 'david@example.com' },
  { id: 5, name: 'Eva', age: 27, email: 'eva@example.com' },
  { id: 6, name: 'Frank', age: 35, email: 'frank@example.com' },
  { id: 7, name: 'Grace', age: 29, email: 'grace@example.com' },
  { id: 8, name: 'Hannah', age: 31, email: 'hannah@example.com' },
  { id: 9, name: 'Isaac', age: 26, email: 'isaac@example.com' },
  { id: 10, name: 'Julia', age: 24, email: 'julia@example.com' }
];

    res.json(result)

})


app.get("/users/:id",(req,res)=>{
    let result= [
  { id: 1, name: 'Alice', age: 25, email: 'alice@example.com' },
  { id: 2, name: 'Bob', age: 30, email: 'bob@example.com' },
  { id: 3, name: 'Charlie', age: 28, email: 'charlie@example.com' },
  { id: 4, name: 'David', age: 22, email: 'david@example.com' },
  { id: 5, name: 'Eva', age: 27, email: 'eva@example.com' },
  { id: 6, name: 'Frank', age: 35, email: 'frank@example.com' },
  { id: 7, name: 'Grace', age: 29, email: 'grace@example.com' },
  { id: 8, name: 'Hannah', age: 31, email: 'hannah@example.com' },
  { id: 9, name: 'Isaac', age: 26, email: 'isaac@example.com' },
  { id: 10, name: 'Julia', age: 24, email: 'julia@example.com' }
];
    result=result?.filter(e=>e.id==req.params.id)
    res.json(result)

})

app.listen("3000",()=>{
    console.log("app is running on 300000000")
})