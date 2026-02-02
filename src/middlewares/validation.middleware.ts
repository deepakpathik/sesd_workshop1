import { Request, Response, NextFunction, RequestHandler } from 'express';

const validationMiddleware = (requiredFields: string[], skipMissingProperties = false): RequestHandler => {
    return (req: Request, res: Response, next: NextFunction) => {
        const errors: string[] = [];

        if (!skipMissingProperties) {
            requiredFields.forEach(field => {
                if (!req.body[field]) {
                    errors.push(`${field} is missing`);
                }
            });
        }

        if (errors.length > 0) {
            res.status(400).json({ message: 'Validation Failed', errors });
        } else {
            next();
        }
    };
};

export default validationMiddleware;
