import React, { useEffect, useState} from 'react'
import axios from 'axios'
import { withFormik } from 'formik';
import { EditorState } from 'draft-js';
// import { RichEditorExample } from './RichEditor';  // rename
import { DraftTextArea } from './DraftEditor';
import * as Yup from 'yup';


const formikEnhancer = withFormik({
  mapPropsToValues: props => ({
    editorState: new EditorState.createEmpty(),
    email: '',
  }),
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email("That's not an email")
      .required('Required!'),
  }),
  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      // you probably want to transform draftjs state to something else, but I'll leave that to you.
    console.log(values);

      setSubmitting(false);
    }, 1000);
  },
  displayName: 'MyForm',
});

const MyForm = ({
    values,
    touched,
    dirty,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset,
    setFieldValue,
    isSubmitting,
  }) => (
    <form className="col s12" onSubmit={handleSubmit}>
                <label>Théme</label>
                <select className={"browser-default " + (touched.category && errors.category ? "has-error" : null)} name="category" value={values.category} onChange={handleChange} onBlur={handleBlur}>
                  <option value="" disabled defaultValue >Choisissez un théme</option>
                  {category}
                </select>
                {touched.category && errors.category ? <span className="helper-text">{errors.category}</span> : null}
                <div className="row">
                  <div className="input-field col s12">
                    <input id="title" type="text" className="validate" name="title" value={values.title} onChange={handleChange} onBlur={handleBlur} />
                    <label htmlFor="title">Titre</label>
                    {touched.title && errors.title ? <span className="helper-text">{errors.title}</span> : null}
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                  <DraftTextArea
      editorState={values.editorState}
      onChange={setFieldValue}
      onBlur={handleBlur}
    />
                  
                 
                 {/* 
                  <textarea className="materialize-textarea" name="markdown" value={values.markdown} onChange={handleChange} onBlur={handleBlur}></textarea>
                    <label htmlFor="textarea1">Contenu</label>
                 */}   
                    {touched.markdown && errors.markdown ? <span className="helper-text">{errors.markdown}</span> : null}
                  </div>
                </div>
                <div className="row d-inline">
                    <div className="input-field col s12">
                        <input id="author" type="text" className={"validate " + (touched.author && errors.author ? "has-error" : null)} name="author" onChange={handleChange} onBlur={handleBlur}/>
                        <label htmlFor="author">Author</label>
                        {touched.author && errors.author ? <span className="helper-text">{errors.author}</span> : null}
                    </div>
                  </div>
                <button className="btn waves-effect waves-light" type="submit" disabled={isSubmitting} name="action">Soumettre
                  <i className="material-icons right">send</i>
                </button>
            </form>
);

const MyEnhancedForm = formikEnhancer(MyForm);

export default function FormikWithDraft  ()  {
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
    return <option key={index} value={category._id}>{category.title}</option>
  })

return     <div className="formik-draftjs" id="formik-draftjs">
   
     
      <MyEnhancedForm user={{ email: 'hello@reason.nyc' }} />
      
    </div>
};