import React from 'react';
import {
  IonButton, IonDatetime, IonPage,
  IonHeader, IonToolbar, IonTitle,
  IonContent
} from '@ionic/react';

class Home extends React.Component {
  render() {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Phenom</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonDatetime displayFormat="MM/DD/YYYY" placeholder="Select Date"></IonDatetime>
          <IonButton fill="clear">Say Hello WOrld</IonButton>
        </IonContent>
      </IonPage>
    );
  }
}

export default Home;
