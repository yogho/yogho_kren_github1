import React from 'react' 
import {IonButton, IonMenuToggle, IonText, IonButtons, IonPage, IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem,IonRouterOutlet } from '@ionic/react';
import Tulisan from './Tulisan'
function Appcomponent() {
const contohvariabel = {
    nama : "khanza",
    ttl : "bekasi 22 januari 2020",
    photo : process.env.PUBLIC_URL + "large_bonsai_wahong.jpg",
    contoharray : [" khanza ", " medina ", 2020],
    contohArrObj : [
    {
        subobj:"bent1"
    },
    {
        subobj:"bent2"
    },
    {
        subobj:"bent3"
    }, 
]
}
    return (

        <div>
            <IonTitle>KEMBARA SUNYI</IonTitle>
    <IonToolbar>
        <IonButton slot="start">
       BACA
     </IonButton>
     
    </IonToolbar>
   <Tulisan contoh_props={contohvariabel}>
   </Tulisan>



</div>








    )
}

export default Appcomponent
