import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import Gambar from '../../assets/images/gambar2.png';

const BeliTiket = () => {
  const [search, setSearch] = useState('');
  const [selectedTickets, setSelectedTickets] = useState([]);

  const tickets = [
    {
      id: 1,
      name: 'Tiket Bogey 2 seater 120 menit',
      date: '01 January 2024 - 31 December 2024',
      price: 120000,
      image: Gambar,
    },
    {
      id: 2,
      name: 'Tiket Motor listrik seater 120 menit',
      date: '20 April 2024 - 4 Juli 2024',
      price: 20000,
      image: Gambar,
    },
    {
      id: 3,
      name: 'Tiket Mobil listrik',
      date: '20 April 2024 - 4 Juli 2024',
      price: 20000,
      image: Gambar,
    },
  ];

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
          {filteredTickets.map((ticket) => (
            <TouchableOpacity
              key={ticket.id}
              onPress={() => handleTicketClick(ticket)}
              style={{
                ...styles.ticketContainer,
                backgroundColor: selectedTickets.includes(ticket) ? '#e0f7fa' : '#fff',
              }}
            >
              <Image source={ticket.image} style={styles.image} />
              <Text>{ticket.name}</Text>
              <Text>{ticket.date}</Text>
              <Text>Rp. {ticket.price.toLocaleString()}</Text>
            </TouchableOpacity>
          ))}
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
    backgroundColor: '#fff', // Tambahkan latar belakang untuk search bar
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
