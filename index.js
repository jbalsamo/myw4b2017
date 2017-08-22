var hello = function(name) {
    namearea = document.getElementById("namearea");
    namearea.innerHTML(name);
};

$(document).ready(function() {
    this.hello("Joe");
});