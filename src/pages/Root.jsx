import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

const Root = () => {
  const { isLoading, user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/landing");
    }
  }, [user]);

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Root;
