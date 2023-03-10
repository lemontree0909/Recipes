import check from './icons8-check-64.png';

function MyRecipesComponent({label, image, calories, ingredients}) {
    return(<div>
        <div className="container">
            <h2>{label}</h2>
        </div>
        <div className="container">
            <img className="tasty" src={image} alt="meal"/>
        </div>

        <ul className="list">
            {ingredients.map((ingredient, index) => (
                <li key={index}><img src={check} alt="check" className="icon"/> {ingredient}</li>
            ))}
        </ul>

        <div className="container">
            <p className="par">{calories.toFixed()} calories</p>
        </div>

    </div>)
}

export default MyRecipesComponent;