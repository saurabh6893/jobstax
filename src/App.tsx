import React from 'react'
import './theme/style.css'
// import { useNavigate } from 'react-router-dom'
import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
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
import Display from './Display';

// const navigate = useNavigate();


setupIonicReact();


const App: React.FC = () => {
  const schema = yup.object().shape({
    firstname: yup.string().required(),
    lastname: yup.string().required(),
    email: yup.string().email().required(),
    age: yup.number().required().positive().min(21).integer(),
    country: yup.string().required(),
    gender: yup.string().required(),
    phone: yup.number().required(),
    employed: yup.string().required(),
  })

  const onSubmit: SubmitHandler<Person> = (data) => {
    console.log(data)
    // navigate('/Display');
  }
  const { register, handleSubmit } = useForm<Person>({
    resolver: yupResolver(schema),
  })
  enum country {
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

  enum gender {
    male = 'male',
    female = 'female',
    other = 'other'
  }


  interface Person {
    firstname: string;
    lastname: string;
    age: number;
    email: string;
    gender: gender;
    country: country;
    phone: number;
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <IonGrid>

            <IonRow>

              <IonCol>
                <IonItem>
                  <IonLabel position="floating">
                    First Name
                  </IonLabel>
                  <IonInput {...register('firstname')}></IonInput>
                </IonItem>
              </IonCol>
              <IonCol>
                <IonItem>
                  <IonLabel position="floating">
                    Last Name
                  </IonLabel>
                  <IonInput {...register('lastname')}></IonInput>
                </IonItem>
              </IonCol>

            </IonRow>

            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position="floating">
                    Email Address
                  </IonLabel>
                  <IonInput {...register('email')}></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>


            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position="floating">
                    Phone Number
                  </IonLabel>
                  <IonInput {...register('phone')}></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>


            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position="floating">
                    Age
                  </IonLabel>
                  <IonInput {...register('age')}></IonInput>
                </IonItem>
              </IonCol>

              <IonCol>
                <IonItem>
                  <IonLabel position="floating">
                    Country
                  </IonLabel>
                  <IonInput {...register('country')}></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>

            <IonRadioGroup value={{ ...register('gender') }}>
              <IonRow>
                <IonCol>
                  <IonItem>
                    <IonLabel>gender</IonLabel>
                  </IonItem>
                </IonCol>
                <IonCol>
                  <IonItem>
                    <IonLabel>Male</IonLabel>
                    <IonRadio slot="start" value="male" {...register('gender')} />
                  </IonItem>
                </IonCol>
                <IonCol>
                  <IonItem>
                    <IonLabel>Female</IonLabel>
                    <IonRadio slot="start" value="female" {...register('gender')} />
                  </IonItem>
                </IonCol>
                <IonCol>
                  <IonItem>
                    <IonLabel>other</IonLabel>
                    <IonRadio slot="start" value="other" {...register('gender')} />
                  </IonItem>
                </IonCol>
              </IonRow>
            </IonRadioGroup>

            <IonRadioGroup value={{ ...register('employed') }}>
              <IonRow>
                <IonCol>
                  <IonItem>
                    <IonLabel>Employed</IonLabel>
                    <IonRadio slot="start" {...register('employed')} value={true} />
                  </IonItem>
                </IonCol>
                <IonCol>
                  <IonItem>
                    <IonLabel>UnEmployed</IonLabel>
                    <IonRadio slot="start" {...register('employed')} value={false} />
                  </IonItem>
                </IonCol>
              </IonRow>
            </IonRadioGroup>

            <IonRow>

              <IonCol className='ion-text-left'>
                <IonButton type='submit'>
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
        </form>
        {/* Content Body */}

      </IonContent>

      {/* Main App Body Ends */}
    </IonApp >


  )
}

export default App