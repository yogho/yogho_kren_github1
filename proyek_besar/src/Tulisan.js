import React from 'react'

function Tulisan(props) {
    return (
        <div >
          <h1>{props.contoh_props.nama}</h1>
          <h1>{props.contoh_props.ttl}</h1>
          <img src={props.contoh_props.photo}></img>
          <h1>{props.contoh_props.contoharray}</h1>
          <h1>{props.contoh_props.contohArrObj[2].subobj}</h1>
          <ion-text color="danger">
  <h5>H5: The quick brown fox jumps over the lazy dog</h5>
</ion-text>   
        </div>
    )
}

export default Tulisan
