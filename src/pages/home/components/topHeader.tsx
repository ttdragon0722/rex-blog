"use client";
import React from "react";
import Container from "@/components/container/container"
import { Text } from "@/config/text";
import { useLanguageContext } from "@/context/languageContext";
import Link from "next/link";

const TopHeader = () => {
    const { lang } = useLanguageContext();

    return <div className="relative w-full py-3 small-header text-[12px] z-[2]">
        <Container className="px-8 flex justify-between ">
            <div>{Text[lang].smallHeaderTitle}</div>
            <Link href="https://github.com/ttdragon0722">
                github
            </Link>
        </Container>
    </div>
}

export default TopHeader;