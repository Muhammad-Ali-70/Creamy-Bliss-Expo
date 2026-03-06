import { SplashColors } from '@/constants/SplashColors';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { router } from 'expo-router';
import React, { useEffect, useRef } from 'react';
import { Animated, Easing, ImageBackground, StyleSheet, Text, View } from 'react-native';

export default function SplashScreen() {
    const colorScheme = useColorScheme();
    const isDark = colorScheme === 'dark';
    const progressAnimation = useRef(new Animated.Value(0)).current;

    // Background and text colors based on theme
    const bgColor = isDark ? SplashColors.backgroundDark : SplashColors.backgroundLight;
    const textColorPrimary = isDark ? SplashColors.slate100 : SplashColors.slate900;
    const textColorSecondary = isDark ? SplashColors.slate400 : SplashColors.slate600;
    const loadingTextColor = isDark ? SplashColors.slate400 : SplashColors.slate500;
    const borderColor = isDark ? SplashColors.slate800 : SplashColors.white;

    useEffect(() => {
        // Start the loading bar animation
        Animated.timing(progressAnimation, {
            toValue: 1,
            duration: 2500, // 2.5 seconds loading simulation
            easing: Easing.out(Easing.ease),
            useNativeDriver: false, // width animation doesn't support native driver
        }).start(({ finished }) => {
            // Once the animation finishes, navigate to the main tabs
            if (finished) {
                // Need a slight timeout to ensure navigation occurs smoothly after animation completes
                setTimeout(() => {
                    router.replace('/login');
                }, 200);
            }
        });
    }, [progressAnimation]);

    const progressWidth = progressAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: ['0%', '100%'],
    });

    return (
        <View style={[styles.container, { backgroundColor: bgColor }]}>
            {/* Decorative Sprinkles Background (Simplified for React Native as absolute positioned views) */}
            <View style={styles.sprinklesContainer} pointerEvents="none">
                <View style={[styles.sprinkle, { top: '10%', left: '10%', width: 12, height: 32, transform: [{ rotate: '45deg' }] }]} />
                <View style={[styles.sprinkle, { top: '20%', right: '16%', width: 8, height: 24, opacity: 0.3, transform: [{ rotate: '-12deg' }] }]} />
                <View style={[styles.sprinkleCircle, { top: '25%', left: '25%', width: 16, height: 16, opacity: 0.5 }]} />
                <View style={[styles.sprinkle, { bottom: '33%', right: '10%', width: 12, height: 40, opacity: 0.4, transform: [{ rotate: '12deg' }] }]} />
                <View style={[styles.sprinkle, { bottom: '25%', left: '12%', width: 8, height: 24, opacity: 0.6, transform: [{ rotate: '-45deg' }] }]} />
                <View style={[styles.sprinkleCircle, { top: '50%', right: '25%', width: 16, height: 16, opacity: 0.3 }]} />
            </View>

            {/* Main Content Centered */}
            <View style={styles.mainContent}>
                <ImageBackground
                    source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuDXo1DkxEkFtpKYUgIpXiShzUMy10JxGZqPNjrGuGqOYNGHpgjhbTx3UZ_s1TOWZMP96t3mDAwjM3CRNT314PsS9Ur5U4Etop9rXS_7ZHdaDf_Jrdu1D06lxGcXiJ3Ipg5i7aKb1dsRrSalglRnZa_DfJ24woEu2ts33Nmq5iOSNwLRX2cVdJuYD2laq88DOkYHzWItp3UYzAj1IafuPJKuH1dxYxCvMWcGASq2VpJ5aIHlLex_fTzv4A2QYL6zMaaJ3T_sG9TnXDU" }}
                    style={[styles.imageContainer, { borderColor }]}
                    imageStyle={styles.image}
                />

                <View style={styles.titleContainer}>
                    <Text style={[styles.titleText, { color: textColorPrimary }]}>Creamy </Text>
                    <Text style={[styles.titleText, { color: SplashColors.primary }]}>Bliss</Text>
                </View>

                <Text style={[styles.subtitleText, { color: textColorSecondary }]}>
                    Your sweet escape in every scoop.
                </Text>
            </View>

            {/* Loading Bottom Section */}
            <View style={styles.loadingContainer}>
                <Text style={[styles.loadingText, { color: loadingTextColor }]}>
                    LOADING GOODNESS...
                </Text>

                <View style={styles.progressBarContainer}>
                    <Animated.View style={[styles.progressBarFill, { width: progressWidth }]} />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    sprinklesContainer: {
        ...StyleSheet.absoluteFillObject,
        opacity: 0.4,
    },
    sprinkle: {
        position: 'absolute',
        backgroundColor: `${SplashColors.primary}66`, // Primary color with 40% opacity (approximate)
        borderRadius: 9999,
    },
    sprinkleCircle: {
        position: 'absolute',
        backgroundColor: `${SplashColors.primary}80`, // Primary color with 50% opacity
        borderRadius: 9999,
    },
    mainContent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
        zIndex: 10,
    },
    imageContainer: {
        width: 192,
        height: 192,
        marginBottom: 32,
        borderRadius: 96,
        borderWidth: 4,
        shadowColor: SplashColors.primary,
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.2,
        shadowRadius: 15,
        elevation: 10,
        backgroundColor: 'white',
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    titleText: {
        fontSize: 36,
        fontWeight: '800', // extrabold
        letterSpacing: -0.5,
        textAlign: 'center',
    },
    subtitleText: {
        fontSize: 14,
        fontWeight: '500', // medium
        textAlign: 'center',
    },
    loadingContainer: {
        width: '100%',
        paddingHorizontal: 32,
        paddingBottom: 48,
        gap: 16,
        zIndex: 10,
    },
    loadingText: {
        fontSize: 14,
        fontWeight: '600', // semibold
        letterSpacing: 0.5,
        textTransform: 'uppercase',
        textAlign: 'center',
        marginBottom: 12
    },
    progressBarContainer: {
        width: '100%',
        height: 12, // slightly thicker for better visibility depending on device scaling
        backgroundColor: `${SplashColors.primary}33`, // 20% opacity
        borderRadius: 9999,
        overflow: 'hidden',
    },
    progressBarFill: {
        height: '100%',
        backgroundColor: SplashColors.primary,
        borderRadius: 9999,
    },
});
