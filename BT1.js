// Mảng để lưu trữ danh sách công việc
let tasks = [];

// Hàm thêm công việc
function addTask(taskName) {
    tasks.push({ name: taskName, completed: false });
    console.log(`Đã thêm công việc: ${taskName}`);
}

// Hàm hiển thị danh sách công việc
function showTasks() {
    if (tasks.length === 0) {
        console.log("Không có công việc nào.");
    } else {
        console.log("Danh sách công việc:");
        tasks.forEach((task, index) => {
            console.log(`${index + 1}. ${task.name} [${task.completed ? 'Hoàn thành' : 'Chưa hoàn thành'}]`);
        });
    }
}

// Hàm sửa công việc
function editTask(index, newTaskName) {
    if (index >= 0 && index < tasks.length) {
        tasks[index].name = newTaskName;
        console.log(`Đã sửa công việc thành: ${newTaskName}`);
    } else {
        console.log("Không tìm thấy công việc.");
    }
}

// Hàm xoá công việc
function deleteTask(index) {
    if (index >= 0 && index < tasks.length) {
        const deletedTask = tasks.splice(index, 1);
        console.log(`Đã xoá công việc: ${deletedTask[0].name}`);
    } else {
        console.log("Không tìm thấy công việc.");
    }
}

// Hàm đánh dấu công việc đã hoàn thành
function completeTask(index) {
    if (index >= 0 && index < tasks.length) {
        tasks[index].completed = true;
        console.log(`Đã đánh dấu công việc "${tasks[index].name}" là hoàn thành.`);
    } else {
        console.log("Không tìm thấy công việc.");
    }
}

// Ví dụ sử dụng các hàm
addTask("Làm bài tập JavaScript");
addTask("Đọc sách");
addTask("Đi chơi với bạn bè");

showTasks();

editTask(1, "Đọc sách về AI");
showTasks();

completeTask(0);
showTasks();

deleteTask(2);
showTasks();