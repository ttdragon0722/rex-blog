import usePageStatus from "@/hook/usePageStatus";
import React, { useEffect, useRef, useState } from "react";

import type { IRepository } from "./repository-interface";
import Repository from "./repository";
import { v4 } from "uuid";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

interface GithubRepositoriesProp {
    className?: string;
    style?: React.CSSProperties;
    setHeight: React.Dispatch<React.SetStateAction<number>>;
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

const GithubRepositories: React.FC<GithubRepositoriesProp> = ({ setHeight, style, className }) => {
    const [repositories, setRepositories] = useState<IRepository[]>([]);
    const { pageStatus, setPageStatus } = usePageStatus();

    const reposRef = useRef<HTMLDivElement>(null);

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

    useEffect(() => {
        if (reposRef.current) {
            console.log(reposRef.current.offsetHeight);
            setHeight(reposRef.current.offsetHeight);
        }
    }, [reposRef, setHeight]);

    useEffect(() => {
        const currentRef = reposRef.current;

        const handleResize = () => {
            if (currentRef) {
                const { height } = currentRef.getBoundingClientRect();
                setHeight(height);
                ScrollTrigger.refresh(true);
            }
        };

        const observer = new ResizeObserver((entries) => {
            for (let entry of entries) {
                const { height } = entry.contentRect;
                setHeight(height);
                ScrollTrigger.refresh(true);
            }
        });

        if (currentRef) {
            observer.observe(currentRef);
            window.addEventListener('resize', handleResize);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
                window.removeEventListener('resize', handleResize);
            }
        };
    }, [reposRef, setHeight]);


    return <div ref={reposRef} style={{ ...style }} className={className}>
        {
            {
                "idle": <></>,
                "loading": <div className="text-center">loading...</div>,
                "error": <div className="text-center">something went error. please try again.</div>,
                "success": <div className="py-20 max-md:py-0">{repositories && repositories.map((repo) => {
                    return <Repository key={v4()} repo={repo} />
                })}</div>
            }[pageStatus]
        }
    </div>
}

export default GithubRepositories;