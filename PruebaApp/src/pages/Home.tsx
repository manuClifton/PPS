
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
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const arr = [
  {
    name: 'Finn',
    desc: 'description'
  },
  {
    name: 'Man',
    desc: 'description'
  },
  {
    name: 'Rey',
    desc: 'description'
  },
  {
    name: 'Pancho',
    desc: 'description'
  },
  {
    name: 'Denise',
    desc: 'description'
  },
]

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
          <IonTitle>Hello Word</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>


      {/* LISTAS */}
        <IonList>
         {arr.map(e=>
          <IonItemSliding key={e.name}>
            <IonItem>
              <IonAvatar>
                <img src={`https://ionicframework.com/docs/demos/api/list/avatar-${e.name.toLowerCase()}.png`}/>
              </IonAvatar>
              <IonLabel className="ion-padding">
                <h2>{e.name}</h2>
                <h3>{e.desc}</h3>
              </IonLabel>
            </IonItem>
            <IonItemOptions side="end">
               <IonItemOption onClick={()=> alert('presses delete')}>
                 Delete
               </IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
         )}
        </IonList>
 

          {/*BOTONES */}
          <IonButton color="primary">
            Primary
          </IonButton>
          <IonButton color="secondary">
            Secondary
          </IonButton>
          <IonButton color="tertiary">
            Tertiary
          </IonButton>
          <IonButton color="danger">

            <IonIcon slot="start" icon={star}>

            </IonIcon>
            danger
          </IonButton>
          <IonButton expand="full" color="medium">
            medium
          </IonButton>

            {/*IMPUTS */}

          <IonInput value={input}
            onIonChange={(e: any)=>setInput(e.target.value)}>

          </IonInput>

          <IonButton routerLink="/example">
                Clik for Example
            </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
