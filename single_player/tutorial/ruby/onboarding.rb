STDOUT.sync = true # DO NOT REMOVE
# CodinGame planet is being attacked by slimy insectoid aliens.


# game loop
loop do
    $enemy1 = gets.chomp # name of enemy 1
    $dist1 = gets.to_i # distance to enemy 1
    $enemy2 = gets.chomp # name of enemy 2
    $dist2 = gets.to_i # distance to enemy 2
    
    # Write an action using puts
    # To debug: STDERR.puts "Debug messages..."
    
    puts ($dist2 > $dist1) ? $enemy1 : $enemy2
end