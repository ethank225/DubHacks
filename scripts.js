document.addEventListener('DOMContentLoaded', function() {
  // Handle functionality for "Create Family" page
  const backBtn = document.getElementById('back-btn');
  if (backBtn) {
    backBtn.addEventListener('click', function() {
      window.location.href = 'index.html'; // Adjust the path if necessary
    });
  }

  // Handle functionality for "Kinnect" page
  const createTeamBtn = document.getElementById('create-team-btn');
  if (createTeamBtn) {
    createTeamBtn.addEventListener('click', function() {
      window.location.href = 'createfam.html'; // Adjust the path if necessary
    });
  }

  const loginBtn = document.getElementById('login');
  if (loginBtn) {
    loginBtn.addEventListener('click', function() {
      window.location.href = 'login.html'; // Adjust the path if necessary
    });
  }

  const gobackintroBtn = document.getElementById('go-back-intro-btn');
  if (gobackintroBtn) {
    gobackintroBtn.addEventListener('click', function() {
      window.location.href = 'index.html'; // Adjust the path if necessary
    });
  }

  const gobackagainBtn = document.getElementById('submit-new-fam-back-btn');
  if (gobackagainBtn) {
    gobackagainBtn.addEventListener('click', function() {
      window.location.href = 'index.html'; // Adjust the path if necessary
    });
  }


});

// Handle Star Rating Selection
const stars = document.querySelectorAll('.star');
stars.forEach(star => {
    star.addEventListener('click', () => {
        const rating = star.getAttribute('data-rating');
        stars.forEach(s => s.style.color = '#FFD700');  // Reset all stars to gold
        for (let i = 0; i < rating; i++) {
            stars[i].style.color = '#FFA500';  // Highlight stars up to the clicked one in orange
        }
        console.log(`User rated: ${rating} stars`);
    });
});

// Handle Emoji Input
const emojiPicker = document.getElementById('emoji-picker');
const selectedEmoji = document.getElementById('selected-emoji');


// Correct class selector with a dot (.)
const family = document.querySelector('.family-label');
if (family) {
  // Add event listener to the family label div
  family.addEventListener('click', function() {
    // Navigate to the fam-info.html page when clicked
    window.location.href = 'fam-info.html';
  });
}


const familyData = {
  familyName: '',
  userName: '',
  familyCode: ''
};

// Function to save family data to localStorage
function saveFamilyData() {
  localStorage.setItem('familyData', JSON.stringify(familyData));
}

// Function to retrieve family data from localStorage
function loadFamilyData() {
  const storedData = localStorage.getItem('familyData');
  if (storedData) {
      return JSON.parse(storedData);
  }
  return null; // Return null if no data is found
}

// Function to handle the submission of the family details
function handleSubmit() {
  // Get input values
  familyData.familyName = document.getElementById('family-name').value;
  familyData.userName = document.getElementById('user-name').value;
  familyData.familyCode = document.getElementById('password').value;

  // Save input values to localStorage
  saveFamilyData();

  // Navigate to the home page
  window.location.href = 'home.html'; // Change 'home.html' to your actual home page
}

// Function to handle the back button click
function handleBack() {
  // Navigate back to the intro page
  window.location.href = 'intro.html'; // Change 'intro.html' to your actual intro page
}

// Function to display family data on the home page
function displayFamilyData() {
  const data = loadFamilyData();
  if (data) {
      document.getElementById('display-family-name').innerText = data.familyName || 'N/A';
      document.getElementById('display-user-name').innerText = data.userName || 'N/A';
      document.getElementById('display-family-code').innerText = data.familyCode || 'N/A';
  } else {
      document.getElementById('display-family-name').innerText = 'No family data available';
      document.getElementById('display-user-name').innerText = '';
      document.getElementById('display-family-code').innerText = '';
  }
}

// Call the function when the home page loads
window.onload = displayFamilyData;

// Add event listeners to the buttons
document.getElementById('submit-new-fam-btn').addEventListener('click', handleSubmit);
document.getElementById('submit-new-fam-back-btn').addEventListener('click', handleBack);
