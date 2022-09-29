import React, { useState } from 'react'

import '@ionic/react/css/core.css';
import { refreshOutline, swapVerticalOutline } from 'ionicons/icons'

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import { IonApp, IonButton, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonRadio, IonRadioGroup, IonRow, IonTitle, IonToolbar, setupIonicReact } from '@ionic/react';



setupIonicReact();


const App: React.FC = () => {
  enum Countries {
    India = 'India',
    Usa = 'Usa',
    Unitedkingdom = 'Unitedkingdom',
    Russia = 'Russia',
    China = 'China',
    Egypt = 'Egypt',
    Italy = 'Italy',
    Denmark = 'Denmark',
    Sweden = 'Sweden',
  }

  enum Gender {
    male = 'male',
    female = 'female',
    other = 'other'
  }

  const [emp, setEmp] = useState(false)
  const [gender, setGender] = useState('')

  interface Person {
    firstname: string;
    lastname: string;
    age: number;
    email: string;
    year: number;
    gender: Gender;
    country: Countries;
    employed: boolean;
  }

  return (

    <IonApp>
      {/* Main App Body  Starts */}
      <IonHeader>
        <IonToolbar>
          <IonTitle className="title">
            JobStaX
          </IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className='ion-padding'>
        {/* Content Body */}

        <IonGrid>

          <IonRow>

            <IonCol>
              <IonItem>
                <IonLabel position="floating">
                  First Name
                </IonLabel>
                <IonInput></IonInput>
              </IonItem>
            </IonCol>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">
                  Last Name
                </IonLabel>
                <IonInput></IonInput>
              </IonItem>
            </IonCol>

          </IonRow>

          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">
                  Email Address
                </IonLabel>
                <IonInput></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>


          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">
                  Phone Number
                </IonLabel>
                <IonInput></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>


          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">
                  Year of Birth
                </IonLabel>
                <IonInput></IonInput>
              </IonItem>
            </IonCol>

            <IonCol>
              <IonItem>
                <IonLabel position="floating">
                  Country
                </IonLabel>
                <IonInput></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>

          <IonRadioGroup value={gender} onIonChange={e => setGender(e.detail.value)}>
            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel>Gender</IonLabel>
                </IonItem>
              </IonCol>
              <IonCol>
                <IonItem>
                  <IonLabel>Male</IonLabel>
                  <IonRadio slot="start" value="male" />
                </IonItem>
              </IonCol>
              <IonCol>
                <IonItem>
                  <IonLabel>Female</IonLabel>
                  <IonRadio slot="start" value="female" />
                </IonItem>
              </IonCol>
              <IonCol>
                <IonItem>
                  <IonLabel>other</IonLabel>
                  <IonRadio slot="start" value="other" />
                </IonItem>
              </IonCol>
            </IonRow>
          </IonRadioGroup>

          <IonRadioGroup value={emp} onIonChange={e => setEmp(e.detail.value)}>
            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel>Employed</IonLabel>
                  <IonRadio slot="start" value={true} />
                </IonItem>
              </IonCol>
              <IonCol>
                <IonItem>
                  <IonLabel>UnEmployed</IonLabel>
                  <IonRadio slot="start" value={false} />
                </IonItem>
              </IonCol>
            </IonRow>
          </IonRadioGroup>

          <IonRow>

            <IonCol className='ion-text-left'>
              <IonButton>
                <IonIcon slot='start' icon={swapVerticalOutline} />
                Store Data

              </IonButton>
            </IonCol>

            <IonCol className='ion-text-right'>
              <IonButton>
                <IonIcon slot='start' icon={refreshOutline} />
                Reset
              </IonButton>
            </IonCol>

          </IonRow>

        </IonGrid>
        {/* Content Body */}
      </IonContent>

      {/* Main App Body Ends */}
    </IonApp >
  )
}

export default App