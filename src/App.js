import "./App.css";
import Profile from "./Component/Profile";
import Workshop from "./Component/Workshop";

function App() {
  const Profiles = [
    {
      name: "khaoula",
      profession: "etudiante",
      bio: "bio",
      img: "https://w7.pngwing.com/pngs/168/827/png-transparent-computer-icons-user-profile-avatar-profile-woman-desktop-wallpaper-silhouette.png",
    },
    {
      name: "rayhane",
      profession: "enseignante",
      bio: "bio",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7fJYFgdBSqW4KwiYC-Hu9MoBwn6aPdfNXF3gLqw9gnK92sfHwL63ohbRUY6jshjThjbM&usqp=CAU",
    },
    {
      name: "yasmine",
      profession: "directeur",
      bio: "bio",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoNlUO4L2HXSPqGi-0mfOlDM-tQlR-a1GULh56TDyM3qhRImNsrcnYETwnNCeZ2gV-77I&usqp=CAU",
    },
  ];
  let alrt = (x) => {
    alert(x);
  };
  return (
    <div className="App">
      <div className="header">
        {Profiles.map((el) => (
          <Workshop contact={el} alert={alrt} />
        ))}

        <div className="children">
          <Profile>
            <img
              src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
              alt="test"
            />
          </Profile>
        </div>
      </div>
    </div>
  );
}

export default App;
