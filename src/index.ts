import { server } from "./server/server";

const PORT = process.env.PORT;

server.listen(PORT, () => console.log(`Srver Rodando na porta: ${PORT}`));
