import classInfo from "../Data/classInfo.json";

export const ClassInfoParser = () => {
    return new Promise((resolve, reject) => {
        const result = classInfo;
        setTimeout(() => {
            resolve(result);
        }, 800);
    });
};
