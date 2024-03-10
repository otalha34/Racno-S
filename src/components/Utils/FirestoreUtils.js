// src/utils/FirestoreUtils.js

import firestore from '@react-native-firebase/firestore';

const FirestoreUtils = {
    // Function to get a single document from Firestore collection by ID
    getDocumentById: async (collectionName, documentId) => {
        try {
            const documentSnapshot = await firestore().collection(collectionName).doc(documentId).get();
            if (documentSnapshot.exists) {
                return { id: documentSnapshot.id, ...documentSnapshot.data() };
            } else {
                throw new Error(`Document with ID '${documentId}' does not exist in collection '${collectionName}'`);
            }
        } catch (error) {
            throw error;
        }
    },

    // Function to get all documents from a Firestore collection
    getAllDocumentsFromCollection: async (collectionName) => {
        try {
            const querySnapshot = await firestore().collection(collectionName).get();
            const documents = [];
            querySnapshot.forEach(doc => {
                documents.push({ id: doc.id, ...doc.data() });
            });
            return documents;
        } catch (error) {
            throw error;
        }
    },

    // Function to add a new document to a Firestore collection
    addDocumentToCollection: async (collectionName, data) => {
        try {
            const docRef = await firestore().collection(collectionName).add(data);
            return docRef.id;
        } catch (error) {
            throw error;
        }
    },

    // Function to update a document in a Firestore collection
    updateDocumentInCollection: async (collectionName, documentId, data) => {
        try {
            await firestore().collection(collectionName).doc(documentId).update(data);
        } catch (error) {
            throw error;
        }
    },

    // Function to delete a document from a Firestore collection
    deleteDocumentFromCollection: async (collectionName, documentId) => {
        try {
            await firestore().collection(collectionName).doc(documentId).delete();
        } catch (error) {
            throw error;
        }
    }
};

export default FirestoreUtils;
