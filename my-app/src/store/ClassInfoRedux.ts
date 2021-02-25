import { createSlice } from "@reduxjs/toolkit";

interface ClassSimpleInfo {
    chapter: number;
    videoNumber: number;
    startDate: string;
    Caption: boolean;
}

interface ClassInfoType {
    isLoading: boolean;
    isSuccess: boolean;
    isFail: boolean;
    Category: Array<string>;
    title: string;
    classSimpleInfo: ClassSimpleInfo;
    monthlyInstallments: number;
    monthlyPayment: number;
    discountAmount: number;
    goodAmount: number;
}

const initialState: ClassInfoType = {
    isLoading: false,
    isSuccess: false,
    isFail: false,
    Category: [],
    title: "",
    classSimpleInfo: {
        chapter: 0,
        videoNumber: 0,
        startDate: "",
        Caption: false,
    },
    monthlyInstallments: 0,
    monthlyPayment: 0,
    discountAmount: 0,
    goodAmount: 0,
};

const ClassInfoStore = createSlice({
    name: "ClassInfoStore",
    initialState,
    reducers: {
        RequestClassInfoData: (state) => {
            state.isLoading = true;
        },

        RequestClassInfoSuccess: (state, { payload }) => {
            state.isLoading = false;
            state.isSuccess = true;
        },
        RequestClassInfoFail: (state) => {
            state.isLoading = false;
            state.isFail = true;
        },
    },
});

export const {
    RequestClassInfoData,
    RequestClassInfoSuccess,
    RequestClassInfoFail,
} = ClassInfoStore.actions;

export default ClassInfoStore.reducer;
