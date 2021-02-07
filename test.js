const delay = (x) => {
    return new Promise((resolve) => { setTimeout(resolve, x)})
}

(async () => {
    setTimeout(()=>{console.log(1)}, 100)
    setTimeout(()=>{console.log(2)}, 0)
    await delay(1000)
    console.log(3)
})()
