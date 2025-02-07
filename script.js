        const daysData = [
            {
                valentine: "Rose Day (Feb 7)",
                workout: "Chest Day",
                exercises: [
                    "Bench Press: 4 sets x 12 reps",
                    "Incline Dumbbell Press: 3 sets x 12 reps",
                    "Cable Flyes: 3 sets x 15 reps",
                    "Push-Ups: 3 sets till failure"
                ]
            },
            {
                valentine: "Propose Day (Feb 8)",
                workout: "Back Day",
                exercises: [
                    "Deadlifts: 4 sets x 8 reps",
                    "Lat Pulldowns: 3 sets x 12 reps",
                    "Bent Over Rows: 3 sets x 12 reps",
                    "Face Pulls: 3 sets x 15 reps"
                ]
            },
            {
                valentine: "Chocolate Day (Feb 9)",
                workout: "Legs Day",
                exercises: [
                    "Squats: 4 sets x 10 reps",
                    "Romanian Deadlifts: 3 sets x 12 reps",
                    "Leg Press: 3 sets x 15 reps",
                    "Calf Raises: 4 sets x 20 reps"
                ]
            },
            {
                valentine: "Teddy Day (Feb 10)",
                workout: "Arms Day",
                exercises: [
                    "Bicep Curls: 4 sets x 12 reps",
                    "Tricep Pushdowns: 3 sets x 15 reps",
                    "Hammer Curls: 3 sets x 12 reps",
                    "Skull Crushers: 3 sets x 12 reps"
                ]
            },
            {
                valentine: "Promise Day (Feb 11)",
                workout: "Shoulders Day",
                exercises: [
                    "Military Press: 4 sets x 10 reps",
                    "Lateral Raises: 3 sets x 15 reps",
                    "Front Raises: 3 sets x 12 reps",
                    "Rear Delt Flyes: 3 sets x 15 reps"
                ]
            },
            {
                valentine: "Hug Day (Feb 12)",
                workout: "Core Day",
                exercises: [
                    "Planks: 3 sets x 1 minute",
                    "Crunches: 3 sets x 20 reps",
                    "Russian Twists: 3 sets x 16 reps",
                    "Leg Raises: 3 sets x 15 reps"
                ]
            },
            {
                valentine: "Valentine's Day (Feb 14)",
                workout: "Full Body Day",
                exercises: [
                    "Push-Ups: 3 sets x 12 reps",
                    "Pull-Ups: 3 sets x 8 reps",
                    "Bodyweight Squats: 3 sets x 15 reps",
                    "Burpees: 3 sets x 10 reps"
                ]
            }
        ];

        function createCalendar() {
            const calendar = document.getElementById('calendar');
            daysData.forEach(day => {
                const card = document.createElement('div');
                card.className = 'day-card';
                
                const content = `
                    <div class="day-title">
                        <div class="valentine-title">${day.valentine}</div>
                        <div class="workout-title">${day.workout}</div>
                    </div>
                    <div class="workout-details">
                        <h3>Workout Plan:</h3>
                        <ul class="workout-list">
                            ${day.exercises.map(exercise => `<li>${exercise}</li>`).join('')}
                        </ul>
                    </div>
                `;
                
                card.innerHTML = content;
                card.addEventListener('click', () => {
                    // Close all other cards first
                    document.querySelectorAll('.day-card.active').forEach(activeCard => {
                        if (activeCard !== card) {
                            activeCard.classList.remove('active');
                            activeCard.querySelector('.workout-details').classList.remove('active');
                        }
                    });
                    
                    // Toggle the clicked card
                    card.classList.toggle('active');
                    const details = card.querySelector('.workout-details');
                    details.classList.toggle('active');
                });
                
                calendar.appendChild(card);
            });
        }

        function toggleTheme() {
            const body = document.body;
            const themeButton = document.getElementById('themeButton');
            
            if (body.classList.contains('dark-mode')) {
                body.classList.remove('dark-mode');
                themeButton.innerHTML = '<i class="fas fa-sun"></i>';
                document.documentElement.setAttribute('data-theme', 'light');
            } else {
                body.classList.add('dark-mode');
                themeButton.innerHTML = '<i class="fas fa-moon"></i>';
                document.documentElement.setAttribute('data-theme', 'dark');
            }
        }

        createCalendar();
    