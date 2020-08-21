$(document).ready(function() {
    $("form.home").on("Log Out", function(event) {
        event.preventDefault();
        window.location.replace("/index");
});
})