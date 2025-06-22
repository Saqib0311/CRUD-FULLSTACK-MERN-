import React, { useEffect, useState } from "react";
import EnquiryForm from "../component/EnquiryForm";
import EnquiryTable from "../component/EnquiryTable";
import axios from "axios";

const UserEnquiry = () => {
  const [enquiryList, setEnquiryList] = useState([]);

  const getAllEnquiry = () => {
    axios
      .get("http://localhost:8000/web/mern/enquiry/view")
      .then((res) => {
        setEnquiryList(res.data.enquiry); // matches your backend JSON
      })
      .catch((err) => console.log(err));
  };
  const deleteEnquiry = (id) => {
    axios
      .delete(`http://localhost:8000/web/mern/enquiry/delete/${id}`)
      .then((res) => {
        console.log(res.data);
        getAllEnquiry(); // refresh after delete
      })
      .catch((err) => console.error(err));
  };
  const [formData, setFormData] = useState({
  name: "",
  email: "",
  phone: "",
  message: "",
});
const [editingId, setEditingId] = useState(null);
  const handleEdit = (enquiry) => {
    setFormData(enquiry);
    setEditingId(enquiry._id);
  };
  useEffect(() => {
    getAllEnquiry();
  }, []);

  return (
    <>
      <div>
        <h1 className="text-[40px] text-center py-6 font-bold">Enquiry</h1>
      </div>
      <div className="grid grid-cols-[30%_auto] gap-30">
        <div>
          <EnquiryForm
            formData={formData}
            setFormData={setFormData}
            editingId={editingId}
            setEditingId={setEditingId}
            onEnquirySaved={getAllEnquiry}
          />
        </div>
        <div>
          <EnquiryTable enquiryList={enquiryList} onDelete={deleteEnquiry} onEdit={handleEdit} />
        </div>
      </div>
    </>
  );
};

export default UserEnquiry;
