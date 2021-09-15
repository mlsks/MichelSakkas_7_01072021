/////////// Error Message FONCTIONALITE ///////////
// eslint-disable-next-line no-unused-vars
function errorMessage(filteredRecipes) {
    let message = ""
    if (filteredRecipes.length <= 0) {
        message +=
            "Aucune recette ne correspond à votre critère… vous pouvez chercher « tarte aux pommes », « poisson », etc."
        document.getElementById("message").innerHTML = message
    } else {
        // eslint-disable-next-line no-undef
        clearMessageFragment()
    }
}

/////////// Clear Fragments FONCTIONALITE ///////////
// Clear Message Fragment
// eslint-disable-next-line no-unused-vars
function clearMessageFragment() {
    var list = document.getElementById("message")
    while (list.hasChildNodes()) {
        list.removeChild(list.lastChild)
    }
}

// Clear Recipes Fragment
// eslint-disable-next-line no-unused-vars
function clearRecipeFragment() {
    var list = document.getElementById("listeRecettes")
    while (list.hasChildNodes()) {
        list.removeChild(list.lastChild)
    }
}
