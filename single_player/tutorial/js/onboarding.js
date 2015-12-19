for(;;) {
    var enemy1 = readline(),    // First enemy name
        dist1 = +readline(),    // First enemy distance from player
        enemy2 = readline(),    // Second enemy name
        dist2 = +readline();    // Second enemy distance from player

    // Figure out which of the two enemies is closest to player and target them
    print((dist1 < dist2) ? enemy1 : enemy2);
}