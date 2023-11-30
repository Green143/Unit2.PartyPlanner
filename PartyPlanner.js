let events = []
const list =document.querySelector(".list")


function render(){

    const html = events.map((event) => {
        return `
    
        <div>
            <h2>${event.name}</h2>
            <h3>Description:</h3> <h4>${event.description}</h4>
            <h3>Date:</h3> <h4>${event.date}</h4>
            <h3>Location:</h3> <h4>${event.location}</h4> 
        </div>
        `
    })
    list.innerHTML = html.join(' ')
    
}

async function fetchEvents (){
    const response = await fetch ("https://fsa-crud-2aa9294fe819.herokuapp.com/api/2310/events")
    //console.log(response)
    const data = await response.json ()
    //console.log(data.data)
    events = data.data
    console.log(events)
    render()


    const deleteButton = document.querySelector("#deleteEvent")
    let noEvent =0
   

deleteButton.addEventListener("click",()=> {
    //change innerHTML to remove the event when the button is clicked
    deleteButton.innerHTML=0
    events

    })
}
fetchEvents()


