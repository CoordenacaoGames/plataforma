import Image from "next/image";
import styles from "./page.module.css";
import { Rodape } from "./rodape";
import { Dashboard } from "./dashboard";
import { Cabecalho } from "./cabecalho";

export default function Home() {
  return (
    <main>
      <Cabecalho></Cabecalho>
      <Dashboard></Dashboard>
      
      <Rodape></Rodape>
    </main>
  );
}
