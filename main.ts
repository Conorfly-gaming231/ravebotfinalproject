let sonar = 0
cuteBot.forward()
let strip = neopixel.create(DigitalPin.P15, 2, NeoPixelMode.RGB)
basic.showLeds(`
    # # # # #
    # . # . #
    # # # # #
    . # # # .
    # . . . #
    `)
basic.forever(function () {
    cuteBot.colorLight(cuteBot.RGBLights.ALL, 0xff0000)
    basic.pause(100)
    cuteBot.colorLight(cuteBot.RGBLights.ALL, 0xff8000)
    basic.pause(100)
    cuteBot.colorLight(cuteBot.RGBLights.ALL, 0xffff00)
    basic.pause(100)
    cuteBot.colorLight(cuteBot.RGBLights.ALL, 0xff9da5)
    basic.pause(100)
    cuteBot.colorLight(cuteBot.RGBLights.ALL, 0x00ff00)
    basic.pause(100)
})
basic.forever(function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    basic.pause(100)
    strip.showColor(neopixel.colors(NeoPixelColors.Orange))
    basic.pause(100)
    strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
    basic.pause(100)
    strip.showColor(neopixel.colors(NeoPixelColors.Violet))
    basic.pause(100)
    strip.showColor(neopixel.colors(NeoPixelColors.Green))
    basic.pause(100)
})
basic.forever(function () {
    sonar = cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters)
    if (sonar > 2 && sonar < 15) {
        cuteBot.motors(0, 0)
        basic.pause(500)
        cuteBot.motors(100, 0)
        basic.pause(1000)
        cuteBot.motors(100, 100)
    } else {
        cuteBot.forward()
    }
})
