import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import constants from "../../public/constants";
import css from "../../styles/Details.module.css";

// The page is being Server-Side Rendered by NextJS
export default function ClientSideDetails() {
    const { query } = useRouter();
    const [pokemonDetails, setPokemonDetails] = useState(null);

    useEffect(() => {
        const id = query["id"];
        async function getPokemonDetails() {
            const resp = await fetch(`${constants.API.base}pokemon/${id}.json`);
            setPokemonDetails(await resp.json());
        }
        if (id) {
            getPokemonDetails();
        }
    }, [query]);

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
