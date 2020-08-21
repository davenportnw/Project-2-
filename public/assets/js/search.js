$(document).ready(function() {

    $('#searchDirectory').on('click', function(event) {
        event.preventDefault();
        
        $.ajax('/employee/single/:id', {
            type: 'GET',
            data: {full_name: full_name,email: email, phone_number: phone_number } 
        }).then(function(response){ 
            window.location.replace('/results');
            
        })
    })
})
