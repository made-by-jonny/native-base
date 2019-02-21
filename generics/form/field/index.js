import React from "react";
import { View, Text, TextInput } from "react-native";
import styled from 'styled-components/native'

const Input = styled.TextInput`
    border: 1px solid #ccc;
    padding: 10px;
`

export default class Field extends React.Component {
    state = {
        message: null
    }

    changeText = (text) => {
        this.props.onChange(this.props.label, text)
    }

    render() {
        return (
            <View>
                <Text>{this.props.label}</Text>
                <Input
                    style={{height: 40}}
                    placeholder={this.props.placeholder}
                    onChangeText={this.changeText}
                />
                <Text>{this.state.message}</Text>
            </View>
        )
    }
}