import React from 'react';
import logo from './logo.svg';
import './App.css';
import {IonButton, IonPage, IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem,IonRouterOutlet } from '@ionic/react';
import {Fragment} from 'react';
function App() {
  return (
  <Fragment>
    <>
    <IonButton onClick color="primary"> Primary
     <IonPage>
    <IonMenu side="start" menuId="custom" className="my-custom-menu">
      <IonHeader>
        <IonToolbar color="tertiary">
          <IonTitle>Custom Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem>Menu Item</IonItem>
          <IonItem>Menu Item</IonItem>
          <IonItem>Menu Item</IonItem>
          <IonItem>Menu Item</IonItem>
          <IonItem>Menu Item</IonItem>
        </IonList>
      </IonContent>
    </IonMenu>

    <IonMenu side="end" type="push">
      <IonHeader>
        <IonToolbar color="danger">
          <IonTitle>End Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem>Menu Item</IonItem>
          <IonItem>Menu Item</IonItem>
          <IonItem>Menu Item</IonItem>
          <IonItem>Menu Item</IonItem>
          <IonItem>Menu Item</IonItem>
        </IonList>
      </IonContent> 
    </IonMenu>
    <IonRouterOutlet></IonRouterOutlet>
    </IonPage>
    </IonButton>
   </>
  </Fragment>
  );
}
  


