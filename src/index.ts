import logger from "./components/logger.js";
import greeter from "./components/greeter";

import cocktails from "./assets/cocktails.svg";
import aeronaut from "./assets/aeronaut-2016.png";
import cat from "./assets/cat.jpg";
import spiderMan from "./assets/spider-man.gif";


logger.log("Hello World");

greeter("Alex");

logger.log(cocktails);
logger.log(aeronaut);
logger.log(cat);
logger.log(spiderMan);
