/*
 This is empty on purpose! Your code to build the resume will go here.
 */
// $("#main").append("fishbox");
// var formattedName=HTMLheaderName.replace("%data%","Shirley Yang");
// var formattedRole=HTMLheaderRole.replace("%data%","FrontEnd Enjineer");
// $("#header").append(formattedName);
// $("#header").append(formattedRole);
var bio = {
    "name": "Shirley Yang",
    "rol": "FrontEnd Enjineer",
    "contacts": {
        "mobile": "17717870024",
        "email": "yang986357429@gmail.com",
        "github": "minifishbox",
        "githublink": "https://github.com/minifishbox",
        "location": "Shanghai",
    },
    "welcomeMessage": "Learn from yesterday, live for today, hope for tomorrow.",
    "skills": ["CSS", "HTML", "JS", "jQuery"],
    "bioPic": "images/fry.jpg"
};
var formattedName = HTMLheaderName.replace("%data%", bio.name),
    formattedRole = HTMLheaderRole.replace("%data%", bio.rol),
    formattedphoto = HTMLbioPic.replace("%data%", bio.bioPic),
    formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage),
    formattedgithub = HTMLgithub.replace("%data%", bio.contacts.githublink),
    formattedemail = HTMLemail.replace("%data%", bio.contacts.email),
    formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
// contacts
$("#topContacts").append(formattedlocation);
$("#topContacts").append(formattedgithub);
$("#topContacts").append(formattedemail);
$("#header").append(formattedwelcomeMsg);
$("#header").append(formattedphoto);
// skills
if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    // for (skill in bio.skills) {
    //     if (bio.skills.hasOwnProperty(skill)) {
    //         formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
    //         $("#skills").append(formattedSkill);
    //     }
    // }
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
    $("#skills").append(formattedSkill);
}

var work = {
    "jobs": [
        {
            "employer": "International Bank",
            "title": "Unix engineer",
            "location": "London, UK",
            "dates": "2004 to current",
            "description": "Derivative trading support"
        },
        {
            "employer": "International BankG",
            "title": "Unix SA",
            "location": "Frankfurt, Germany",
            "dates": "2000 to 2004",
            "description": "AIX, Solaris and Linux sysadmin"
        }
    ]
};
if (work.jobs.length > 0) {
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[0].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[0].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);
    var formattedData = HTMLworkDates.replace("%data%", work.jobs[0].dates),
        formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[0].location),
        formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[0].description);
    $(".work-entry:last").append(formattedlocation);
    $(".work-entry:last").append(formattedData);
    $(".work-entry:last").append(formattedDescription);
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[1].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[1].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);
    var formattedData = HTMLworkDates.replace("%data%", work.jobs[1].dates),
        formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[1].location),
        formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[1].description);
    $(".work-entry:last").append(formattedlocation);
    $(".work-entry:last").append(formattedData);
    $(".work-entry:last").append(formattedDescription);
}
// work.position="Coursee Developer";
// work.employer="Udacity";
// work.years=0.3;
// var education={};
// education["name"]="vdghadjgjadhgu";
// education["years"]="2005-2009";
// $("#main").append(work["position"]);
// $("#main").append(education.years);
//获取鼠标位置
$(document).click(function (loc) {
    var x = loc.pageX;
    var y = loc.pageY;
    console.log(x, y);
});
//名字国际化切换
$("#main").append(internationalizeButton);
function inName(name) {
    name = name.split(" ");
    console.log(name);
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
    name[1] = name[1].toUpperCase();
    return name[0] + " " + name[1];
    // console.log(name[0],name[1]);
}
var projects = {
    "projects": [
        {
            "title": "TFL train arrivals",
            "dates": "2014",
            "description": "TFL Train arrival board",
            "images": ["images/197x148.gif"],
            "link": "http://www.webificio.it/dboard"
        },
        {
            "title": "BhaktiEvent e-store",
            "dates": "2013",
            "description": "e-store for German Charity Bhakti Marga",
            "images": ["images/197x148.gif"],
            "link": "http://www.bhaktievent.de"
        },
        {
            "title": "Iain Sinclair Official Unofficial",
            "dates": "2008",
            "description": "Official Unofficial website of British writer Iain Sinclair",
            "images": ["images/197x148.gif"],
            "link": "http://www.iainsinclair.org.uk"
        }
    ]
};
projects.display = function () {
    for (var project in projects.projects) {
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title),
            formattedData = HTMLprojectDates.replace("%data%", projects.projects[project].dates),
            formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description),
            formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);
        $(".project-entry:last").append(formattedTitle);
        $(".project-entry:last").append(formattedData);
        $(".project-entry:last").append(formattedDescription);
        $(".project-entry:last").append(formattedImage);

    }
};
projects.display();
var educatioin = {
    "schools": [
        {
            "name": "High School",
            "location": "Perugia, Italy",
            "degree": "High School Diploma",
            "major": ["Science", "English"],
            "dates": "From: 1980 To: 1984",
            "url": "#"
        },
        {
            "name": "Open University",
            "location": "Milton Keynes",
            "degree": "Certificate in Math and Computing",
            "major": [ "CS", "Math"],
            "dates": "From: 2006 To: 2010",
            "url": "http://open.ac.uk"
        }
    ],
    "onlineCourses": [
        {
            "title": "Learn to Program: The Fundamentals",
            "school": "iMooc",
            "dates": "2016",
            "url" : "http://www.imooc.com/"
        },
        {
            "title": "Software Engineering for SaaS",
            "school": "Udacity",
            "dates": "2017",
            "url" : "https://www.coursera.org"
        }
    ]
};
educatioin.display=function () {
    for (var edu in educatioin.schools) {
        $("#education").append(HTMLschoolStart);
        var formattedName = HTMLschoolName.replace("%data%", educatioin.schools[edu].name),
            formattedDegree = HTMLschoolDegree.replace("%data%", educatioin.schools[edu].degree),
            formattedNameDegree=formattedName+formattedDegree,
            formattedDates = HTMLschoolDates.replace("%data%", educatioin.schools[edu].dates),
            formattedLocation = HTMLschoolLocation.replace("%data%", educatioin.schools[edu].location),
            formattedMajor = HTMLschoolMajor.replace("%data%", educatioin.schools[edu].major);
        $(".education-entry:last").append(formattedNameDegree);
        $(".education-entry:last").append(formattedDates);
        $(".education-entry:last").append(formattedLocation);
        $(".education-entry:last").append(formattedMajor);
    }
    $(".education-entry:last").append(HTMLonlineClasses);
    for (var edu in educatioin.schools) {
        var formattedTitle = HTMLonlineTitle.replace("%data%", educatioin.onlineCourses[edu].title),
            formattedSchool = HTMLonlineSchool.replace("%data%", educatioin.onlineCourses[edu].school),
            formattedTitleSchool=formattedTitle+formattedSchool,
            formattedDates = HTMLonlineDates.replace("%data%", educatioin.onlineCourses[edu].dates),
            formattedURL = HTMLonlineURL.replace("%data%", educatioin.onlineCourses[edu].url);
        $(".education-entry:last").append(formattedTitleSchool);
        $(".education-entry:last").append(formattedDates);
        $(".education-entry:last").append(formattedURL);
    }
};
educatioin.display();
$("#mapDiv").append(googleMap);
