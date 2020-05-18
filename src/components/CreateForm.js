import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'



export default function CreateForm() {
    return (
       <>
      <div className="row">
      <form className="col s12">
        <div className="row">
          <div className="input-field col s12">
            <input id="title" type="text" className="validate" />
            <label for="email">Email</label>
            <span className="helper-text" data-error="wrong" data-success="right">Helper text</span>
          </div>
        </div>
      </form>
    </div>
    </>
);
      }
