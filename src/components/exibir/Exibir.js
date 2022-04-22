
const Exibir = ({ clientes }) => {
    return (
        <ul>
            {
                clientes.map((cliente) => {
                    return (
                        <li>
                            {cliente.name} - {cliente.phone}
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default Exibir