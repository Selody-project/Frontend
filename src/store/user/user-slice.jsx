import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  user: {},
  isLoading: false,
};

export const signup = createAsyncThunk("user/signup", async (user, thunkAPI) => {
  try {
    const response = await fetch(`/back/api/auth/join`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (!response.ok) {
      throw await response.json();
    }

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const login = createAsyncThunk("user/login", async (user, thunkAPI) => {
  try {
    const response = await fetch(`/back/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
      },
      body: JSON.stringify(user),
    });

    if (!response.ok) {
      throw await response.json();
    }

    const data = await response.json();
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const naverLogin = createAsyncThunk("user/naverLogin", async (naverInfo, thunkAPI) => {
  try {
    const response = await fetch("/back/api/auth/naver", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(naverInfo),
    });

    if (!response.ok) {
      throw await response.json();
    }

    const data = await response.json();
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      (state.user = null), toast.success("로그아웃에 성공하셨습니다");
    },
  },
  extraReducers: (builder) => {
    builder
      // 회원가입
      .addCase(signup.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signup.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        console.log(payload);
        state.user = payload.user;
        toast.success(`환영합니다! ${user.nick}님`);
      })
      .addCase(signup.rejected, (state, { payload }) => {
        state.isLoading = false;
        console.log(payload);
        toast.error(payload);
      })
      // 로그인
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload.user;
        toast.success(`안녕하세요! ${user.nick}님`);
      })
      .addCase(login.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })
      // naver 로그인
      .addCase(naverLogin.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(naverLogin.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload.user;
        toast.success(`안녕하세요! ${user.nick}님`);
      })
      .addCase(naverLogin.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      });
  },
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;
