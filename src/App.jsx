import { useState } from "react";
import Banner from "./components/Banner";
import Header from "./components/Header";
import OurRecipes from "./components/OurRecipes";
import Recipes from "./components/Recipes";
import Sidebar from "./components/Sidebar";


const App = () => {
  const [recipeQueue, setRecipeQueue] = useState([])
  

  const addRecipeQueue = (recipe) => {
    const isExist = recipeQueue.find(
      previousRecipe => previousRecipe.recipe_id === recipe.recipe_id)
    if(!isExist){
      setRecipeQueue([...recipeQueue, recipe])
    } else{
      alert('Recipe already exists in the queue')
    }

    
  }
  console.log(recipeQueue);
  return (
    <div className="container mx-auto px-4 ">
      {/* Header */}
      <Header></Header>
      {/* Banner */}
      <Banner></Banner>
      {/* Our Recipes Section */}
      <OurRecipes></OurRecipes>
      {/* Recipe Card Section */}
      <section className="flex flex-col md:flex-row gap-6">
      <Recipes addRecipeQueue= {addRecipeQueue}></Recipes>
      {/* Sidebar */}
      <Sidebar recipeQueue={recipeQueue}></Sidebar>
      </section>
    </div>
  );
};

export default App;