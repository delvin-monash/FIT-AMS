<script lang="ts">
  import {
    Container,
    Row,
    Col,
    Accordion,
    AccordionItem,
  } from "@sveltestrap/sveltestrap";

  let id = 1;
  let open = true;

  const toggle = (e: Event) => {
    console.log("toggle", e.target);
  };
</script>

<Container fluid>
  <Row>
    <Col>
      <h2>Help</h2>
      <p>
        This is a simple form that you can use to submit your seminar details.
      </p>
      <ol>
        <li>Fill in the form on the left</li>
        <li>Click the button below to download the HTML file</li>
        <li>
          Send the HTML file to <a
            href="mailto:FIT-Graduate.Research@monash.edu"
            >FIT Graduate Research</a
          >
        </li>
      </ol>

      <Accordion on:toggle={toggle}>
        <AccordionItem
          active
          header="Calendar Link"
          on:toggle={(e) => {
            id = 1;
            open = e.detail;
          }}
        >
          Before filling in this form, please create a Google Calendar event and
          copy the link to the event. You will need to paste this link into the
          form.
        </AccordionItem>
        <AccordionItem
          header="Zoom Link"
          on:toggle={(e) => {
            id = 2;
            open = e.detail;
          }}
        >
          <a href="#home"
            >Enter the zoom link for your milestone here. Make sure you have
            added your supervisors and the panel chair as alternative hosts.</a
          >
        </AccordionItem>
        <AccordionItem
          header="More information"
          on:toggle={(e) => {
            id = 3;
            open = e.detail;
          }}
        >
          You can find more information on the Intranet page for FIT Graduate
          Research.
        </AccordionItem>
      </Accordion>

      <p>Item #{id} is {open ? "open" : "closed"}</p>
    </Col>
  </Row>
</Container>
