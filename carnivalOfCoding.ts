/**
 * Carnival of Coding blocks
 * URL of Github repo
 * URL of SO workshop listing on website
 */

//% weight=100 color=#0fbc11 icon="\u263A"
namespace carnivalOfCoding {
    /**
     * control the state of the red LED - on or off
     * @param state describe parameter here, eg: 0
     */
    //% block
    //% state.defl=0
    //% state.min=0 state.max=1
    export function red(state: number) {
        pins.digitalWritePin(DigitalPin.P1, state)
    }

    /**
     * control the state of the amber LED - on or off
     * @param state describe parameter here, eg: 0
     */
    //% block
    //% state.defl=0
    //% state.min=0 state.max=1
    export function amber(state: number) {
        pins.digitalWritePin(DigitalPin.P2, state)
    }

    /**
     * control the state of the green LED - on or off
     * @param state describe parameter here, eg: 0
     */
    //% block
    //% state.defl=0
    //% state.min=0 state.max=1
    export function green(state: number) {
        pins.digitalWritePin(DigitalPin.P8, state)
    }
}