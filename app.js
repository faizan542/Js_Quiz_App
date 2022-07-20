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
    } else {
        var displayNoneForm = document.getElementById('quiz_form');
        displayNoneForm.style.display = 'none';
        var removeFormHeading = document.getElementById('form_heading');
        removeFormHeading.style.display = 'none';

        renderQuestion(0)
        startTimer()
        var timer = document.getElementById('timer');
        timer.style.display = "block"
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
        correctAnswer: "script"
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

var score = 0;
var answer = "";
var usersSelectedAnswers = [];
var questionsDiv = document.getElementById('questions');


function renderQuestion(e) {

    if (questions[e].options.length === 2) {

        var questionNum = document.createElement('h2')
        var indexNum = questions.indexOf(questions[e])
        var questionNumber = document.createTextNode(`Question ${indexNum + 1} of ${questions.length}`)
        questionNum.appendChild(questionNumber)
        questionsDiv.appendChild(questionNum)

        var question = document.createElement('h2')
        question.setAttribute('class', 'question');
        var questionText = document.createTextNode(`${questions[e].question}`)
        question.appendChild(questionText)
        questionsDiv.appendChild(question)

        var radioBtn1 = document.createElement('input')
        radioBtn1.setAttribute('type', 'radio')
        radioBtn1.setAttribute('name', 'selectBtn')
        radioBtn1.setAttribute('class', 'options')
        var option1 = document.createElement('span')
        option1.setAttribute('class', 'optionsName')
        questionsDiv.appendChild(radioBtn1)
        questionsDiv.appendChild(option1)


        var breakLine1 = document.createElement('br')
        questionsDiv.appendChild(breakLine1)

        var radioBtn2 = document.createElement('input')
        radioBtn2.setAttribute('type', 'radio')
        radioBtn2.setAttribute('name', 'selectBtn')
        radioBtn2.setAttribute('class', 'options')
        var option2 = document.createElement('span')
        option2.setAttribute('class', 'optionsName')
        questionsDiv.appendChild(radioBtn2)
        questionsDiv.appendChild(option2)

        var breakLine2 = document.createElement('br')
        questionsDiv.appendChild(breakLine2)


        var nextBtn = document.createElement('button')
        var nextBtnText = document.createTextNode("Next")
        nextBtn.setAttribute('onclick', 'nextQuestion()')
        nextBtn.appendChild(nextBtnText)
        questionsDiv.appendChild(nextBtn)

    }

    if (questions[e].options.length > 2) {


        var questionNum = document.createElement('h2');
        var indexNum = questions.indexOf(questions[e]);
        var questionNumber = document.createTextNode(`Question ${indexNum + 1} of ${questions.length}`);
        questionNum.appendChild(questionNumber);
        questionsDiv.appendChild(questionNum);

        var question = document.createElement('h2');
        question.setAttribute('class', 'question');
        var questionText = document.createTextNode(`${questions[e].question}`);
        question.appendChild(questionText);
        questionsDiv.appendChild(question);

        var radioBtn1 = document.createElement('input');
        radioBtn1.setAttribute('type', 'radio');
        radioBtn1.setAttribute('name', 'selectBtn');
        radioBtn1.setAttribute('class', 'options');
        var option1 = document.createElement('span');
        option1.setAttribute('class', 'optionsName');
        questionsDiv.appendChild(radioBtn1);
        questionsDiv.appendChild(option1);


        var breakLine1 = document.createElement('br');
        questionsDiv.appendChild(breakLine1);

        var radioBtn2 = document.createElement('input');
        radioBtn2.setAttribute('type', 'radio');
        radioBtn2.setAttribute('name', 'selectBtn');
        radioBtn2.setAttribute('class', 'options');
        var option2 = document.createElement('span');
        option2.setAttribute('class', 'optionsName');
        questionsDiv.appendChild(radioBtn2);
        questionsDiv.appendChild(option2);

        var breakLine2 = document.createElement('br');
        questionsDiv.appendChild(breakLine2);

        var radioBtn3 = document.createElement('input');
        radioBtn3.setAttribute('type', 'radio');
        radioBtn3.setAttribute('name', 'selectBtn');
        radioBtn3.setAttribute('class', 'options');
        var option3 = document.createElement('span');
        option3.setAttribute('class', 'optionsName');
        questionsDiv.appendChild(radioBtn3);
        questionsDiv.appendChild(option3);

        var breakLine3 = document.createElement('br');
        questionsDiv.appendChild(breakLine3);


        var radioBtn4 = document.createElement('input');
        radioBtn4.setAttribute('type', 'radio');
        radioBtn4.setAttribute('name', 'selectBtn');
        radioBtn4.setAttribute('class', 'options');
        var option4 = document.createElement('span');
        option4.setAttribute('class', 'optionsName');
        questionsDiv.appendChild(radioBtn4);
        questionsDiv.appendChild(option4);

        var breakLine4 = document.createElement('br');
        questionsDiv.appendChild(breakLine4);

        var nextBtn = document.createElement('button');
        var nextBtnText = document.createTextNode("Next");
        nextBtn.setAttribute('onclick', 'nextQuestion()');
        nextBtn.setAttribute('class', 'btn btn-primary my-2')
        nextBtn.appendChild(nextBtnText);
        questionsDiv.appendChild(nextBtn);
    }

    var options = document.getElementsByClassName('options');
    var optionsNames = document.getElementsByClassName('optionsName');

    for (var i = 0; i < options.length; i++) {
        options[i].value = questions[e].options[i];
        optionsNames[i].innerHTML = questions[e].options[i];
    }

}

function checkCorrectAnswer(ind, ans) {
    if (questions[ind].correctAnswer === ans) {
        score = score + 5;
    }
}


var questionCount = 0;
function nextQuestion() {
    var selector = document.getElementsByName('selectBtn');

    for (var i = 0; i < selector.length; i++) {
        if (selector[i].checked) {

            if (questionCount === questions.length - 1) {
                answer = selector[i].value
                usersSelectedAnswers.push(selector[i].value)
                // console.log(selector[i].value)
                checkCorrectAnswer(questionCount, answer)
                questionsDiv.innerHTML = ""
                result();

                return;
            }


            else {
                answer = selector[i].value
                usersSelectedAnswers.push(selector[i].value)
                // console.log(selector[i].value)
                selector[i].checked = false
                questionsDiv.innerHTML = ""
                checkCorrectAnswer(questionCount, answer)
                questionCount++;
                renderQuestion(questionCount)
                return true;
            }

        }
    }
}


function result() {
    var getResult = document.getElementById('result');
    var userName = document.createElement('h2');
    userName.setAttribute('class', 'container p-4')
    var getUserName = document.createTextNode(`${fullName.value}, you got ${score} out of 100`);
    userName.appendChild(getUserName)
    getResult.appendChild(userName)
}

var minutes = 2;
var seconds = 60;
var interval = ""

function timer() {
    var getMinute = document.getElementById('minute');
    var getSecond = document.getElementById('second');

    seconds--
    getSecond.innerHTML = seconds;
    getMinute.innerHTML = minutes;

    if (minutes === 0 && seconds === 0) {
        seconds = "0";
        minutes = "0";
        clearInterval(interval);
        questionsDiv.innerHTML = "";
        result()
    }


    if (minutes < 10) {
        getMinute.innerHTML = `0${minutes}`
    }

    if (seconds === 0) {
        minutes--
        getMinute.innerHTML = `0${minutes}`
        seconds = 60
        if (seconds === 60) {
            getSecond.innerHTML = "00"
        }
    }
    if (seconds < 10) {
        getSecond.innerHTML = `0${seconds}`
    }

}

function startTimer() {
    interval = setInterval(timer, 1000)

}
