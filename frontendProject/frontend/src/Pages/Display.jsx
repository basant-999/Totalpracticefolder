import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { HiArchiveBox } from 'react-icons/hi2';
import { FaRegEdit } from 'react-icons/fa';

const Display = () => {
  const [input, setInput] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    contact: '',
    city: '',
    date: '',
  });

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/product');
      setInput(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/product/${id}`);
      alert('Successfully deleted');
      fetchData();
    } catch (error) {
      alert('Failed to delete data');
    }
  };

  const handleEdit = (item) => {
    setEditingId(item.id);
    setFormData({
      name: item.name,
      age: item.age,
      contact: item.contact,
      city: item.city,
      date: item.date,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!editingId) {
      alert('Please select an entry to edit.');
      return;
    }

    try {
      await axios.put(`http://localhost:3000/product/${editingId}`, formData);
      alert('Successfully updated');
      setEditingId(null);
      setFormData({
        name: '',
        age: '',
        contact: '',
        city: '',
        date: '',
      });
      fetchData();
    } catch (error) {
      alert('Error updating record');
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Contact</th>
            <th>City</th>
            <th>Date</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {input.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.contact}</td>
              <td>{item.city}</td>
              <td>{item.date}</td>
              <td>
                <FaRegEdit onClick={() => handleEdit(item)} style={{ cursor: 'pointer' }} />
              </td>
              <td>
                <HiArchiveBox onClick={() => handleDelete(item.id)} style={{ cursor: 'pointer' }} />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <div style={{ width: '300px', padding: '20px' }}>
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          /><br />

          <label>Age</label>
          <input
            type="text"
            placeholder="Enter your age"
            name="age"
            value={formData.age}
            onChange={handleChange}
          /><br />

          <label>Contact</label>
          <input
            type="text"
            placeholder="Enter your contact"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
          /><br />

          <label>City</label>
          <input
            type="text"
            placeholder="Enter your city"
            name="city"
            value={formData.city}
            onChange={handleChange}
          /><br />

          <label>Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          /><br />

          <button type="submit">Update</button>
        </form>
      </div>
    </>
  );
};

export default Display;
