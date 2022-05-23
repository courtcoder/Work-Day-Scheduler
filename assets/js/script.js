const todayDate = moment().format("dddd MMM Do YYYY"); //current date
function dateBlock() {
  var dateBlockNow = document.querySelector("#currentDay");
  dateBlockNow.textContent = todayDate;
}
dateBlock();

var currentHour = moment().hour();
function relativeTime() {
  for (var i = 1; i < 10; i++) {
    var ii = i + 8;
    if (currentHour > ii) {
      $("#hour" + i).addClass("past");
    } else if (currentHour === ii) {
      $("#hour" + i).addClass("present");
    } else {
      $("#hour" + i).addClass("future");
    }
  }
}
relativeTime();

console.log(currentHour);
console.log(todayDate);

var taskInfoEmpty = ["", "", "", "", "", "", "", "", ""];
var taskInfo;
var lsTaskInfo = JSON.parse(localStorage.getItem("taskInfo"));
if (lsTaskInfo) {
  taskInfo = lsTaskInfo;
} else {
  taskInfo = taskInfoEmpty;
}
console.log(taskInfo);

//function to populate task cells
function populateTasks() {
  for (var i = 0; i < taskInfo.length; i++) {
    var ii = i + 1;
    if (taskInfo[i]) {
      $("#hour" + ii).val(taskInfo[i]);
    } else {
      $("#hour" + ii).val("");
    }
  }
}
populateTasks();

var timeBlock = document.querySelector(".time-block");
var inputs;

timeBlock.addEventListener("input", function (event) {
  inputs = { [event.target.id]: event.target.value };
});

function saveTasks() {
  for (var i = 0; i < taskInfo.length; i++) {
    var ii = i + 1;
    //add input to task info
    var taskInfoEntry = document.querySelector("#hour" + ii).value;
    console.log(taskInfoEntry);
    if (taskInfoEntry) {
      taskInfo[i] = taskInfoEntry;
    } else {
      taskInfo[i] = "";
    }
    console.log(taskInfo);
  }
  localStorage.setItem("taskInfo", JSON.stringify(taskInfo));
}

var saveBtnX = document.querySelector(".saveBtn1");
saveBtnX.addEventListener("click", saveTasks);

function clearSchedule() {
  if (
    confirm("Current tasks will be deleted; Proceed with 'Clear Schedule'?")
  ) {
    localStorage.clear();
    location.reload();
  }
}

var clearButton = document.querySelector("#clearBtn");
clearButton.addEventListener("click", clearSchedule);
