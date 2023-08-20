import { Accordion } from "react-bootstrap";

const YgencyAccordion = ({ event, active, onClick, title, content }) => {
  return (
    <div className="accordion-item">
      <h5 className="accordion-header">
        <Accordion.Toggle
          as={"button"}
          className={`accordion-button ${active == event ? "" : "collapsed"}`}
          eventKey={event}
          aria-expanded={active == event ? "true" : "false"}
          onClick={() => onClick()}
        >
          {title}
        </Accordion.Toggle>
      </h5>
      <Accordion.Collapse eventKey={event}>
        <div className="accordion-body">
          <p>{content}</p>
        </div>
      </Accordion.Collapse>
    </div>
  );
};
export default YgencyAccordion;
