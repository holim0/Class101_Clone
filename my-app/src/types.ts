interface scrollType {
    [key: string]: number;
}

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

interface ButtonPropsType {
    flag: boolean;
    curSectionName: string;
    scrollToRef: (event: any) => void;
}
export type { scrollType, ClassSimpleInfo, ClassInfoType, ButtonPropsType };
