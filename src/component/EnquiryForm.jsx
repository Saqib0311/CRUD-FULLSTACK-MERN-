import React from "react";
import axios from "axios";
import { Button, Label, Textarea, TextInput } from "flowbite-react";

const EnquiryForm = ({ onEnquirySaved, formData, setFormData, editingId, setEditingId }) => {
  const getValue = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

const SaveEnquiry = (e) => {
  e.preventDefault();

  if (editingId) {
    // UPDATE
    axios.put(`http://localhost:8000/web/mern/enquiry/update/${editingId}`, formData)
      .then((res) => {
        console.log(res.data);
        setEditingId(null); // exit edit mode
        setFormData({ name: "", email: "", phone: "", message: "" });
        onEnquirySaved(); // refresh table
      });
  } else {
    // INSERT
    axios.post('http://localhost:8000/web/mern/enquiry/insert', formData)
      .then((res) => {
        console.log(res.data);
        setFormData({ name: "", email: "", phone: "", message: "" });
        onEnquirySaved();
      });
  }
};

  return (
    <>
      <h2 className="text-[40px] font-bold">EnquiryForm</h2>
      <form onSubmit={SaveEnquiry} className="flex max-w-md flex-col gap-4">
        <Label htmlFor="name">Your Name</Label>
        <TextInput id="name" name="name" value={formData.name} onChange={getValue} required />
        <Label htmlFor="email">Email</Label>
        <TextInput id="email" name="email" value={formData.email} onChange={getValue} required />
        <Label htmlFor="phone">Phone</Label>
        <TextInput id="phone" name="phone" value={formData.phone} onChange={getValue} required />
        <Label htmlFor="message">Your Message</Label>
        <Textarea id="message" name="message" value={formData.message} onChange={getValue} required rows={4} />
        <Button type="submit">{editingId ? "Update" : "Save"}</Button>

      </form>
    </>
  );
};

export default EnquiryForm;
