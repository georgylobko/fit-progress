import app from "./app";
import config from 'config';

const port = config.get('server.port');

const server = app.listen(port, () => {
    console.log(`Server up and running on port ${port}`);
});

export default server;
