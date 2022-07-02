import {
    GetServerSideProps,
    GetServerSidePropsContext,
    InferGetServerSidePropsType,
} from "next";
import constants from "../../public/constants";
import css from "../../styles/Details.module.css";

export const getServerSideProps: GetServerSideProps = async (
    context: GetServerSidePropsContext
) => {
    const resp = await fetch(
        `${constants.API.base}pokemon/${context.params!["id"]}.json`
    );

    return {
        props: {
            pokemonDetails: await resp.json(),
        },
    };
};

// The page is being Server-Side Rendered by NextJS
export default function ServerSideDetails({
    pokemonDetails,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return (
        <>
            {pokemonDetails ? (
                <div className={css.main}>
                    <div className={css.image}>
                        <img
                            src={`${constants.API.base}${pokemonDetails["image"]}`}
                            alt="Image"
                        ></img>
                    </div>
                    <div className={css.details}>
                        <div className={css.name}>{pokemonDetails["name"]}</div>
                        <div className={css.type}>
                            {(pokemonDetails["type"] as any).join(", ")}
                        </div>
                        <div className={css.stats_table}>
                            <div className={css.header}>Attribute</div>
                            <div className={css.header}>Value</div>
                            {(pokemonDetails["stats"] as Array<any>).map(
                                (stat, i) => {
                                    const classes = [
                                        css.entry,
                                        ...(i % 2 == 0 ? [css.alt] : []),
                                    ];
                                    return (
                                        <>
                                            <div className={classes.join(" ")}>
                                                {stat["name"]}
                                            </div>
                                            <div className={classes.join(" ")}>
                                                {stat["value"]}
                                            </div>
                                        </>
                                    );
                                }
                            )}
                        </div>
                    </div>
                </div>
            ) : (
                <div>Loading...</div>
            )}
        </>
    );
}
