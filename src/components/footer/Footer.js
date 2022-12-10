import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="fLists">
        <ul className="fList">
          <li className="fListItem">
            <b>SITE</b>
          </li>
          <li className="fListItem">About</li>
          <li className="fListItem">Help</li>
          <li className="fListItem">Contact Us</li>
          <li className="fListItem">Site Guidelines</li>
          <li className="fListItem">
            <img
              src="https://s32615.pcdn.co/wp-content/uploads/2020/08/KCCS_Logo_RBB.png"
              alt="NEU"
            />
          </li>
        </ul>
        <ul className="fList">
          <li className="fListItem">
            <b>LEGAL</b>
          </li>
          <li className="fListItem">
            <a href="https://www.northeastern.edu/emergency-information#_ga=2.20474808.162937863.1669921573-1244826038.1617331415">
              Emergency Information
            </a>
          </li>
          <li className="fListItem">
            <a href="https://www.northeastern.edu/privacy-information#_ga=2.20474808.162937863.1669921573-1244826038.1617331415">
              Privacy Information
            </a>
          </li>
          <li className="fListItem">
            <a href="https://policies.northeastern.edu/policy122/#_ga=2.20474808.162937863.1669921573-1244826038.1617331415">
              Digital Accessibility
            </a>
          </li>
          <li className="fListItem">
            <a href="https://oag.ca.gov/privacy/ccpa#:~:text=Businesses%20that%20sell%20personal%20information,order%20to%20submit%20your%20request.">
              CA Do Not Sell My Personal Information
            </a>
          </li>
        </ul>
        <ul className="fList">
          <li className="fListItem">
            <b>PARTNERS</b>
          </li>
          <li className="fListItem">
            <a href="https://www.northeastern.edu/">Northeastern University</a>
          </li>
          <li className="fListItem">
            <a href="https://www.khoury.northeastern.edu/">
              Khoury College of Computer Science
            </a>
          </li>
        </ul>

        <ul className="fList">
          <li className="fListItem">
            <h3>
              <b>R8MyProfessor</b>
            </h3>
          </li>
          <li className="fListItem">
            <a href="https://www.facebook.com/northeastern/">Facebook</a>
          </li>
          <li className="fListItem">
            <a href="https://www.instagram.com/northeastern/">Instagram</a>
          </li>
          <li className="fListItem">
            <a href="https://twitter.com/Northeastern">Twitter</a>
          </li>
          <li className="fListItem">
            <a href="https://www.linkedin.com/school/northeastern-university/">
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
      <div className="fText">
        Copyright © 2022 R8MyProfessor · All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
