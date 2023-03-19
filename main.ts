input.onButtonPressed(Button.A, function () {
    basic.showString("recovery")
    robotbit.Servo(robotbit.Servos.S1, 0)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.EigthNote)
    for (let index = 0; index < 2; index++) {
        robotbit.Servo(robotbit.Servos.S1, 0)
        robotbit.Servo(robotbit.Servos.S1, 90)
        robotbit.Servo(robotbit.Servos.S1, 0)
    }
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showString("new location")
    robotbit.Servo(robotbit.Servos.S1, 90)
    basic.clearScreen()
})
basic.showIcon(IconNames.No)
basic.showLeds(`
    . # # . .
    # . . # .
    . . . # .
    . . # . .
    . . # . .
    `)
basic.showLeds(`
    # . . . #
    . # . # .
    . . . . .
    . # # # .
    # . . . #
    `)
basic.showIcon(IconNames.Yes)
basic.showIcon(IconNames.Happy)
basic.showString("Welcome")
basic.clearScreen()
basic.forever(function () {
	
})
