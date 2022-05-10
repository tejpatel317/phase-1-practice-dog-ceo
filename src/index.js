console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", () => {
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then((resp) => resp.json())
    .then((data) => {
        const arrayOfDogImages = data.message
        arrayOfDogImages.forEach(function(image) {
            const imageContainer = document.getElementById("dog-image-container")
            let dogImage = document.createElement("img");
            dogImage.setAttribute("src", image)
            imageContainer.appendChild(dogImage)
        })
    })

    fetch("https://dog.ceo/api/breeds/list/all")
    .then((resp) => resp.json())
    .then((data) => {
        const objectOfDogBreeds = data.message
        for (const breed in objectOfDogBreeds) {
            const breedContainer = document.getElementById("dog-breeds")
            let dogBreed = document.createElement("li")
            dogBreed.addEventListener("click", (e) => {
                e.target.style.color = "blue"
            })
            dogBreed.textContent = breed
            if (objectOfDogBreeds[breed][0] != undefined) {
                for (const type of objectOfDogBreeds[breed]) {
                    let dogTypeList = document.createElement("ul")
                    let dogType = document.createElement("li")
                    dogType.setAttribute("hidden", false);
                    dogType.textContent = type
                    dogBreed.appendChild(dogTypeList).appendChild(dogType);
                }
            }
            breedContainer.appendChild(dogBreed)
        }
    })
    let filter = document.getElementById("breed-dropdown")
    filter.addEventListener("change", (e) => {
        let arrayDog = document.getElementById("dog-breeds").childNodes
        for (i=1; i< arrayDog.length; i++){
            arrayDog[i].style.visibility = "visible"
            if (e.target.value != arrayDog[i].innerHTML.charAt(0)){
                arrayDog[i].style.visibility = "hidden"
            }
        }
    })
})


/*let filter = document.getElementById("breed-dropdown")
        filter.addEventListener("change", (e) => {
            const arrayDog = document.getElementById("dog-breeds").childNodes
            for (const dog in arrayDog) {
                arrayDog[dog].setAttribute("style", "hidden");
            }
        })*/