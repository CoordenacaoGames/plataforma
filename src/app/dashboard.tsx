import { GerLeads } from "./ger-lead";
import { ConverterCliente } from "./converter-cliente";
import { Vender } from "./vender";

export function Dashboard(){
    return(
        <>
        <GerLeads></GerLeads>
        <ConverterCliente></ConverterCliente>
        <Vender></Vender>
        </>
    );
}