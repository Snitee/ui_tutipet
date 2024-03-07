"use client"
import { AddCircle, Delete, Edit } from '@mui/icons-material'
import { Autocomplete, Box, Button, Divider, Modal, Paper, Stack, TableCell, TablePagination, TableRow, TextField, Typography } from '@mui/material'
import React from 'react'
import { Board, Column } from '../dashboard/Board'
import AddFormPromotion from './AddFormPromotion'

const columns: Column[] = [
    { id: 'id', label: 'ID', minWidth: 60, align: 'center' },
    { id: 'code', label: 'Mã Khuyến Mãi', minWidth: 50, align: 'center' },
    { id: 'from', label: 'Từ Ngày', minWidth: 170, align: 'center' },
    { id: 'to', label: 'Đến Ngày', minWidth: 170, align: 'center' },
    { id: 'type', label: 'Loại', minWidth: 90, align: 'center'},
    { id: 'value', label: 'Giá giảm', minWidth: 50, align: 'center' },
    { id: 'status', label: 'Trạng Thái', minWidth: 50, align: 'center' },
    { id: 'action', label: 'Sửa/Xóa', minWidth: 50, align: 'center' },
];

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



export default function ListPromotion() {
    const [data, setData] = React.useState<any[]>([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [openAdd, setOpenAdd] = React.useState(false);
    const handleOpenAdd = () => setOpenAdd(true);
    const handleCloseAdd = () => setOpenAdd(false);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };
    
    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

  return (
    <>
        <Modal
            open={openAdd}
            onClose={handleCloseAdd}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <AddFormPromotion eventClose={handleCloseAdd}/>
            </Box>
        </Modal>
        <Paper className='w-full'>
            <Typography gutterBottom variant='h4' component={'div'} className='font-bold p-5'>
                Chương Trinh Khuyến Mãi
            </Typography>
            <Divider/>
            <Box height={10}/>
            <Stack direction="row" spacing={1}  justifyContent="flex-end" className="mx-4">
                <Button variant="contained" endIcon={<AddCircle />} className='bg-blue-500' onClick={handleOpenAdd} >
                    Add
                </Button>
            </Stack>
            <Box height={25} />
            <Board columns={columns}>
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
                        />
                        <Delete
                            style={{
                            fontSize: "20px",
                            color: "darkred",
                            cursor: "pointer",
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
