import React from 'react';
import { Button, View, Text } from 'react-native';

export class List extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>No survey yet</Text>
                <Button
                    title="Go to Details"
                />
            </View>
        );
    }
}