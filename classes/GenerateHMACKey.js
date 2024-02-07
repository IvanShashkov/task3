const crypto = require('crypto')
class GenerateHMACKey {
    constructor(randomCryptoKey, computerMove) {
        this.randomCryptoKey = randomCryptoKey
        this.computerMove = computerMove
    }
    generateHMAC() {
        return crypto.createHmac('sha3-256', this.randomCryptoKey).update(this.computerMove).digest('hex')
    }
}
module.exports = GenerateHMACKey