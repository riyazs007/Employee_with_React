import React from 'react'
import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone'; 
import { Link } from 'react-router-dom';
import employee from '../Arrays/arrEmp';
import {useNavigate} from 'react-router-dom'

 const GetAll = () => {
    const navigate=useNavigate()
    const remove=async(index:number)=>{
        await employee.splice(index,1)
        navigate('/')
      }
  return (
    <>
    <Grid item xs={8}>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>            
            <TableCell align="left">Name</TableCell>
            <TableCell align="right">Department</TableCell>
            <TableCell align="right">Salary&nbsp;</TableCell>
            <TableCell align="right">Actions&nbsp;</TableCell>           
          </TableRow>
        </TableHead>
        <TableBody>
          {employee.map((element,index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="element">  {element.name}</TableCell>
              <TableCell align="right">{element.department}</TableCell>
              <TableCell align="right">{element.salary}</TableCell>  
              
              <TableCell  align="right" ><Grid item xs={8}>        
        <DeleteForeverTwoToneIcon onClick={()=>remove(index)}/>
          
        
      </Grid></TableCell>      
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </Grid>
    </>
  )
}
export default GetAll;