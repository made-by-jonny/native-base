import React from "react";
import Field from './field'
import { View, Text, Button } from "react-native";
import styled from 'styled-components/native'

const FormView = styled.View`
    display:flex;
    flex-direction: column;
    flex:1;
    padding: 20px;
`

export default class Form extends React.Component {
    state = {
        fields: this.props.fields || [],
        values: []
    }

    valueChange = (label, value) => {
        this.setState({
            values: [
                ...this.state.values,
                {[label]: value}
            ]
            
        })
    }

    submit = () => {
        this.props.onSubmit(this.state)
    }

    render() {
        return (
            <FormView>
                <Text>{this.props.title}</Text>
                {this.props.fields.map(item => 
                    <Field type={item.type || 'text'} label={item.label} onChange={this.valueChange}/>
                )}
                <Button 
                    onPress={this.submit}
                    title="Submit"
                    color="#841584"
                    accessibilityLabel="Submit this form"
                />
            </FormView>
        )
    }
}