import { useState } from "react"
import { Link } from "react-router-dom"
import ImageSlider from "../components/ImageSlider"
import { SliderData } from "../components/SliderData"
import { Fade } from "react-awesome-reveal";

const Index = (props) => {
    
    const [newForm, setNewForm] = useState({
        name: "",
        color: "",
        breed: "",
        image: "",
        description: ""
    })

    const [searchValue, setSearchValue] = useState("")

    const handleChange = (event) => {
        const newState = {...newForm}
        newState[event.target.name] = event.target.value
        setNewForm(newState)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.createCat(newForm)
        setNewForm({
            name: "",
            color: "",
            breed: "",
            image: "",
            description: ""
        })
    }

    const form = (
        <form onSubmit={handleSubmit}>
            <fieldset>
            <legend>Add a new Cat to the Catlas!</legend>
            <div className="flex-pair">
                <label htmlFor="name">Name</label>
                <input 
                    type="text"
                    value={newForm.name}
                    name="name"
                    id="name"
                    onChange={handleChange}
                />
            </div>
            <div className="flex-pair">
                <label htmlFor="color">Color</label>
                <input 
                    type="text"
                    value={newForm.color}
                    name="color"
                    id="color"
                    onChange={handleChange}
                />
            </div>

            <div className="flex-pair">
                <label htmlFor="breed">Breed</label>
                <input 
                    type="text"
                    value={newForm.breed}
                    name="breed"
                    id="breed"
                    onChange={handleChange}
                />
            </div> 

            <div className="flex-pair">
                <label htmlFor="image">Cat Photo</label>
                <input 
                    type="text"
                    value={newForm.image}
                    name="image"
                    id="image"
                    onChange={handleChange}
                />
            </div>

            <div className="flex-pair">
                <label htmlFor="description">Description</label>
                <input 
                    type="text"
                    value={newForm.description}
                    name="description"
                    id="description"
                    onChange={handleChange}
                />
            </div>
            </fieldset>
            <input type="submit" value="Add Cat" id="add"/>
        </form>
    )
    if (props.cats) {
        return (
            <section>
                <ImageSlider slides={SliderData} />
                {form}
                <input type="search" placeholder="Search for Cats" onChange={(event) => setSearchValue(event.target.value)}/>
                <div className="cats-container">
                    <Fade triggerOnce>
                    {props.cats.filter((cat) => {
                        if (searchValue === "") return cat
                        else if (cat.name.toLowerCase().includes(searchValue.toLowerCase())) return cat
                        else if (cat.breed.toLowerCase().includes(searchValue.toLowerCase())) return cat
                    })
                    .map((cat) => {
                        return (<div key={cat.id} className="cat">
                            <Link to={`/cats/${cat.id}`}>
                                <img src={cat.image}/>
                                <div className="cat-details">
                                    <h1>{cat.name}</h1>
                                    <h2>Cat Type {cat.breed}</h2>
                                </div>
                            </Link>
                        </div>)
                    })}
                    </Fade>
                </div>
            </section>
        )
    } else {
        return (
            <section>
                {form}
                <h1>Loading...</h1>
            </section>
        )
    }
}

export default Index
