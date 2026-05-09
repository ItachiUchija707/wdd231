const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

const coursesSection = document.querySelector("#courses");

function FilterCourses(coursesArray) {
    const allCourses = document.querySelector(".all-courses");
    const cseCourses = document.querySelector(".cse-courses");
    const wddCourses = document.querySelector(".wdd-courses");
    allCourses.addEventListener("click", () => {
        CreateCoursesTabs(courses)
        allCourses.classList.toggle("clicked");
        if (cseCourses.className.includes("clicked")) {
            cseCourses.classList.toggle("clicked");
        }

        else if (wddCourses.className.includes("clicked")) {
            wddCourses.classList.toggle("clicked");
        }

    });
    cseCourses.addEventListener("click", () => {
        CreateCoursesTabs(courses.filter(course => course.subject == "CSE"))
        cseCourses.classList.toggle("clicked");
        if (allCourses.className.includes("clicked")) {
            allCourses.classList.toggle("clicked");
        }

        else if (wddCourses.className.includes("clicked")) {
            wddCourses.classList.toggle("clicked");
        }
    }
    );
    wddCourses.addEventListener("click", () => {
        CreateCoursesTabs(courses.filter(course => course.subject == "WDD"))
        wddCourses.classList.toggle("clicked");
        if (cseCourses.className.includes("clicked")) {
            cseCourses.classList.toggle("clicked");
        }

        else if (allCourses.className.includes("clicked")) {
            allCourses.classList.toggle("clicked");
        }
    }
    );

}

function CreateCoursesTabs(coursesArray) {

    let coursesListContainer = coursesSection.querySelector("ul");
    let totalCredits = coursesSection.querySelector("p");

    // check if credits element already exists to determine if needs to be created or reset.
    if (totalCredits) {
        totalCredits.innerHTML = "";
    }

    else {
        totalCredits = document.createElement("p");
    }

    // check if list container element already exists to determine if needs to be created or reset.
    if (coursesListContainer) {
        coursesListContainer.innerHTML = "";
    }

    else {
        coursesListContainer = document.createElement("ul");
        coursesSection.appendChild(coursesListContainer);
    }

    
    coursesArray.forEach(course => {
        const courseName = document.createElement("li");
        courseName.innerHTML = `${course.subject} ${course.number}`
        if (course.completed) {
            courseName.setAttribute("class", "completed")
        }
        else {
            courseName.setAttribute("class", "incomplete")
        }

        coursesListContainer.appendChild(courseName);
    }
    )

    const credits = coursesArray.reduce((total, course) => total + course.credits, 0);
    totalCredits.innerHTML = `The total credits of courses displayed is ${credits}`;
    coursesSection.appendChild(totalCredits);
}





window.addEventListener("DOMContentLoaded", () => {
    const filters = document.createElement("div");
    const allCourses = document.createElement("h3");
    const cseCourses = document.createElement("h3");
    const wddCourses = document.createElement("h3");
    allCourses.setAttribute("class", "all-courses");
    cseCourses.setAttribute("class", "cse-courses");
    wddCourses.setAttribute("class", "wdd-courses");
    allCourses.textContent = "All Courses";
    cseCourses.textContent = "CSE";
    wddCourses.textContent = "WDD";

    filters.appendChild(allCourses);
    filters.appendChild(cseCourses);
    filters.appendChild(wddCourses);
    coursesSection.appendChild(filters);

    CreateCoursesTabs(courses);

    FilterCourses(courses);
})