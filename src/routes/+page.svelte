<script lang="ts">
  import {
    Header,
    Footer,
    InstructionsSection,
    HelpSection,
  } from "../components";

  import { Button, Col, Row, Tooltip } from "@sveltestrap/sveltestrap";
  import { Container } from "@sveltestrap/sveltestrap";
  import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardText,
    CardTitle,
    CardSubtitle,
  } from "@sveltestrap/sveltestrap";

  import { Badge, Form, Input, FormGroup } from "@sveltestrap/sveltestrap";

  let abstract: string = "";
  let name: string = "";
  let panelChair: string = "";
  let supervisors: string = "";
  let panelMembers: string = "";
  let milestoneType: string = "";
  let title: string = "";
  let milestoneDate: Date | null = null;
  let milestoneTime: string = "";
  let zoomLink: string = "";
  let calendarLink: string = "";

  function clearAllFields() {
    abstract = "";
    name = "";
    panelChair = "";
    supervisors = "";
    panelMembers = "";
    milestoneType = "";
    title = "";
    milestoneDate = null;
    milestoneTime = "";
    zoomLink = "";
    calendarLink = "";
  }

  function handleDateChange(event: Event) {
    const input = event.target as HTMLInputElement;
    milestoneDate = new Date(input.value);
  }

  function handleTimeChange(event: Event) {
    const input = event.target as HTMLInputElement;
    milestoneTime = input.value;
  }
</script>

<Header />
<Container>
  <InstructionsSection />
  <Row>
    <Col>
      <Form>
        <Row>
          <Col
            ><FormGroup floating label="Your Name">
              <Input
                id="full-name"
                placeholder="Full name"
                required
                bind:value={name}
              />
              <Tooltip target="full-name" placement="top">
                Enter your <strong> full</strong> name!
              </Tooltip>
            </FormGroup></Col
          >
          <Col
            ><FormGroup floating label="Chair">
              <Input
                id="milestone-chair"
                placeholder="Name"
                required
                bind:value={panelChair}
              />
              <Tooltip target="milestone-chair" placement="top">
                Your milestone panel <strong>chair</strong>.
              </Tooltip>
            </FormGroup></Col
          >
        </Row>

        <FormGroup floating label="Supervisor(s) Names">
          <Input
            id="supervisors"
            placeholder="Names"
            required
            bind:value={supervisors}
          />
          <Tooltip target="supervisors" placement="top">
            Your supervisors <strong>separated by commas</strong>.
          </Tooltip>
        </FormGroup>

        <FormGroup floating label="Panel Members">
          <Input
            id="miletone-panel"
            placeholder="Names"
            required
            bind:value={panelMembers}
          />
          <Tooltip target="miletone-panel" placement="top">
            Your milestone panel members <strong>separated by commas</strong>.
          </Tooltip>
        </FormGroup>

        <FormGroup floating label="Select your milestone type">
          <Input
            bind:value={milestoneType}
            id="milestone-type"
            type="select"
            placeholder="Milestone type"
            required
          >
            <option />
            <option value="alpha">Confirmation</option>
            <option value="bravo">Milestone</option>
            <option value="charlie">Final Review</option>
          </Input>
          <Tooltip target="miletone-type" placement="top">
            Enter your seminar <strong>type</strong>.
          </Tooltip>
        </FormGroup>

        <FormGroup floating label="Title">
          <Input id="title" placeholder="Title" required bind:value={title} />
          <Tooltip target="title" placement="top">
            What's your current research <strong>title</strong>?
          </Tooltip>
        </FormGroup>

        <FormGroup floating label="Abstract (150 words)">
          <Input
            id="abstract"
            rows={10}
            type="textarea"
            placeholder="abstract"
            bind:value={abstract}
            required
          />
          <Tooltip target="abstract" placement="top">
            Needs to be less than <strong>150</strong> words.
          </Tooltip>
        </FormGroup>

        <Row>
          <Col>
            <FormGroup floating label="Date">
              <Input
                id="milestone-date"
                type="date"
                placeholder="date placeholder"
                bind:value={milestoneDate}
                on:change={handleDateChange}
                required
              />
              <Tooltip target="milestone-date" placement="top">
                When is your milestone <strong>planned</strong> for?
              </Tooltip>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup floating label="Time">
              <Input
                id="milestone-time"
                type="time"
                placeholder="time placeholder"
                bind:value={milestoneTime}
                on:change={handleTimeChange}
                required
              />
              <Tooltip target="milestone-time" placement="top">
                What time is your milestone <strong>planned</strong> for?
              </Tooltip>
            </FormGroup>
          </Col>

          <FormGroup floating label="Zoom Link">
            <Input
              id="zoom-link"
              rows={10}
              type="textarea"
              placeholder="zoom link"
              bind:value={zoomLink}
              required
            />
            <Tooltip target="zoom-link" placement="top">
              Enter your milestone's zoom <strong>link</strong>.
            </Tooltip>
          </FormGroup>

          <FormGroup floating label="Calendar Link">
            <Input
              id="calendar-link"
              rows={10}
              type="textarea"
              placeholder="calendar link"
              bind:value={calendarLink}
              required
            />
            <Tooltip target="calendar-link" placement="top">
              Enter your milestone's google calendar <strong>link</strong>.
            </Tooltip>
          </FormGroup>
        </Row>
        <Button type="button" color="primary">Download HTML File</Button>
        <Button type="button" color="danger" on:click={clearAllFields}
          >Clear all fields</Button
        >
      </Form>
    </Col>
    <Col>
      <HelpSection />
    </Col>
  </Row>
</Container>

<Footer />
