"use strict"

class App {
    constructor() {
        this.recipes = []
        this.searchRecipe = []
        this.displayRecipes = []
        this.ingredients = []
        this.appareils = []
        this.ustensils = []
    }

    async getRecipes() {
        const url = "/recipes.json"
        const response = await fetch(url)
        const data = await response.json()
        let resdata = data.recipes
        // console.log("resdata :", resdata)

        resdata.forEach((recipe) => {
            this.recipes.push(
                // eslint-disable-next-line no-undef
                new Recipe(
                    recipe.id,
                    recipe.name,
                    recipe.img,
                    recipe.servings,
                    recipe.ingredients,
                    recipe.time,
                    recipe.description,
                    recipe.appliance,
                    recipe.ustensils
                )
            )
        })
        this.displayRecipes = this.recipes

        //// Three Objects Search ////
        let ingredientsArray = []
        let ustensilsArray = []
        let appareilsArray = []
        this.recipes.forEach((recipe) => {
            recipe.ingredients.forEach((element) => {
                ingredientsArray.push(element.ingredient)
                ustensilsArray.push(...recipe.ustensils)
                appareilsArray.push(recipe.appliance)
            })

            //// Ingredients ////
            this.ingredients = new Set(ingredientsArray)
            //// Ustensils ////
            this.ustensils = new Set(ustensilsArray)
            //// Appareils ////
            this.appareils = new Set(appareilsArray)
        })
        console.log("together Ingredients: ", this.ingredients)

        console.log("together Ustensils: ", this.ustensils)

        console.log("together Appliances: ", this.appareils)
    }

    /////////// DISPLAY ALL RECIPES ///////////
    listRecipes() {
        let output = ""

        this.displayRecipes.forEach((recipe) => {
            output += recipe.display()
        })
        document.getElementById("listeRecettes").innerHTML = output
    }

    listItems(array, supportHtml) {
        let output = ""
        array.forEach((element) => {
            output += `<li>${element}</li>`
        })

        document.getElementById(supportHtml).innerHTML = output
    }

    /////////// SEARCH FONCTIONALITE ///////////
    filterSearch() {
        // eslint-disable-next-line no-unused-vars
        const searchBar = document.getElementById("searchBar")
        let filteredRecipes = ""
        let searchString = ""
        let allRecipes = this.recipes
        // let ingredients = this.ingredients
        // let appareils = this.appareils
        searchBar.addEventListener("keyup", (e) => {
            searchString = e.target.value.toLowerCase()

            // const showFilteredRecipes = function () {}
            if (searchString.length >= 3) {
                filteredRecipes = this.displayRecipes = this.recipes.filter(
                    (recipe) => {
                        let recipeName = recipe.name
                            .toLowerCase()
                            .includes(searchString)
                        let recipeIngredients = recipe.ingredients.some((i) =>
                            i.ingredient.toLowerCase().includes(searchString)
                        )
                        let recipeDescription = recipe.description
                            .toLowerCase()
                            .includes(searchString)
                        let recipeAppliance = recipe.appliance
                            .toLowerCase()
                            .includes(searchString)
                        let recipeUstensils = recipe.ustensils.some((u) =>
                            u.toLowerCase().includes(searchString)
                        )
                        return (
                            // Recherche par nom
                            recipeName ||
                            // Recherche par ingrédients
                            recipeIngredients ||
                            // Recherche par description
                            recipeDescription ||
                            // Recherche par appliance
                            recipeAppliance ||
                            // Recherche par ustensils
                            recipeUstensils
                        )
                    }
                )

                // Utilities Error Message
                // eslint-disable-next-line no-undef
                errorMessage(filteredRecipes)

                // Liste des Recipes filtrée
                this.listRecipes(filteredRecipes)

                // this.listUstensils(filteredRecipes)

                // console.log(
                //     "ListeUstenciles",
                //     this.listUstensils(filteredRecipes)
                // )
            } else {
                let rePaint = ""
                // Utilities Clear Message Fragment
                // eslint-disable-next-line no-undef
                clearMessageFragment()

                // UtilitiesClear Recipes Fragment
                // eslint-disable-next-line no-undef
                clearRecipeFragment()

                allRecipes.forEach((recipe) => {
                    rePaint += recipe.display()
                })
                document.getElementById("listeRecettes").innerHTML = rePaint
            }
        })
    }

    async run() {
        await this.getRecipes()
        this.listRecipes()
        this.listItems(this.ingredients, "ul-ingredients")
        this.listItems(this.appareils, "ul-appareils")
        this.listItems(this.ustensils, "ul-ustensiles")
        this.filterSearch()
    }
}

let app = new App()
app.run()
