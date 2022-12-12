
import React from "react";

function InventoryItem(props) {
    return ( 
        <div>
            <h3>{props.itemname}</h3>
            <hr/>
            <p>{props.price}</p>
        </div>
    );
}

export default InventoryItem