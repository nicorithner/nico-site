import "./Resume.css";

const Resume = () => {
  return (
    <div className="resume-main">
      <h1>Resume</h1>

      <div className="resume-section">
        <h2>Nicolas Rithner</h2>
        <hr />
        <h3>Software Engineer</h3>
        <br/>
        <p>Denver, CO USA - Trondheim, Norway</p>
        <p>nicorithner@gmail.com</p>
      </div>

      <div className="resume-section">
        <h2>Summary</h2>
        <hr />
        <ul>
          <li>
            Creative and resourceful problem solver with enthusiasm for learning
            and acquiring new skills
          </li>
          <li>Patient and persistent in the face of challenging problems</li>
          <li>
            Team player, cooperative and kind. Firm believer that it takes a
            team to achieve great things
          </li>
          <li>
            Languages:
            <ul>
              <li>
                <span>🇺🇸</span>
                <strong>English</strong>: native level
              </li>
              <li>
                <span>🇪🇸</span>
                <strong>Spanish</strong>: native level
              </li>
              <li>
                <span>🇳🇴</span>
                <strong>Norwegian</strong>: A2 - currently studying.
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="resume-section">
        <h2>Work Experience</h2>
        <hr />
        <h3>Altvia Solutions</h3>
        <small>Fintech</small>
        <small>Broomfield, CO</small>
        <small>June 2021 - Present</small>
        <br />
        <h4>Full Time Full Stack Engineer</h4>
        <p>Responsibilites:</p>
        <ul>
          <li>
            Maintenance of the existing code base, including updates and
            debugging
          </li>
          <li>Development of new features</li>
          <li>Merge Requests reviews</li>
          <li>Creating documentation</li>
        </ul>
        <p>Stack:</p>
        <ul>
          <li>Ruby/JavaScript</li>
          <li>Ruby on Rails/Sinatra/React</li>
          <li>AWS</li>
          <li>Gitlab</li>
          <li>Jira</li>
          <li>Cloud 66</li>
        </ul>
      </div>

      <div className="resume-section">
        <h2>Education</h2>
        <hr />
        <h3>Turing School of Software and Design</h3>
        <h4>Back end engineer certificate</h4>
        <p>June 2020 to January 2021</p>
        <br />
        <p>1500+ hours, 7 month immersive program</p>
        <ul>
          <li>Ruby</li>
          <li>Ruby on Rails</li>
          <li>SQL</li>
          <li>Fundamentals of: HTML, CSS, JavaScript</li>
          <li>Databases</li>
          <li>REST APIs</li>
          <li>Git</li>
          <li>Rspec</li>
          <li>
            Team dynamics with pair-coding, working with 'issues', and PR/MR
            reviewing
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Resume;
