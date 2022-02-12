const { readFile, writeFile } = require('fs')

readFile('./ayo/first.txt', 'utf-8' , (err, result) => {
    if (err) {
        console.log(err)
        return;
    } 
    const first = result
    readFile('./ayo/second.txt', 'utf-8', (err, result) => {
        if (err) {
            console.log(err)
            return;
        } 
        const second = result
        writeFile('./ayo/result-async.txt', `Here is the result: ${first}, ${second}`, (err, result) => {
            if(err) {
                console.log(err)
                return;
            }
            console.log(result)
        })
    })
})