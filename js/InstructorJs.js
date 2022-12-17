localStorage.setItem("Instructor1",["malek", "omar", "ahmed","mohamed","Ali"]);
allInstr = localStorage.getItem("Instructor1"); 
console.log(allInstr);

/* To Add & Delete materials */
function addNewMaterial(){
	let addMater = document.querySelector(".addMaterial");
	let createRow = document.createElement("tr");
	createRow.className = "removeMate"
	addMater.appendChild(createRow);

	let createTd1 = document.createElement("td");
	createRow.appendChild(createTd1);
	let createTd2 = document.createElement("td");
	createRow.appendChild(createTd2);
	let createTd3 = document.createElement("td");
	createRow.appendChild(createTd3);

	//create input lesson
	let createlesInput = document.createElement("input");
	createlesInput.setAttribute("type","file");
	createTd1.appendChild(createlesInput);
	//create input question
	let createQueiInput = document.createElement("input");
	createQueiInput.setAttribute("type","file");
	createTd2.appendChild(createQueiInput);
	//create input qiuz
	let createTimeInput = document.createElement("input");
	createTimeInput.setAttribute("type","number");
	createTd3.appendChild(createTimeInput);
}
function delMaterial(){
	let lesDel = document.querySelector(".removeMate");
	lesDel.remove();
}

/*Add Courses */
function CreateCourse(){
	document.getElementById("instrCrea").style.display = "block";
}
function exit(){
	document.getElementById("instrCrea").style.display = "none";
}

/*take Attendance*/
function takeAttendance(){
	document.getElementById("take").style.display = "block";
}
function exit1(){
	document.getElementById("take").style.display = "none";
}


/*update courses */
function updateCourse(){
	document.getElementById("che").style.display = "block";
}
$(document).ready(function(){
	$("#updateCourse").click(function(){
		$("#che").hide();
	});
});
function InstructorExisting(){
	document.getElementById("instrFound1").style.display = "none";
}

/*delete courses */
function deleteCourse(){
	document.getElementById("che1").style.display = "block";
}
$(document).ready(function(){
	$("#delCourse").click(function(){
		$("#che1").hide();
	});
});
function InstructorExisting1(){
	document.getElementById("instrFound2").style.display = "none";
}

		/*To check Constructor Exit or Not*/
/*To Update Using Instr */
function toMakeInstrUpdate(){
	let instrName = document.forms["myform1"]["inst"].value;
	console.log(instrName);
	if(allInstr.includes(instrName) && instrName!=""){
		document.getElementById("instrFound1").style.display = "block";
	}
	else
		alert("Instructor In Not Existing");
}
/*To Delete Using Instr */
function toMakeInstrDelete(){
	let instrName = document.forms["myform2"]["inst"].value;
	if(allInstr.includes(instrName) && instrName!=""){
		document.getElementById("instrFound2").style.display = "block";
	}
	else
		alert("Instructor In Not Existing");
}

function showDeleCoursInstr(){
	document.getElementById("showToDel").style.display = "block";
}
$(document).ready(function(){
	$("#delCourse1").click(function(){
		$("#showToDel").hide();
	});
});
