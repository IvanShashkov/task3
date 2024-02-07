const RandomCryptoKey = require('./classes/RandomCryptoKey')
const Game = require('./classes/Game')
const Rules = require('./classes/Rules')

const moves = process.argv.splice(2)
const randomKey = RandomCryptoKey.get()

const game = new Game(moves, randomKey)
const rules = new Rules(moves)

rules.validateMoves()
game.play()


