let fs = require('fs');

function test_and_load(filename) {
    var promise = new process.Promise();
    fs.stat(filename).addCallback(function (stat){

        //FIlter out non-files
        if (!stat.isFile()){promise.emitSuccess();return;}

        // Otherwise read the file in 
        fs.readFile(filename).addCallback(function(data) {
            promise.emitSuccess(data); }).addErrback(function (error) {
                promise.emitError(error); 
            });

    }).addErrback(function (error) { 
    promise.emitError(error);
});
    
return promise; 
}