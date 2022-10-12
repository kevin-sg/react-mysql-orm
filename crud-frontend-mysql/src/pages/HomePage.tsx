import { ReactElement, useContext, useState } from "react";

import { UserContext } from "@/contexts";
import { Container, Typography, Button, Modal, Table } from "@/components";

function HomePage(): ReactElement {
  const { userData } = useContext(UserContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container>
      <Typography text="CRUD" />
      <Button text="Insert User" onClick={() => {}} />
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
      <Table data={userData.users} />
    </Container>
  );
}

export default HomePage;
