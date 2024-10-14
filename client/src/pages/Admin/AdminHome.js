import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Layout>
      <div className="container">
        <div className="d-felx flex-column mt-4">
          <h1>
            Welcome Admin <i className="text-success">{user?.name}</i>
          </h1>
          <h3>Manage Blood Bank App </h3>
          <hr />
          <p>
          The admin plays a central role in managing the system, overseeing hospitals, donors, 
          and organizations. They have the authority to decide who remains part of the system, 
          adding or removing hospitals, donors, and organizations as needed. This ensures only 
          authorized entities can participate. Donors are responsible for donating blood, which 
          is then recorded in the system and made available to hospitals and organizations based 
          on demand. When a donor contributes blood, it gets logged and tracked for use by others. 
          Hospitals, on the other hand, only receive blood for patient care. They do not donate but 
          rely on the available supply to meet their needs. Organizations play a more versatile role, 
          as they can both donate and receive blood. This allows them to support blood drives or manage 
          their own needs during events or emergencies. By controlling these elements, the admin ensures 
          a smooth flow of blood resources and an organized system that can respond to demands effectively. 
          The admin’s oversight is crucial for preventing misuse and maintaining efficient distribution, 
          ensuring that blood is available where and when it is needed most. This centralized control keeps 
          the entire system running smoothly and ensures efficient resource management.

          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;
