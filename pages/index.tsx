import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import constants from "../public/constants";
import css from "../styles/Index.module.css";
import PreviewCard from "../components/PreviewCard";
import Link from "next/link";

const Index: NextPage = () => {
    return (
        <>
            <Head>
                <title>NextJS Rendering</title>
            </Head>
            <div className={css.main}>
                <Link href={"/clientside/home/"}>
                    <div className={css.jump}>Client-Side</div>
                </Link>
                <Link href={"/clientside/home/"}>
                    <div className={css.jump}>Server-Side</div>
                </Link>
            </div>
        </>
    );
};

export default Index;
