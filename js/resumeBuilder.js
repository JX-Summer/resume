var formattedName = HTMLheaderName.replace("%data%","Junyi Xiao");
$("#header").append(formattedName);
var formattedrole = HTMLheaderRole.replace("%data%","Web Developer");
$("#header").append(formattedrole);

var bio = {
	"name" : "Junyi Xiao",
	"role" : "Web Developer",
	"contacts" : {
		"mobile" : "215-531-3046",
		"email" : "jx44@drexel.edu",
		"location": "Wuhan,China"
	},
	"address": "4304 Walnut St. Philadelphia, PA 19104",
	"skills" : ["C++","Java","Javascript"]
};

var education = {
	"schools": [
	{
		"name": "Drexel University",
		"location": "Philadelphia, PA",
		"degree": "BS",
		"major": ["Mathematics"],
		"minors": ["Computer Science  ","International Economics"],
		"dates": "2010-2014"
	}
	],
	"onlineCourses": [
	{
		"title": "JavaScript Basics",
		"school": "Udacity",
		"date": "2014"
	}
	]
};

var work = {
	"jobs" : [
	{
		"employer" : "Jena University Hospital Medical Physics Group",
		"title": "Research Intern",
		"location": "Jena,Germany",
		"dates": "June,2014 - September, 2014",
		"description": "1. Investigating the clinical potential of QSM by analyzing patient data<br>2. Elucidating the biophysical origin of magnetic susceptibility variations in the human brain based on post mortem data<br>3. Implementation and evaluation of novel algorithms of methodical improvements of QSM in MATLAB in cooperation with members of the team"
	},
	{
		"employer" : "Drexel University Math Department ",
		"title": "Research Assistant",
		"location": "Philadelphia,PA",
		"dates": "May,2012 - August, 2012",
		"description": "1. Explored the impact of connectivity patterns (small world networks) on coupled Kuramoto oscillators implemented by MATLAB<br>2. Formulated analysis functions, set up numerical experiments and performed computer simulations, put results into weekly report"
	},
	{
		"employer" : "Greentree Brokerage Servie, Inc",
		"title": "Research Assistant",
		"location": "Philadelphia,PA",
		"dates": "April,2012 - May, 2012",
		"description": "Developed a dynamic database for Russell 3000 which can automatically obtain the stock data for 3000 companies on daily basis from Yahoo finance by MS Excel(VBA)."
	}
	]
};

var projects ={
	"projects": [
	{
		"description": "Design User Interface(HTML CSS Javascript) for an web application which used for school to raise funding",
		"title": "Hackathon project" 
	},
	{
		"description": " Designed and implemented a generic survey/test system that allowed survey/test to be entered, modified, stored, loaded, taken and tabulated/graded implemented by Java",
		"title" : "Software Design course project"
	},
	{
		"description" : "Implemented Sliding Puzzle (n-puzzle) AI using A* algorithm by C++",
		"title" : "Data Structure & Algorithm course project"
	}
	]
};

if (bio.skills.length>0){
	$("#header").append(HTMLskillsStart);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill =HTMLskills.replace("%data%",bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill =HTMLskills.replace("%data%",bio.skills[2]);
	$("#skills").append(formattedSkill);
}
function displayWork(){
	for (job in work.jobs){
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);
		var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);
		var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
		$(".work-entry:last").append(formattedLocation);
		var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
};
displayWork();
function locationizer(work_obj){
	var locationArray =[];
	for (job in work_obj.jobs){
		var newLocation = work_obj.jobs[job].location;
		locationArray.push(newLocation);
	}
	return locationArray;
}
console.log(locationizer(work));

function inName(name){
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase()+ name[0].slice(1).toLowerCase();
	return name[0] + " " + name[1];
}
$('#main').append(internationalizeButton);

projects.display = function(){
	for (project in projects.projects){
		$("#projects").append(HTMLprojectStart);
		var formattedTitle =HTMLprojectTitle.replace("%data%",projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);
		var formattedDescription =HTMLprojectDescription.replace("%data%",projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);
	}
}
projects.display();
$("#mapDiv").append(googleMap);

education.display = function(){
	for (school in education.schools){
		$("#education").append(HTMLschoolStart);
		var formattedName =HTMLschoolName.replace("%data%",education.schools[school].name);
		$(".education-entry:last").append(formattedName);
		//var formattedDegree =HTMLschoolDegree.replace("%data%",education.schools[school].degree);
		//$(".education-entry:last").append(formattedDegree);
		var formattedDates =HTMLschoolDates.replace("%data%",education.schools[school].dates);
		$(".education-entry:last").append(formattedDates);
		var formattedLocation =HTMLschoolLocation.replace("%data%",education.schools[school].location);
		$(".education-entry:last").append(formattedLocation);
		var formattedMajor =HTMLschoolMajor.replace("%data%",education.schools[school].major);
		$(".education-entry:last").append(formattedMajor);
		var formattedMinor =HTMLschoolMinor.replace("%data%",education.schools[school].minors);
		$(".education-entry:last").append(formattedMinor);
		$(".education-entry:last").append(HTMLonlineClasses);
	}
	for (course in education.onlineCourses){
		var formattedTitle =HTMLonlineTitle.replace("%data%",education.onlineCourses[course].title);
		$(".education-entry:last").append(formattedTitle);
		var formattedSchool =HTMLonlineSchool.replace("%data%",education.onlineCourses[course].school);
		$(".education-entry:last").append(formattedSchool);
	}
}
education.display();