const crypto = require("crypto")
const { builtinModules } = require("module")
//const { builtinModules } = require("module")
const algorithm ="aes-256-cbc"
const initVector =crypto.randomBytes(16)
const message ="hello world"
const Securitykey = crypto.randomBytes(32)
const cipher = crypto.createCipheriv(algorithm, Securitykey, initVector)
let encryptedData = cipher.update(message, "utf-8", "hex")
encryptedData += cipher.final("hex")
console.log("Encrypted message: " + encryptedData)

exports.encryptedData=encryptedData
exports.Securitykey =Securitykey
exports.algorithm=algorithm
exports.initVector=initVector