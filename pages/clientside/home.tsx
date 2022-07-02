import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import css from "../../styles/Home.module.css";
import PreviewCard from "../../components/PreviewCard";
import { constants } from "../../public/constants";

const ClientSideHome: NextPage = () => {
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
                    return (
                        <PreviewCard
                            key={index}
                            pokemon={pokemon}
                            detailsUrl={`/clientside/${pokemon["id"]}`}
                        />
                    );
                })}
            </div>
        </>
    );
};

export default ClientSideHome;
