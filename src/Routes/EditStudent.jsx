import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Button, FormControl, FormLabel, Input, VStack } from "@chakra-ui/react";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

const EditStudent = (props) => {
  const { editStudent } = props;
  const { id } = useParams();
  const [fullname, setFullname] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [gender, setGender] = useState("");
  const [programStudy, setProgramStudy] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getData();
  }, []);

  const event = (e) => {
    e.preventDefault();
    const getFaculty = (programStudy) => {
      switch (programStudy) {
        case "Ekonomi":
        case "Manajemen":
        case "Akuntansi":
          return "Fakultas Ekonomi";
        case "Administrasi Publik":
        case "Administrasi Bisnis":
        case "Hubungan Internasional":
          return "Fakultas Ilmu Sosial dan Politik";
        case "Teknik Sipil":
        case "Arsitektur":
          return "Fakultas Teknik";
        case "Matematika":
        case "Fisika":
        case "Informatika":
          return "Fakultas Teknologi Informasi dan Sains";
        default:
          return "";
      }
    };

    const faculty = getFaculty(programStudy);
    const newStudent = {
      fullname,
      profilePicture,
      address,
      phoneNumber,
      birthDate,
      gender,
      faculty,
      programStudy,
    };

    editStudent(newStudent, id);

    setFullname("");
    setBirthDate("");
    setGender("");
    setProgramStudy("");
    setAddress("");
    setProfilePicture("");
    setPhoneNumber("");
  };

  const getData = async () => {
    try {
      await fetch(`http://localhost:3001/student/${id}`);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <NavBar />
      <Box className="container">
        {loading === true ? (
          <p>Loading ...</p>
        ) : (
          <Box className="card-form" id="form-student">
            <form onSubmit={event}>
              <VStack spacing={4}>
                <Box className="row">
                  <img src={profilePicture} alt={fullname} style={{ width: "200px" }}/>
                </Box>
                <FormControl>
                  <FormLabel htmlFor="fullname">Fullname:</FormLabel>
                  <Input data-testid="name" type="text" id="fullname" value={fullname} onChange={(e) => setFullname(e.target.value)}/>
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="profilePicture">
                    Profile Picture:
                  </FormLabel>
                  <Input data-testid="profilePicture" type="text" id="profilePicture" value={profilePicture} onChange={(e) => setProfilePicture(e.target.value)}/>
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="address">Address:</FormLabel>
                  <Input data-testid="address" type="text" id="address" value={address} onChange={(e) => setAddress(e.target.value)}/>
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="phoneNumber">Phone Number:</FormLabel>
                  <Input data-testid="phoneNumber" type="text" id="phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="birthDate">Birth Date:</FormLabel>
                  <Input data-testid="date" type="date" id="birthDate" value={birthDate} onChange={(e) => setBirthDate(e.target.value)}/>
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="gender">Gender:</FormLabel>
                  <Input data-testid="gender" type="text" id="gender" value={gender} onChange={(e) => setGender(e.target.value)}/>
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="programStudy">Program Study:</FormLabel>
                  <Input data-testid="prody" type="text" id="programStudy" value={programStudy} onChange={(e) => setProgramStudy(e.target.value)}/>
                </FormControl>
                <Button data-testid="edit-btn" type="submit" variant="solid" colorScheme="pink.500" id="edit-btn" className="btn-add">
                  Edit student
                </Button>
              </VStack>
            </form>
          </Box>
        )}
      </Box>
      <Footer />
    </>
  );
};

export default EditStudent;