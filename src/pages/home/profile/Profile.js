import Footer from "../../../components/footer/Footer";
import LoggedInNavbar from "../../../components/loggedInNavbar/LoggedInNavbar";
import SideNav from "../../../components/sideNav/SideNav";
import "./profile.css";
import Rectangle2764 from "../../../assets/img/Rectangle 2764.png";
import Logo from "../../../assets/img/Flag_of_India 2.png";
import linkedIn_Img from "../../../assets/img/teamCard_icons/linkedin.png";
import twitter_Img from "../../../assets/img/teamCard_icons/twitter.png";
import instagram_Img from "../../../assets/img/teamCard_icons/instagram.png";
import { ImageFill, Pencil } from "react-bootstrap-icons";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../../redux/user/userSlice";
import { updateUserInDatabse, uploadMedia } from "../../../firebase/firebase";
import Select from "react-select";

const Profile = () => {
  const [isEditable, setIsEditable] = useState(false);
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  // console.log(user);
  const {
    firstName,
    lastName,
    experienceOfInvesting,
    sectorsOfInvesting,
    stageOfInvestment,
    country,
    uid,
    amount,
    // userType,
    linkedInUrl,
    twitter,
    instagram,
    userDescription,
    userImg,
    whenToStartInvesting,
  } = user;

  const [userImgFile, setUserImgFile] = useState("");
  const [name, setName] = useState("");
  const [experience, setExperience] = useState("");
  const [sector, setSector] = useState([]);
  const [stage, setStage] = useState("");
  const [amt, setAmt] = useState("");
  const [from, setFrom] = useState("");
  const [linkedUrl, setLinkedUrl] = useState("");
  const [twitterUrl, setTwitterUrl] = useState("");
  const [instagramUrl, setInstagramUrl] = useState("");
  const [whenToInvest, setWhenToInvest] = useState("");
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const validateField = () => {
    if (
      userImgFile &&
      name &&
      experience &&
      sector &&
      stage &&
      amt &&
      from &&
      // userType &&
      linkedUrl &&
      twitterUrl &&
      instagramUrl &&
      whenToInvest
    ) {
      return true;
    }
    return false;
  };

  const onSaveChangesHandler = async () => {
    // const checkFields = validateField();
    setIsLoading(true);
    if (true) {
      let userImgUrl = await uploadMedia(userImgFile, "rvpDeal/userImages");
      if (userImgFile === userImg) {
        console.log("exec");
        userImgUrl = userImg;
      }
      console.log(userImgUrl);
      const fullName = name.split(" ");
      const fName = fullName[0];
      const lName = fullName[1];
      const updatedData = {
        ...user,
        firstName: fName,
        lastName: lName,
        experienceOfInvesting: experience,
        sectorsOfInvesting: sector,
        stageOfInvestment: stage,
        country: from,
        userImg: userImgUrl,
        amount: amt,
        userDescription: description,
        linkedInUrl: linkedUrl,
        instagram: instagramUrl,
        twitter: twitterUrl,
        whenToStartInvesting: whenToInvest,
      };
      await updateUserInDatabse(uid, updatedData);
      dispatch(updateUser(updatedData));
      setIsLoading(false);
      setIsEditable(false);
    }
  };

  const onEditClickHandler = () => {
    setIsEditable(true);
    setName(firstName + " " + lastName);
    setExperience(experienceOfInvesting);
    setStage(stageOfInvestment);
    setSector(sectorsOfInvesting);
    setFrom(country);
    setAmt(amount);
    setDescription(userDescription);
    // setType(userType);
    setLinkedUrl(linkedInUrl);
    setWhenToInvest(whenToStartInvesting);
    setInstagramUrl(instagram);
    setTwitterUrl(twitter);
    setUserImgFile(userImg);
  };

  const sectorsList = [
    { value: 1, label: "Agricultural" },
    { value: 2, label: "Apparel & Accessories" },
    { value: 3, label: "Automobile & Ancillaries" },
    { value: 4, label: "Banking" },
    { value: 5, label: "Consumer Durables" },
    { value: 6, label: "Derived Materials" },
    { value: 7, label: "Energy" },
    { value: 8, label: "Financial" },
    { value: 9, label: "FMCG" },
    { value: 10, label: "Food and Beverages" },
    { value: 11, label: "Healthcare" },
    { value: 12, label: "Hospitality and Travel" },
    { value: 13, label: "Industrial Products" },
    { value: 14, label: "Industries" },
    { value: 15, label: "IT Industry" },
    { value: 16, label: "Logistics and Freight" },
    { value: 17, label: "Media & Entertainment" },
    { value: 18, label: "Raw Material" },
    { value: 19, label: "Tele-Communication" },
    { value: 20, label: "Textile Industry" },
    { value: 21, label: "Others" },
  ];

  // Default value for sectors of investment (or pre-selected value)
  let defaultValue = [];

  for (let i = 0; i < sector.length; i++) {
    for (let j = 0; j < 21; j++) {
      if (sector[i] === sectorsList[j].label) {
        defaultValue.push({
          value: sectorsList[j].value,
          label: sector[i],
        });
      }
    }
  }

  return (
    <>
      <LoggedInNavbar />
      <div className="profile">
        <div className="profile__side-nav">
          <SideNav />
        </div>
        <div className="profile__right-wrap">
          {isEditable ? (
            <>
              <div className="profile__bio profile__bioedit">
                <div className="profile__bio-content profile__bio-contentedit">
                  <div className="profile__bio__content__img profile__bio__content-edit">
                    {/* <img src={Rectangle2764} /> */}
                    <h3 className="profile__bio__content-editH3">
                      Edit picture
                    </h3>
                    <label for="user-img" style={{ color: "#fff" }}>
                      {" "}
                      <ImageFill /> Add from device
                    </label>
                    <input
                      onChange={(e) => {
                        if (e.target.files[0]) {
                          Object.defineProperty(e.target.files[0], "name", {
                            writable: true,
                            value: uid,
                          });
                          setUserImgFile(e.target.files[0]);
                        }
                      }}
                      id="user-img"
                      type="file"
                    />
                  </div>
                  <div className="profile__bio__content-text profile__bio__content-textedit">
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Change Name"
                      type="text"
                    />
                    {/* <input
                      // onChange={(e) => setUserType(e.target.value)}
                      placeholder="Change Designation"
                      type="text"
                    /> */}
                    <input
                      value={from}
                      onChange={(e) => setFrom(e.target.value)}
                      placeholder="Change Country"
                      type="text"
                    />
                  </div>
                </div>
                <div className="textarea-wrap">
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Edit bio..."
                    rows="10"
                  />
                </div>
                <div className="edit-saveChanges">
                  <button
                    onClick={onSaveChangesHandler}
                    className="edit-SaveChangesBtn"
                  >
                    {isLoading && "Loading"} Save Changes
                  </button>
                </div>
              </div>
              <div className="profile__social">
                <div className="profile__stats profile__statsedit">
                  <h4>Sectors for Investment</h4>
                  <div
                    style={{
                      color: "black",
                      width: "200px",
                      margin: "0.5rem auto",
                    }}
                  >
                    <Select
                      onChange={(e) => {
                        setSector(
                          Array.isArray(e) ? e.map((x) => x.label) : []
                        );
                      }}
                      defaultValue={defaultValue}
                      options={sectorsList}
                      name="sectors"
                      isMulti
                    />
                  </div>

                  <h4>Preferred stage for Investment</h4>
                  <input
                    value={stage}
                    onChange={(e) => setStage(e.target.value)}
                    placeholder="Change answer"
                    type="text"
                  />

                  <h4>Amount you want Invest </h4>
                  <input
                    value={amt}
                    onChange={(e) => setAmt(e.target.value)}
                    placeholder="Change answer"
                    type="text"
                  />

                  <h4>By when do you want to start Investing </h4>
                  <input
                    value={whenToInvest}
                    onChange={(e) => setWhenToInvest(e.target.value)}
                    placeholder="Change answer"
                    type="text"
                  />

                  <h4>Years of experience in Investing </h4>
                  <input
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                    placeholder="Change answer"
                    type="text"
                  />
                </div>
                <div className="profile__contact profile__contactedit">
                  <h2>Contacts</h2>
                  <div className="profile__contact-Imgedit">
                    <input
                      value={linkedUrl}
                      onChange={(e) => setLinkedUrl(e.target.value)}
                      placeholder="LinkedIn"
                      type="text"
                    />
                    <input
                      value={twitterUrl}
                      onChange={(e) => setTwitterUrl(e.target.value)}
                      placeholder="twitter"
                      type="text"
                    />
                    <input
                      value={instagramUrl}
                      onChange={(e) => setInstagramUrl(e.target.value)}
                      placeholder="instagram"
                      type="text"
                    />
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="profile__bio">
                <div className="profile_edit">
                  <h4 onClick={onEditClickHandler}>
                    <Pencil /> Edit profile
                  </h4>
                </div>
                <div className="profile__bio-content">
                  <div className="profile__bio__content__img">
                    {userImg ? (
                      <img src={userImg} />
                    ) : (
                      <img src={Rectangle2764} />
                    )}
                  </div>
                  <div className="profile__bio__content-text">
                    <h2>
                      {firstName} {lastName}
                    </h2>
                    <h3>Investor</h3>
                    <h3>
                      <img
                        src={Logo}
                        width="25px"
                        style={{ marginRight: "5px" }}
                      />
                      {country}
                    </h3>
                  </div>
                </div>

                {userDescription ? (
                  <p>{userDescription}</p>
                ) : (
                  <div className="edit-saveChanges add-discription__Btn-wrap">
                    <button
                      onClick={onEditClickHandler}
                      className="edit-SaveChangesBtn"
                    >
                      Add description
                    </button>
                  </div>
                )}
              </div>
              <div className="profile__social">
                <div className="profile__stats ">
                  <h4>Sectors for Investment</h4>
                  <h5>
                    {sectorsOfInvesting.map((sector) => (
                      <sapn
                        style={{
                          backgroundColor: "#535353",
                          borderRadius: "5px",
                          padding: "0 0.5rem",
                          marginRight: "0.2rem",
                        }}
                      >
                        {sector}
                      </sapn>
                    ))}
                  </h5>
                  <h4>Preferred stage for Investment</h4>
                  <h5>{stageOfInvestment}</h5>
                  <h4>Amount you want Invest </h4>
                  <h5>{amount}</h5>
                  <h4>By when do you want to start Investing </h4>
                  <h5>{whenToStartInvesting}</h5>
                  <h4>Years of experience in Investing </h4>
                  <h5>{experienceOfInvesting}</h5>
                </div>
                <div className="profile__contact">
                  <h2>Contacts</h2>
                  <div className="profile__contact-Img">
                    <a
                      onClick={(e) => e.preventDefault()}
                      href={linkedInUrl ? linkedInUrl : "#"}
                    >
                      <img src={linkedIn_Img} />
                    </a>
                    <a
                      onClick={(e) => e.preventDefault()}
                      href={twitter ? twitter : "#"}
                    >
                      <img src={twitter_Img} />
                    </a>
                    <a
                      onClick={(e) => e.preventDefault()}
                      href={instagram ? instagram : "#"}
                    >
                      <img src={instagram_Img} />
                    </a>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
