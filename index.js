

// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    // Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
    completeTask: function(task) {
      task.complete = true;
    },

    // Print the state of a task to the console in a nice readable way
    logTaskState: function(task) {
      console.log(`${task.title} has${task.complete ? " " : " not "}been completed`);
    }

  };
  return task;
}



// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];

// for now, let's just make sure we see our tasks
task1.logTaskState(task1);
task1.completeTask(task1);
task1.logTaskState(task1);
