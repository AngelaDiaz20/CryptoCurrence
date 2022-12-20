import "./coinRow.css"
//import { deleteDec, colorDec, numberF  } from "./App";
//import Graph from "./Graph";

export default function CoinRow() {
    return (
        <tr className="table-file">
            <td>index</td>
            <td>
                <div className="coin_image_container">
                    <img src="" alt="" />
                </div>
            </td>
            <td>US$</td>
            <td>%</td>
            <td>US$</td>
            <td>US$</td>
            <td></td>
        </tr>
    );
} 
