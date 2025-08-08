export function GerLeads(){
    let Campanha;
    let NumeroLead;
    let NomeRapidoLead;
    let NumeroTelefoneLead;
    let EmailLead;
    let log;

    return(
        <div className="caixa-flutuante">
            <form>
                <h2>Criar nova lead</h2>
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <input type="submit" value="Cadastrar" />
            </form>
            
            <hr />
            <h2>Buscar lead</h2>
            <input type="text" />
            <button>Buscar</button>
        </div>
    );
}