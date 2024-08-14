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
          <p>
            Before filling in this form, please create a Google Calendar event.
            Open the event and select "More actions" and "Publish event". Copy
            the link to the event and paste this link into the form.
          </p>
          <p>
            Read more:
            <a
              target="_blank"
              href="https://support.google.com/calendar/answer/13839531?hl=en&co=GENIE.Platform%3DDesktop#:~:text=On%20your%20calendar%2C%20open%20an,link%20using%20a%20messaging%20app."
              >Share events from your Google Calendar (Google Calendar Docs)</a
            >
          </p>
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
          You can find more information on the <a
            href="https://learning.monash.edu/course/view.php?id=15782"
            target="_blank">FIT Graduate Research Resource Hub (Moodle)</a
          >.
        </AccordionItem>
      </Accordion>

      <!-- <p>Item #{id} is {open ? "open" : "closed"}</p> -->
    </Col>
  </Row>
</Container>
