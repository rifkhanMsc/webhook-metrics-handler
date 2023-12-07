// const express = require('express');
// import { json, urlencoded } from 'body-parser';
// import routes from './routes/api'; 
// import { configureAWS } from './utils/awsConfig'; // Configure AWS SDK
// import{config} from './config/config';


// // Use AWS configuration
// configureAWS.configureAWS(config.aws);

// // Access other configuration settings
// //const dbConnectionString = config.database.connectionString;

// const app = express();

// // Middleware
// app.use(json());
// app.use(urlencoded({ extended: true }));

// // Use AWS SDK configuration
// configureAWS();

// // Routes
// app.use('/api', routes);

// // Error handling middleware
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send('Something went wrong!');
// });

// // Start the server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
const express = require('express');

const app = express();

app.use('/api',async (req, res) => {
  try {
    res.status(200).json({"message":"ok"});
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen("3000", () => {
    console.log("Hello World!")
    // SyntaxError: Cannot use import statement outside a module
})