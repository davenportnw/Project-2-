// const 


// When the the search button is clicked, it is re-directed to the directory.
$('#searchDirectory').on('submit', function(event) {
    event.preventDefault();

    //Grab input from search bar

    let userSearch = $('#search').val().trim();
    // lookUp(userSearch);

    $.ajax("/directory", {
        type:'GET',
        data: userSearch
    }).then(function() {
        console.log("Created the search");
        location.reload();

    })

});


// function lookUp(userSearch) {
//     $.post("/api/directory", {
//         full_name: full_name,
//         email: email,
//         phone_number: phone_number
//     }).then(function(response) {
//         window.location.replace("/directory");
//         console.log('response', response);
//     }).catch(function(err){
//         console.log(err);
//     })
// }