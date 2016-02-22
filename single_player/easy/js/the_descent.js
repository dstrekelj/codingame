for (;;) {
    var inputs = readline().split(' '),
        SX = +inputs[0],    // Current ship X position
        SY = +inputs[1],    // Current ship Y position
        M = [],     // Array of mountain heights
        MH = 0,     // Mountain height
        MHmax = 0;  // Tallest mountain (maximum mountain height)

    // Find tallest mountain in game
    for (var i = 0; i < 8; i++) {
        MH = +readline();
        if (MHmax < MH) MHmax = MH;
        M.push(MH);
    }

    // If passing over tallest mountain, target it
    print((MHmax === M[SX]) ? 'FIRE' : 'HOLD');
}
