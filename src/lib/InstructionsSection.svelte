<script>
  import { Container, Row, Col } from "@sveltestrap/sveltestrap";
</script>

<Container class="instructions">
  <Row>
    <Col>
      <h2>Instructions</h2>
      <p>
        This is a simple form that you can use to submit your seminar details.
        Please fill in all the fields and submit the form.
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
