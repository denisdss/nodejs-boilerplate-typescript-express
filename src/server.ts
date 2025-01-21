import createApp from "./app";
import { minimist } from "./utils/minimist";

const app = createApp();

//retrive args from bash command line
let args:any = process.argv.slice(2)
args = minimist(args)

//configure PORT between .env and args
const port = process.env.PORT || args.PORT;

app.listen(port, () => {
  console.log(`🔥 Server running at port http://localhost:${port}`);
});