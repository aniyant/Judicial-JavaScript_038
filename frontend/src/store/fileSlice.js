import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import fileService from '../services/fileService';

const initialState = {
  files: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

export const getFiles = createAsyncThunk('files/getFiles', async (_, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token;
    return await fileService.getFiles(token);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const createFile = createAsyncThunk('files/createFile', async (fileData, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token;
    return await fileService.createFile(fileData, token);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const renameFile = createAsyncThunk('files/renameFile', async (fileData, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token;
    return await fileService.renameFile(fileData, token);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const deleteFile = createAsyncThunk('files/deleteFile', async (fileData, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token;
    return await fileService.deleteFile(fileData, token);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const updateFileContent = createAsyncThunk(
  'files/updateFileContent',
  async (fileData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await fileService.updateFileContent(fileData, token);
    } catch (error) {
      const message =
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const fileSlice = createSlice({
  name: 'files',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getFiles.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getFiles.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.files = action.payload;
      })
      .addCase(getFiles.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(createFile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createFile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.files.push(action.payload);
      })
      .addCase(createFile.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(renameFile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(renameFile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        const index = state.files.findIndex((file) => file._id === action.payload._id);
        state.files[index] = action.payload;
      })
      .addCase(renameFile.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteFile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteFile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.files = state.files.filter((file) => file._id !== action.payload.id);
      })
      .addCase(deleteFile.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(updateFileContent.fulfilled, (state, action) => {
        const index = state.files.findIndex((file) => file._id === action.payload._id);
        if (index !== -1) {
          state.files[index] = action.payload;
        }
      });
  },
});

export const { reset } = fileSlice.actions;
export default fileSlice.reducer;
