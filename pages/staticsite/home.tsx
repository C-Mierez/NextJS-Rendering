import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import PreviewCard from "../../components/PreviewCard";
import { constants } from "../../public/constants";
import css from "../../styles/Home.module.css";

export const getStaticProps: GetStaticProps = async (context) => {
    const resp = await fetch(constants.API.index);

    return {
        props: {
            pokemon: await resp.json(),
        },
    };
};

const StaticSiteHome: NextPage = ({
    pokemon,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
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
                            detailsUrl={`/staticsite/${pokemon["id"]}`}
                        />
                    );
                })}
            </div>
        </>
    );
};

export default StaticSiteHome;
