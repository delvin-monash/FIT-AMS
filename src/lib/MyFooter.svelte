<script>
  import { Container } from "@sveltestrap/sveltestrap";
</script>

<Container class="footer">
  <p>
    Copyright Notice: All content on this site is released into the public
    domain and may be freely used, modified, and distributed without permission
    or attribution.<br />
    Spotted issues? Email
    <a
      href="mailto:delvin.varghese@monash.edu?subject=FIT-AMS%20Issue%20Report&body=Hi%20Delvin,%0D%0A%0D%0Anoticed%20the%20following%20issue%20with%20FIT-AMS:%20"
      >Delvin Varghese</a
    >
  </p>
</Container>

<style>
  :global(.footer) {
    margin-top: 100px;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    /* background-color: #f8f9fa; */
    color: black;
    text-align: center;
    font-style: italic;
  }
</style>
