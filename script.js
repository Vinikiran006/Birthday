
document.getElementById('surpriseButton').addEventListener('click', function() {
    const loveLetter = document.getElementById('loveLetter');
    loveLetter.classList.toggle('hidden');
    loveLetter.classList.toggle('active'); // Add active class for reveal effect
});

function createRain() {
    const rainContainer = document.querySelector('.rain-container');
    const numberOfEmojis = 100; // Number of falling emojis
    const emojis = ['💖', '♥️', '🎂', '🌹', '✨']; // Array of emojis to use

    for (let i = 0; i < numberOfEmojis; i++) {
        const emoji = document.createElement('div');
        emoji.classList.add('emoji');
        emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)]; // Randomly select an emoji

        // Randomize the position and animation duration
        emoji.style.left = Math.random() * 100 + 'vw'; // Random horizontal position
        emoji.style.animationDuration = Math.random() * 2 + 1 + 's'; // Random duration between 1s and 3s

        rainContainer.appendChild(emoji);

        // Remove the emoji after it falls
        setTimeout(() => {
            emoji.remove();
        }, 8000); // Remove the emoji after 3 seconds
    }
}

// Call the createRain function when the page loads
document.addEventListener('DOMContentLoaded', createRain);


let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}



const birthDate = new Date("2005-03-15T00:00:00"); // Change this to the person's birth date

function updateTimer() {
    const now = new Date();
    
    // Calculate the difference in milliseconds
    const ageInMilliseconds = now - birthDate;

    // Convert milliseconds to days, hours, and minutes
    const ageInDays = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24));
    const ageInHours = Math.floor((ageInMilliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const ageInMinutes = Math.floor((ageInMilliseconds % (1000 * 60 * 60)) / (1000 * 60));

    // Display the result
    document.getElementById("timer").innerHTML = 
        `${ageInDays} days, ${ageInHours} hours, ${ageInMinutes} minutes`;
}


const anniversaryDate = new Date("2021-12-08T00:00:00"); // Change this to the person's birth date

function updateTimer1() {
    const now = new Date();
    
    // Calculate the difference in years
    let years = now.getFullYear() - anniversaryDate.getFullYear();
    let months = now.getMonth() - anniversaryDate.getMonth();
    let days = now.getDate() - anniversaryDate.getDate();
    
    // Adjust for negative months
    if (months < 0) {
        years--;
        months += 12;
    }
    
    // Adjust for negative days
    if (days < 0) {
        months--;
        const lastMonth = new Date(now.getFullYear(), now.getMonth(), 0); // Get the last day of the previous month
        days += lastMonth.getDate(); // Add the number of days in the last month
    }
    
    // Calculate hours, minutes, and seconds
    const hours = now.getHours() - anniversaryDate.getHours();
    const minutes = now.getMinutes() - anniversaryDate.getMinutes();
    const seconds = now.getSeconds() - anniversaryDate.getSeconds();

    // Adjust for negative hours
    if (hours < 0) {
        hours += 24;
        days--; // Decrease the day count
    }

    // Adjust for negative minutes
    if (minutes < 0) {
        minutes += 60;
        hours--; // Decrease the hour count
    }

    // Adjust for negative seconds
    if (seconds < 0) {
        seconds += 60;
        minutes--; // Decrease the minute count
    }

    // Final adjustments for days
    if (days < 0) {
        days += new Date(now.getFullYear(), now.getMonth(), 0).getDate(); // Get the last day of the previous month
        months--; // Decrease the month count
    }

    // Display the result
    document.getElementById("timer1").innerHTML = 
        `${years} years, ${months} months, ${days} days, ` +
        `${hours} hours, ${minutes} minutes, ${seconds} seconds`;
}


setInterval(updateTimer, 1000);
setInterval(updateTimer1, 1000);


// document.getElementById("nextPage").addEventListener("click", function() {
//     // Change the URL to the next page you want to load
//     window.location.href = "index1.html"; // Replace with your next page URL
// });
// Optional: Reset button functionality
document.getElementById('resetButton').addEventListener('click', function() {
    location.reload(); // Reload the page to reset the timer
});