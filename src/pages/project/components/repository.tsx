import React from "react";
import type { IRepository } from "./repository-interface"

interface RepositoryProp {
    repo: IRepository
}

const Repository: React.FC<RepositoryProp> = ({ repo }) => {
    return <>
    {
        repo && 
        <div className="w-full px-2 py-5 flex">
            <div className="flex-1">
                <div className="text-sm">
                    {repo.language}
                </div>
                <h1 className="font-bold text-lg">
                    {repo.name}
                </h1>
                <div>{repo.description}</div>
                <div>{repo.created_at}</div>
            </div>
            <div className="flex flex-col gap-3 justify-center items-center h-full">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">倉庫連結</button>
                {
                    repo.homepage && <button className="font-medium text-blue-600 hover:underline">網站連結</button>
                }
            </div>
        </div>
    }
    </>
}

export default Repository;