import { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch']);

  const onAddCategory = (value) => {
    if (categories.includes(value)) return;
    setCategories([value, ...categories]);
  };
  console.log(categories);

  return (
    <>
    <h1>GifExpertApp</h1>
    <AddCategory onNewCategory={onAddCategory} />
    
      {categories.map((category) => {
        return <GifGrid key={category} category={category} />;
      })}
    </>
);
};
