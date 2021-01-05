import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Divider } from 'react-native-elements';

function SignUp(){
    const [step, setStep] = React.useState(0)
    const [value, onChangeText] = React.useState('')

    let currentProgressBarMargin = (8-Number(step))/7*75

    const progressBarStyles = StyleSheet.create({
        progressBar: {
            height: 3,
            marginLeft: '10.75%',
            marginRight: `${currentProgressBarMargin}%`,
            marginTop: '5%'
        }
    })
    
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
                    <View>
                        <Text style={styles.headingText}>Verification</Text>
                        <Divider style={progressBarStyles.progressBar}/>
                    </View>
                    <View style={styles.inputView}>
                        <Text style={styles.inputLabel}>Name</Text>
                        <TextInput style={styles.inputBox} onChangeText={text => onChangeText(text)} value={value} placeholder="Please Fill Here"/>
                    </View>
                    {BottomNavigationSignUp()}
                </>
            : (step === 2) ? 
                <>
                    <View>
                        <Text style={styles.headingText}>Verification</Text>
                        <Divider style={progressBarStyles.progressBar}/>
                    </View>
                    <View style={styles.inputView}>
                        <Text style={styles.inputLabel}>Date of Birth</Text>
                        <TextInput style={styles.inputBox} onChangeText={text => onChangeText(text)} value={value} placeholder="Please Fill Here"/>
                    </View>
                    {BottomNavigationSignUp()}
                </>
            : (step === 3) ? 
                <>
                    <View>
                        <Text style={styles.headingText}>Verification</Text>
                        <Divider style={progressBarStyles.progressBar}/>
                    </View>
                    <View style={styles.inputView}>
                        <Text style={styles.inputLabel}>Address</Text>
                        <TextInput style={styles.inputBox} onChangeText={text => onChangeText(text)} value={value} placeholder="Please Fill Here"/>
                    </View>
                    {BottomNavigationSignUp()}
                </>
            : (step === 4) ?  
                <>
                    <View>
                        <Text style={styles.headingText}>Verification</Text>
                        <Divider style={progressBarStyles.progressBar}/>
                    </View>
                    <View style={styles.inputView}>
                        <Text style={styles.inputLabel}>Email</Text>
                        <TextInput style={styles.inputBox} onChangeText={text => onChangeText(text)} value={value} placeholder="Please Fill Here"/>
                    </View>
                    {BottomNavigationSignUp()}
                </>
            : (step === 5) ?
                <>
                    <View>
                        <Text style={styles.headingText}>Verification</Text>
                        <Divider style={progressBarStyles.progressBar}/>
                    </View>
                    <View style={styles.inputView}>
                        <Text style={styles.inputLabel}>Email Verification!</Text>
                        <Text style={styles.inputLabel}>Check Your Email!</Text>
                        <Text style={styles.smallInputLabel}>Resend (20)</Text>
                    </View>
                    {BottomNavigationSignUp()}
                </>
            : (step === 6) ?
                <>
                    <View>
                        <Text style={styles.headingText}>Verification</Text>
                        <Divider style={progressBarStyles.progressBar}/>
                    </View>
                    <View style={styles.inputView}>
                        <Text style={styles.inputLabel}>ID Picture!</Text>
                        <Text style={styles.inputLabel}>Upload Your ID Card!</Text>
                        <Text style={styles.smallInputLabel}>Upload</Text>
                    </View>
                    {BottomNavigationSignUp()}
                </>    
            : (step === 7) ?
                <>
                    <View>
                        <Text style={styles.headingText}>Verification</Text>
                        <Divider style={progressBarStyles.progressBar}/>
                    </View>
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
    },
    headingText: {
        fontSize: 34,
        textAlign: 'center'
    },
    verifyText: {
        fontSize: 16,
        textAlign: 'center'
    },
    goText: {
        fontSize: 22,
        textAlign: 'center'
    },
    bottomNavigationSignUp: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    backText: {
        
    },
    nextText: {
        
    },
    inputView: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '5%'
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
    },
})

export default SignUp;