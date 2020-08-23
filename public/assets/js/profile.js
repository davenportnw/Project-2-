$('#updateName').on('click', async function() {
    let newName = await $('input:text').val().trim();
    document.getElementById('employee-name').innerHTML = newName;
    return newName;

});

$('#updateRole').on('click', async function() {
    let newRole = await $('input:text').val().trim();
    document.getElementById('employee-role').innerHTML = newRole;
    return newRole;
});


$('#updateDepartment').on('click', async function() {
    let newDep = await $('input:text').val().trim();
    document.getElementById('employee-department').innerHTML = newDep;
    return newDep;
});