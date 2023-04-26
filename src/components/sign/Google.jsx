import { GoogleLogin } from "@react-oauth/google";

const Google = () => {
  return (
    <GoogleLogin
      onSuccess={(response) => {
        console.log(response);
      }}
      onError={() => {
        console.log("Login Failed");
      }}
      text="signin"
    />
  );
};

export default Google;
