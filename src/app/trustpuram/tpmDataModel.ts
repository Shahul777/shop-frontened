export interface tpmAccounts{
    // id : any;
    // Date : any;
    // Day : string;
    // isSunday : number;
    // isHoliday : number;
    // isPaperCame: number;
    // isTonerCame: number;
    // isItemsCame : number;
    // ItemsInfo : string;


    // BlackMachineReading1 : number;
    // BlackMachineReading2 : number;
    // ColourMachineReading1: number;
    // BlackCopies : number;
    // ColourCopies : number;
    // B2bCopies : number;
    // PaperPresentToday : number;
 
    // Toner : number;
    // TonerSpent : number;
    // PaperSheet : number;
    // PaperSoldToday : number;
    // Bindings : number;
    // Expenses : number;
    // TodayStayDetail :string;
    // PastStayDetail: string;
    // PastSoldDetail: string;
    // TodayStayingCopies: number;
    // TodayStayingMoney: number;
    // OldStayingCopies : number;
    // OldStayingMoney : number;
    // GoneCopiesPast: number;
    // GoneMoneyPast: number;
    // NotesToday: string;
    // CashIncome: number;
    // PaytmIncome: number;
    // TotalIncome : number;
    // OpeningBalance : number;
    // NetProfit : number;
// GetTime : number;

id : any;
Date : any;
Day : string;
GetTime : number;
isSunday : number;
isHoliday : number;
isPaperCame: number;
isPaperSent : number;

PaperQuantityCame : number;
PaperQuantitySent : number;
isTonerCame: number;
isTonerSent : number ;
TonerQuantityCame : number;
TonerQuantitySent: number;



isItemsCame : number;
ItemsInfo : string;


BlackMachineReading1 : number;
BlackMachineReading2 : number;
ColourMachineReading1: number;
ColourMachineReading2: number;
BlackCopies : number;
ColourCopies : number;
B2bCopies : number;
PaperPresentToday : number;
// PaperYesterday : any;
Toner : number;
TonerSpent : number;
PaperSheet : number;
PaperSoldToday : number;
Bindings : number;
Expenses : number;
TodayStayDetail :string;
PastStayDetail: string;
PastSoldDetail: string;
TodayStayingCopies: number;
TodayStayingMoney: number;
OldStayingCopies : number;
OldStayingMoney : number;
GoneCopiesPast: number;
GoneMoneyPast: number;
NotesToday: string;
CashIncome: number;
PaytmIncome: number;
TotalIncome : number;
OpeningBalance : number;
NetProfit : number;





}
export interface tpmLabourDetails{
    id : any;
    Date : any;
    Day : string;
    GetTime: number ;
    AssanPresent : number ;
    AssanExpense : number ;
    RasheedPresent : number ;
    RasheedExpense : number ;
    ManiPresent: number ;
    ManiExpense : number ;
    isRasheedHalfDay: number ;
    isAssanHalfDay: number ;
    isManiHalfDay: number ;
}