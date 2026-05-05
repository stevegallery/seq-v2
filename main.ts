// --- Global Variables ---
let steps = 16
let tempo = 120
let keyFreqs = [262, 294, 330, 349, 392, 440, 494] // C Major Scale
let sequenceData: number[] = [] 
let sequenceType: string[] = [] // "N" for Note, "S" for Sound FX
let isPlaying = false

// --- Setup Mode ---
basic.showString("SET")
// In a full version, you would use tilt/buttons here to set global variables.
// Initializing with a simple 4-step sequence for the demo
for (let i = 0; i < steps; i++) {
    sequenceType.push("N")
        sequenceData.push(keyFreqs[i % 7])
        }

        // --- Playback & Filter Engine ---
        basic.forever(function () {
            if (isPlaying) {
                    for (let currentStep = 0; currentStep < steps; currentStep++) {
                                if (!isPlaying) break;

                                            // Visual feedback on the 5x5 grid
                                                        led.plot(currentStep % 5, currentStep / 5)

                                                                    // Korg-style Resonant Filter Sweep (Light Controlled)
                                                                                // Higher light = Higher cutoff frequency
                                                                                            let lightVal = input.lightLevel()
                                                                                                        let cutoff = Math.map(lightVal, 0, 255, 100, 3000)

                                                                                                                    if (sequenceType[currentStep] == "N") {
                                                                                                                                    // Play Note with Sawtooth + Resonant (Warble) Effect
                                                                                                                                                    music.playSoundEffect(music.createSoundExpression(
                                                                                                                                                                        WaveShape.Sawtooth, cutoff, cutoff + 50, 255, 255, 150,
                                                                                                                                                                                            SoundExpressionEffect.Warble, InterpolationCurve.Linear
                                                                                                                                                                                                            ), SoundExpressionPlayMode.UntilDone)
                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                        // Play a built-in Sound Effect (e.g., Giggle)
                                                                                                                                                                                                                                                        soundExpression.giggle.playUntilDone()
                                                                                                                                                                                                                                                                    }

                                                                                                                                                                                                                                                                                basic.pause(60000 / tempo)
                                                                                                                                                                                                                                                                                            led.unplot(currentStep % 5, currentStep / 5)
                                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                                        })

                                                                                                                                                                                                                                                                                                        // --- Controls ---
                                                                                                                                                                                                                                                                                                        input.onLogoEvent(TouchButtonEvent.Pressed, function () {
                                                                                                                                                                                                                                                                                                            isPlaying = !isPlaying
                                                                                                                                                                                                                                                                                                                if (isPlaying) basic.showIcon(IconNames.SmallSquare)
                                                                                                                                                                                                                                                                                                                    else basic.clearScreen()
                                                                                                                                                                                                                                                                                                                    })
                                                                                                                                                                                                                                                                                                                    
                                                                                                                                                                                                                                                                                                                    u                                                                                                                                                                                                                                                                                                                   })

