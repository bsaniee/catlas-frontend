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

    