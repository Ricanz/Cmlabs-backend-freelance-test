const express=require('express')
const router=express.Router()

router.get("/",(req,res)=>{
    let result = []
    let i = 1
    while (i <= 100) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push("FizzBuzz")
        } else if (i % 3 === 0){
            result.push("Fizz")
        } else if (i % 5 === 0){
            result.push("Buzz")
        } else {
            result.push(i)
        }
        i++
    }
    res.status(200).send({
        code: 200,
        status: true,
        result
    })
})
module.exports=router;