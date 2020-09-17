import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Formik } from 'formik'
import * as Yup from 'yup'
import CKEditor from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

const validationSchema = Yup.object().shape({
  category: Yup.string().ensure().required('Merci de spécifier un théme'),
  title: Yup.string().min(10, 'Votre titre doit comporter un minimum de 10 caractéres')
    .max(255, 'Votre texte doit comporter  un maximum de 255 caractéres').required('Merci de spécifier un texte'),
  // markdown :  Yup.string().required('Merci de spécifier un texte'),
  author: Yup.string().min(3, 'Le nom de l\'auteur doit comporter un minimum de 3 caractéres')
    .max(255, 'Votre nom de l\'auteur doit comporter un maximum de 255 caractéres').required('Merci de spécifier un author')
})

export default function CreateForm () {
  const [formValues, setformValues] = useState()
  const [markdownValue, setmarkdownValue] = useState({ markdown: '' })
  const [categories, setcategories] = useState([])
  const initialValues = {
    category: '',
    title: '',
    author: ''
  }

  useEffect(() => {
    axios.get('http://localhost:5000/categories/')
      .then(function (response) {
      // handle success
        setcategories(response.data)
      }
      )
      .catch(function (error) {
      // handle error
        console.log(error)
      }
      )
  }, [])

  console.log(formValues)

  const category = categories.map((category, index) => {
    return <option key={index} value={category._id}>{category.title}</option>
  })
  return (
    <>
      <div className='row'>
        <div className='col-md-6 mx-auto form-create'>
          <h1>Ajouter un article</h1>
          <Formik
            initialValues={initialValues} validationSchema={validationSchema} onSubmit={(values) => { 
              setformValues(values) }}
          >
            {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
              <form className='col s12' onSubmit={handleSubmit}>
                <label>Théme</label>
                <select className={'browser-default ' + (touched.category && errors.category ? 'has-error' : null)} name='category' value={values.category} onChange={handleChange} onBlur={handleBlur}>
                  <option value='' disabled defaultValue>Choisissez un théme</option>
                  {category}
                </select>
                {touched.category && errors.category ? <span className='helper-text'>{errors.category}</span> : null}
                <div className='row'>
                  <div className='input-field col s12'>
                    <input id='title' type='text' className='validate' name='title' value={values.title} onChange={handleChange} onBlur={handleBlur} />
                    <label htmlFor='title'>Titre</label>
                    {touched.title && errors.title ? <span className='helper-text'>{errors.title}</span> : null}
                  </div>
                </div>
                <div className='row'>
                  <div className='input-field col s12'>
                    <CKEditor
                      editor={ClassicEditor} onInit={editor => {
                      // You can store the "editor" and use when it is needed.
                        console.log('Editor is ready to use!', editor)
                      }}
                      onChange={(event, editor) => {
                        const data = editor.getData()
                        setmarkdownValue({ markdown: data })
                      }}
                    />
                    <label htmlFor='textarea1'>Contenu</label>
                    {touched.markdown && errors.markdown ? <span className='helper-text'>{errors.markdown}</span> : null}
                  </div>
                </div>
                <div className='row d-inline'>
                  <div className='input-field col s12'>
                    <input id='author' type='text' className={'validate ' + (touched.author && errors.author ? 'has-error' : null)} name='author' onChange={handleChange} onBlur={handleBlur} />
                    <label htmlFor='author'>Author</label>
                    {touched.author && errors.author ? <span className='helper-text'>{errors.author}</span> : null}
                  </div>
                </div>
                <button className='btn waves-effect waves-light' type='submit' disabled={isSubmitting} name='action'>Soumettre
                  <i className='material-icons right'>send</i>
                </button>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </>)
}
