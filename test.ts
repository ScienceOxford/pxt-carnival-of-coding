// tests go here; this will not be compiled when this package is used as a library

input.onButtonPressed(Button.A, function () {
    music.beginMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
    basic.showIcon(IconNames.Yes)
    carnivalOfCoding.lights(LED.red, 1)
    carnivalOfCoding.lights(LED.amber, 1)
    carnivalOfCoding.lights(LED.green, 1)
    carnivalOfCoding.motorAdvanced(Motor.A, -300, 1000)
    carnivalOfCoding.motorAdvanced(Motor.B, -300, 1000)
    basic.showIcon(IconNames.Heart)
    carnivalOfCoding.lights(LED.red, 0)
    carnivalOfCoding.lights(LED.amber, 0)
    carnivalOfCoding.lights(LED.green, 0)
    basic.pause(200)
    carnivalOfCoding.motorAdvanced(Motor.AB, 300, 1000)
})

input.onButtonPressed(Button.B, function () {
    carnivalOfCoding.outputDigital(1)
    basic.pause(1000)
    carnivalOfCoding.outputDigital(0)
    basic.pause(1000)
    carnivalOfCoding.outputAnalog(200)
    basic.pause(1000)
    carnivalOfCoding.outputAnalog(0)
})
