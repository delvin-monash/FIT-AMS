<script lang="ts">
  import {
    Button,
    ButtonGroup,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
  } from "@sveltestrap/sveltestrap";

  // export let open = false;
  export let openScrollable = false;
  // const toggle = () => (open = !open);
  export const toggleModal = () => (openScrollable = !openScrollable);

  export let inputAbstract: string = "";
</script>

<Modal isOpen={openScrollable} toggle={toggleModal} scrollable>
  <ModalHeader toggle={toggleModal}>Confirm Details?</ModalHeader>
  <ModalBody>
    <p style="min-height: 1000px;">
      {inputAbstract}
    </p>
  </ModalBody>
  <ModalFooter>
    <Button color="primary" on:click={toggleModal}>Do Something</Button>
    <Button color="secondary" on:click={toggleModal}>Cancel</Button>
  </ModalFooter>
</Modal>
