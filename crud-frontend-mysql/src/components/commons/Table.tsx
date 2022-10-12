import {
  TableContainer,
  Paper,
  Table as UITable,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
} from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";

import type { UserModel } from "@/models";

interface ITableProps {
  data: UserModel[];
}

function Table({ data }: ITableProps) {
  return (
    <TableContainer component={Paper}>
      <UITable sx={{ maxWidth: 800, margin: "20px auto" }} arial-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">ID</TableCell>
            <TableCell align="center">User</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Accion</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {data?.map((user) => (
            <TableRow key={user.id}>
              <TableCell align="center">{user.id}</TableCell>
              <TableCell align="center">{user.username}</TableCell>
              <TableCell align="center">{user.email}</TableCell>
              <TableCell align="center">
                <IconButton color="primary" aria-label="edit">
                  <Edit />
                </IconButton>
                <IconButton color="secondary" aria-label="delete">
                  <Delete />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </UITable>
    </TableContainer>
  );
}

export default Table;
