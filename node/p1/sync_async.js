function printMessage() {
    for (let index = 0; index < 1e9; index++) { 
    }
    console.log("p1");    
    return "Hello";
}



function syncTask() {
    str = "\nStart\n";
    str += "SyncTask\n"
    str += "End\n";
    console.log("p2");
    return str;
}

async function asyncTask(){
    str = "\nStart\n";
    await new Promise((resolve) => {
        setTimeout(() => {
        str += "Async Task\n"; // now this runs before resolve
        resolve();
    }, 2000);
  });
    str += "End\n";
    console.log("p3");
    return str;
}

module.exports = {
    printMessage: printMessage,
    syncTask: syncTask,
    asyncTask: asyncTask 
};

