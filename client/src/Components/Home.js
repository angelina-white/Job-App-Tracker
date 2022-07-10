import {useState} from "react"

function Home()
{

    const [jobApp, setJobApp] = useState({dateApplied: "", company: "", applicationLink: "", description:""})
    const [data, setData] = useState("")

    function handleChangeJobApp(e)
    {
        setJobApp({...jobApp, [e.target.name]: e.target.value})
    }

    function handleSubmitJobApp(e)
    {
        e.preventDefault()

        setData({
            dateApplied: jobApp.dateApplied,
            description: jobApp.description,
            applicationLinke:"",
            company_id:"",
            offer_id:"",
            status:"",
            user_id:""
        })


        // fetch("/jobs", 
        // {
        //     method: 'POST',
        //     headers: 
        //     {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(submitOrderObj)
        // })
        // .then(resp => resp.json())
        // .then(data => handleAddOrderItem(data)) 
    }

    return(
        <div className="home">
            <h2>Home</h2>

            <form onSubmit={handleSubmitJobApp}>
                <label>
                    Date applied:
                    <input name="dateApplied" type="text" placeholder="Enter..." onChange={handleChangeJobApp}/>
                </label>
                <label>
                    Company:
                    <input name="company" type="text" placeholder="Enter..." onChange={handleChangeJobApp}/>
                </label>
                <label>
                    Application link:
                    <input name="applicationLink" type="text" placeholder="Enter..." onChange={handleChangeJobApp}/>
                </label>
                <label>
                    Job description:
                    <input name="description" type="textarea" placeholder="Enter..." onChange={handleChangeJobApp}/>
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}
export default Home