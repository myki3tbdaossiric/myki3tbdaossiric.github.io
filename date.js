function dt() {
    var d = new Date();
    document.getElementById("date").innerHTML = "D: " + d.getDate() + "/" + d.getMonth() + "/" + d.getFullYear();
    var weekNumber = (new Date()).getWeek();
    document.getElementById("week").innerHTML = "W: " + weekNumber;
}
Date.prototype.getWeek = function() {
    var onejan = new Date(this.getFullYear(), 0, 1);
    return Math.ceil((((this - onejan) / 86400000) + onejan.getDay() + 1) / 7);
}