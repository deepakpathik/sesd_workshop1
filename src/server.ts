
import App from './app';
import TodoRoutes from '../routes/todo.route';

const app = new App([new TodoRoutes()]);
app.startServer();