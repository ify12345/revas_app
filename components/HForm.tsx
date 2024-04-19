import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  FlatList,
  TouchableOpacity,
  Modal,
} from "react-native";
import React, { forwardRef, useState, FC, ReactElement, useRef } from "react";
import {
  EyeIcon,
  EyeSlashIcon,
  CheckIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/solid";
import { Icon } from "react-native-elements";
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

interface Props {
  label: string;
  data: Array<{ label: string; value: string }>;
  onSelect: (item: { label: string; value: string }) => void;
}

interface _checkbox {
  checked?: boolean;
  setChecked?: any;
}

const HDropdownInput: FC<Props> = ({ label,onSelect,data }) => {

  const [visible, setVisible] = useState(false);
  const dropdownButtonRef = useRef<TouchableOpacity>(null);
  const [dropdownTop, setDropdownTop] = useState(0);
  const [selected, setSelected] = useState<any>(undefined);

  const onItemPress = (item:any): void => {
    setSelected(item);
    onSelect(item);
    setVisible(false);
  };

  const toggleDropdown = (): void => {
    // Toggle dropdown visibility
    setVisible(!visible);
  };

  const openDropdown = (): void => {
    // Ensure dropdownButtonRef is not null before measuring
    if (dropdownButtonRef.current) {
      dropdownButtonRef.current.measure((_fx, _fy, _w, h, _px, py) => {
        setDropdownTop(py + h);
      });
      setVisible(true);
    }
  };
  const renderItem = ({ item }: { item: { label: string } }): ReactElement => (
    <TouchableOpacity style={styles.item} onPress={() => onItemPress(item)}>
        <Text style={styles.buttonText}>
            {(selected && selected.label) || item.label}
        </Text>
    </TouchableOpacity>
);
  const renderDropdown = (): ReactElement<any, any> => {
    return (
      <Modal visible={visible} transparent animationType="none">
        <TouchableOpacity
          ref={dropdownButtonRef}
          style={styles.button}
          onPress={toggleDropdown}
        >
          <View style={[styles.dropdown, { top: dropdownTop }]}>
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    );
  };

  return (
    <TouchableOpacity style={styles.button} onPress={toggleDropdown}>
      {renderDropdown()}
      <Text style={styles.buttonText}>{label}</Text>
      <Icon type="font-awesome" name="chevron-down" />
    </TouchableOpacity>
  );
};

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
        <HText fontSize="10" fontWeight="semibold" textStyle={styles.label}>
          {label}
        </HText>
      )}
      <View style={styles.inputRow}>
        <TextInput
          style={type === 2 ? styles.textInput2 : styles.textInput}
          placeholder={placeholder}
          textContentType={textType ? textType : "none"}
          autoCorrect={autoCorrection}
          secureTextEntry={textType !== "password" ? false : secureEntry}
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
        <CheckIcon color="#fff" fontWeight="900" width={18} height={18} />
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  dropdown: {
    position: "absolute",
    backgroundColor: "#fff",
    width: "100%",
    shadowColor: "#000000",
    shadowRadius: 4,
    shadowOffset: { height: 4, width: 0 },
    shadowOpacity: 0.5,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#efefef",
    height: 50,
    width: "90%",
    paddingHorizontal: 10,
    zIndex: 1,
  },
  buttonText: {
    flex: 1,
    textAlign: "center",
  },
  item: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderBottomWidth: 1,
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
  placeholer: {
    fontSize: 10,
  },
});

export { HSearchInput, HInput, HCheckbox, HDropdownInput };
