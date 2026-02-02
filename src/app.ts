import express from 'express';

class App {
    public app: express.Application;
    public port: number | string = 8080;

    constructor(routes: any[]) {
        this.app = express();
        this.initializeMiddlewares();
        this.initializeRoutes(routes);
    }

    public initializeMiddlewares() {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
    }

    public initializeRoutes(routes: any[]) {
        routes.forEach(route => {
            this.app.use('/', route.router);
        });
    }

    public startServer() {
        this.app.listen(this.port, () => {
            console.log(`Server Started`);
        });
    }
}

export default App;