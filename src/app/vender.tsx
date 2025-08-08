import { ConverterCliente } from "./converter-cliente";

export function Vender(){
    let log;
    let Vendedor;
    
    let Cliente;
    let Produto;
    let Preco;
    let Desconto;

    return(
        <div>
            <h2>Nova venda</h2>
            <input type="text" />

            <input type="text" />
            <input type="text" />
            <input type="text" />

            <input type="submit" value="Vender" />
        </div>
    );
}