import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { ChevronDownIcon } from 'react-native-heroicons/solid';

const RDropDown = ({ options, placeholder, label, onSelect,width }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect(option);
  };

  return (
    <View style={[styles.container, { width: width }]}>
      <TouchableOpacity onPress={() => setIsOpen(!isOpen)} style={styles.dropdown}>
        {selectedOption ? (
            

          <Text style={styles.label}>{selectedOption[label]}</Text>
         
           
        ) : (
            <View style={{flexDirection:"row",width:"100%", justifyContent:"space-between", }}
            >
                <Text style={styles.placeholder}>{placeholder}</Text>
                <ChevronDownIcon color={"gray"}/>
          </View>
        )}

      </TouchableOpacity>

      {isOpen && (
        <View style={styles.optionsContainer}>
          {options.map((option) => (
            <TouchableOpacity key={option.id} onPress={() => handleSelect(option)} style={styles.option}>
              <Text>{option[label]}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    
  
    zIndex:100

  },
  dropdown: {
    padding: 10,
    borderWidth: 1,
  
    backgroundColor: "#F0F0F0",
    height: 50, 
    flexGrow: 1,
    padding: 16,
    borderRadius: 8,
     borderWidth: 1, 
     borderColor: "#D0D5DD",
     shadowColor: "#f0f0f0",
     shadowOpacity: 5,
     zIndex: 80,
  },
  label: {
    fontSize: 6,
  },
  placeholder: {
    fontSize: 14,
    color: 'gray',
  },
  optionsContainer: {
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    marginTop: 5,
    zIndex:80,
  },
  option: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
});

export default RDropDown;
