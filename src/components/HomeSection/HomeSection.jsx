import { Avatar, Button } from "@mui/material";
import { useFormik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import CollectionsIcon from "@mui/icons-material/Collections";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import BlogCard from "./BlogCard";

const validationSchema = Yup.object().shape({
  content: Yup.string().required("Text is required"),
});

const HomeSection = () => {
  const [uploadingImage, setUploadingImage] = useState(false);
  const [selectImage, setSelectImage] = useState(null);
  const handleSubmit = (values) => {
    console.log("values", values);
  };
  const handleSelectImage = (event) => {
    setUploadingImage(true);
    const imgUrl = event.target.files[0];
    console.log(imgUrl );
    formik.setFieldValue("image", imgUrl);
    setSelectImage(imgUrl);
    setUploadingImage(false);
  };
  const formik = useFormik({
    initialValues: {
      content: "",
      image: "",
    },
    onSubmit: handleSubmit,
    validationSchema,
  });
  return (
    <div className="space-y-5">
      {/* <section>
        <h1 className="py-5 text-xl font-bold opacity-90">Home</h1>
      </section> */}
      <section className={"mt-5 pb-10"}>
        <div className="flex space-x-5">
          <Avatar
            alt="username"
            src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_960_720.png"
          />
          <div className="w-full">
            <form onSubmit={formik.handleSubmit}>
              <div>
                <input
                  type="text"
                  name="content"
                  placeholder="What is happening?"
                  className={"border-none outline-none text-xl bg-transparent"}
                  {...formik.getFieldProps("content")}
                />
                {formik.errors.content && formik.touched.content && (
                  <span className="text-red-600">{formik.errors.content}</span>
                )}
              </div>
              {/* <div>
                    <img src="" alt="" />
                  </div> */}
              <div className="flex justify-between items-center mt-5">
                <div className="flex space-x-5 items-center">
                  <label className="flex items-center space-x-2 rounded-md cursor-pointer">
                    <CollectionsIcon className="text-[#1d9bf0]" />
                    <input
                      type="file"
                      name="imageFile"
                      className="hidden"
                      onChange={handleSelectImage}
                    />
                  </label>
                  <InsertEmoticonIcon className="text-[#1d9bf0]" />
                  <AddLocationIcon className="text-[#1d9bf0]" />

                </div>
                  <div>
                    <Button
                      sx={{
                        width: "100%",
                        borderRadius: "20px",
                        py: "8px",
                        px: "20px",
                        bgcolor: "#1d9bf0",
                      }}
                      variant="contained"
                      type="submit"
                    >
                      Post
                    </Button>
                  </div>
              </div>
            </form>
          </div>
        </div>
      </section>
      <section>
        {[1,1,1,1,1].map((item) => <BlogCard/>)}
      </section>
    </div>
  );
};

export default HomeSection;
