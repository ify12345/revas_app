import { View, Text, StyleSheet, TextInput, Pressable, FlatList } from "react-native";
import React, { forwardRef, useState } from "react";
import {
    EyeIcon,
    EyeSlashIcon,
    CheckIcon,
    MagnifyingGlassIcon,
} from "react-native-heroicons/solid";
import { ArrowDownIcon } from "react-native-heroicons/solid"; 
import HText from "./RText";
import { RFValue } from "react-native-responsive-fontsize";
import HTouchableOpacity from "./RTouchableOpacity";
// import RadioGreen from "../assets/icons/Radio";

interface _iProps {
    placeholder?: string;
    value?: string;
    onChangeText?: any;
    label?: string;
    type?: 2;
    icon?: 2;
    error?: any;
    textType?: any;
    autoCorrection?: boolean;
    disabled?: boolean;
    onFocus?: any;
    onPressIn?: any;
    onBlur?: any;
    ref?: any;
}

interface _iProps {
    placeholder?: string;
    value?: string;
    onChangeText?: any;
    label?: string;
    options?: string[]; // Array of options for the dropdown
}

interface _checkbox {
    checked?: boolean;
    setChecked?: any;
}



const HDropdownInput = forwardRef((props: _iProps, ref) => {
    const { placeholder, options } = props;
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("");

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleSelectOption = (option: string) => {
        setSelectedOption(option);
        setIsDropdownOpen(false);
        if (props.onChangeText) {
            props.onChangeText(option);
        }
    };

    return (
        <View style={styles.dropdownContainer}>
            <Pressable onPress={toggleDropdown}>
                <View style={styles.dropdownHeader}>
                    <Text style={styles.selectedOption}>
                        {selectedOption || placeholder}
                    </Text>
                    <ArrowDownIcon color="#667185" width={20} />
                </View>
            </Pressable>
            {isDropdownOpen && (
                <View style={styles.dropdownListContainer}>
                    <FlatList
                        data={options}
                        renderItem={({ item }) => (
                            <Pressable onPress={() => handleSelectOption(item)}>
                                <Text style={styles.dropdownItem}>{item}</Text>
                            </Pressable>
                        )}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>
            )}
        </View>
    );
});


const HSearchInput = forwardRef((props: _iProps, ref) => {
    const { placeholder, icon } = props;
    return (
        <View
            style={[
                styles.inputContainer,
                {
                    backgroundColor: props.type === 2 ? "#f0f0f0" : "#ffffff",
                },
            ]}
        >
            {icon === 2 ? (
                <RadioGreen />
            ) : (
                <MagnifyingGlassIcon color="#667185" width={20} />
            )}
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                ref={ref}
                {...props}
            />
        </View>
    );
});

const HInput = (props: _iProps) => {
    const {
        placeholder,
        label,
        type,
        error,
        textType,
        autoCorrection,
        disabled,
    } = props;

    const [secureEntry, setSecureEntry] = useState(true);

    return (
        <View>
            {label && (
                <HText
                    fontSize="10"
                    fontWeight="semibold"
                    textStyle={styles.label}
                >
                    {label}
                </HText>
            )}
            <View style={styles.inputRow}>
                <TextInput
                    style={type === 2 ? styles.textInput2 : styles.textInput}
                    placeholder={placeholder}
                    textContentType={textType ? textType : "none"}
                    autoCorrect={autoCorrection}
                    secureTextEntry={
                        textType !== "password" ? false : secureEntry
                    }
                    {...props}
                />

                {textType === "password" && (
                    <HTouchableOpacity
                        style={styles.iconContainer}
                        onPress={() => setSecureEntry(!secureEntry)}
                    >
                        {!secureEntry ? (
                            <EyeIcon color="#ccc" size={22} />
                        ) : (
                            <EyeSlashIcon color="#ccc" size={22} />
                        )}
                    </HTouchableOpacity>
                )}
            </View>
            {error && (
                <HText color="#667185" textStyle={{ marginTop: 8 }}>
                    {error}
                </HText>
            )}
        </View>
    );
};

const HCheckbox = (props: _checkbox) => {
    const { checked, setChecked } = props;
    return (
        <Pressable
            style={[
                styles.checkbox,
                { backgroundColor: checked ? "black" : "#ffffff" },
            ]}
            onPress={() => setChecked(checked)}
        >
            {checked && (
                <CheckIcon
                    color="#fff"
                    fontWeight= "900"
                    width={18}
                    height={18}
                />
            )}
        </Pressable>
    );
};

const styles = StyleSheet.create({
    dropdownContainer: {
        position: "relative",
    },
    dropdownHeader: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#D0D5DD",
        height: 48,
        borderRadius: 16,
        paddingLeft: 10,
        paddingRight: 16,
        justifyContent: "space-between",
    },
    selectedOption: {
        flex: 1,
        fontSize: RFValue(14),
        lineHeight: RFValue(20.03),
    },
    dropdownListContainer: {
        position: "absolute",
        top: 50, // Adjust according to your dropdown header height
        width: "100%",
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#D0D5DD",
        borderRadius: 16,
        marginTop: 4, // Adjust according to your dropdown header margin
    },
    dropdownItem: {
        paddingVertical: 10,
        paddingHorizontal: 16,
        fontSize: RFValue(14),
    },



    inputContainer: {
        flexDirection: "row",
        borderWidth: 1,
        borderColor: "#D0D5DD",
        height: 48,
        borderRadius: 16,
        alignItems: "center",
        paddingLeft: 10,
        marginBottom: 14,
        backgroundColor: "#fff",
        shadowColor: "#f0f0f0",
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 5,
    },
    input: {
        height: 48,
        flexGrow: 1,
        paddingHorizontal: 10,
        paddingBottom: 6,
        fontSize: RFValue(14),
        lineHeight: RFValue(20.03),
    },
    textInput: {
        height: 50,
        flexGrow: 1,
        padding: 16,
        fontSize: RFValue(10),
        borderRadius: 16,
        borderWidth: 2,
        borderColor: "#F0F0F0",
        shadowColor: "#f0f0f0",
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 5,
    },
    textInput2: {
        backgroundColor: "#F0F0F0",
        height: 50,
        flexGrow: 1,
        padding: 16,
        fontSize: RFValue(10),
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#D0D5DD",
        shadowColor: "#f0f0f0",
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 5,
    },
    label: {
        lineHeight: 20,
        marginBottom: 5,
    },
    checkbox: {
        width: 20,
        height: 20,
        borderColor: "#777777",
        borderRadius: 2,
        alignItems: "center",
        justifyContent: "center",
    },
    inputRow: {
        flexDirection: "row",
        alignItems: "center",
    },
    iconContainer: {
        width: 20,
        height: 20,
        position: "absolute",
        right: 14,
        zIndex: 1,
    },
    placeholer:{
        fontSize: 10
    }
});

export { HSearchInput, HInput, HCheckbox,HDropdownInput };
