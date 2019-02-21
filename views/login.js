import React from "react";
import { View, Text, Dimensions } from "react-native";
import Form from "../generics/form";
import { StackActions, NavigationActions } from 'react-navigation';

const resetAction = StackActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: 'Main' })],
});

class HomeScreen extends React.Component {
    state = {
        fields: [
            {label: 'Email', type: 'email'},
            {label: 'Password', type: 'password'},
        ]
    }

    submit = (data) => {
        console.log(data)
        this.props.navigation.dispatch(resetAction);
    }

    render() {
      return (
        <View style={{ flexDirection: 'row', display:'flex', flex: 1, alignItems: "center", justifyContent: "center" }}>
          <Form title="login" fields={this.state.fields} onSubmit={this.submit}/>
        </View>
      );
    }
  }


export default HomeScreen