import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react";

const Show = (props) => {
    const navigate = useNavigate();
    const params = useParams();
    const id = params.id;
    const cats = props.cats;

    // state for edit form 
    const [editForm, setEditForm] = useState({})

    // useEffect to set state for existing cat when data is available
    useEffect(() => {
        if (props.cats) {
            // grab the specific cat
            const cat = cats.find((c) => c._id === id)
            setEditForm(cat)
        }
    }, [props.cats])

    if (props.cats) {
        // grab the specific cat
        const cat = cats.find((c) => c._id === id)

        // handleChange function for form 
        const handleChange = (event) => {
            const newState = {...editForm}
            newState[event.target.name] = event.target.value
            setEditForm(newState)
            console.log(newState)
        }
        // handleSubmit function for form 
        const handleSubmit = (event) => {
            event.preventDefault()
            props.updateCat(editForm, cat._id)
            navigate("/")
        }

        // removes a cat
        const removeCat = () => {
            props.deleteCat(cat._id)
            navigate("/")
        }
        const form = (
            <form onSubmit={handleSubmit}>
                <fieldset>
                <legend> Edit cat </legend>
                <input 
                    type="text"
                    value={editForm.name}
                    name="name"
                    placeholder="Cat Name"
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    value={editForm.color}
                    name="color"
                    placeholder="Cat Color"
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    value={editForm.breed}
                    name="breed"
                    placeholder="Breed"
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    value={editForm.image}
                    name="image"
                    placeholder="Cat Image"
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    value={editForm.description}
                    name="description"
                    placeholder="Brief Description"
                    onChange={handleChange}
                />
                </fieldset>
                <div className="form-btns">
                    <input type="submit" value="Update Cat" />
                    <button id="delete" onClick={removeCat}> Delete Cat</button>
                </div>
            </form>
        )

        return (
            <div className="cat-show">
                <div className="show-container">
                    <img src={cat.image} alt={cat.name}/>
                    <div className="show-details">
                        <h1>{cat.name}</h1>
                        <h2> {cat.color}</h2>
                        <h4>{cat.description}</h4>
                        <p>{cat.breed}</p>
                    </div>
                </div>
                {form}
            </div>
        )
    }
    else {
        return <h1>No Cat Here!</h1>
    }
}

export default Show