input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # . # # #
        # . # . #
        # . # . #
        # . # . #
        # . # # #
        `)
    basic.pause(60000)
    while (!(input.buttonIsPressed(Button.AB))) {
        music.playMelody("- - - - - - - - ", 120)
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
})
let 초 = 0
let 분 = 0
let 시 = 0
control.inBackground(function () {
    while (true) {
        basic.pause(6000)
        if (초 <= 59) {
            초 += 1
        } else if (초 > 59) {
            분 += 1
        }
        if (분 <= 59) {
            분 += 1
        } else if (분 > 59) {
            시 += 1
        }
    }
})
