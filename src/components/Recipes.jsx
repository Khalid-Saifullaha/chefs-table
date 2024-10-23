import { useEffect, useState } from "react";

const Recipes = ({addRecipeQueue}) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("./recipes.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  return (
    <div className="md:w-2/3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {recipes.map((recipe) => (
        <div key={recipe.recipe_id} className="card bg-base-100 border-2">
          <figure className="px-8 pt-6">
            <img 
              className="md:h-52 md:w-full object-cover rounded-xl"
              src={recipe.recipe_image}
              alt="recipe item"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-2xl text-gray-800 font-semibold">{recipe.recipe_name}</h2>
            <p className="text-base text-gray-600">{recipe.description}</p>
            <h3 className="text-lg text-gray-800 font-medium">Ingredients: {recipe.ingredients.length}</h3>
              <ul className="ml-8">
                {recipe.ingredients.map((item, index)=> <li className="list-disc text-gray-600" key={index}>{item}</li>)}
              </ul>
              <div className="flex  gap-4">
                <div className="flex items-center">
                <i className="fa-regular fa-clock mr-3 text-2xl"></i>  
                <p>{recipe.preparing_time}</p>
                </div>
                <div className="flex items-center">
                <i className="fa-solid fa-fire-flame-curved mr-3 text-2xl"></i>  
                <p>{recipe.calories}</p>
                </div>
              </div>
            <div className="card-actions ">
              <button onClick={()=>addRecipeQueue(recipe)} className="btn bg-green-400 rounded-full px-8 text-xl text-gray-800 mt-6 font-medium">Want To Cook</button>
            </div>
          </div>
        </div>
      ))}
        </div>
    </div>
  );
};

export default Recipes;
