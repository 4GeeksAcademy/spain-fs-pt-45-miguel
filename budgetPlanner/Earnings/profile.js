const fs = require('fs');
const prompt = require('prompt-sync')({ sigint: true });

// Función para cargar el perfil de usuario desde el archivo JSON
function loadUserProfile() {
  try {
    const data = fs.readFileSync('userProfile.json');
    return JSON.parse(data);
  } catch (error) {
    return {};
  }
}

// Función para guardar el perfil de usuario en el archivo JSON
function saveUserProfile(userProfile) {
  fs.writeFileSync('userProfile.json', JSON.stringify(userProfile));
}

// Función para solicitar y actualizar los datos del usuario
function updateUserData() {
  const userProfile = loadUserProfile();

  const username = prompt('What is your username? ');
  const currency = prompt('What type of currency will you use (€, $)? ');
  const actualEarning = Number(prompt('How much money do you have? '));
  const monthlyEarning = Number(prompt('How much money do you earn monthly? '));
  const forecastTime = Number(prompt('How many months do you want to forecast? '));
  const haveCasualEarning = prompt('Do you have any extra earnings? ("Yes" or "No") ');
  let casualEarning = 0;

  if (haveCasualEarning === 'Yes') {
    casualEarning = Number(prompt('How much extra money do you earn? '));
  }

  userProfile[username] = {
    currency,
    actualEarning,
    monthlyEarning,
    forecastTime,
    casualEarning
  };

  saveUserProfile(userProfile);

  console.log('Profile updated successfully!');
}

// Función principal
function main() {
  updateUserData();

  const addOrUpdateProfile = prompt('Do you want to add another user or update the existing profile? ("Yes" or "No") ');

  if (addOrUpdateProfile === 'Yes') {
    main();
  }
}

main();
