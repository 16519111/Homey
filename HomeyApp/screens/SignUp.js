import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native';

function SignUp(){
    const [step, setStep] = React.useState(0)
    const [value, onChangeText] = React.useState('')

    function Next() {
        setStep(step + 1)
        onChangeText('')
    }

    function Back() {
        setStep(step - 1)
        onChangeText('')
    }

    function BottomNavigationSignUp() {
        return(
            <View style={styles.bottomNavigationSignUp}>
                <Text style={styles.backText} onPress={() => Back()}>Back</Text>
                <Text style={styles.nextText} onPress={() => Next()}>Next</Text>
            </View>
        )
    }

    console.log(value)

    return (
        <View style={styles.signUpContainer}>
            {(step === 0) ?
                <>
                    <Text style={styles.headingText}>WELCOME</Text>
                    <Text style={styles.verifyText}>First, Please Verify Your Account</Text>
                    <Text style={styles.goText} onPress={() => Next()}>Let's Go!</Text>
                </>
            : (step === 1) ?
                <>
                    <Text style={styles.headingText}>Verification</Text>
                    <View style={styles.inputView}>
                        <Text style={styles.inputLabel}>Name</Text>
                        <TextInput style={styles.inputBox} onChangeText={text => onChangeText(text)} value={value} placeholder="Please Fill Here"/>
                    </View>
                    {BottomNavigationSignUp()}
                </>
            : (step === 2) ? 
                <>
                    <Text style={styles.headingText}>Verification</Text>
                    <View style={styles.inputView}>
                        <Text style={styles.inputLabel}>Date of Birth</Text>
                        <TextInput style={styles.inputBox} onChangeText={text => onChangeText(text)} value={value} placeholder="Please Fill Here"/>
                    </View>
                    {BottomNavigationSignUp()}
                </>
            : (step === 3) ? 
                <>
                    <Text style={styles.headingText}>Verification</Text>
                    <View style={styles.inputView}>
                        <Text style={styles.inputLabel}>Address</Text>
                        <TextInput style={styles.inputBox} onChangeText={text => onChangeText(text)} value={value} placeholder="Please Fill Here"/>
                    </View>
                    {BottomNavigationSignUp()}
                </>
            : (step === 4) ?  
                <>
                    <Text style={styles.headingText}>Verification</Text>
                    <View style={styles.inputView}>
                        <Text style={styles.inputLabel}>Email</Text>
                        <TextInput style={styles.inputBox} onChangeText={text => onChangeText(text)} value={value} placeholder="Please Fill Here"/>
                    </View>
                    {BottomNavigationSignUp()}
                </>
            : (step === 5) ?
                <>
                    <Text style={styles.headingText}>Verification</Text>
                    <View style={styles.inputView}>
                        <Text style={styles.inputLabel}>Email Verification!</Text>
                        <Text style={styles.inputLabel}>Check Your Email!</Text>
                        <Text style={styles.smallInputLabel}>Resend (20)</Text>
                    </View>
                    {BottomNavigationSignUp()}
                </>
            : (step === 6) ?
                <>
                    <Text style={styles.headingText}>Verification</Text>
                    <View style={styles.inputView}>
                        <Text style={styles.inputLabel}>ID Picture!</Text>
                        <Text style={styles.inputLabel}>Upload Your ID Card!</Text>
                        <Text style={styles.smallInputLabel}>Upload</Text>
                    </View>
                    {BottomNavigationSignUp()}
                </>    
            : (step === 7) ?
                <>
                    <Text style={styles.headingText}>Verification</Text>
                    <View style={styles.inputView}>
                        <Text style={styles.inputLabel}>Kitchen!</Text>
                        <Text style={styles.inputLabel}>Upload Your Best Kitchen Pic!</Text>
                        <Text style={styles.smallInputLabel}>Upload</Text>
                    </View>
                    {BottomNavigationSignUp()}
                </>    
            : 
                <>
                    <Text style={styles.headingText}>Please Wait!</Text>
                    <View style={styles.inputView}>
                        <Text style={styles.inputLabel}>Our team is working hard to verify your account</Text>
                        <Text style={styles.inputLabelContact}>If you haven't heard back from us in 2 days, contact our costumer service!</Text>
                        <Text style={styles.smallInputLabel}>Contact</Text>
                    </View>
                    {BottomNavigationSignUp()}
                </>  
            }
        </View>
    )
}

const styles = StyleSheet.create({
    signUpContainer: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    headingText: {
        fontSize: 34
    },
    verifyText: {
        fontSize: 16
    },
    goText: {
        fontSize: 22
    },
    bottomNavigationSignUp: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    backText: {
        marginRight: '10%'
    },
    nextText: {
        marginLeft: '10%'
    },
    inputView: {
        display: 'flex',
        alignItems: 'center'
    },
    inputLabel: {
        fontSize: 20,
        marginBottom: '2%',
        textAlign: 'center'
    },
    inputLabelContact: {
        fontSize: 20,
        marginBottom: '2%',
        marginTop: '8%',
        textAlign: 'center'
    },
    smallInputLabel: {
        fontSize: 14
    },
    inputBox: {
        fontSize: 16,
        borderWidth: 1,
        borderColor: '#20232a',
        borderRadius: 4,
        paddingHorizontal: '3%',
        textAlign: 'center',
        minWidth: '30%'
    }
})

export default SignUp;