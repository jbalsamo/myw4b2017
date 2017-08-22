function hello(name) {
    namearea = document.getElementById("namearea");
    namearea.innerHTML = name;
}

$(document).ready(function () {
    hello("Joe");
    cbio.getCancerStudies(function (x) {
        x.map(function (a) {
            id = a.split("\t")[0];
            name = a.split("\t")[1];
            if (name != "name") {
                c = {
                    'id': id,
                    'name': name
                };
                $("#clist").append('<option value="' + c.id + '">' + c.name + '</option>');
            }
        });
        $('select').material_select();
    });
});