import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";


const Profile = () => {
    const {user} = useContext(AuthContext);
    const {displayName, photoURL} = user;
  return (
    <div className="pt-72">
      <div className="avatar">
        <div className="w-24 mask mask-hexagon">
          <img src={photoURL} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
