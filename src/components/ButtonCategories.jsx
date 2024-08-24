import React from 'react'
import "../cssfolder/ButtonCategories.css";
import { Link } from "react-router-dom";

const ButtonCategories = () => {
    return (
        <div className="shirts-section1">
            <h2>Categorias</h2>
            <div className="Button-category">
                <Link to={`/productos/arabe`}><button>Árabe</button></Link>
                <Link to={`/productos/disenador`}><button>Diseñador</button></Link>
                <Link to={`/productos/nicho`}><button>Nicho</button></Link>
            </div>
        </div>
    )
}

export default ButtonCategories