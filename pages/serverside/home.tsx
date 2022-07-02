import type {
    GetServerSideProps,
    InferGetServerSidePropsType,
    NextPage,
} from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import css from "../../styles/Home.module.css";
import PreviewCard from "../../components/PreviewCard";
import { constants } from "../../public/constants";
import Link from "next/link";

export const getServerSideProps: GetServerSideProps = async (context) => {
    const resp = await fetch(constants.API.index);

    return {
        props: {
            pokemon: await resp.json(),
        },
    };
};

const ServerSideHome: NextPage = ({
    pokemon,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    return (
        <>
            <Head>
                <title>NextJS Rendering</title>
            </Head>
            <div className={css.card_grid}>
                {(pokemon as Array<any>).map((pokemon, index) => {
                    return (
                        <PreviewCard
                            key={index}
                            pokemon={pokemon}
                            detailsUrl={`/serverside/${pokemon["id"]}`}
                        />
                    );
                })}
            </div>
        </>
    );
};

export default ServerSideHome;
