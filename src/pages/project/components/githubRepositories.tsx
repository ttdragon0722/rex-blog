import usePageStatus from "@/hook/usePageStatus";
import React, { useEffect, useState } from "react";

import type { IRepository } from "./repository-interface";
import Repository from "./repository";
import { v4 } from "uuid";

interface GithubRepositoriesProp {
    ref?: React.LegacyRef<HTMLDivElement>;
    className?: string;
}
const getRepositories = async (): Promise<any[]> => {
    const res = await fetch("https://api.github.com/users/ttdragon0722/repos");
    const data = await res.json();

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data');
    }

    return data;
}

const GithubRepositories: React.FC<GithubRepositoriesProp> = ({ref, className }) => {
    const [repositories, setRepositories] = useState<IRepository[]>([]);
    const { pageStatus, setPageStatus } = usePageStatus();
    useEffect(() => {
        const fetchRepositories = async () => {
            try {
                setPageStatus("loading");
                const data = await getRepositories();
                setRepositories(data);
                setPageStatus("success");
            } catch (error) {
                console.error('Error fetching data:', error);
                setPageStatus("error");
            }
        };

        fetchRepositories();
    }, [setPageStatus]);

    return <div ref={ref} className={className}>
        {
            {
                "idle": <></>,
                "loading": <div className="text-center">loading...</div>,
                "error": <div className="text-center">something went error. please try again.</div>,
                "success": <>{repositories && repositories.map((repo) => {
                    return <Repository key={v4()} repo={repo} />
                })}</>
            }[pageStatus]
        }
    </div>
}

export default GithubRepositories;