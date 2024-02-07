const crypto = require('crypto')
class GenerateHMACKey {
    constructor(randomCryptoKey, computerMove) {
        this.randomCryptoKey = randomCryptoKey
        this.computerMove = computerMove
    }
    generateHMAC() {
        return crypto.createHash('sha3-256').update(this.randomCryptoKey + this.computerMove).digest('hex')
    }
}
module.exports = GenerateHMACKey