
import { 
    IonAvatar,
     IonButton,
      IonContent,
       IonHeader,
        IonIcon,
         IonInput,
         IonItem,
          IonItemOption,
           IonItemOptions,
            IonItemSliding,
             IonLabel,
              IonList, 
              IonPage,
               IonText,
                IonTitle,
                 IonToolbar
                         } from '@ionic/react';
  
  import {star} from 'ionicons/icons';
  import React, {useState, useEffect} from 'react';
  
  const Home: React.FC = () => {
  
    const [input, setInput] = useState<string>('');
  
    useEffect(() => {
      console.log(input);
    }, [input])
  
    return (
      //PRINCIPAL
      <IonPage>
        {/* HEADER */}
        <IonHeader>
          {/* NAV */}
          <IonToolbar>
            <IonTitle>EXAMPLES PAGES</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">

            <IonButton routerLink="/home">
                Clik for Home
            </IonButton>
  
              {/*IMPUTS */}
  
            <IonInput value={input}
              onIonChange={(e: any)=>setInput(e.target.value)}>
  
            </IonInput>
  
        </IonContent>
      </IonPage>
    );
  };
  
  export default Home;
  