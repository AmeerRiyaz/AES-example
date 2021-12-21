const data = require('./encrypt')
// const Securitykey =require("./encrypt")
// const initVector =require("./encrypt")
// const algorithm  =require("./encrypt")
const crypto = require("crypto");

// let Securitykey = data.Securitykey
// let algorithm = data.algorithm
// let encryptedData =data.encryptedData
// the decipher function
const decipher = crypto.createDecipheriv(data.algorithm,data.Securitykey,data.initVector);

let decryptedData = decipher.update(data.encryptedData, "hex", "utf-8");

decryptedData += decipher.final("utf8");

console.log("Decrypted message: " + decryptedData);