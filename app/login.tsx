import { SplashColors } from '@/constants/SplashColors';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import { ImageBackground, KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function LoginScreen() {
    const colorScheme = useColorScheme();
    const isDark = colorScheme === 'dark';

    // Semantic Colors based on Theme
    const bgColor = isDark ? SplashColors.backgroundDark : SplashColors.backgroundLight;
    const textColorPrimary = isDark ? SplashColors.slate100 : SplashColors.slate900;
    const textColorSecondary = isDark ? SplashColors.slate400 : SplashColors.slate500;
    const inputBgColor = isDark ? SplashColors.slate900 : SplashColors.white;
    const borderColor = isDark ? `${SplashColors.primary}80` : `${SplashColors.primary}4D`; // 50% vs 30% opacity rough equivalent
    const dividerColor = isDark ? SplashColors.slate800 : SplashColors.slate200;

    return (
        <SafeAreaView style={[styles.safeArea, { backgroundColor: bgColor }]}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.keyboardAvoidingView}
            >
                <ScrollView contentContainerStyle={styles.scrollContent} bounces={false}>

                    {/* Header */}
                    <View style={styles.headerContainer}>
                        <TouchableOpacity style={styles.backButton} onPress={() => router.back()} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
                            <MaterialIcons name="arrow-back" size={24} color={textColorPrimary} />
                        </TouchableOpacity>
                        <Text style={[styles.headerTitle, { color: textColorPrimary }]}>Login</Text>
                        <View style={{ width: 48 }} /> {/* Placeholder for centering title */}
                    </View>

                    {/* Hero Section */}
                    <View style={styles.heroSection}>
                        <ImageBackground
                            source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuAVKPwVN94ao-nCc_aqUzpYwFUgoBOKMmsWI7lXWId_zJHLlx9wT0R5v0rjJ7xBBEH_yPMgRj1jfRUGvaaRT3ywoxr5zHHqzSwoNazfqbzxY_FOIc8WLIGoypfrhwZOt68OLsdHaZ7_uTp59Bn1TQFrhmLEXFuTagbYyr4e8I4MUuX1T6C0FLos21AArqIlsesaoXTEjAslDbRXfZECAgQwHCLzJGaQUoXUvrR04g7E1VmRmNLqYfidiTMJdms5W1XYc8T4uuLTnKU" }}
                            style={styles.heroImage}
                            imageStyle={{ borderRadius: 64 }}
                        />
                        <Text style={[styles.heroTitle, { color: textColorPrimary }]}>Welcome Back!</Text>
                        <Text style={[styles.heroSubtitle, { color: textColorSecondary }]}>Sign in to get your sweet treats.</Text>
                    </View>

                    {/* Form Input Section */}
                    <View style={styles.formSection}>
                        <View style={styles.inputContainer}>
                            <Text style={[styles.inputLabel, { color: isDark ? SplashColors.slate300 : SplashColors.slate700 }]}>Email Address</Text>
                            <TextInput
                                style={[styles.textInput, { backgroundColor: inputBgColor, borderColor: borderColor, color: textColorPrimary }]}
                                placeholder="Enter your email"
                                placeholderTextColor={SplashColors.slate400}
                                keyboardType="email-address"
                                autoCapitalize="none"
                                cursorColor={SplashColors.primary}
                                selectionColor={SplashColors.primary}
                            />
                        </View>

                        <View style={styles.inputContainer}>
                            <Text style={[styles.inputLabel, { color: isDark ? SplashColors.slate300 : SplashColors.slate700 }]}>Password</Text>
                            <TextInput
                                style={[styles.textInput, { backgroundColor: inputBgColor, borderColor: borderColor, color: textColorPrimary }]}
                                placeholder="Enter your password"
                                placeholderTextColor={SplashColors.slate400}
                                secureTextEntry
                                cursorColor={SplashColors.primary}
                                selectionColor={SplashColors.primary}
                            />
                        </View>

                        <TouchableOpacity style={styles.forgotPasswordContainer} onPress={() => router.push('/forgot-password')}>
                            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Action Buttons Section */}
                    <View style={styles.actionSection}>
                        <TouchableOpacity style={styles.primaryButton}>
                            <Text style={styles.primaryButtonText}>Login</Text>
                        </TouchableOpacity>

                        <View style={styles.dividerContainer}>
                            <View style={[styles.dividerLine, { backgroundColor: dividerColor }]} />
                            <Text style={styles.dividerText}>or</Text>
                            <View style={[styles.dividerLine, { backgroundColor: dividerColor }]} />
                        </View>

                        <TouchableOpacity style={[styles.googleButton, { backgroundColor: isDark ? SplashColors.slate800 : SplashColors.white, borderColor: dividerColor }]}>
                            {/* Simplified Google Icon for React Native using colored square blocks to represent the logo shape generally */}
                            <View style={{ flexDirection: 'row', flexWrap: 'wrap', width: 20, height: 20, marginRight: 12 }}>
                                <View style={{ backgroundColor: SplashColors.googleRed, width: 10, height: 10, borderTopLeftRadius: 10 }} />
                                <View style={{ backgroundColor: SplashColors.googleBlue, width: 10, height: 10, borderTopRightRadius: 10 }} />
                                <View style={{ backgroundColor: SplashColors.googleYellow, width: 10, height: 10, borderBottomLeftRadius: 10 }} />
                                <View style={{ backgroundColor: SplashColors.googleGreen, width: 10, height: 10, borderBottomRightRadius: 10 }} />
                            </View>
                            <Text style={[styles.googleButtonText, { color: isDark ? SplashColors.slate200 : SplashColors.slate700 }]}>Continue with Google</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Footer */}
                    <View style={styles.footerContainer}>
                        <Text style={[styles.footerText, { color: textColorSecondary }]}>
                            {"Don't have an account? "}
                            <Text style={styles.footerLink} onPress={() => router.push('/register')}>Create account</Text>
                        </Text>
                    </View>

                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    keyboardAvoidingView: {
        flex: 1,
    },
    scrollContent: {
        flexGrow: 1,
        paddingBottom: 24,
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingTop: 16,
        paddingBottom: 8,
    },
    backButton: {
        width: 48,
        height: 48,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    heroSection: {
        paddingHorizontal: 16,
        paddingVertical: 24,
        alignItems: 'center',
    },
    heroImage: {
        width: 128,
        height: 128,
        marginBottom: 24,
        backgroundColor: 'transparent',
    },
    heroTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 8,
    },
    heroSubtitle: {
        fontSize: 14,
        textAlign: 'center',
        marginBottom: 24,
    },
    formSection: {
        paddingHorizontal: 24,
        gap: 16, // using gap to space out children like tailwind flex col gap-4
    },
    inputContainer: {
        width: '100%',
        marginBottom: 16, // Fallback if gap isn't fully supported across rn versions
    },
    inputLabel: {
        fontSize: 14,
        fontWeight: '600',
        marginBottom: 8,
    },
    textInput: {
        height: 56,
        borderWidth: 1,
        borderRadius: 12,
        paddingHorizontal: 16,
        fontSize: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 1,
    },
    forgotPasswordContainer: {
        alignSelf: 'flex-end',
        marginTop: 4,
    },
    forgotPasswordText: {
        fontSize: 14,
        fontWeight: '500',
        color: SplashColors.linkLight,
    },
    actionSection: {
        paddingHorizontal: 24,
        marginTop: 32,
    },
    primaryButton: {
        height: 56,
        backgroundColor: SplashColors.primary,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    primaryButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    dividerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 16,
    },
    dividerLine: {
        flex: 1,
        height: 1,
    },
    dividerText: {
        marginHorizontal: 16,
        fontSize: 14,
        color: SplashColors.slate400,
    },
    googleButton: {
        height: 56,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 1,
    },
    googleButtonText: {
        fontSize: 16,
        fontWeight: '600',
    },
    footerContainer: {
        marginTop: 'auto',
        paddingTop: 32,
        paddingHorizontal: 24,
        paddingBottom: 24,
        alignItems: 'center',
    },
    footerText: {
        fontSize: 14,
    },
    footerLink: {
        fontWeight: 'bold',
        color: SplashColors.linkLight,
    },
});
