import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const { displayName, photoURL } = user;
  return (
    <div className="pt-24">
      <div className="avatar">
        <div className="w-24 mask mask-hexagon">
          <img src={photoURL} />
        </div>
      </div>
      <h1 className="text-2xl font-bold">{displayName}</h1>
    </div>
  );
};

export default Profile;
