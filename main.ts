input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 4; index++) {
        led.toggle(0, 2)
        led.toggle(4, 2)
        basic.pause(100)
        led.toggle(0, 3)
        led.toggle(4, 3)
    }
})
input.onGesture(Gesture.FreeFall, function () {
    for (let index = 0; index < 2; index++) {
        basic.showIcon(IconNames.Heart)
        basic.pause(100)
        basic.showIcon(IconNames.SmallHeart)
    }
    basic.showLeds(`
        . # . # .
        . . # . .
        . . . . .
        . # # # .
        . . . . .
        `)
    for (let index = 0; index < 4; index++) {
        led.toggle(0, 4)
        led.toggle(4, 4)
        basic.pause(100)
        led.toggle(0, 3)
        led.toggle(4, 3)
    }
})
led.plot(1, 0)
led.plot(3, 0)
led.plot(2, 1)
led.plot(1, 3)
led.plot(2, 3)
led.plot(3, 3)
