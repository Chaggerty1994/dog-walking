import { getCities, getWalkerCities, getWalkers } from "./database.js"

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("walker")) {
            const [,walkerId] = itemClicked.id.split("--")

            for (const walker of walkers) {
                if (walker.id === parseInt(walkerId)) {
                    const assignments = filterWalkerCities(walker)
                    const cities = assignedCityNames(assignments)
              
                    window.alert(`${walker.name} services ${cities}`)
                }
            }
        }
    }
)

const walkers = getWalkers()

// define a function
const cities = getCities()

export const Walkers = () => {
    let walkerHTML = "<ul>"

    for (const walker of walkers) {
        walkerHTML += `<li id="walker--${walker.id}">${walker.name}</li>`
    }

    walkerHTML += "</ul>"

    return walkerHTML
}


// define a function that accepts walker as a parameter

const filterWalkerCities = (walker) => {
    // define an empty array to store all assignment objects
    const assignments = []

    // iterate the array value of walker cities

    for (const assignment of walkerCities) {
        // check if primary key of the walker equals
        //  the foreign key on the assignment
        if (assignment.walkerId === walker.id) {
            // if it does then add the current object 
            // to the array of assignments
            assignments.push(assignment)
        }
    }
    return assignments
}

// const assignedCities = filterWalkerCities()


// define a function that builds a string of city names. 
// needs assignments as a parameter.

const assignedCityNames = (assignments) => {
    // define an empty string that will get appended with matching cities
    let cityNames = ""

    // iterate the array of assignment objects
    for (const assignment of assignments) {
        // for each assignment, iterate the cities array to find a match
        if (city.id === assignment.cityId) {
            // add the name of the matching city to the string of city names
            cityNames = `${cityNames} and ${city.name}`
        }
    }

    return cityNames
}



