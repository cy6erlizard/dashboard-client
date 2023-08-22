import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";

const EditForm = () => {
  const { id } = useParams();
  const [clientData, setClientData] = useState(null);

  useEffect(() => {
    fetch(`/api/clients/${id}`)
      .then((response) => response.json())
      .then((data) => setClientData(data))
      .catch((error) => console.error(error));
  }, [id]);

  const handleFormSubmit = (values) => {
    console.log("Edited values:", values);
  };

  const checkoutSchema = yup.object().shape({
    firstName: yup.string().required("required"),
    lastName: yup.string().required("required"),
    email: yup.string().email("invalid email").required("required"),
    contact: yup
      .string()
      .matches(
        /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/,
        "Phone number is not valid"
      )
      .required("required"),
    address1: yup.string().required("required"),
  });

  return (
    <Box m="20px">
      {/* Your Formik and Form JSX */}
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={clientData || initialValues}
        validationSchema={checkoutSchema}
      >
        {/* Rest of your Formik form JSX */}
      </Formik>
    </Box>
  );
};

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  address1: "",
};

export default EditForm;
