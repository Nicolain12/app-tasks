const fs = require('fs');

let fileTasks = {
    file : 'tasks.json',
    reedFile: function(){
    let tasks = fs.readFileSync('tasks.json', 'utf-8');
    return JSON.parse(tasks);
    },
    writeJSON: function(array){
      let strinTasks = JSON.stringify(array)
       fs.writeFileSync(this.file, strinTasks);
    },
    saveTask: function(objet){
        let tasks = this.reedFile();
        tasks.push(objet);
       fileTasks.writeJSON(tasks)
    },
    filterByStatus: function (status){
        let tasks = this.reedFile()
        let filteredTasks = tasks.filter(x=> x.status == status)
        return filteredTasks
    },
    removeTask: function(name){
        let tasks = this.reedFile()
        let newTasks = tasks.filter(value=>value.title != name)
        fileTasks.writeJSON(newTasks)
        
    }
}
    
    module.exports = fileTasks;