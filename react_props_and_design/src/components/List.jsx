import { Table, TableContainer,TableBody, TableHead, TableRow, TableCell, Paper } from '@mui/material'
import React from 'react'
import Item from './Item';

const List = () => {
    function createUser(id, name, age, hobby,height) {
        return { id, name, age, hobby, height };
      }  

      const users = [
        createUser(1,'Akif', 19, "football", 179),
        createUser(2,'Agcabedi', 24, "fehle", 150.99),
        createUser(3,'SesenGul', 42, "Svarsik", 190),
        createUser(4,'Resul', 19, "backend", 189),
        createUser(5,'Memmed', 27, "arxieloq", 167.85),
        createUser(6,'Linda', 2, "run", 50),
        createUser(7,'Qabil', 54, "youtuber", 185),
        createUser(8,'MirAga', 26, "live", 130),
        createUser(9,'ElonMusk', 19, "money spend", 184.31),
        createUser(10,'Natasa', 25, "gymnastik", 177.69),
      ];

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Age</TableCell>
            <TableCell align="center">Hobby</TableCell>
            <TableCell align="center">Height</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <Item key={user.id} id={user.id} name={user.name} age={user.age} hobby={user.hobby} height={user.height}></Item>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default List