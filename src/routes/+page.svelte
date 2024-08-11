<script lang="ts">
  /**
   * Import the components that are used in this page
   */
  import Header from "$lib/Header.svelte";
  import InstructionsSection from "$lib/InstructionsSection.svelte";
  import HelpSection from "$lib/HelpSection.svelte";
  import ConfirmModal from "$lib/ConfirmModal.svelte";
  import MyFooter from "$lib/MyFooter.svelte";
  import {
    START,
    T2,
    T3,
    T4,
    T5,
    T6,
    T7,
    T8,
    T9,
    T10,
    T11,
    T12,
  } from "$lib/TemplateParts";

  /**
   * Sveltestrap imports
   */
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
  let milestoneDate: Date = new Date();
  let milestoneTime: string = "";
  let zoomLink: string = "";
  let calendarLink: string = "";
  let modalOpen: boolean = false;

  function clearAllFields() {
    abstract = "";
    name = "";
    panelChair = "";
    supervisors = "";
    panelMembers = "";
    milestoneType = "";
    title = "";
    milestoneDate = new Date();
    milestoneTime = "";
    zoomLink = "";
    calendarLink = "";
  }

  function debugTestCasePerfect() {
    abstract = "This is a test abstract";
    name = "John Doe";
    panelChair = "Dr. James Smith";
    supervisors = "Dr. Alpha Bravo, Dr. Charlie Delta";
    panelMembers = "Prof. Albert Einsein, Prof. Marie Curie";
    milestoneType = "Milestone";
    title = "This is a test title";
    milestoneDate = new Date();
    milestoneTime = "12:00";
    zoomLink = "https://zoom.us";
    calendarLink = "https://calendar.google.com";
  }

  function handleDateChange(event: Event) {
    const input = event.target as HTMLInputElement;
    milestoneDate = new Date(input.value);
  }

  function handleTimeChange(event: Event) {
    const input = event.target as HTMLInputElement;
    milestoneTime = input.value;
  }

  function onDownloadClick(event: Event) {
    const input = event.target as HTMLInputElement;
    modalOpen = true;
    console.log("modalOpen: ", modalOpen);
    triggerDownload(event);
  }

  function triggerDownload(event: Event) {
    const combinedFields = combineFields(event);
    const blob = new Blob([combinedFields], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = generateFileName();
    a.click();
    window.URL.revokeObjectURL(url);
  }

  function generateFileName() {
    const firstName = name.split(" ")[0];
    return `${milestoneType}-${firstName}-${milestoneDate.toDateString()}.html`;
  }

  function combineFields(event: Event) {
    const combinedTemplate =
      START +
      milestoneType +
      T2 +
      title +
      T3 +
      ` <strong>${name}</strong>` +
      T4 +
      abstract +
      T5 +
      generateTimeHTML(milestoneDate, milestoneTime, milestoneType) +
      T6 +
      zoomLink +
      T7 +
      calendarLink +
      T8 +
      name +
      T9 +
      panelChair +
      T10 +
      panelMembers +
      T11 +
      supervisors +
      T12;
    return combinedTemplate;
  }

  function generateTimeHTML(date: Date, time: string, type: string) {
    const dateStr = date ? date.toDateString() : "";
    const timeStr = time;
    return `<p><strong>Date:</strong> ${dateStr}</p>
      <p><strong>Time:</strong> ${timeStr}</p>
      <p><strong>Type:</strong> ${type}</p>`;
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
            <option value="Confirmation">Confirmation</option>
            <option value="Milestone">Milestone</option>
            <option value="Final Review">Final Review</option>
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
        <Button type="button" color="primary" on:click={onDownloadClick}
          >Download HTML File</Button
        >
        <Button type="button" color="danger" on:click={clearAllFields}
          >Clear all fields</Button
        >
      </Form>
    </Col>
    <Col>
      <HelpSection />
      <Button type="button" color="success" on:click={debugTestCasePerfect}
        >Debug (Perfect)</Button
      >
    </Col>
  </Row>
  <ConfirmModal inputAbstract={abstract} openScrollable={modalOpen} />
</Container>

<MyFooter />
