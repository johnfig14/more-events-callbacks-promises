//1. Discriminate between synchronous and async events and understand the complexity of async:
    //When executing code synchronously, the code waits for the particular process to finish before moving on to the next process. 
    //Asynchonous code will attempt to work on multiple processes, regardless of whether or not a started process has finished. 

//2. Use callbacks to run after a function is completed:
    //Below is an example of a callback running after a function is comeplete:
        function myCallbackTool() {
            alert(this.message);
        };

        var receiver = { message: "The tool is working!"};
        var callback = funcPtrType(myCallbackTool, receiver);


//3. Use promises in place of callbacks:
    //Below is an example of using promises in the place of callbacks:
        function isUserTooYoung(id) {
            return openDatabase(db)
            .then(getCollection)
            .then(find.bind(bull, {'id': id}))
            .then(function(user) {
                return user.age < cutoffAge;
            });
        }