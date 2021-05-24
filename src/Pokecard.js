import "./Pokecard.css";

/** Creates an individual card with Pokemon information.
 * Takes in props with name, id, type, and experience info
 */
function Pokecard(props) {
    const POKEMON_IMAGE_URL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`
    return (
        <div className="pokecard-card">
            <h5>{props.name}</h5>
            <img src={POKEMON_IMAGE_URL} />
            <p>Type: {props.type}</p>
            <p>EXP: {props.experience}</p>
        </div>
    );
}

export default Pokecard;