
fetch('http://127.0.0.1:5502/FITME_WEB_SITE/js/workout.json')
.then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json(); // Parse the JSON
})
.then(data => {

    const workoutScheduleContainer = document.getElementById('workout-carousel-inner');

    // Loop through the workout_schedule object
    for (const day in data.workout_schedule) {
        const dayData = data.workout_schedule[day];

        // Create a day section
        const daySection = document.createElement('div');
        daySection.className = day == 'day_1' ? 'carousel-item active' : 'carousel-item';

        const workoutContainer = document.createElement('div');
        workoutContainer.className = 'workout-container';
        daySection.appendChild(workoutContainer);

        const workoutExercises = document.createElement('div');
        workoutExercises.className = 'workout-exercises';
        workoutContainer.appendChild(workoutExercises);

        workoutExercises.innerHTML = `<h2 class='workout-title'>${dayData.title}</h2>`;

        // Loop through the exercises for the day
        dayData.exercises.forEach(exercise => {

            const workoutCard = document.createElement('div');
            workoutCard.className = 'workout_card';
            workoutExercises.appendChild(workoutCard);

            const workoutVedio = document.createElement('div');
            workoutVedio.className = 'workout_vedio';
            workoutCard.appendChild(workoutVedio);

            const workoutVedioIframe = document.createElement('iframe');
            workoutVedioIframe.setAttribute('src',exercise.youtube_url);
            workoutVedioIframe.setAttribute('width','400');
            workoutVedioIframe.setAttribute('height','200');
            workoutVedioIframe.setAttribute('allow','accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
            workoutVedioIframe.setAttribute('referrerpolicy','strict-origin-when-cross-origin');
            workoutVedio.appendChild(workoutVedioIframe);

            const workoutContent = document.createElement('div');
            workoutContent.className = 'workout_content';
            workoutCard.appendChild(workoutContent);

            workoutContent.innerHTML = `<span class="material-symbols-outlined" id="icon">not_started</span>
            <h4>${exercise.name}</h4>
            <p>
                Prepare your body with dynamic movements that improve circulation and flexibility, reducing the risk of injury while boosting performance.
            </p>`;
        });

        // Append the day section to the workout schedule container
        workoutScheduleContainer.appendChild(daySection);
      }
})
.catch(error => {
    console.error('There was a problem with the fetch operation:', error);
});