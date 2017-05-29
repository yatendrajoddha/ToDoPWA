$(document).ready(function () {

    var todoList = function () {

        var $notepad = $('.notepad'),
            $todoList = $('.notepad__list'),
            $todoListItem = $('.notepad__list-item'),
            $todoForm = $('.notepad__form'),
            $todoFormInput = $('.notepad__form-input'),
            $clearList = $('.notepad__clear'),
            clearListDisplay = 'notepad__clear--display',
            noteCount = 0;

        function displayTodo() {
            for (noteCount = 0; noteCount < localStorage.length; noteCount++) {
                var noteID = 'task-' + noteCount;

                // Build ToDo list
                $todoList.append("<li class='notepad__list-item' id='" + noteID + "'>" + localStorage.getItem(noteID) + "</li>");

                // Show reset button
                $clearList.addClass(clearListDisplay);
            }
        }

        function storeTodo() {
            if ($todoFormInput.val() !== '') {
                var noteID = 'task-' + noteCount,
                    task = $('#' + noteID),
                    taskMessage = $todoFormInput.val();

                localStorage.setItem(noteID, taskMessage);

                // Add to ToDo list
                $todoList.append("<li class='notepad__list-item' id='" + noteID + "'>" + taskMessage + "</li>");

                // Display reset button
                if (!$clearList.hasClass(clearListDisplay)) {
                    $clearList.addClass(clearListDisplay);
                }

                // Reset
                $todoFormInput.val('');
                noteCount++;
            }
        }

        function clearTodo() {

            // Update DOM
            $todoList.empty();
            $clearList.removeClass(clearListDisplay);

            // Clear storage
            localStorage.clear();
            noteCount = 0;
        }

        function bindEvents() {

            // Show any existing ToDo from localStorage
            displayTodo();

            // Create new ToDo
            $todoForm.on('submit', function () {
                storeTodo();
                return false;
            });

            // Reset ToDo
            $clearList.on('click', function () {
                clearTodo();
            });
        }

        bindEvents();
    };

    todoList();
});
