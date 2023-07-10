const bcrypt = require('bcryptjs');

// Replace 'your-password' with your actual password
const password = 'wE34pBvFS9K58agRwma7VKMKKt2A2rUDBJCm';
const hashedPassword = bcrypt.hashSync(password, 10);

console.log(hashedPassword);
