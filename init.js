import dotenv from "dotenv";
import "./db";
import app from "./app";

dotenv.config();

import "./models/Video";
import "./models/Comment";
import "./models/User";

const PORT = process.env.PORT || 4000;

const handleListening = () =>
  console.log(
    `✅ 이거 보세요오오!!!! 서버 열렸자나요오오!!!: http://localhost:${PORT}`
  );

app.listen(PORT, handleListening);
