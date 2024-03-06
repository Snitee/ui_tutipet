"use client"
import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Autocomplete, Box, Button, Divider, Modal, Stack, TextField, Typography } from '@mui/material';
import { Board,  Column } from '../dashboard/Board';
import { AddCircle, Delete, Edit } from '@mui/icons-material';
import Swal from 'sweetalert2';


  interface Data {
      id: number;
      name: string;
      type: string;
      petTypes: string;
      price: number;
      status: boolean;
  }

  const style = {
      position: 'absolute' as 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '40%',
      bgcolor: 'background.paper',
      border: '2px solid #000',
      boxShadow: 24,
      p: 4,
    };

  const getAllProduct = async() => {
      const res = await fetch('http://localhost:8080/api/v1/products');

      if(!res.ok){
          throw new Error('Fail to fetch data');
      }

      return res.json();
  }

  async function deleteProduct(id: number) {
    const res = await fetch('http://localhost:8080/api/v1/products/' + id,{
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        }
    });

    if(!res.ok){
        Swal.fire("ERROR!", "ERROR!", "error");
    }

    Swal.fire("Deleted!", "Your file has been deleted.", "success").then(() => {
        // Reload the page after the user acknowledges the success message
        window.location.reload();
      });
  
  }

  const columns: Column[] = [
    { id: 'id', label: 'ID', minWidth: 50, align: 'center' },
    { id: 'name', label: 'Tên  Người Nhận', minWidth: 150, align: 'center' },
    { id: 'address', label: 'Địa Chỉ Nhận Hàng', minWidth: 200, align: 'center' },
    { id: 'phone', label: 'Liên Hệ', minWidth: 150, align: 'center' },
    { id: 'countProduct', label: 'Số Lượng', minWidth: 50, align: 'center' },
    { id: 'status', label: 'Trạng Thái', minWidth: 50, align: 'center' },
    { id: 'action', label: 'Sửa/Xóa', minWidth: 50, align: 'center' },
    ];


export default function ListOrders() {

    const [data, setData] = React.useState<Data[]>([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [openAdd, setOpenAdd] = React.useState(false);
    const handleOpenAdd = () => setOpenAdd(true);
    const handleCloseAdd = () => setOpenAdd(false);
    const [openEdit, setOpenEdit] = React.useState(false);
    const handleOpenEdit = () => setOpenEdit(true);
    const handleCloseEdit = () => setOpenEdit(false);
    const [product, setProduct] = React.useState(null);

    // const fetchData = async () => {
    //     try {
    //       const result = await getAllProduct();
    //       setData(result);
    //     } catch (error) {
    //       console.error('Error fetching data:', error);
    //     }
    //   };

    //   React.useEffect(() => {
    //     fetchData();
    //   }, []);
      
    const deleteProductByID = (id: number) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.value) {
            deleteProduct(id);
            }
        });
    };
    
    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handleEditProduct = (data: any) => {
      setProduct(data);
      handleOpenEdit();
    };


  return (
    <>


    <Modal
        open={openEdit}
        onClose={handleCloseEdit}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
      <Box sx={style}>
      </Box>
    </Modal>

    <Paper sx={{ width: '100%' }}>
        <Typography gutterBottom variant='h4' component={'div'} sx={{padding: "20px"}} className='font-bold'>
            Danh Sách Đơn Hàng
        </Typography>
        <Divider/>
        <Board columns={columns} >
        {
            Array.isArray(data) &&
            data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row: any) => (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                <TableCell key={"id"} align={"center"} className='border-r-2'>
                    {row.id}
                </TableCell>
                <TableCell key={"name"} align={"center"} className='border-r-2'>
                    {row.name}
                </TableCell>
                <TableCell key={"type"} align={"center"} className='border-r-2'>
                    {row.type.name}
                </TableCell>
                <TableCell key={"pet"} align={"center"} className='border-r-2'>
                    {row.type.petTypes}
                </TableCell>
                <TableCell key={"price"} align={"center"} className='border-r-2'>
                    {row.price.toLocaleString('en-US', {
                        style: 'decimal',
                        minimumFractionDigits: 3,
                        maximumFractionDigits: 3,
                        })} VND
                </TableCell>
                <TableCell key={"status"} align={"center"} className='border-r-2'>
                    {row.status}
                </TableCell>
                <TableCell key={"action"} align="left" className='border-r-2'>
                    <Stack spacing={2} direction="row">
                        <Edit
                            style={{
                            fontSize: "20px",
                            color: "blue",
                            cursor: "pointer",
                            }}
                            className="cursor-pointer"
                            onClick={()=>handleEditProduct(row)}
                        />
                        <Delete
                            style={{
                            fontSize: "20px",
                            color: "darkred",
                            cursor: "pointer",
                            }}
                            onClick={() => {
                             deleteProductByID(row.id);
                            }}
                        />
                    </Stack>
                </TableCell>
                </TableRow>
            )
            )
        }
        </Board>
        <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={data.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
        />
    </Paper>
    </>
    
  );
}