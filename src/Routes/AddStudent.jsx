import React, { useState } from "react";
import { Box, Button, FormControl, FormLabel, Input, VStack, Select } from "@chakra-ui/react";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

const AddStudent = (props) => {
    const [getFullName, setFullName] = useState("");
    const [getAddress, setAddress] = useState("");
    const [getPhone, setPhone] = useState("");
    const [getDate, setDate] = useState("");
    const [getGender, setGender] = useState("");
    const [getPrody, setPrody] = useState("");
    const [getPicture, setPicture] = useState("");
  
    const addStudent = (e) => {
      e.preventDefault();
  
      const data = {
        fullname: getFullName,
        address: getAddress,
        birthDate: getDate,
        gender: getGender,
        phoneNumber: getPhone,
        faculty: "",
        programStudy: getPrody,
        profilePicture: getPicture,
      };
  
      const prody = data["programStudy"];
  
      if (prody === "Ekonomi" || prody === "Akuntansi" || prody === "Manajemen") {
        data["faculty"] = "Fakultas Ekonomi";
      } else if (
        prody === "Hubungan Internasional" ||
        prody === "Administrasi Bisnis" ||
        prody === "Administrasi Publik"
      ) {
        data["faculty"] = "Fakultas Ilmu Sosial dan Politik";
      } else if (prody === "Arsitektur" || prody === "Teknik Sipil") {
        data["faculty"] = "Fakultas Teknik";
      } else {
        data["faculty"] = "Fakultas Teknologi Informasi dan Sains";
      }
  
      props.createStudent(data);
  
      setFullName("");
      setAddress("");
      setDate("");
      setGender("");
      setPhone("");
      setPrody("");
      setPicture("");
    };
  
    return (
      <>
        <NavBar />
        <Box className="container">
          <Box className="card-form" id="form-student">
            <form onSubmit={addStudent}>
              <VStack spacing={4}>
                <FormControl>
                  <FormLabel htmlFor="input-name">Fullname</FormLabel>
                  <Input data-testid="name" type="text" id="input-name" onChange={({ target }) => setFullName(target.value)} value={getFullName}/>
                </FormControl>
                <FormControl>
                  <Box className="input-doubel">
                    <Box className="col-inp">
                      <FormLabel htmlFor="input-picture">
                        Profile Picture
                      </FormLabel>
                      <Input data-testid="profilePicture" type="text" id="input-picture" onChange={({ target }) => setPicture(target.value)} value={getPicture}/>
                    </Box>
                    <Box className="col-inp">
                      <FormLabel htmlFor="input-address">Address</FormLabel>
                      <Input data-testid="address" type="text" id="input-address" onChange={({ target }) => setAddress(target.value)} value={getAddress}/>
                    </Box>
                  </Box>
                </FormControl>
                <FormControl>
                  <Box className="input-doubel">
                    <Box className="col-inp">
                      <FormLabel htmlFor="input-phone">Phone Number</FormLabel>
                      <Input data-testid="phoneNumber" type="text" id="input-phone" onChange={({ target }) => setPhone(target.value)} value={getPhone}/>
                    </Box>
                    <Box className="col-inp">
                      <FormLabel htmlFor="input-date">Birth Date</FormLabel>
                      <Input data-testid="date" type="date" id="input-date" onChange={({ target }) => setDate(target.value)} value={getDate}/>
                    </Box>
                  </Box>
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="input-gender">Gender</FormLabel>
                  <Select data-testid="gender" className="input-select" id="input-gender" onChange={({ target }) => setGender(target.value)} value={getGender}>
                    <option></option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </Select>
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="input-prody">Program Study</FormLabel>
                  <Select data-testid="prody" className="input-select" id="input-prody" onChange={({ target }) => setPrody(target.value)} value={getPrody}>
                    <option></option>
                    <option value="Ekonomi">Ekonomi</option>
                    <option value="Manajemen">Manajemen</option>
                    <option value="Akuntansi">Akuntansi</option>
                    <option value="Administrasi Publik">
                      Administrasi Publik
                    </option>
                    <option value="Administrasi Bisnis">
                      Administrasi Bisnis
                    </option>
                    <option value="Hubungan Internasional">
                      Hubungan Internasional
                    </option>
                    <option value="Teknik Sipil">Teknik Sipil</option>
                    <option value="Arsitektur">Arsitektur</option>
                    <option value="Matematika">Matematika</option>
                    <option value="Fisika">Fisika</option>
                    <option value="Informatika">Informatika</option>
                  </Select>
                </FormControl>
                <FormControl>
                  <Button data-testid="add-btn" type="submit" value={"Add student"} id="add-btn" className="btn-add" variant="solid" colorScheme="pink.500">
                    Add student
                  </Button>
                </FormControl>
              </VStack>
            </form>
          </Box>
        </Box>
        <Footer />
      </>
    );
  };

export default AddStudent;
