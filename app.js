function toaster() {
    $(document).ready(function () {
        $(".toast").toast("show");
    })
}

// ---------------------Form Validation-----------------
var fullName = document.getElementById("full_name");
var fatherName = document.getElementById("father_name");
var rollNumber = document.getElementById("roll_num");
var schoolName = document.getElementById("school_name");
var toast = document.getElementById("toaster_body");

function formValidation() {
    if (fullName.value === "") {
        // toast.innerText = "Required";
        // toast = toaster()
        alert("full name is required");
    }
    else if (fatherName.value === "") {
        alert("father name is required");
    }
    else if (rollNumber.value === "") {
        alert("roll number is required")
    }
    else if (isNaN(rollNumber.value)) {
        alert("Please enter valid roll number")
    }
    else if (rollNumber.value.length < 6) {
        alert("Roll number is less than six characters")
    } else if (rollNumber.value.length > 6) {
        alert("Only six characters are allowed in roll number")
    }
    else if (schoolName.value === "") {
        alert("School Name is required")
    }else{
        fullName.remove();
        fatherName.remove();
        rollNumber.remove();
        schoolName.remove();
        var startQuizButton = document.getElementById("btn").remove();
    }
}

var questions = [

    {
        question: "Inside which HTML element do we put the JavaScript?",
        options: [
            "js",
            "script",
            "scripting",
            "javascript"
        ],
        correctAnswer: "<script>"
    },

    {
        question: "How to write an IF statement in JavaScript?",
        options: [
            "if(i==5)",
            "if i = 5",
            "if i = 5 then",
            "if i == 5 then"
        ],
        correctAnswer: "if(i==5)"
    },

    {
        question: "The external JavaScript file must contain the <script> tag.",
        options: [
            "True",
            "False",

        ],
        correctAnswer: "False"
    },

    {
        question: "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
        options: [
            "if(i <> 5)",
            "if i=! 5 then",
            "if(i != 5)",
            "if i <> 5"
        ],
        correctAnswer: "if(i != 5)"
    },

    {
        question: "How does a FOR loop start?",
        options: [
            "for i = 1 to 10",
            "for(i=0; i<=10; i++)",
            "for(i <= 10; i++)",
            "for(i = 0; i<=10)"
        ],
        correctAnswer: "for(i=0; i<=10; i++)"
    },

    {
        question: "What will the following code return: Boolean(10 > 9)",
        options: [
            "true",
            "false",
        ],
        correctAnswer: "true"
    },

    {
        question: "Which operator is used to assign a value to a variable?",
        options: [
            "+",
            "-",
            "*",
            "="
        ],
        correctAnswer: '='
    },


    {
        question: "What is the correct way to write a JavaScript array?",
        options: [
            'var colors  = ("red", "green", "blue", "orange")',
            'var colors  = "red", "green", "blue", "orange"',
            'var colors  = (1:"red", 2:"green", 3:"blue", 4:"orange")',
            'var colors  = ["red", "green", "blue", "orange"]'
        ],
        correctAnswer: 'var colors  = ["red", "green", "blue", "orange"]'
    },

    {
        question: "How can you add a comment in a JavaScript?",
        options: [
            "!--This is a comment-->",
            "'This is a comment'",
            "// This is a comment",
            "!* This is a comment*!"
        ],
        correctAnswer: "// This is a comment"
    },

    {
        question: "Which event occurs when the user clicks on an HTML element?",
        options: [
            "onmouseover",
            "onclick",
            "onmouseclick",
            "onblur"
        ],
        correctAnswer: "onclick"

    },

    {
        question: " How does Java Script store dates in objects of Date type?",
        options: [
            "The number of days since January 1st, 1900",
            "The number of milliseconds since January 1st, 1970",
            "The number of seconds since January 1st, 1970",
            "The number of picoseconds since January 1st, 1970"
        ],
        correctAnswer: "The number of milliseconds since January 1st, 1970"

    },

    {
        question: "Which of the following is not a valid JavaScript variable name?",
        options: [
            "2java",
            "_java_and_java_names",
            "javaandjava",
            "None of the above"
        ],
        correctAnswer: "2java"

    },

    {
        question: "What is the correct JavaScript syntax to change the content of the HTML element below?",
        options: [
            'document.getElementByName("p").innerHTML =  "Hello World!"',
            'document.getElement("p").innerHTML = "Hello World!"',
            '#demo.innerHTML = "Hello World!"',
            'document.getElementById("demo").innerHTML = "Hello World!"'
        ],
        correctAnswer: 'document.getElementById("demo").innerHTML = "Hello World!"'

    },

    {
        question: "JavaScript ignores extra spaces",
        options: [
            "True",
            "False",
        ],
        correctAnswer: "True"
    },

    {
        question: "Which of the following is correct to write Hello World on the web page?",
        options: [
            'System.out.println("Hello World")',
            'document.write("Hello World")',
            'response.write("Hello World")',
            'print("Hello World")'
        ],
        correctAnswer: 'document.write("Hello World")'
    },

    {
        question: "How do you round the number 7.25, to the nearest integer?",
        options: [
            "Math.round(7.25)  ",
            "Math.rnd(7.25)",
            "round(7.25)",
            "rnd(7.25)"
        ],
        correctAnswer: "Math.round(7.25)"
    },

    {
        question: "Is it possible to declare a variable in Java Script along its type?",
        options: [
            "Yes",
            "No"
        ],
        correctAnswer: "No"
    },


    {
        question: "Which of the following function of String object returns the character at the specified ind",
        options: [
            "concat()",
            "charCodeAt()",
            "charAt()",
            "indexOf()"
        ],
        correctAnswer: "charAt()"
    },

    {
        question: "What language defines the behavior of a web page?",
        options: [
            "HTML",
            "CSS",
            "JavaScript",
            "XML"
        ],
        correctAnswer: "HTML"
    },

    {
        question: "Is JavaScript case-sensitive?",
        options: [
            "Yes",
            "No"
        ],
        correctAnswer: "Yes"
    },

]