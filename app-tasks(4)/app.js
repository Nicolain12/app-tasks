let fileTasks = require('./function/function');
 action = process.argv[2];

switch (action){
    case 'list':
        console.log('Task list:');
        console.log('-------------------');
       let readedTasks = fileTasks.reedFile()
      readedTasks.forEach((task, i )=>console.log(`${i + 1}. ${task.title} - ${task.status}`))
        console.log('-------------------');
    break;
    case "remove":
        fileTasks.removeTask(process.argv[3])
    break;
    case "create":
        let newTask = {title:process.argv[3], status: process.argv[4]}
        fileTasks.saveTask(newTask)
    break;
    case "filter":
        let filterByStatus = fileTasks.filterByStatus(process.argv[3])
        filterByStatus.forEach((value, index)=>console.log(`${index + 1}. ${value.title} - ${value.status}`))
    break;
    case undefined:
        console.log("----------------------------------------");
        console.log("Warning - You have to pass an action.");
        console.log("The available actions are: list - remove - create - filter");
        console.log("----------------------------------------");
    break;
  default:
        console.log("----------------------------------------");
        console.log("I don't understand what you want to do.");
        console.log("The available actions are: list - remove - create - filter");
        console.log("----------------------------------------");
    break;
    }
