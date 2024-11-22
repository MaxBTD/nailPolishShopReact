import "./lakierCell.css";

function LakierCell(props){
    async function dodajKoszykPressed(){
        await alert("Dodano produkt \"" + props.produkt.nazwa + "\" do koszyka!");
        props.setKoszyk(props.koszyk+1);
    }

    return(
        <div className="lakierCell">
            <img src={props.produkt.plik}/>
            <div className="lakierCellRight">
                <h2>{props.produkt.nazwa}</h2>
                <p>odcień: {props.produkt.odcien}</p>
                <p className="LCCena">Cena {props.produkt.cena}</p>
                <p className="LCReklama">{props.produkt.reklama}</p>
                <button onClick={() => {dodajKoszykPressed()}}>Dodaj do koszyka</button>
            </div>
        </div>
    );
}

export default LakierCell;