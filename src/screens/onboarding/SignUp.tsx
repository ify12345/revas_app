import {KeyboardAvoidingView, ScrollView, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {RootStackScreenProps} from '~types/navigation';
import {useTranslation} from 'react-i18next';
import {Formik} from 'formik';
import InputField from '~components/InputField';
import * as yup from 'yup';
import {useAppDispatch} from '~redux/store';
import {getUserDetails} from '~redux/reducers/auth';
import {RegisterPayload} from '~types/api';
import {SignupOneInput} from '~types/forms';
import SafeAreaScreen from '~components/SafeAreaScreen';

import BackButton from '~components/BackButton';
import RText from '~components/RText';
import {HCheckbox} from '~components/HForm';
import CustomButton from '~components/CustomButton';
import Toast from 'react-native-toast-message';
import {register} from '~api/auth';
import styles from './Signup.style';

export default function SignupOne({navigation}: RootStackScreenProps<'SignupOne'>) {
  const {t} = useTranslation(['signup', 'login', 'onboard']);
  const [isChecked, setIsChecked] = useState(false);
  const [countryModalVisible, setCountryModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleToggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  const signupOneValidationSchema = yup.object().shape({
    name: yup
      .string()
      .matches(/(\w.+\s).+/, t('required_two_name'))
      .required(t('required_name')),
    business_name: yup.string().required(t('required_business_name')),
    email: yup
      .string()
      .email(t('valid_email', {ns: 'login'}))
      .trim()
      .required(t('required_email', {ns: 'login'})),
    phonenumber: yup.string().required(t('required_phone')),
    password: yup
      .string()
      // .matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W])(?!.*\s).{8,}$/, t('valid_password'))
      .required(t('required_password', {ns: 'login'})),
  });

  function toggleCountryModal() {
    setCountryModalVisible(!countryModalVisible);
  }

  const dispatch = useAppDispatch();
  function submit({name,email, password, phonenumber}: SignupOneInput) {
    const splittedNames = name.split(' ');
    const payload: RegisterPayload = {
      firstname: splittedNames[0],
      lastname: splittedNames[1],
      email,
      phonenumber,
      password,
    };
    console.log(payload);
    setLoading(true);
    dispatch(register(payload))
      .unwrap()
      .then(() => {
        setLoading(false);
        navigation.navigate('AccountVerification');
      })
      .catch(err => {
        setLoading(false);
        console.log(err);
        
        Toast.show({
          type: 'error',
          props: {message: err?.msg},
        });
      });
  }

  return (
    <SafeAreaScreen
      style={{
        flex: 1,
        flexDirection: 'column',
        height: '100%',
      }}>
      <View style={styles.topBar}>
        <BackButton />
        <RText>Back</RText>
      </View>
      <View>
        <View style={styles.started}>
          <RText>Sign up for free</RText>
          <RText fontSize="20">Get Started</RText>
        </View>

        <KeyboardAvoidingView behavior="height">
          <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
            <View>
              <Formik
                validationSchema={signupOneValidationSchema}
                initialValues={{
                  name: '',
                  business_name: '',
                  email: '',
                  phonenumber: '',
                  password: '',
                }}
                onSubmit={values => submit(values)}>
                {({touched, handleChange, handleSubmit, errors, isValid}) => (
                  <>
                    <InputField
                      required
                      label={t('Full Name')}
                      error={touched.name && errors.name}
                      errorMessage={errors.name}
                      onChangeText={handleChange('name')}
                      autoCapitalize="words"
                      autoComplete="name"
                      autoCorrect={false}
                      placeholder={`${t('e.g')} ${t('placeholder_name')}`}
                    />
                    <InputField
                      required
                      label={t('Company Name')}
                      error={touched.business_name && errors.business_name}
                      errorMessage={errors.business_name}
                      onChangeText={handleChange('business_name')}
                      autoCapitalize="none"
                      autoCorrect={false}
                      placeholder={`${t('e.g')} ${t('placeholder_business_name')}`}
                    />

                    <InputField
                      required
                      label={t('Company Email', {ns: 'login'})}
                      keyboardType="email-address"
                      error={touched.email && errors.email}
                      errorMessage={errors.email}
                      onChangeText={handleChange('email')}
                      autoCapitalize="none"
                      autoComplete="email"
                      autoCorrect={false}
                      placeholder={t('placeholder_email', {ns: 'login'})}
                    />
                    <InputField
                      isPhoneInput
                      required
                      label={t('Phone Number')}
                      keyboardType="phone-pad"
                      error={touched.phonenumber && errors.phonenumber}
                      errorMessage={errors.phonenumber}
                      onChangeText={handleChange('phonenumber')}
                      autoComplete="tel"
                      placeholder={t('placeholder_phone')}
                      openCountryModal={() => toggleCountryModal()}
                    />
                    <InputField
                      password
                      required
                      label={t('Password')}
                      error={touched.password && errors.password}
                      errorMessage={errors.password}
                      onChangeText={handleChange('password')}
                      autoCapitalize="none"
                      placeholder={t('placeholder_password')}
                    />
                    <View style={styles.checkBox}>
                      <HCheckbox
                        checked={isChecked}
                        setChecked={handleToggleCheckbox}
                        label={
                          <RText width="80%" fontSize="10" fontWeight="medium" color="#777777">
                            I have read and accept the companys Terms & Conditions and Privacy
                            Policy.
                          </RText>
                        }
                      />
                      <RText width="80%" fontSize="10" fontWeight="medium" color="#777777">
                        I have read and accept the companys Terms & Conditions and Privacy Policy.
                      </RText>
                    </View>
                    <CustomButton
                      primary
                      title={t('Create an account')}
                      onPress={() => handleSubmit()}
                      disabled={!isValid}
                    />
                    <View style={styles.footerContainer}>
                      <RText>Already have an account?</RText>
                      <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                        <RText color="black" fontSize="10" fontWeight="medium">
                          Sign In
                        </RText>
                      </TouchableOpacity>
                    </View>
                  </>
                )}
              </Formik>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    </SafeAreaScreen>
  );
}
