$(document).ready(function () {
    // This file just does a GET request to figure out which user is logged in
    // and updates the HTML on the page


    // todo: get the data from the create a task window
    // todo: smack the post route api/login 
    // todo: create task through task model 
    // todo: send into the database  


    $('#createTask').on('click', (e) => {
        e.preventDefault();
        // * clear the Task created message

        // * get the data from the user 
        let userTask = $('#cityInputValue').val().trim();

        $.post("/api/task", {
            task: userTask,
        })
            .then(async function (response) {

                // ! tell the user that you have made a task
                // todo: append the task to the html [DONE]

                // * let the user know that the task was created 
                await $("#taskCreatedAlert").text('Task Created!!!');
                // * clear the value in the box 
                await $("#cityInputValue").val('');

                // * this is the new TASK
                // console.log({response});

                // timing out alert 
                await setTimeout(function(){ $("#taskCreatedAlert").text('');}, 3000);
                //!maybe a settimout 
                // todo: set timeout to clear the message when it's done [DONE!]

                // send Id 
                updateUserTaskList(response.id);

            })
            .catch(function (err) {
                console.log(err, 'there was an error in the create task');
            });

    });


    // update once a new task is created 
    async function updateUserTaskList(usertTaskId) {
        // this is the task id
        // console.log({usertTaskId}); 

        // make a ajax to call the current user ID
        let data = await $.get("/api/login/user_data");

        if (usertTaskId) {
            let role = await $.post('api/employeeTask', { EmployeeId: data.id, TaskId: usertTaskId })
        }



        // return the new associate task with employee 
        // console.log({role}); 

        let UserTasks = await $.get(`api/employee/single/${data.id}`)

        // all tasks for the user 
        // console.log(UserTasks.Tasks[0].task)
        UserTasks.Tasks.forEach(e => {

            let taskCard = $('<div>').text(e.task).addClass('col-sm-12 mb-2 col-md-6 border border-info text-center bg-primary font-weight-bold  rounded-lg p-2 pb-3');

            $('.tasks').prepend(taskCard)

        });
    };


    // ** AVATAR SET UP AT THE BEGINING OF THE PAGE 
    $.get("/api/login/user_data").then(function (data) {
        let user = data.email;
        $(".employee-name").text(user);

        // this prefilter was used to correct CORS that prevented the ajax from calling 
        $.ajaxPrefilter(function (options) {
            if (options.crossDomain && jQuery.support.cors) {
                var http = (window.location.protocol === 'http:' ? 'http:' : 'https:');
                options.url = http + '//cors-anywhere.herokuapp.com/' + options.url;
            }
        });

        let avatar = 'https://api.adorable.io/avatars/100/';
        let customeIcon = avatar + user;

        $(".icon").attr('src', customeIcon);
    });
    

    updateUserTaskList(); 
});




// ! DO THIS !!!!!!
// todo: link the task to the user that created the task [DONE]
// todo  when the button is clicked the task is made [DONE]
// todo  THEN ==> we make a ajax call to the database to get all of the 
// todo; associated with this user [DONE] 





// todo: tasker is a page where everyones task shows up 
// todo: show the name and what their task is 