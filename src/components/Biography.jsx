import React from "react";
import myPic from "../assets/myPic.jfif";
import "../components/Biography.css";

function Biography() {
  const data = {
    occupation: "student",
    age: 20,
    hard_skills: [
      "Data structures",
      "OOP",
      "Database & SQL",
      "IDEs",
      "Text editors",
      "Web Dev",
    ],
    soft_skills: [
      "Empathy",
      "Curiosity",
      "Problem solving",
      "Adaptability",
      "Patience",
    ],
    hobbies: ["Basketball", "Volleyball", "Chess", "Table Games", "Videogames"],
    where_am_I: "Mexico",
    coding_since: 2018,
  };

  const simpleFormat = () => {
    return (
      <p>
        I'm a Computer Systems student, but most of my knowledge was learned
        outside of school; reading documentation, relying on internet videos,
        and analyzing code from other programmers.
        <br />
        <br />
        I don't have work experience focused on programming, but I try to
        practice doing personal projects, either for fun and showing friends my
        results, or to make certain things easier for me.
        <br />
        <br />
        I learn more hands on, mostly by trial and error, doing example
        exercises , and/or altering a code to experiment with. I can get stuck
        sometimes, maybe it's a mistake to try to learn more than one language
        at the same time, but I feel comfortable trying to learn more than one
        thing so it doesn't feel so monotonous.
        <br />
        <br />I would like to further challenge myself in web development to
        acquire the skills necessary in order to deliver the best results in
        certain projects, mainly focusing on video game creation for the time
        being. I am, however open to learning many new things as times goes on.
      </p>
    );
  };

  const jsonFormat = () => {
    return (
      <pre>
        {JSON.stringify(
          data,
          (k, v) => {
            /* Beauty array in JSON */
            if (v instanceof Array) return JSON.stringify(v);
            return v;
          },
          2
        )
          /* Replace any special chars for beauty JSON view */
          .replace(/\\/g, "")
          .replace(/\"\[/g, "[")
          .replace(/\]\"/g, "]")
          .replace(/\"\{/g, "{")
          .replace(/\}\"/g, "}")}
      </pre>
    );
  };

  return (
    <div className="AboutMe">
      <div className="Biography">
        <img src={myPic} alt="" />
        <div>{simpleFormat()}</div>
      </div>

      <footer>
        <h3>You can reach me here:</h3>
        <div className="SocialMedia">
          <a href="https://github.com/Chenomorfo" target="_blank">
            <img src="https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU" />
          </a>
          <a href="https://www.linkedin.com/in/ahhvaliascheno/" target="_blank">
            <img src="https://play-lh.googleusercontent.com/kMofEFLjobZy_bCuaiDogzBcUT-dz3BBbOrIEjJ-hqOabjK8ieuevGe6wlTD15QzOqw" />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Biography;
