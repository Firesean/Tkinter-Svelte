<!-- +page.svelte -->
<script>
    import { onMount } from 'svelte';
    import { writable } from 'svelte/store';
  
    // Function to get tasks from cookies
    function getTasksFromCookies() {
      if (typeof localStorage !== 'undefined') {
        const savedTasks = JSON.parse(localStorage.getItem('tasks'));
        return savedTasks ? savedTasks : [];
      } else {
        return [];
      }
    }
  
    // Function to save tasks to cookies
    function saveTasksToCookies(tasks) {
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('tasks', JSON.stringify(tasks));
      }
    }
  
    let tasks = writable(getTasksFromCookies());
    let newTask = '';
    let taskIdCounter = 1;
  
    // Save tasks to cookies whenever tasks change
    $: {
      saveTasksToCookies($tasks);
    }

    function generateTaskId() {
        return taskIdCounter++;
    }
  
    // Add task function
    function addTask() {
        if (newTask.trim() !== '') {
            tasks.update(tasks => [...tasks, { id: generateTaskId(), text: newTask, completed: false }]);
            newTask = '';
        }
    }
  
    // Edit task function
    function editTask(id, newText) {
      tasks.update(tasks => tasks.map(task => task.id === id ? { ...task, text: newText } : task));
    }
  
    function toggleCompletion(id) {
      tasks.update(tasks => {
        const updatedTasks = tasks.map(task => {
          if (task.id === id) {
            return { ...task, completed: !task.completed };
          }
          return task;
        });
        return updatedTasks;
      });
    }

    // Delete task function
    function deleteTask(id) {
      tasks.update(tasks => tasks.filter(task => task.id !== id));
    }

</script>
  
<style>
    /* styles.css */
    .todo-list {
        font-family: Arial, sans-serif;
        min-width: 400px;
        margin: 0 auto;
        padding: 20px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    h1 {
        font-size: 24px;
        margin-bottom: 20px;
        text-align: center;
    }

    input[type="text"] {
        width: calc(100% - 40px);
        padding: 8px;
        border: 1px solid #ccc;
    }

    button {
        background-color: #007bff;
        color: #fff;
        border: none;
        cursor: pointer;
    }

    button:hover {
        background-color: #0056b3;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        margin-bottom: 10px;
        display: flex;
        align-items: center;
    }

    .completed {
        text-decoration: line-through;
        color: #aaa;
    }

    input[type="checkbox"] {
        margin-right: 10px;
    }

    input[type="text"] {
        flex: 1;
    }

    button.delete {
        background-color: #dc3545;
    }

    button.delete:hover {
        background-color: #bd2130;
    }
</style>
  
<div class="todo-list w-full bg-slate-200">
    <div class="w-[80%] m-auto bg-white h-full border-[1px] border-black rounded-md p-4">
        <h1>Todo List</h1>

        <div class="grid grid-cols-2 gap-8 w-[70%] mx-auto">
            <input class="rounded-md min-w-[100px] w-[100%]" type="text" placeholder="Add a new task" bind:value={newTask} on:keydown={(e) => e.key === 'Enter' && addTask()} />
            <button on:click={addTask} class="rounded-md p-2 w-[100%]">Add Task</button>
        </div>

        <ul>
          {#each $tasks as task}
            <li class="mt-4 m-auto border-[1px] p-4 border-slate-300 rounded-md {task.completed ? 'completed' : ''}">
              <div class="min-w-[200px] grid grid-cols-3 gap-2 w-full">
                <input type="checkbox" checked={task.completed} on:click={() => toggleCompletion(task.id)} />
                <input class="rounded-md min-w-[80px] m-auto" type="text" value={task.text} on:input={(e) => editTask(task.id, e.target.value)} />
                <button on:click={() => deleteTask(task.id)} class="delete rounded-md p-2 m-auto">Delete</button>
              </div>
            </li>
          {/each}
        </ul>
        
    </div>
</div>