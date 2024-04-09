import { useState } from "react";
export type IPageStatus = "idle" | "loading" | "success" | "error";

const usePageStatus = () => {
    const [pageStatus,setPageStatus] = useState<IPageStatus>("idle");

    return {pageStatus,setPageStatus};
}

export default usePageStatus;