import dotenv from "dotenv";
import "./db";
import app from "./app";

dotenv.config();

import "./models/Video";
import "./models/Comment";
import "./models/User";

const PORT = process.env.PORT || 4000;

const handleListening = () =>
  console.log(`✅ 범주니 서버열렸져염!!!: http://localhost:${PORT}`);

app.listen(PORT, handleListening);
