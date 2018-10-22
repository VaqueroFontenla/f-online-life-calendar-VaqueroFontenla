import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Edition.css';

class Edition extends Component {
    render() {
      const {
              handleChangeDate,
              handleChangeStatus,
              handleChangeMessage,
              onSubmitHandler,
              status} = this.props;
        return (
          <div className="edition">
            <form className="form">
              <label htmlFor="date"
                     name="date"
                     className="label"
                     >
                     Fecha
              </label>
              <input id="date"
                     type="date"
                     className="input-date"
                     name="date"
                     onChange={ handleChangeDate }/>
              <label name="status"
                     className="label"
                      >
                      Estado
               </label>
               <div className="status">
               <label htmlFor="happy"
                     name="happy"
                     className="label"
                     >
                     <i className="fas fa-smile"></i>
               </label>
               <input id="happy"
                      type="radio"
                      name="happy"
                      className="input-radio"
                      value=":)"
                      onChange={ handleChangeStatus }
                      />
                    <label htmlFor="sad"
                      name="sad"
                      className="label"
                      >
                      <i className="fas fa-sad-tear"></i>
                </label>
                <input id="sad"
                       type="radio"
                       name="sad"
                       value=":("
                       onChange={ handleChangeStatus }
                       />
                </div>
                { status === ':)' &&
                <div className="input-message">
                <label
                           htmlFor="message"
                           name="message"
                           className="label"
                       >
                           Mensaje
                </label>

               <textarea
                   rows="5"
                   cols="28"
                   id="message"
                   placeholder="¿Por qué es un buen día?"
                   onChange={ handleChangeMessage }
               />
             </div>
           }
//El boton submitt no regresa a la página principal
             <Link to="/" className="link button">
             <input type="submit"
                      className="link button yes"
                      value="Aceptar"
                      onClick={ onSubmitHandler }
                />
              </Link>
              <Link to="/" className="link button">
              <input type="submit"
                     className="link button no"
                     value="Cancel"

                />
              </Link>

            </form>


          </div>
        );
    }
}

export default Edition;
