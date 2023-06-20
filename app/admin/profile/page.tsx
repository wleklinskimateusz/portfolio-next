import { FormControl } from "@/components/admin/FormControl/FormControl";
import React from "react";

const ProfileAdmin = () => {
  return (
    <form>
      <FormControl label="First Name">
        <input
          type="text"
          placeholder="First Name"
          className="input-bordered input"
        />
      </FormControl>
      <FormControl label="Last Name">
        <input
          type="text"
          placeholder="Last Name"
          className="input-bordered input"
        />
      </FormControl>
      <FormControl label="Title">
        <input
          type="text"
          placeholder="Title"
          className="input-bordered input"
        />
      </FormControl>
      
    </form>
  );
};

export default ProfileAdmin;
