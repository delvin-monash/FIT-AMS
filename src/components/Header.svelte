<script>
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

  let isOpen = false;

  /**
   * @param {{ detail: { isOpen: boolean; }; }} event
   */
  function handleUpdate(event) {
    isOpen = event.detail.isOpen;
  }
</script>

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
