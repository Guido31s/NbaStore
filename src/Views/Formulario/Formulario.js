import React from "react";
import swal from 'sweetalert';
import { db } from "../../components/Firebase/Firebase";
import firebase from "firebase/app"
import { useCartContext } from "../../context/CartContext";
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { Link } from "react-router-dom";
// CartContext


const Formulario = () => {

    const {cart, clear, totalPrice, updateItemStock} = useCartContext();


    return (
        <div className='container mt-5'>
            <Formik
                initialValues={{
                    name: "",
                    phone: "",
                    email: "",
                    emailVerif: ""
                }}

                validate={(values) => {
                    let err = {}


                    if (!values.name) {
                        err.name = 'Por favor ingresa un nombre'
                    } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.name)) {
                        err.name = 'El nombre solo puede contener letras y espacios'
                    }


                    if (!values.phone) {
                        err.phone = 'Por favor ingresa un teléfono'
                    } else if (!/^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/
                        .test(values.phone)) {
                        err.phone = 'El teléfono ingresado es incorrecto.'
                    }

                    if (!values.email) {
                        err.email = 'Por favor ingresa un correo electronico'
                    } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)) {
                        err.email = 'El correo solo puede contener letras, numeros, puntos, guiones y guion bajo.'
                    }

                    if (!values.emailVerif) {
                        err.emailVerif = 'Por favor repite el correo electronico'
                    } else if (values.emailVerif !== values.email) {
                        err.emailVerif = 'Debe ser el mismo email'
                    }

                    return err
                }}

                onSubmit={async (values) => {
                    const newOrder = {
                        buyer: {
                          Nombre: values.name,
                          Correo: values.email,
                          Telefono: values.phone,
                        },
                        items: cart,
                        date: firebase.firestore.Timestamp.fromDate(new Date()),
                        total: totalPrice,
                      };
                      const resp = await db.collection("compras").add(newOrder);
                      swal("Gracias por confiar en nosotros!", `Tu orden de compra es: ${resp.id}`, "success");
                      cart.map((item) => {
                        return updateItemStock(item.id, item.stock - item.quantity)
                      })
                      clear();
                }}
            >
                {({ errors }) => (
                    <Form className="container w-50">
                        <div className="form-group">
                            <label htmlFor="name" className="form-label">Nombre y Apellido</label>
                            <Field
                            className="form-control"
                                type="text"
                                id='name'
                                name='name'
                                placeholder='Nombre y Apellido...'
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
                                placeholder='11xxxxxxxx (11 + 8digits)'
                            />
                            <ErrorMessage name='phone' component={() => (
                                <div className='error'> {errors.phone} </div>
                            )} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <Field
                            className="form-control"
                                type="email"
                                id='email'
                                name='email'
                                placeholder='correo@email.com'
                            />
                            <ErrorMessage name='email' component={() => (
                                <div className='error'> {errors.email} </div>
                            )} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="emailVerif">Repetir Email</label>
                            <Field
                            className="form-control"
                                type="email"
                                id='emailVerif'
                                name='emailVerif'
                                placeholder='correo@email.com'
                            />
                            <ErrorMessage name='emailVerif' component={() => (
                                <div className='error'> {errors.emailVerif} </div>
                            )} />
                        </div>
                        <Link to="/cart"><button className="btn btn-outline-secondary rounded-0 m-3" type="submit">Volver atrás</button></Link> 
                        <button className="btn btn-outline-success rounded-0 m-3" type="submit">Continuar</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default Formulario