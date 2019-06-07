process.stdin.resume();

process.stdin.on('data', function(chunk){
    process.stdout.write('data: ' + chunk);
});

// Run the application using Node, and then start typing into the terminal. Every time you type something and press Enter, what you typed is reflected back to you.