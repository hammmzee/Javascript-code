function passwordGenerator() {
    let password = "";
    let generatePassword = '0123456789abcdefghijklmooqrstuvwxyzABCDEFGHIJKLMOPQRSTUVWXYZ!@#$%^()&'
    for (let i = 0; i < 34; i++) {
        password = password + generatePassword[Math.floor(Math.random() * 68)]    
    }
    return password
    
}   

const result = passwordGenerator()
console.log(result)


