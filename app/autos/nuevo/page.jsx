"use client"
import * as Yup from 'yup';
import { useState, useEffect } from 'react';
import Menu_admin from "@/componentes/menu_admin";
import { registrar_auto } from "@/hooks/Autenticacion";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from 'next/navigation';
import { getExternalUser } from '@/hooks/SessionUtil';
import { obtener } from '@/hooks/Conexion';


export default function Nuevo() {
    const router = useRouter();

    const [marcas, setMarcas] = useState([]);

    useEffect(() => {
        const fetchMarcas = async () => {
            try {
                const response = await obtener('index.php?funcion=marcas');
                setMarcas(response.datos || []);
            } catch (error) {
                console.error("Error obteniendo marcas", error);
            }
        };

        fetchMarcas();
    }, []);

    const validationShema = Yup.object().shape({
        descripcion: Yup.string().required("Ingrese una descripcion"),
        placa: Yup.string().required("Ingrese una placa"),
        chasis: Yup.string().required("Ingrese un chasis"),
        foto: Yup.string().required("Ingrese una URL de foto"),
        subtotal: Yup.number().required("Ingrese el subtotal")  ,
        iva: Yup.number().required("Ingrese el iva"),
        total: Yup.number().required("Ingrese el total"),
        descuento: Yup.number().required("Ingrese el descuento"),
    });

    const formOptions = { resolver: yupResolver(validationShema) };
    const { register, handleSubmit, formState } = useForm(formOptions);
    const { errors } = formState;

    const sendData = (data) => {
            var informacion = {
                funcion: "guardarAuto",
                descripcion: data.descripcion,
                subtotal: data.subtotal,
                iva: data.iva,
                total: data.total,
                descuento: data.descuento,
                placa: data.placa,
                chasis: data.chasis,
                foto: data.foto,
                user: getExternalUser(),
                marca: data.marca
            };
            console.log(informacion.datos);
            console.log(informacion);

            registrar_auto(informacion).then((info) => {
                router.push("/autos");
            });
    };

    return (
        <div className="row">
            <Menu_admin></Menu_admin>
            <h1>Añadir Auto</h1>
            <div className='col-4 container-fluid'>
                <form onSubmit={handleSubmit(sendData)}>

                    <div className="form-outline form-white mb-4">
                        <label className="form-label">Descripción</label>
                        <input {...register('descripcion')} name="descripcion" id="descripcion" className={`form-control ${errors.descripcion ? 'is-invalid' : ''}`} />
                        <div className='alert alert-danger invalid-feedback'>
                            {errors.descripcion?.message}
                        </div>
                    </div>

                    <div className="form-outline form-white mb-4">
                        <label className="form-label">Placa</label>
                        <input {...register('placa')} name="placa" id="placa" className={`form-control ${errors.placa ? 'is-invalid' : ''}`} />
                        <div className='alert alert-danger invalid-feedback'>
                            {errors.placa?.message}
                        </div>
                    </div>

                    <div className="form-outline form-white mb-4">
                        <label className="form-label">Chasis</label>
                        <input {...register('chasis')} name="chasis" id="chasis" className={`form-control ${errors.chasis ? 'is-invalid' : ''}`} />
                        <div className='alert alert-danger invalid-feedback'>
                            {errors.chasis?.message}
                        </div>
                    </div>

                    <div className="form-outline form-white mb-4">
                        <label className="form-label">Foto URL</label>
                        <input {...register('foto')} name="foto" id="foto" className={`form-control ${errors.foto ? 'is-invalid' : ''}`} />
                        <div className='alert alert-danger invalid-feedback'>
                            {errors.foto?.message}
                        </div>
                    </div>

                    <div className="form-outline form-white mb-4">
                        <label className="form-label">Marca</label>
                        <select {...register('marca')} className={`form-select ${errors.marca ? 'is-invalid' : ''}`}>
                            <option value="">Seleccionar Marca</option>
                            {marcas.map((marca, i) => (
                                <option key={i} value={marca.external_id}>{marca.nombre}</option>
                            ))}
                        </select>
                        <div className='alert alert-danger invalid-feedback'>
                            {errors.marca?.message}
                        </div>
                    </div>

                    <div className="form-outline form-white mb-4">
                        <label className="form-label">Subtotal</label>
                        <input {...register('subtotal')} name="subtotal" id="subtotal" type="number" step="0.01" className={`form-control ${errors.subtotal ? 'is-invalid' : ''}`} />
                        <div className='alert alert-danger invalid-feedback'>
                            {errors.subtotal?.message}
                        </div>
                    </div>

                    <div className="form-outline form-white mb-4">
                        <label className="form-label">IVA</label>
                        <input {...register('iva')} name="iva" id="iva" type="number" step="0.01" className={`form-control ${errors.iva ? 'is-invalid' : ''}`} />
                        <div className='alert alert-danger invalid-feedback'>
                            {errors.iva?.message}
                        </div>
                    </div>

                    <div className="form-outline form-white mb-4">
                        <label className="form-label">Descuento</label>
                        <input {...register('descuento')} name="descuento" id="descuento" type="number" step="0.01" className={`form-control ${errors.descuento ? 'is-invalid' : ''}`} />
                        <div className='alert alert-danger invalid-feedback'>
                            {errors.descuento?.message}
                        </div>
                    </div>

                    <div className="form-outline form-white mb-4">
                        <label className="form-label">Total</label>
                        <input {...register('total')} name="total" id="total" type="number" step="0.01" className={`form-control ${errors.total ? 'is-invalid' : ''}`} />
                        <div className='alert alert-danger invalid-feedback'>
                            {errors.total?.message}
                        </div>
                    </div>

                    <button type="submit" className="btn btn-outline-dark btn-lg px-5" id='boton-nuevo-auto'>Agregar</button>
                </form>
            </div>
        </div>
    );
}


