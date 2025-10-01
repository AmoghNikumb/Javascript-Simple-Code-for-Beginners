let todo = [];
let req = prompt("Enter command (list / add / quit):");

while (req !== "quit") {
    if (req === "list") {
        if (todo.length === 0) {
            console.log("No tasks yet!");
        } else {
            for (let i = 0; i < todo.length; i++) {
                console.log(`${i + 1}. ${todo[i]}`);
            }
        }
    } else if (req === "add") {
        let task = prompt("Enter a task:");
        if (task) {
            todo.push(task);
            console.log("Task added!");
        }
    } else {
        console.log("Unknown command.");
    }

    req = prompt("Enter command (list / add / quit):");
}

console.log("You quit the app.");
