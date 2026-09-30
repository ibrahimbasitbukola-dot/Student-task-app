function createTask(task) { return { ...task, id: makeId('task'), status: 'pending' }; }
function deleteTask(taskId) { updateUserData(data => ({ ...data, tasks: data.tasks.filter(task => task.id !== taskId) })); }
