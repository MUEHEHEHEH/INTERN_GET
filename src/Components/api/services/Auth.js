import { axiosInstance } from "../CoreApi";

const handleLogin = async (body) => {
  try {
    const response = await axiosInstance.post("login", {
      email: body.email,
      password: body.password,
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

const handleRegister = async (body) => {
  try {
    const response = await axiosInstance.post("register", {
      name: body.name,
      email: body.email,
      password: body.password,
      nomor_hp: body.nomor_hp,
      role: body.role,
      KTP: body.KTP,
      alamat: body.alamat,
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

export { handleLogin, handleRegister };
