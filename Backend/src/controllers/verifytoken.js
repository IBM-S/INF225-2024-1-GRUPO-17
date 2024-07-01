import jwt from 'jsonwebtoken';

export default function VerifySign(req, res, nxt) {
	const token = req.header("auth-token");
	if(!token) return res.status(401).send("No tienes autorizado entrar.");
	try {
		const payload = jwt.verify(token, process.env.SECRET_TOKEN);
		req.user = payload;
		nxt();
	} catch (error) {
		console.log(error);
		return res.status(401).send("No tienes autorizado entrar.");
	}
}