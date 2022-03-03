//component
const content = () => { 
    return `
    <form>
        <label for="">First Name</label><br>
        <input type="text" id="firstName" name="firstName" value=""><br>
        <label for="">Last Name</label><br>
        <input type="text" id="lastName" name="lastName" value=""><br>
        <label for="">Email address</label><br>
        <input type="email" id="email" name="email" value=""><br>
        <select name="animals" id="animals">
            <option value="both55">Both</option>
            <option value="cats55">Cats</option>
            <option value="dogs55">Dogs</option>
        </select>
        <button>Submit</button>
     </form>
    `
}

const loadEvent = async () => {

    //inserting component into html
    const rootElement = document.getElementById("root")
    rootElement.insertAdjacentHTML('beforeend', content())


    //input event
    const form = rootElement.querySelector("form")

    const inputFields = document.querySelectorAll('input')
    console.log(typeof inputFields)
    console.log(Array.isArray(inputFields))
    
    Array.from(inputFields).map(function(input) {
        input.addEventListener('input', function (e) {
            console.log(e.target.value)
        })
    })

    form.querySelector("select").addEventListener('input', function (e) {
        console.log(e.target.value)
    })

    form.addEventListener('submit', function (e) {
        e.preventDefault()
        console.log(e.target)
    })

    /* for (let input of inputFields) {
        input.addEventListener('input', function (e) {
            console.log(e.target.value)
        })
    } */

    //Fetch variation 1
    const nasaApiKey = `KPARPnsf40jGYXOw4vJzj0yyULp7GTn5LHDXjpQV`
    const requestedDate = `2020-08-21`

    const apod = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${nasaApiKey}&date=${requestedDate}`)

    // console.log(apod)

    const apodJson = await apod.json()
    // console.log(apodJson.explanation)

    //Fetch variation 2
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${nasaApiKey}&date=${requestedDate}`).then(
        function (apodReponse) {
            console.log(apodReponse)
            apodReponse.json().then(
                function (apodResponseJson) {
                    console.log(apodResponseJson.explanation)
                }
            )
        }
    )

}

window.addEventListener('load', loadEvent)