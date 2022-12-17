//import { AllCourses, courses } from "./data.js";
const AllCourses = [
  ["AI", "101", "760", "90"],
  ["CS", "011", "200", "120"],
  ["MATH", "201", "300", "30"],
  ["DS", "102", "450", "45"],
  ["JS", "123", "230", "95"],
  ["CSS", "321", "230", "95"],
];
const courses = [
  {
    id: 1,
    userName: "mahmoud",
    pass: "111111",
    courses: [
      ["123", "JS", "60", "bishoay"],
      ["321", "CSS", "93", "adel"],
    ],
  },
  {
    id: 2,
    userName: "qtb",
    pass: "222222",
    courses: [
      ["123", "JS", "90", "bishoay"],
      ["321", "CSS", "43", "adel"],
    ],
  },
  {
    id: 2,
    userName: "qtb",
    pass: "222222",
    courses: [
      ["201", "MATH", "52", "anahanan"],
      ["101", "AI", "33", "ghonim"],
      ["102", "DS", "74", "elsaid"],
      ["011", "CS", "90", "marwa"],
    ],
  },
];


let backHome = document.querySelectorAll(".backHome");
backHome.forEach((element) => {
  element.onclick = function () {
    setTimeout(() => {
      window.location = "../index.html";
    }, 1000);
  };
});

let Name = document.querySelector(".name");
let user_name = localStorage.getItem("UserName");
if (user_name !== "") {
  Name.innerHTML = user_name;
}

/* Delete Customer */
let deleteCustomerbtn = document.getElementById("DeleteCustomerBtn"),
  deleteCustomerDom = document.getElementById("delStd"),
  SubmitDeleteCUS = document.querySelector("#submitDeleteCUS"),
  ExitDeleteCUS = document.querySelector("#exitDelStd"),
  customerNameInput = document.getElementById("customerName");

deleteCustomerbtn.addEventListener("click", showDeleteCUS);
SubmitDeleteCUS.addEventListener("click", submitDeleteCUS);
ExitDeleteCUS.addEventListener("click", CloseDeleteCUS);

function showDeleteCUS() {
  deleteCustomerDom.style.display = "block";
}
function submitDeleteCUS(e) {
  e.preventDefault();
  let checkName = false;
  let customerName = customerNameInput.value;
  if (customerName != "") {
    courses.map((arr, i) => {
      if (courses[i]["userName"] === customerName) {
        checkName = true;
        alert(`You have successfully removed ${customerName}`);
        deleteCustomerDom.style.display = "none";
      }
    });
  } else {
    alert("Please Enter Customer Name");
  }
  if (checkName == false && customerName !== "") {
    alert("Invalid Customer Name");
  }
  customerNameInput.value = "";
}
function CloseDeleteCUS(e) {
  e.preventDefault();
  customerNameInput.value = "";
  deleteCustomerDom.style.display = "none";
}

/* Delete Instructor */
let deleteInsbtn = document.getElementById("DeleteInsBtn"),
  deleteInsDom = document.getElementById("delInstr"),
  SubmitDeleteIns = document.querySelector("#submitDeleteIns"),
  ExitDeleteIns = document.querySelector("#exitDelInstr"),
  InsNameInput = document.getElementById("InsName2");

deleteInsbtn.addEventListener("click", showDeleteIns);
SubmitDeleteIns.addEventListener("click", submitDeleteIns);
ExitDeleteIns.addEventListener("click", CloseDeleteIns);

function showDeleteIns() {
  deleteInsDom.style.display = "block";
}
function submitDeleteIns(e) {
  e.preventDefault();
  let checkName = false;
  let InsName = InsNameInput.value;
  if (InsName != "") {
    courses.map((arr, i) => {
      let count2 = courses[i]["courses"];
      for (let j = 0; j < count2.length; j++) {
        if (courses[i]["courses"][j][3] === InsName) {
          window.confirm(`You have successfully removed Dr/${InsName}`);
          checkName = true;
          deleteInsDom.style.display = "none";
        }
      }
    });
  } else {
    alert("Please Enter Instructor Name");
  }
  if (checkName == false && InsName !== "") {
    alert("Invalid Instructor Name");
  }
  InsNameInput.value = "";
}
function CloseDeleteIns(e) {
  e.preventDefault();
  InsNameInput.value = "";
  deleteInsDom.style.display = "none";
}

/* Delete Course */
let deleteCoursebtn = document.getElementById("DeleteCourseBtn"),
  deleteCourseDom = document.getElementById("delcour"),
  SubmitDeleteCourse = document.querySelector("#submitDeleteCourse"),
  ExitDeleteCourse = document.querySelector("#exitDelCour"),
  CourseNameInput = document.getElementById("CourseName"),
  CourseIDInput = document.getElementById("CourseID");

deleteCoursebtn.addEventListener("click", showDeleteCourse);
SubmitDeleteCourse.addEventListener("click", submitDeleteCourse);
ExitDeleteCourse.addEventListener("click", CloseDeleteCourse);

function showDeleteCourse() {
  deleteCourseDom.style.display = "block";
}
function submitDeleteCourse(e) {
  e.preventDefault();
  let check = false;
  let CourseName = CourseNameInput.value;
  let CourseID = CourseIDInput.value;
  if (CourseName != "" && CourseID != "") {
    AllCourses.map((arr, i) => {
      if (AllCourses[i][0] == CourseName && AllCourses[i][1] == CourseID) {
        window.confirm(`You have successfully removed ${CourseName} course`);
        check = true;
        deleteCourseDom.style.display = "none";
      }
    });
  } else {
    alert("Please Enter Course Name and Course ID");
  }
  if (check == false && CourseName !== "" && CourseID != "") {
    alert("Invalid Course Course Name or Course ID");
  }
  CourseNameInput.value = "";
  CourseIDInput.value = "";
}
function CloseDeleteCourse(e) {
  e.preventDefault();
  CourseNameInput.value = "";
  CourseIDInput.value = "";
  deleteCourseDom.style.display = "none";
}

localStorage.setItem("permissionCourse", ["salah", "qtb"]);