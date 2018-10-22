import React, { Component, Fragment } from 'react';
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
              console.log(this.props)
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
                     name="date"
                     onChange={ handleChangeDate }/>
              <div className="status">
              <label name="status"
                     className="label"
                      >
                      Estado
               </label>
               <label htmlFor="happy"
                     name="happy"
                     className="label"
                     >
                     <i className="fas fa-smile"></i>
               </label>
               <input id="happy"
                      type="radio"
                      name="happy"
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
                <div>
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
                   onChange={ handleChangeMessage }
               />
             </div>
           }

             <Link to="/">
             <input type="submit"
                      className="button button-yes"
                      value="Aceptar"
                      onClick={ onSubmitHandler }
                />
              </Link>
              <Link to="/">
              <input type="submit"
                     className="button button-no"
                     value="Cancel"

                />
              </Link>

            </form>


          </div>
        );
    }
}

export default Edition;
