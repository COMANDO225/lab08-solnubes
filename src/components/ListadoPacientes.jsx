import Paciente from './Paciente'

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {


    return (
        <div className='md:w-1/2 lg:w-3/5'>

            {
                pacientes.length === 0 
                ?
                <>
                    <h2 className="font-black text-3xl text-center">No hay Contactos</h2>
                    <p className='text-lg text-center mt-4 mb-10'>
                        Agregalos mi
                        <span className='text-indigo-600 font-bold'> King</span>
                    </p>
                </>
                :
                <>
                    <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
                    <p className='text-lg text-center mt-4 mb-10'>
                        Administrar tus
                        <span className='text-indigo-600 font-bold'> Contactos</span>
                    </p>

                    <div className="pacientes_conatiner h-3/5 overflow-y-auto">
                        {
                            pacientes.map( paciente => {
                                return(
                                    <Paciente
                                        key={paciente.id}
                                        paciente={paciente}
                                        setPaciente={setPaciente}
                                        eliminarPaciente = {eliminarPaciente}
                                    />
                                )
                            })
                        }
                        
                    </div>
                </>
            }

        </div>
    )
}

export default ListadoPacientes
