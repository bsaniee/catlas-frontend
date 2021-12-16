import { useState, useEffect } from "react"
import {Routes, Route} from "react-router-dom"
import Index from "../pages/Index"
import Show from "../pages/Show"
import { SliderData } from "./SliderData"

const Main = (props) => {
    const [cats, setCats] = useState(null)
    const URL = "https://catlas-backend2.herokuapp.com/cats"

    //Calls backend API to get Cat List
    const getCats = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setCats(data)
    }

    //Add new cat
    const createCat = async (newCat) => {
        await fetch(URL, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newCat)
        })
        getCats()
    }

    //Update a cat
    const updateCat = async (cat, id) => {
        await fetch(URL + id, {
            method: "put",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(cat)
        })
        getCats()
    }

    // Delete a cat 
    const deleteCat = async (id) => {
        await fetch(URL + id, {
            method: "delete"
        })
        getCats()
    }
    
    useEffect(() => getCats(), [])

    return (
        <main>
            <Routes>
                <Route path="/" element={
                <Index cats={cats} createCat={createCat} slides={SliderData}/>
                }/>
                <Route path="/cats/:id" element={<Show cats={cats} updateCat={updateCat} deleteCat={deleteCat}/>}/>
            </Routes>
        </main>
    )
}

export default Main