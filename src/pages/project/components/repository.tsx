import React from "react";
import type { IRepository } from "./repository-interface"
import Link from "next/link";
import { LanguagePack } from "@/lib/languagePack";

interface RepositoryProp {
    repo: IRepository
}

const Repository: React.FC<RepositoryProp> = ({ repo }) => {
    return <>
        {
            repo &&
            <div className="w-full px-2 py-5 flex">
                <div className="flex-1">
                    <div className="text-sm flex gap-1 items-center">
                        {LanguagePack[repo.language]}
                        <div>
                            {repo.language}
                        </div>
                        {repo.fork && <div className="flex gap-0 items-center">{LanguagePack["fork"]}fork</div>}
                    </div>
                    <h1 className="font-bold text-lg">
                        {repo.name}
                    </h1>
                    <div>{repo.description}</div>
                    <div>{repo.created_at}</div>
                </div>
                <div className="flex flex-col gap-3 justify-center items-center h-full text-base max-md:text-sm">
                    <Link href={repo.html_url} target="_blank" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">倉庫連結</Link>
                    {
                        repo.homepage &&
                        <Link href={repo.homepage} target="_blank" className="font-medium text-blue-600 hover:underline">網站連結</Link>
                    }
                </div>
            </div>
        }
    </>
}

export default Repository;