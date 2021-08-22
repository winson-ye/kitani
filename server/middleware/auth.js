import jwt, { decode } from 'jsonwebtoken'

const auth = async (req, res, next) => {
    try {
        const token = rec.headers.authorization.split(" ")[1];

        let decodedData = jwt.verify(token, 'test');

        req.userId = decodedData?.id;
    } catch (error) {
        console.log(error) 
    }

    next();
}

export default auth;