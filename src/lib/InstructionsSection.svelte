<script>
  import { Container, Row, Col } from "@sveltestrap/sveltestrap";
  const imageSrc = "/banner.jpg";
</script>

<Container class="banner">
  <Row class="justify-content-center">
    <Col lg="6" md="12">
      <img
        src={imageSrc}
        alt="Milestone Advertising Banner"
        width="100%"
        class="img-fluid"
      />
    </Col>
  </Row>
</Container>
<Container class="instructions">
  <Row class="justify-content-center my-5">
    <Col lg="6" md="12">
      <h2>Instructions</h2>
      <p>
        This is a simple form that you can use to submit your seminar details.
        Please fill in all the fields and download the HTML file. Email the file
        to <a href="mailto:FIT-graduate.research@monash.edu"
          >FIT-Graduate.Research@monash.edu</a
        >.
      </p>
    </Col>
  </Row>
</Container>

<style>
  :global(.instructions) {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
  }
</style>
