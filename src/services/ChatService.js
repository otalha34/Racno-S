// src/services/ChatService.js

import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const ChatService = {
    // Function to send a message
    sendMessage: async (conversationId, messageData) => {
        try {
            // Add the message data to the conversation's messages sub-collection
            await firestore().collection('conversations').doc(conversationId).collection('messages').add(messageData);
        } catch (error) {
            throw error;
        }
    },

    // Function to mark a message as read
    markMessageAsRead: async (conversationId, messageId) => {
        try {
            // Update the message's 'read' field to true in Firestore
            await firestore().collection('conversations').doc(conversationId).collection('messages').doc(messageId).update({ read: true });
        } catch (error) {
            throw error;
        }
    },

    // Function to listen for new messages in a conversation
    listenForNewMessages: async (conversationId, callback) => {
        try {
            // Subscribe to the conversation's messages sub-collection
            const unsubscribe = firestore().collection('conversations').doc(conversationId).collection('messages')
                .orderBy('timestamp', 'asc') // Optionally, you can order messages by timestamp
                .onSnapshot(snapshot => {
                    const messages = [];
                    snapshot.forEach(doc => {
                        messages.push({ id: doc.id, ...doc.data() });
                    });
                    callback(messages);
                });

            return unsubscribe; // Return unsubscribe function to stop listening
        } catch (error) {
            throw error;
        }
    },

    // Function to start a new conversation
    startConversation: async (participantId) => {
        try {
            const currentUserId = auth().currentUser.uid;

            // Check if a conversation already exists between the current user and the participant
            const querySnapshot = await firestore().collection('conversations')
                .where('participants', 'array-contains', currentUserId)
                .where('participants', 'array-contains', participantId)
                .get();

            if (!querySnapshot.empty) {
                // If a conversation already exists, return its ID
                const conversationId = querySnapshot.docs[0].id;
                return conversationId;
            }

            // If no conversation exists, create a new conversation document
            const newConversationRef = await firestore().collection('conversations').add({
                participants: [currentUserId, participantId],
                createdAt: firestore.FieldValue.serverTimestamp()
            });

            return newConversationRef.id; // Return the ID of the newly created conversation
        } catch (error) {
            throw error;
        }
    }
};

export default ChatService;
