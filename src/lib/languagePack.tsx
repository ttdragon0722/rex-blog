import { RiJavascriptFill } from "react-icons/ri";
import { PiFileCssFill, PiFileHtmlFill } from "react-icons/pi";
import { SiVuetify,SiPython  } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { GrJava } from "react-icons/gr";
import { MdForkRight } from "react-icons/md";

export const LanguagePack:{[key:string]:any} = {
    "JavaScript":<RiJavascriptFill />,
    "HTML":<PiFileHtmlFill />,
    "Python":<SiPython />,
    "CSS":<PiFileCssFill />,
    "Java":<GrJava />,
    "TypeScript":<BiLogoTypescript />,
    "Vue":<SiVuetify />,
    "fork":<MdForkRight />
}

