// src/components/Profile/ChatScreen.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView } from 'react-native';

const ChatScreen = () => {
    const [messages, setMessages] = useState([]);
    const [inputText, setInputText] = useState('');
    const [isTyping, setIsTyping] = useState(false);

    const sendMessage = () => {
        if (inputText.trim() !== '') {
            const newMessage = { text: inputText, sender: 'Me', timestamp: new Date() };
            setMessages([...messages, newMessage]);
            setInputText('');
            setIsTyping(false);
        }
    };

    const handleTyping = (text) => {
        setInputText(text);
        setIsTyping(text !== '');
    };

    const renderMessages = () => {
        return messages.map((message, index) => (
            <View key={index} style={{ marginVertical: 5, paddingHorizontal: 10 }}>
                <Text>{message.sender}: {message.text}</Text>
                {message.sender === 'Me' && <Text>{message.read ? `Read at ${message.readTime}` : 'Sending...'}</Text>}
            </View>
        ));
    };

    return (
        <View style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                {renderMessages()}
            </ScrollView>
            <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10 }}>
                <TextInput
                    style={{ flex: 1, borderWidth: 1, borderColor: 'gray', borderRadius: 5, padding: 10 }}
                    placeholder="Type your message..."
                    value={inputText}
                    onChangeText={handleTyping}
                />
                <Button title="Send" onPress={sendMessage} />
            </View>
            {isTyping && <Text style={{ paddingHorizontal: 10, fontStyle: 'italic' }}>Writing...</Text>}
        </View>
    );
};

export default ChatScreen;
