import React from "react";
// import {
//   loginUser,
//   getNavers,
//   getNaversById,
//   createNaver,
//   deleteNaver,
//   updateNaver
// } from "./naverAPI";
import NaverRoutes from "./containers/NaverRoutes";

function App() {
  // console.log("TOKEN: ", localStorage.getItem("token"));
  React.useEffect(() => {
    // loginUser({ email: "felipeeu@yahoo.com.br", password: "Fevi2406" });
    // getNavers().then(res => console.log("RESNAVERS", res));
    // getNaversById("82457ff9-637e-463a-aaae-2d8d1d9415be").then(res =>
    //   console.log("RESNAVERS", res.data)
    // );
    // createNaver({
    //   job_role: "DEV",
    //   admission_date: "12/08/2029",
    //   birthdate: "12/04/1984",
    //   project: " Test",
    //   name: "Felipe Tavares",
    //   url: "test-path/image-test.png"
    // }).then(res => console.log("res", res));
    // deleteNaver("a952dced-826d-473d-ab14-5605674a9595")
    // updateNaver("82457ff9-637e-463a-aaae-2d8d1d9415be", {
    //   job_role: "DEV",
    //   admission_date: "12/08/2029",
    //   birthdate: "12/04/1984",
    //   project: " Test",
    //   name: "Domingues",
    //   url: "test-path/image-test.png"
    // });
  }, []);
  return (
    <>
      <NaverRoutes />
    </>
  );
}

export default App;
