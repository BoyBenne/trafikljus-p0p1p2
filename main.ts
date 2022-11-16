let Ljud = 0
basic.showLeds(`
    # . . . #
    . # . # .
    . . # . .
    . # . # .
    # . . . #
    `)
basic.forever(function () {
    while (0 == Ljud) {
        music.playMelody("- - - C - - - - ", 650)
    }
})
