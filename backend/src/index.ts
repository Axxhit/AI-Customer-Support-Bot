import app from './app.js';
import { connectToDatabase } from './db/connections.js';

const PORT = process.env.PORT || 5000;
//connect to database
connectToDatabase()
  .then(() => {
    app.listen(PORT, () => 
      console.log(`Server is running on port ${PORT} and connected to database`)
    );
  })
  .catch((error) => console.log(error));




