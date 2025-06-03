 # To start the project in backend
 ``` 
 npm init -y
 ```
## To install all the dependencies
```
npm i express mongoose nodemon bcryptjs cors dotenv jsonwebtoken cookie-parser
```

### 1. Express
- Purpose: Web framework for Node.js
- Working:

   - Simplifies routing, middleware handling, and server setup.

   - You create routes like app.get('/api', ...), and Express handles HTTP methods (GET, POST, etc.).

  - Middleware functions (like app.use(...)) are used to process requests/responses.

✅ Example:
```
const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World!');
});
```

### 2. Mongoose
- Purpose: MongoDB ODM (Object Data Modeling) tool
- Working:

  - Connects Node.js with MongoDB.

  - Defines schemas and models to interact with MongoDB using JavaScript objects.

  - Helps in validating, querying, and saving data.

✅ Example:
```
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test');

const UserSchema = new mongoose.Schema({ name: String });
const User = mongoose.model('User', UserSchema);

User.create({ name: 'John' });
```

### 3. Nodemon
- Purpose: Development tool to automatically restart server on code changes
- Working:

  - Watches your files.

  - Restarts the Node.js server every time a file is changed.

  - Used instead of node app.js (just run nodemon app.js).

✅ Install (dev only):
```
npm install --save-dev nodemon
```
✅ Usage:
```
npx nodemon app.js
```

### 4. bcryptjs
- Purpose: Password hashing library
- Working:

  - Converts plain text passwords into a hashed format before saving to the database.

  - Hashing is one-way, so passwords can't be easily reversed.

  - Useful for comparing input password with hashed password during login.

✅ Example:
```
const bcrypt = require('bcryptjs');
const hashed = await bcrypt.hash('mypassword', 10);
const isMatch = await bcrypt.compare('mypassword', hashed);
```

### 5. cors
- Purpose: Cross-Origin Resource Sharing middleware
- Working:

  - Enables your backend API to be called from a frontend on a different domain or port.

  - Without it, browser will block cross-origin requests.

✅ Example:
```
const cors = require('cors');
app.use(cors());
```

### 6. dotenv
- Purpose: Loads environment variables from .env file
- Working:

  - Keeps sensitive config (e.g., database URL, API keys) outside of your codebase.

  - Loads variables from .env into process.env.

✅ .env file:
``` 
PORT=3000
JWT_SECRET=your_secret_key
```
✅ Code:
```
require('dotenv').config();
console.log(process.env.PORT);
```

### 7. jsonwebtoken
- Purpose: Create and verify JWTs (JSON Web Tokens)
- Working:

  - Used for authentication.

  - After login, a token is generated and sent to the client.

  - Client sends token in headers for protected routes.

✅ Example:
```
const jwt = require('jsonwebtoken');
const token = jwt.sign({ id: user._id }, 'secretkey', { expiresIn: '1h' });

const verified = jwt.verify(token, 'secretkey');
```

### 8. cookie-parser
- Purpose: Middleware to parse cookies from request headers
- Working:

  - Extracts cookie values and makes them available on req.cookies.

✅ Example:
```
const cookieParser = require('cookie-parser');
app.use(cookieParser());
```
✅ Usage:
```
res.cookie('token', 'abc123', { httpOnly: true });
console.log(req.cookies.token);
```

## Combined Workflow (Simplified):
- Express serves the routes.
- Mongoose connects and interacts with MongoDB.
- dotenv loads secrets.
- bcryptjs hashes passwords.
- jsonwebtoken creates JWTs after login.
- cookie-parser reads JWTs from cookies.
- cors allows frontend to access the backend.
- nodemon restarts server on code changes (dev only).