export function Cabecalho(){
    let NomeUsuario = "Kaynan";
    let log;

    return(
        <header className="cabecalho">
            <div>
                <img src="" alt="" />
                <h3>{NomeUsuario}</h3>
                <button>Config.</button>
                <button>Info</button>
                <button>Deslogar</button>
            </div>

            <hr />

            <nav>
                <a href="">Nova Lead</a>
                <a href="">Converter Lead</a>
                <a href=""><img width="64" height="64" src="https://img.icons8.com/wired/64/sale.png" alt="sale"/>Vender</a>
                <hr />
                <a href="">Novo Produto</a>
                <a href="">Novo Usuário</a>
                <a href="">Nova Promoção</a>
            </nav>
        </header>
    );
}