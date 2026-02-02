import express, { Router } from 'express';

class TodoRoutes {
    public path: string = "/todos";
    public route: Router = express.Router();

    public initializeRoutes() {
        this.route.get(this.path, (req, res) => {
            res.send("Hello World");
        });
    }
}

export default TodoRoutes;