const arr = [10,20,30,40,50]

arr.filter((item)=>{
    console.log(item)
})

const result1 = arr.filter((item)=>{
    return item>30
})


const result2 = arr.filter((item)=>{
    return item===50
})

console.log(result1)
console.log(result2)
console.log(result1,result2)