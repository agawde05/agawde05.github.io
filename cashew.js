// updateLinks.js

// Data structure containing course names and corresponding IDs
const courses = [
    {
        name: "Linear Algebra",
        id: "math296",
        pdfUrl: "https://raw.githubusercontent.com/agawde05/notes/main/linear-algebra/master.pdf",
    },

    // Add more courses as needed
];

function constructPdfUrl(courseId) {
    const utc = new Date().getTime();
    // Find the course object by its ID
    const course = courses.find((c) => c.id === courseId);
    if (course) {
        return course.pdfUrl + "?v=" + utc;
    }
    return "#"; // Return '#' if course ID is not found
}

// Function to generate the list of courses
function generateCourseList() {
    const courseParagraph = document.getElementById("courseParagraph");
    if (courseParagraph) {
        // Clear existing content
        courseParagraph.innerHTML = "";
        // Generate text for each course
        courses.forEach((course) => {
            const link = document.createElement("a");
            link.id = course.id;
            link.href = constructPdfUrl(course.id);
            link.target = "_blank";
            link.textContent = `Math ${course.id.substring(4)}`;
            const courseText = document.createTextNode(` - ${course.name} (`);
            const closingParenthesis = document.createTextNode(")");
            const listItem = document.createElement("p");
            listItem.appendChild(courseText);
            listItem.appendChild(link);
            listItem.appendChild(closingParenthesis);
            courseParagraph.appendChild(listItem);
        });
    }
}

// Call the function to generate the course list when the page loads
window.addEventListener("load", generateCourseList);
