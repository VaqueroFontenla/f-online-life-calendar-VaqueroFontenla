import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import './Edition.css';

class Edition extends Component {
    render() {
        return (
          <div className="edition">
            <form>
              <label htmlFor="date"
                     name="date"
                     className="label"
                     >
                     Fecha
              </label>
              <input id="date"
                     type="date"
                     name="date"/>
              <label name="status"
                     className="label"
                      >
                      Estado
               </label>
               <label htmlFor="happy"
                     name="happy"
                     className="label"
                     >
                     Happy
               </label>
               <input id="happy"
                      type="radio"
                      name="happy"
                      value=":)"
                      checked
                      />
                    <label htmlFor="sad"
                      name="sad"
                      className="label"
                      >
                      Sad
                </label>
                <input id="sad"
                       type="radio"
                       name="sad"
                       value=":("
                       />
                <label
                           htmlFor="message"
                           name="message"
                           className="label"
                       >
                           Mensaje
                </label>

               <input
                   id="message"
                   type="text"
                   name="message"
                   placeholder="¿Por qué es un buen día?"
               />
               <input type="submit"
                      className="button button-yes"
                      value="Aceptar"
                />

              <input type="submit"
                     className="button button-no"
                     value="Cancel"
                />

            </form>
          <Link to="/" className="button button-back">Volver</Link>

          </div>
        );
    }
}

export default Edition;
