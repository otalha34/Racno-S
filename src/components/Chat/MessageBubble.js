// src/components/Chat/MessageBubble.js

import React from 'react';
import { View, Text } from 'react-native';

const MessageBubble = ({ message, isSentByMe, isRead }) => {
    return (
        <View style={{ alignSelf: isSentByMe ? 'flex-end' : 'flex-start' }}>
            <View
                style={{
                    backgroundColor: isSentByMe ? '#DCF8C6' : '#FFFFFF',
                    borderRadius: 10,
                    padding: 10,
                    margin: 5,
                }}>
                <Text>{message}</Text>
                {isSentByMe && isRead && <Text>Read</Text>}
            </View>
        </View>
    );
};

export default MessageBubble;
