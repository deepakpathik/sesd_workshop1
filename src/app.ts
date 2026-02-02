import express from 'express';

class App {
    public app: express.Application;
    public port: number | string = 8080;

    constructor() {
        this.app = express();
    }

    public startServer() {
        this.app.listen(this.port, () => {
            console.log(`Server Started`);
        });
    }
}

export default App;