---
---

# Vanilla JavaScript To-Do App

## Project Overview

This is a simple, lightweight To-Do application built using vanilla JavaScript, HTML, and CSS. The app allows users to add, edit, and delete tasks. Tasks are saved to the browser's local storage, so they persist across page reloads.

## Features

1. **Add Tasks**  
   - Users can enter a new task in an input field.
   - Tasks are displayed in a list below the input.

2. **Edit Tasks**  
   - Users can edit existing tasks by selecting an edit option.
   - The changes are saved immediately and stored in local storage.

3. **Delete Tasks**  
   - Users can remove tasks from the list.
   - Deleted tasks are removed from local storage as well.

4. **Save Tasks in Local Storage**  
   - Tasks persist between sessions using `localStorage`.
   - When a user adds, edits, or deletes a task, local storage is updated automatically.

5. **Mark Tasks as Complete** (optional)  
   - Users can mark tasks as completed to help keep track of progress.
   - Completed tasks are displayed with a different style to distinguish them from active tasks.

## Technology Stack

- **JavaScript**: Core functionality, such as adding, updating, and deleting tasks, as well as managing local storage.
- **HTML**: Structure of the application.
- **CSS**: Basic styling for UI elements.

## Folder Structure

```
📦todo-app
 ┣ 📂css
 ┃ ┗ 📜styles.css       # Styles for the app
 ┣ 📂js
 ┃ ┗ 📜app.js           # Main JavaScript file with core functionality
 ┣ 📜index.html         # Main HTML file
 ┗ 📜README.md          # Project documentation
```

## Functionality Outline

1. **Adding a Task**: A function to get user input from an input field and add it as a new task.
2. **Editing a Task**: A function to edit an existing task, updating the task in both the list and local storage.
3. **Deleting a Task**: A function to remove a task from both the list and local storage.
4. **Saving to Local Storage**: Functions to update `localStorage` when tasks are added, edited, or deleted.
5. **Loading from Local Storage**: Function to retrieve tasks from local storage and render them upon page load.

## Getting Started

1. Clone the repository.
2. Open `index.html` in a browser.
3. Use the app to manage your tasks.

## Future Enhancements

- Add filtering options (e.g., view all, completed, or pending tasks).
- Implement drag-and-drop functionality for reordering tasks.
- Add due dates and sorting by date.

---
---
