'use client';

import { Grid, TextField, Button, Box } from '@mui/material';
import { IProduct } from '@types';
import { ChangeEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { notify } from '@lib/notification';
import { updateProduct } from '@lib/products';

const ManageProduct = ({ product, addNew }: { product?: IProduct, addNew: boolean }): JSX.Element => {
  const nextRouter = useRouter();

  const [updatedProduct, setUpdatedProduct] = useState(product);


  const validate = (): boolean => {
    if (!updatedProduct?.name) {
      notify('Name is Required', 'error');
      return false;
    }
    if (!updatedProduct?.price) {
      notify('Price is Required', 'error');
      return false;
    }
    if (!updatedProduct?.price) {
      notify('Brand is Required', 'error');
      return false;
    }
    return true;
  }


  const updateProductState = (e: ChangeEvent<HTMLInputElement>) => {
    const field = e.target.name;
    const value = e.target.value;
    setUpdatedProduct((prev) => ({
      ...prev,
      [field as keyof IProduct]: value,
    }) as IProduct);
  };

  const upsertProduct = async () => {
    if (!updatedProduct) return;
    const formIsValid = validate();
    if (!formIsValid) return;

    await updateProduct(updatedProduct);

    notify(addNew ? 'New Product Added' : 'Product Updated');
    await nextRouter.push('/dashboard/products');
    nextRouter.refresh();
  }

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
    >
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={4}>
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            type="text"
            name="name"
            required
            fullWidth
            value={updatedProduct?.name}
            onChange={updateProductState}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <TextField
            id="outlined-basic"
            label="Brand"
            variant="outlined"
            type="text"
            name="brand"
            fullWidth
            required
            value={updatedProduct?.brand}
            onChange={updateProductState}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <TextField
            id="outlined-basic"
            label="Price"
            variant="outlined"
            type="number"
            name="price"
            required
            fullWidth
            value={updatedProduct?.price}
            onChange={updateProductState}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <TextField
            id="outlined-basic"
            label="Range"
            variant="outlined"
            type="text"
            name="range"
            fullWidth
            value={updatedProduct?.range}
            onChange={updateProductState}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <TextField
            id="outlined-basic"
            label="unit"
            variant="outlined"
            type="text"
            name="unit"
            fullWidth
            value={updatedProduct?.size}
            onChange={updateProductState}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="outlined-basic"
            label="Description"
            variant="outlined"
            type="text"
            name="description"
            fullWidth
            multiline
            minRows={3}
            value={updatedProduct?.usage}
            onChange={updateProductState}
          />
        </Grid>
        <Grid container item xs={12} justifyContent="right" spacing={4}>
          <Grid item xs={6} md={3}>
            <Button variant="outlined" fullWidth onClick={() => addNew ? nextRouter.back() : nextRouter.push('/dashboard/products')}>
              Cancel
            </Button>
          </Grid>
          <Grid item xs={6} md={3}>
            <Button variant="contained" fullWidth onClick={upsertProduct}>
              Save
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ManageProduct;
