var questions = ["What date does Marty first travel to in the DeLorean?",
                 "Old man Peabody had a crazy idea about what?",
                 "Doc was shot in the back because of how much money?",
                 "What was the title of George's 1st published book?",
                 "What time do Doc's clocks read at the beginning of \"Back to the Future\"?"
                ];
var answers = ['November 5th 1955',
                'Breeding Pine Trees',
                '$80',
                'A Match Made in Space',
                '7:53am'
                ];
var correct = ['a', 'c', 'c', 'd', 'b'];

window.onload = function() {
    $("#reset").on("click", reset);
    $("#start").on("click", start);
};

var intervalId;
var clockRunning = false;
var time = 120;
var score = 0;

function reset() {
    time = 120;
    stop();
    // DONE: Change the "display" div to "00:00."
    $("#time-left").text("120");

}

function start() {

    // DONE: Use setInterval to start the count here and set the clock to running.
    if (!clockRunning) {
        intervalId = setInterval(count, 1000);
        clockRunning = true;
    }
    choosing();
}

function stop() {

    // DONE: Use clearInterval to stop the count here and set the clock to not be running.
    clearInterval(intervalId);
    clockRunning = false;
}

function count() {

    // DONE: increment time by 1, remember we cant use "this" here.
    time--;
    $("#time-left").text(time);
    if (time === 0) {
        alert("Time is Up !");
        reset();
        $('.questions').remove();
        results();
    }
}

function choosing() {
    console.log( $(':checkbox').val(this.checked));

    var checkbox = document.getElementsByName('type');
    console.log(checkbox);
    //if (checkbox[0].checked) {
       // alert('checked');
    //} else {
        //lert('did not check');
    //}

}


function results() {
    //$('.jumbotron').append('<h1> You Scored: ' + score);
    $('.jumbotron').append('<p> 1. November 5th 1955');
    $('.jumbotron').append('<p> 2. Breeding Pine Trees');
    $('.jumbotron').append('<p> 3. $80');
    $('.jumbotron').append('<p> 4. A Match Made in Space');
    $('.jumbotron').append('<p> 5. 7:53am');
}



