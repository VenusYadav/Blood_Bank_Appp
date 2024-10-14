const JWT = require('jsonwebtoken');

module.exports = async (req, res, next) => {
    try {
        console.log('Auth Middleware: Checking authorization header');
        const authHeader = req.headers['authorization'];
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            console.log('Auth Middleware: No token provided');
            return res.status(401).send({
                success: false,
                message: 'Auth Failed: No token provided'
            });
        }

        console.log('Auth Middleware: Token found, verifying');
        const token = authHeader.split(" ")[1];
        JWT.verify(token, process.env.JWT_SECRET, (err, decode) => {
            if (err) {
                console.log('Auth Middleware: Invalid token');
                return res.status(401).send({
                    success: false,
                    message: 'Auth Failed: Invalid token'
                });
            } else {
                console.log('Auth Middleware: Token verified, user:', decode.userId);
                req.body.userId = decode.userId;
                next();
            }
        });
    } catch (error) {
        console.log('Auth Middleware: Error occurred:', error);
        return res.status(401).send({
            success: false,
            error,
            message: 'Auth Failed'
        });
    }
};
