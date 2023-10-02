import "./Skills.css"

const Skills = () => {
    return (
      <section id="skill">
        <h1 class="sub-heading">Skills</h1>
        <div class="divider"></div>
        <p class="sub-paraf">
          Ich bemühe mich weiterhin ständig, meine Kenntnisse zu verbessern.
        </p>

        <div class="skill-row">
          {/* <!--* Skill-1 --> */}
          <div class="skill-box">
            <div class="skill-info">
              <h2>HTML</h2>
              <h2>85%</h2>
            </div>
            <div class="skill-outter-line">
              <div class="skill-inner-line" style={{ width: "85%" }}></div>
            </div>
          </div>

          {/* <!--* Skill-2 --> */}
          <div class="skill-box">
            <div class="skill-info">
              <h2>CSS</h2>
              <h2>75%</h2>
            </div>
            <div class="skill-outter-line">
              <div class="skill-inner-line" style={{ width: "75%" }}></div>
            </div>
          </div>

          {/* <!--* Skill-3 --> */}
          <div class="skill-box">
            <div class="skill-info">
              <h2>Javascript</h2>
              <h2>50%</h2>
            </div>
            <div class="skill-outter-line">
              <div class="skill-inner-line" style={{ width: "50%" }}></div>
            </div>
          </div>

          {/* <!--* Skill-4 --> */}
          <div class="skill-box">
            <div class="skill-info">
              <h2>React</h2>
              <h2>50%</h2>
            </div>
            <div class="skill-outter-line">
              <div class="skill-inner-line" style={{ width: "50%" }}></div>
            </div>
          </div>

          {/* <!--* Skill-5 -->  */}
          <div class="skill-box">
            <div class="skill-info">
              <h2>Wordpress</h2>
              <h2>20%</h2>
            </div>
            <div class="skill-outter-line">
              <div class="skill-inner-line" style={{ width: "50%" }}></div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Skills;