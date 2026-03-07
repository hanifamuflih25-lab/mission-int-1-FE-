import MainLayout from "../components/Layout/mainLayout";
import CourseCRUD from "../components/atoms/CRUDCourse";

function Admin() {
  return (
    <MainLayout>
      <CourseCRUD />
    </MainLayout>
  );
}

export default Admin;