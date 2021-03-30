input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 99999999999999; index++) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
        basic.pause(500)
        basic.clearScreen()
        basic.pause(2000)
        basic.showLeds(`
            # # . # #
            . # . # .
            # # . # #
            . . . . .
            . # # # .
            `)
        basic.pause(500)
        basic.clearScreen()
        basic.pause(2000)
        basic.showLeds(`
            # # . # #
            . . . . .
            # # # # #
            . . # . #
            . . # # #
            `)
        basic.pause(500)
        basic.clearScreen()
        basic.pause(2000)
        music.playMelody("E B C5 A B G A F ", 120)
    }
})
