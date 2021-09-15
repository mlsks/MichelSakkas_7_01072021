"use strict"
/* eslint-disable indent */

// eslint-disable-next-line no-unused-vars
class Recipe {
    constructor(
        id,
        name,
        img,
        servings,
        ingredients,
        time,
        description,
        appliance,
        ustensils
    ) {
        this.id = id
        this.name = name
        this.img = img
        this.servings = servings
        this.ingredients = ingredients
        this.time = time
        this.description = description
        this.appliance = appliance
        this.ustensils = ustensils
    }

    // Méthode sur index.html

    display() {
        return `
        <div class="card" id="card">
            <div class="imagecontainer"><img src="img/${this.img}"</img></div>
            <div class="textcontainer">
                <ul id="ul--textcontainer">
                    <div class="card--top">
                        <li class="card--titre">${this.name}</li>
                        <li class="card--time">⏱ ${this.time}min</li>
                    </div>
                    <div class="card--bottom">
                        <div class="card--bottom--ingredients">
                            <li class="card--ingredients">
                            ${this.ingredients
                                .map(
                                    (ingredient) =>
                                        `<li class=''>
                                            <span class="card--ingredients"> 
                                            ${Object.values(ingredient)[0]}
                                            </span>
                                            <span class="card--ingredients--amount" ><i>
                                        ${
                                            Object.values(ingredient)[1] !=
                                            undefined
                                                ? " &nbsp;" +
                                                  Object.values(ingredient)[1]
                                                : " "
                                        } 
                                        ${
                                            Object.values(ingredient)[2] !=
                                            undefined
                                                ? Object.values(ingredient)[2]
                                                : " "
                                        }
                                        </i></span>
                                        </li>
                                        `
                                )
                                .join("")}
                            </li>
                            </div>
                        <li class="card--description">${this.description}</li>
                    </div>
                </ul>
            </div>
        </div>
        `
    }
}
