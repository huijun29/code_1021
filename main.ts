for (let y = 0; y <= 4; y++) {
    for (let x = 0; x <= 4; x++) {
        if (x % 2 != y % 2) {
            led.plot(x, y)
            basic.pause(100)
        }
    }
}
