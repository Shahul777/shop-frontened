export interface kdmAccounts{
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
export interface kdmLabourDetails{
    id: any;
    Date: any;
    Day : string;
    GetTime:number;
    TajPresent  : number;
    TajExpense  : number;
    NoorPresent  : number;
    NoorExpense  : number;
    isTajHalfDay: number ;
    isNoorHalfDay : number ;
}
export interface rentSheet{
    bata1 : number;
    bata2 : number;
    food: number;
    tajSalary : any;
    noorSalary : any;
    assanSalary : any;
    maniSalary : any;
    rasheedSalary : any;

    paperRate : any;
    tonerRate: any;
    singleRate: any;
    b2bRate: any;
    copiesPerToner : any;


    tpmRent: any;
    kdmRent: any;

    currentBillKdm: number;
    currentBillTpm : number;
}