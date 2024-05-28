import React, { useEffect, useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import Gambar from '../../assets/images/gambar2.png';
import { db } from '../firebase/firebase'; // Pastikan jalur impor ini benar
import { collection, onSnapshot } from 'firebase/firestore';

const BeliTiket = () => {
  const [search, setSearch] = useState('');
  const [selectedTickets, setSelectedTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const subscriber = onSnapshot(collection(db, 'tickets'), (querySnapshot) => {
      const tickets = [];
      querySnapshot.forEach((documentSnapshot) => {
        tickets.push({
          ...documentSnapshot.data(),
          id: documentSnapshot.id,
        });
      });
        setTickets(tickets);
        setLoading(false);
      });
    // Unsubscribe from events when no longer in use
    return () => subscriber();
  }, []);
  const handleSearchChange = (value) => {
    setSearch(value);
  };

  const handleTicketClick = (ticket) => {
    setSelectedTickets((prevSelectedTickets) => {
      const alreadySelected = prevSelectedTickets.find((t) => t.id === ticket.id);
      if (alreadySelected) {
        return prevSelectedTickets.filter((t) => t.id !== ticket.id);
      } else {
        return [...prevSelectedTickets, ticket];
      }
    });
  };

  const filteredTickets = tickets.filter((ticket) =>
    ticket.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Cari Tiket"
          value={search}
          onChangeText={handleSearchChange}
        />
      </View>
      <ScrollView contentContainerStyle={{ padding: 10, paddingTop: 0 }}>
        <View>
          {loading ? (
            <Text>Loading...</Text>
          ) : (
            filteredTickets.map((ticket) => (
              <TouchableOpacity
                key={ticket.id}
                onPress={() => handleTicketClick(ticket)}
                style={{
                  ...styles.ticketContainer,
                  backgroundColor: selectedTickets.includes(ticket) ? '#e0f7fa' : '#fff',
                }}
              >
                <Image source={ticket.image || Gambar} style={styles.image} />
                <Text>{ticket.name}</Text>
                <Text>{ticket.date}</Text>
                <Text>Rp. {ticket.price.toLocaleString()}</Text>
              </TouchableOpacity>
            ))
          )}
        </View>
        <View>
          <Text>Total Tiket Terpilih: {selectedTickets.length}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    padding: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  input: {
    padding: 10,
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
  },
  ticketContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    cursor: 'pointer',
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
});

export default BeliTiket;
