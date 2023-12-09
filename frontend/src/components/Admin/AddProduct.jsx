import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../instance/axios";

export default function AddProduct() {
  const navigate = useNavigate();
  const [upload, setUpload] = useState(true);
  const [value, setValue] = useState({
    name: "",
    discription: "",
    price: "",
    image: "",
  });

  const handleChange = (e) => {
    setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const presetKey = "vdbevfmo";
  const cloudName = "ds79wb3yq";

  const handleImage = async (e) => {
    setUpload(false);
    const file = e.target.files[0];
    const allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/;
    if (!allowedExtensions.exec(file.name)) {
      alert("Format is not supported");
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", presetKey);
    formData.append("cloud_name", cloudName);
    await axios
      .post("https://api.cloudinary.com/v1_1/ds79wb3yq/image/upload", formData)
      .then((res) => {
        const url = res.data.secure_url;
        value.image = url;
        setUpload(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = () => {
    try {
      axios.post("/admin/add-product", { value }).then(() => {
        navigate("/admin/products");
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="flex flex-col mx-6 w-full h-auto md:w-2/6 md:h-auto bg-slate-300 shadow-lg rounded-lg">
      <div className="flex items-center justify-center my-8">
        <h1 className="text-2xl font-semibold text-gray">ADD NEW PRODUCT</h1>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-around mx-10"
      >
        <div>
          <label className="">Name</label>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            className="w-full rounded my-1 px-4 py-1"
          />
        </div>
        <div>
          <label className="">Discription</label>
          <textarea
            type="text"
            name="discription"
            onChange={handleChange}
            className="w-full rounded my-1 px-4 py-1"
          />
        </div>
        <div>
          <label className="">Price</label>
          <input
            type="number"
            name="price"
            onChange={handleChange}
            className="w-full rounded my-1 px-4 py-1"
          />
        </div>
        <div>
          <label className="">Images</label>
          <input
            type="file"
            name="image"
            onChange={handleImage}
            className="w-full rounded my-1 px-4 py-1 bg-white"
          />
        </div>
        <div className="flex justify-center my-4">
          {upload ? (
            <button className="py-1 px-4 w-20 shadow-lg font-bold text-white mb-5 bg-green-300 rounded-md">
              Add
            </button>
          ) : (
            <p className="text-red-400 font-bold">Image uploading...</p>
          )}
        </div>
      </form>
    </div>
  );
}
