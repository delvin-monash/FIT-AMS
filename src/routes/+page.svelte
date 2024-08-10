<script>
  import { Button, Col, Row, Tooltip } from "@sveltestrap/sveltestrap";
  import { Container } from "@sveltestrap/sveltestrap";
  import { Image, Figure } from "@sveltestrap/sveltestrap";
  import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardText,
    CardTitle,
    CardSubtitle,
  } from "@sveltestrap/sveltestrap";
  import {
    Collapse,
    NavbarToggler,
    NavbarBrand,
    Nav,
    Navbar,
    NavItem,
    NavLink,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
  } from "@sveltestrap/sveltestrap";
  import { Badge, Form, Input, FormGroup } from "@sveltestrap/sveltestrap";

  let isOpen = false;

  /**
   * @param {{ detail: { isOpen: boolean; }; }} event
   */
  function handleUpdate(event) {
    isOpen = event.detail.isOpen;
  }
</script>

<Container fluid>
  <Navbar color="light" light expand="md" container="md">
    <NavbarBrand href="/">Advertise my Seminar: FIT-GR</NavbarBrand>
    <NavbarToggler on:click={() => (isOpen = !isOpen)} />
    <Collapse {isOpen} navbar expand="md" on:update={handleUpdate}>
      <Nav class="ms-auto" navbar>
        <NavItem>
          <NavLink href="#components/">Components</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="https://github.com/sveltestrap/sveltestrap"
            >GitHub</NavLink
          >
        </NavItem>
        <Dropdown nav inNavbar>
          <DropdownToggle nav caret>Options</DropdownToggle>
          <DropdownMenu end>
            <DropdownItem>Option 1</DropdownItem>
            <DropdownItem>Option 2</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Reset</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </Nav>
    </Collapse>
  </Navbar>
  <Row>
    <Col>
      <Form>
        <FormGroup floating label="Your Name">
          <Input id="full-name" placeholder="Full name" />
          <Tooltip target="full-name" placement="top">
            Enter your <strong> full</strong> name!
          </Tooltip>
        </FormGroup>

        <FormGroup floating label="Supervisor(s) Names">
          <Input id="supervisors" placeholder="Names" />
          <Tooltip target="supervisors" placement="top">
            Your supervisors <strong>seperated by commas</strong>.
          </Tooltip>
        </FormGroup>

        <FormGroup floating label="Panel Members">
          <Input id="miletone-panel" placeholder="Names" />
          <Tooltip target="miletone-panel" placement="top">
            Your milestone panel members <strong>seperated by commas</strong>.
          </Tooltip>
        </FormGroup>

        <FormGroup floating label="Chair">
          <Input id="milestone-chair" placeholder="Name" />
          <Tooltip target="milestone-chair" placement="top">
            Your milestone panel <strong>chair</strong>.
          </Tooltip>
        </FormGroup>

        <FormGroup floating label="Select your milestone type">
          <Input id="milestone-type" type="select" placeholder="Milestone type">
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
          <Input id="title" placeholder="Title" />
          <Tooltip target="title" placement="top">
            Whats your current research <strong>title</strong>?
          </Tooltip>
        </FormGroup>

        <FormGroup floating label="Abstract (150 words)">
          <Input
            id="abstract"
            rows={10}
            type="textarea"
            placeholder="abstract"
          />
          <Tooltip target="abstract" placement="top">
            Needs to be less than <strong>150</strong> words.
          </Tooltip>
        </FormGroup>

        <FormGroup floating label="Date">
          <Input
            id="milestone-date"
            type="date"
            placeholder="date placeholder"
          />
          <Tooltip target="milestone-date" placement="top">
            When is your milestone <strong>planned</strong> for?
          </Tooltip>
        </FormGroup>
        <FormGroup floating label="Time">
          <Input
            id="milestone-time"
            type="time"
            placeholder="time placeholder"
          />
          <Tooltip target="milestone-time" placement="top">
            What time is your milestone <strong>planned</strong> for?
          </Tooltip>
        </FormGroup>
      </Form>
    </Col>
    <Col>
      <Container>
        <Card theme="light" class="mb-3 p-3">
          <CardHeader>
            <CardTitle>Instructions</CardTitle>
          </CardHeader>
          <CardBody>
            <!-- <CardSubtitle>Card subtitle</CardSubtitle> -->
            <CardText>
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
            </CardText>
            <!-- <Button>Button</Button> -->
          </CardBody>
          <!-- <CardFooter>Footer</CardFooter> -->
        </Card>
        <Row>
          <Col>
            <Button color="primary">Download HTML File</Button>
            <Button color="danger">Clear all fields</Button>
          </Col>
          <!-- <Col><Button color="danger">Clear all fields</Button></Col> -->
        </Row>
      </Container>
    </Col>
  </Row>
</Container>
