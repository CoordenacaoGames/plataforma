import { GerLeads } from "./ger-lead";


export function ConverterCliente(){
    let Lead;
    let NumeroLead;
    let NomeCompletoCLiente;
    let EnderecoCliente;
    let CPFCliente;
    let RGCliente;
    let DadosCartaoCliente;
    
    return(
        <div className="caixa-flutuante">
            <h2>Buscar lead</h2>
                <input type="text" />
                <button>Buscar</button>

                <input type="text" />
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <input type="submit" value="Converter" />
        </div>
    );
}