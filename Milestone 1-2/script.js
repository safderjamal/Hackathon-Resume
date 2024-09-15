var toggleButton = document.getElementById('toggle-skills');
var skills = document.getElementById('skills-list');
toggleButton.addEventListener('click', function () {
    if (skills.style.display === 'none') {
        skills.style.display = 'block';
        toggleButton.textContent = "Hide Skills";
    }
    else {
        skills.style.display = 'none';
        toggleButton.textContent = "Show Skills";
    }
});
