import React from 'react';

const About = props => {
  return (
    <div className="about-container">
      <div className="terminal">
        <div className="terminal-header">
          <div className="header-button red" />
          <div className="header-button yellow" />
          <div className="header-button green" />
        </div>
        <div className="terminal-window">
          <Statements statements={props.statements} />
        </div>
      </div>
    </div>
  );
};

const Statements = props => {
  return (
    <div>
      {props.statements.map((statement, index) => {
        return <Statement statement={statement} key={index} />;
      })}
      <div className="statement">
        <div className="input-statement">
          <span>&nbsp;</span>
        </div>
      </div>
    </div>
  );
};

const Statement = props => {
  return (
    <div className="statement">
      <div className="input-statement">{props.statement.input}</div>
      <div
        className="return-statement"
        dangerouslySetInnerHTML={{ __html: props.statement.return }}
      />
    </div>
  );
};

export default About;
