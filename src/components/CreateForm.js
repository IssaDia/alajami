import React, { useEffect, useState} from 'react'
import axios from 'axios'

export default function CreateForm() {

  const [categories, setcategories] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/categories/')
  .then(function (response) {
    // handle success
    setcategories(response.data);
    
    
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
 
  }, [])

  const category = categories.map((category, index) => {
    return <option key={index} value={index}>{category.title}</option>
  })



    return (
       <>
       <h1>Ajouter un article</h1>
      <div className="row">
      <form className="col s12">
        <label>Théme</label>
        <select className="browser-default">
          <option value="" disabled defaultValue>Choisissez un théme</option>
          {category}
        </select>
        <div className="row">
          <div className="input-field col s12">
            <input id="title" type="text" className="validate" />
            <label htmlFor="title">Titre</label>
            <span className="helper-text" data-error="wrong" data-success="right">veuillez mettre un titre entre 3 et 150 caractéres</span>
          </div>
        </div>
        <div className="row">
        <div className="input-field col s12">
          <textarea id="textarea1" className="materialize-textarea"></textarea>
          <label htmlFor="textarea1">Contenu</label>
          <span className="helper-text" data-error="wrong" data-success="right">veuillez mettre un contenu entre 10 et 1500 caractéres</span>
        </div>
      </div>
      <div className="row d-inline">
          <div className="input-field col s12">
            <input id="author" type="text" className="validate" />
            <label htmlFor="author">Author</label>
            <span className="helper-text" data-error="wrong" data-success="right">veuillez mettre un nom entre 10 et 50 caractéres</span>
          </div>
        </div>
        <button className="btn waves-effect waves-light" type="submit" name="action">Soumettre
          <i className="material-icons right">send</i>
        </button>
      </form>
    </div>
    </>
);
      }
