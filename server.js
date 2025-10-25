import Gun from 'gun';
import http from 'http';
import express from 'express';

const app = express();
app.use(Gun.serve);

// použij port, který Render přiděluje
const port = process.env.PORT || 8765;
const server = app.listen(port, () => {
  console.log(`✅ Gun relay running on port ${port}`);
});

Gun({ web: server });
