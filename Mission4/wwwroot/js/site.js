
$("#btnSubmit").click(function () {

    //This will be the assignments of all the variables from the form
    let assignments = $("#assignments").val();
    let groupProjects = $("#groupProjects").val();
    let quizzes = $("#quizzes").val();
    let midterm = $("#midterm").val();
    let final = $("#final").val();
    let intex = $("#intex").val();

    //This is the sum of all the values and their weights associated with them stored to a final variable
    let finalNumScore = (assignments*.5) + (groupProjects*.1) + (quizzes*.1) + (midterm*.1) + (final*.1) + (intex*.1);

    //This will be what holds the output letter grade string based on the final score they received.
    let letterGrade = "";
    if (finalNumScore >= 94) {
        letterGrade = "A";
    } else if (finalNumScore >= 90) {
        letterGrade = "A-";
    } else if (finalNumScore >= 87) {
        letterGrade = "B+";
    } else if (finalNumScore >= 84) {
        letterGrade = "B";
    } else if (finalNumScore >= 80) {
        letterGrade = "B-";
    } else if (finalNumScore >= 77) {
        letterGrade = "C+";
    } else if (finalNumScore >= 74) {
        letterGrade = "C";
    } else if (finalNumScore >= 70) {
        letterGrade = "C-";
    } else if (finalNumScore >= 67) {
        letterGrade = "D+";
    } else if (finalNumScore >= 64) {
        letterGrade = "D";
    } else if (finalNumScore >= 60) {
        letterGrade = "D-";
    } else {
        letterGrade = "E";
    }

    //this will display once the calculator is finished
    $("#heading").html("Your Final Grade:");

    let gradeDisplay = finalNumScore.toFixed(1) + "% (" + letterGrade + ")";

    $("#grade").html(gradeDisplay);
})