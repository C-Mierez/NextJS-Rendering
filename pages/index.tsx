import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import constants from "../public/constants";
import css from "../styles/Home.module.css";
import PreviewCard from "../components/PreviewCard";

const Home: NextPage = () => {
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        async function getPokemon() {
            const resp = await fetch(constants.API.index);
            setPokemon(await resp.json());
        }

        getPokemon();
    }, []);

    return (
        <>
            <Head>
                <title>NextJS Rendering</title>
            </Head>
            <div className={css.card_grid}>
                {pokemon.map((pokemon, index) => {
                    return <PreviewCard key={index} pokemon={pokemon} />;
                })}
            </div>
        </>
    );
};

export default Home;
