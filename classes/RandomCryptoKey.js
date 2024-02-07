const secureRandom = require('secure-random')
class RandomCryptoKey {
    static get() {
        return secureRandom(32, {type: 'Buffer'}).toString('hex')
    }
}
module.exports = RandomCryptoKey