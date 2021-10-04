import React from "react";
import swal from 'sweetalert';
import { db } from "../../components/Firebase/Firebase";
import firebase from "firebase/app"
import { useCartContext } from "../../context/CartContext";
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { Link } from "react-router-dom";
// CartContext


const Formulario = () => {

    const {cart, totalPrice, updateItemStock} = useCartContext();


    return (
        <div className='form-container'>
            <Formik
                initialValues={{
                    name: '',
                    phone: '',
                    mail: '',
                    mailVerif: ''
                }}

                validate={(values) => {
                    let err = {}

                    // Validacion nombre
                    if (!values.name) {
                        err.name = 'Por favor ingresa un nombre'
                    } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.name)) {
                        err.name = 'El nombre solo puede contener letras y espacios'
                    }

                    // Validacion Telefono
                    if (!values.phone) {
                        err.phone = 'Por favor ingresa un telefono'
                    } else if (!/^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/
                        .test(values.phone)) {
                        err.phone = 'El formato de telefono ingresado es incorrecto.'
                    }

                    // Validacion correo
                    if (!values.mail) {
                        err.mail = 'Por favor ingresa un correo electronico'
                    } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.mail)) {
                        err.mail = 'El correo solo puede contener letras, numeros, puntos, guiones y guion bajo.'
                    }

                    // Validacion verifcorreo
                    if (!values.mailVerif) {
                        err.mailVerif = 'Por favor repite el correo electronico'
                    } else if (values.mailVerif !== values.mail) {
                        err.mailVerif = 'Los correo electronicos deben coincidir'
                    }

                    return err
                }}

                onSubmit={async (values) => {
                    const newOrder = {
                        buyer: {
                          Nombre: values.name,
                          Correo: values.mail,
                          Telefono: values.phone,
                        },
                        items: cart,
                        date: firebase.firestore.Timestamp.fromDate(new Date()),
                        total: totalPrice,
                      };
                      const resp = await db.collection("compras").add(newOrder);
                      swal("Gracias por tu compra!", `Tu orden de compra es: ${resp.id}`, "success");
                      cart.map((item) => {
                        return updateItemStock(item.id, item.stock - item.quantity)
                      })
                }}
            >
                {({ errors }) => (
                    <Form className="container w-50">
                        <div className="form-group">
                            <label htmlFor="name" className="form-label">Nombre</label>
                            <Field
                            className="form-control"
                                type="text"
                                id='name'
                                name='name'
                                placeholder='Ingrese su nombre completo..'
                            />
                            <ErrorMessage name='name' component={() => (
                                <div className='error'> {errors.name} </div>
                            )} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Telefono</label>
                            <Field
                            className="form-control"
                                type="tel"
                                id='phone'
                                name='phone'
                                placeholder='11xxxxxxxx (11 + 8digits) / 54911xxxxxxxx (54911 + 8digits) '
                            />
                            <ErrorMessage name='phone' component={() => (
                                <div className='error'> {errors.phone} </div>
                            )} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="mail">Correo</label>
                            <Field
                            className="form-control"
                                type="email"
                                id='mail'
                                name='mail'
                                placeholder='mail@mail.com'
                            />
                            <ErrorMessage name='mail' component={() => (
                                <div className='error'> {errors.mail} </div>
                            )} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="mailVerif">Repetir Correo</label>
                            <Field
                            className="form-control"
                                type="email"
                                id='mailVerif'
                                name='mailVerif'
                                placeholder='mail@mail.com'
                            />
                            <ErrorMessage name='mailVerif' component={() => (
                                <div className='error'> {errors.mailVerif} </div>
                            )} />
                        </div>
                        <Link to="/cart"><button className="btn btn-outline-primary rounded-0 m-3" type="submit">Volver atrás</button></Link> 
                        <button className="btn btn-outline-primary rounded-0 m-3" type="submit">Continuar</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default Formulario