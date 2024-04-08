import React from "react";

interface AsciiTitleProp {
    className?:string | undefined,
}

const AsciiTitle: React.FC<AsciiTitleProp> = ({className}) => {
    const title = `
__      __   _                    _____      __  __        ___ _           
\\ \\    / /__| |__ ___ _ __  ___  |_   _|__  |  \\/  |_  _  | _ ) |___  __ _ 
 \\ \\/\\/ / -_) / _/ _ \\ '  \\/ -_)   | |/ _ \\ | |\\/| | || | | _ \\ / _ \\/ _\` |
  \\_/\\_/\\___|_\\__\\___/_|_|_\\___|   |_|\\___/ |_|  |_|\\_, | |___/_\\___/\\__, |
                                                    |__/             |___/ 
    ------------------------------------------------------------------
   `;

    return <div className={className+" max-[550px]:hidden"}>
        <pre>{title}</pre>
    </div>;
}

export default AsciiTitle;
