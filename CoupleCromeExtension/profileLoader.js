const ProfileData = {
    Profile: [
        "Profile/1 (1).jpeg",
        "Profile/1 (2).jpeg",
        "Profile/1 (3).jpeg",
        "Profile/1 (4).jpeg",
        "Profile/1 (5).jpeg",
        "Profile/1 (6).jpeg",
        "Profile/1 (7).jpeg",
        "Profile/1 (8).jpeg",
        "Profile/1 (9).jpeg",
        "Profile/1 (10).jpeg",
        "Profile/1 (11).jpeg",
        "Profile/1 (12).jpeg",
        "Profile/1 (13).jpeg",
        "Profile/1 (14).jpeg",
        "Profile/1 (15).jpeg",
        "Profile/1 (16).jpeg",
        "Profile/1 (17).jpeg",
        "Profile/1 (18).jpeg",
        "Profile/1 (19).jpeg",
        "Profile/1 (20).jpeg",
        "Profile/1 (21).jpeg",
        "Profile/1 (22).jpeg",
        "Profile/1 (23).jpeg",
        "Profile/1 (24).jpeg",
        "Profile/1 (25).jpeg",
        "Profile/1 (26).jpeg",
        "Profile/1 (27).jpeg",
        "Profile/1 (28).jpeg",
        "Profile/1 (29).jpeg",
        "Profile/1 (30).jpeg",
        "Profile/1 (31).jpeg",
        "Profile/1 (32).jpeg",
        "Profile/1 (33).jpeg",
        "Profile/1 (34).jpeg",
        "Profile/1 (35).jpeg",
        "Profile/1 (36).jpeg",
        "Profile/1 (37).jpg",
        "Profile/1 (41).jpeg",
        "Profile/1 (42).jpeg",
        "Profile/1 (43).jpeg",
    ],
};

// Get references to the elements
const ProfileElement = document.getElementById('me');


// Function to load a random Profile
function loadProfileProfile() {
    const Profile = ProfileData.Profile;
    const randomIndex = Math.floor(Math.random() * Profile.length);
    const randomProfile = Profile[randomIndex];
    
    // Update the Profile source and alt text
    ProfileElement.src = randomProfile;
    ProfileElement.alt = `Random Profile ${randomIndex + 1}`;


    console.log(randomProfile) ;
}


// Initial Profile load
loadProfileProfile();




