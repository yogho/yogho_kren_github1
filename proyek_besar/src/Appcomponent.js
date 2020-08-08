import React from 'react' 
import {IonButton, IonMenuToggle, IonText, IonButtons, IonPage, IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem,IonRouterOutlet } from '@ionic/react';
import Tulisan from './Tulisan'
function Appcomponent() {



    return (

        <div>
            <IonTitle>KEMBARA SUNYI</IonTitle>
    <IonToolbar>
        <IonButton slot="start">
       BACA
     </IonButton>
     
    </IonToolbar>
   <Tulisan></Tulisan>


</div>








    )
}

export default Appcomponent
