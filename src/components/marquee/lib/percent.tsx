/**
 * Percent calculator.
 * @param num1 percent string ex. 100%
 * @param num2 percent string ex. 100%
 * @returns (num1 add num2)%
 */
export const percent = (num1: string, num2: string): string => {
    return (parseInt(num1.slice(0,-1)) + parseInt(num2.slice(0,-1))).toString()+"%";
}