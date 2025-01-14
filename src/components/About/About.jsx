import "./About.css";
import profileImage from "../../assets/profile.jpg";

function About({ inProfile }) {
  const checkInfo = () => {
    console.log(inProfile);
  };

  return (
    <section className="about">
      {!inProfile ? (
        <div className="about__container">
          <img
            className="about__profile-image"
            src={profileImage}
            alt="Katie Jacobson profile picture"
          />
          <div className="about__profile-container">
            <h2 className="about__profile-name">
              About the Author: Katie Jacobson
            </h2>
            <p className="about__profile-info">
              Katie Jacobson is an aspiring full-stack developer with experience
              with education and chemistry fields. As a current science research
              teacher, she helps high school students develop their own science
              and engineering projects, starting with reading the current
              research literature and figuring out the gaps in research. Open
              source research articles are imperative to this process.
            </p>
            <p className="about__profile-info">
              Through the TripleTen Software Engineering program, Katie has
              become proficient in the MERN stack and hopes to build web and
              mobile apps that make education accessible and equitable. With 15
              years in the public education sector, she knows the power of good
              technological applications and hopes to build tools that benefit
              both educators and students.
            </p>
          </div>
        </div>
      ) : (
        <p></p>
      )}
    </section>
  );
}

export default About;
