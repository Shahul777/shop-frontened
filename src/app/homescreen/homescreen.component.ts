import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShopserviceService } from '../shopservice.service';
@Component({
  selector: 'app-homescreen',
  templateUrl: './homescreen.component.html',
  styleUrls: ['./homescreen.component.css']
})
export class HomescreenComponent implements OnInit {
  showkodambakkam: boolean = false;
  showTrustpuram: boolean = false;
  showCalculator: boolean = false;
  showAdmin: boolean = false;
  showNetCalculation: boolean = false;
  showHouseSpends: boolean = false;



  // subscription: Subscription;
  // private galleriaService: PhotoService, private nodeService: NodeService, private messageService: MessageService, private terminalService: TerminalService
  constructor(private router: Router , private service : ShopserviceService) { }

  items: any;
  trustpuramSaved() {
    this.adminTrustpuram = false;
    this.showTrustpuram = false;
    this.ngOnInit();
  }
  kodambakkamSaved() {
    this.showkodambakkam = false;
    this.adminKodambakkam = false
    this.ngOnInit();
  }
  dockItems: any;
  menubarItems: any;
  adminTrustpuram: boolean = false
  dateShow: any;
  dateStr: any='';
  ngOnInit() {
    this.dateShow=new Date()

    let dateString = this.dateShow
    let month = '' + (dateString.getMonth() + 1);
    let day = '' + dateString.getDate();
    let year = '' + dateString.getFullYear();

    if (month.length < 2) {
      month = '0' + month;
    }
    if (day.length < 2) {
      day = '0' + day;
    }
    this.dateStr = [year, month, day].join('-');


    this.showCalculator = true
    this.adminKodambakkam = false
    this.adminTrustpuram = false
    this.menubarItems = [
      {
          label: 'Finder',
          className: 'menubar-root'
      },
      {
          label: 'File',
          items: [
              {
                  label: 'New',
                  icon: 'pi pi-fw pi-plus',
                  items: [
                      {
                          label: 'Bookmark',
                          icon: 'pi pi-fw pi-bookmark'
                      },
                      {
                          label: 'Video',
                          icon: 'pi pi-fw pi-video'
                      },

                  ]
              },
              {
                  label: 'Delete',
                  icon: 'pi pi-fw pi-trash'
              },
              {
                  separator: true
              },
              {
                  label: 'Export',
                  icon: 'pi pi-fw pi-external-link'
              }
          ]
      },
      {
          label: 'Edit',
          items: [
              {
                  label: 'Left',
                  icon: 'pi pi-fw pi-align-left'
              },
              {
                  label: 'Right',
                  icon: 'pi pi-fw pi-align-right'
              },
              {
                  label: 'Center',
                  icon: 'pi pi-fw pi-align-center'
              },
              {
                  label: 'Justify',
                  icon: 'pi pi-fw pi-align-justify'
              },

          ]
      },
      {
          label: 'Users',
          items: [
              {
                  label: 'New',
                  icon: 'pi pi-fw pi-user-plus',

              },
              {
                  label: 'Delete',
                  icon: 'pi pi-fw pi-user-minus',

              },
              {
                  label: 'Search',
                  icon: 'pi pi-fw pi-users',
                  items: [
                      {
                          label: 'Filter',
                          icon: 'pi pi-fw pi-filter',
                          items: [
                              {
                                  label: 'Print',
                                  icon: 'pi pi-fw pi-print'
                              }
                          ]
                      },
                      {
                          icon: 'pi pi-fw pi-bars',
                          label: 'List'
                      }
                  ]
              }
          ]
      },
      {
          label: 'Events',
          items: [
              {
                  label: 'Edit',
                  icon: 'pi pi-fw pi-pencil',
                  items: [
                      {
                          label: 'Save',
                          icon: 'pi pi-fw pi-calendar-plus'
                      },
                      {
                          label: 'Delete',
                          icon: 'pi pi-fw pi-calendar-minus'
                      }
                  ]
              },
              {
                  label: 'Archieve',
                  icon: 'pi pi-fw pi-calendar-times',
                  items: [
                      {
                          label: 'Remove',
                          icon: 'pi pi-fw pi-calendar-minus'
                      }
                  ]
              }
          ]
      },
      {
          label: 'Quit'
      }
  ];

  //   this.dockItems = [
  //     {
  //         label: 'Finder',
  //         icon: "assets/showcase/binding.png"
  //     },
  //     {
  //         label: 'App Store',
  //         icon: "assets/showcase/binding.png"
  //     },
  //     {
  //         label: 'Photos',
  //         icon: "assets/showcase/binding.png"
  //     },
  //     {
  //         label: 'Trash',
  //         icon: "assets/showcase/binding.png"
  //     }
  // ];


  this.dockItems = [
    {
        label: 'Finder',
        tooltipOptions: {
            tooltipLabel: "Finder",
            tooltipPosition: 'top',
            positionTop: -15,
            positionLeft: 15
        },
        icon: "assets/showcase/binding.png",
        command: () => {
            // this.displayFinder = true;
        }
    },
    {
        label: 'Terminal',
        tooltipOptions: {
            tooltipLabel: "Terminal",
            tooltipPosition: 'top',
            positionTop: -15,
            positionLeft: 15
        },
        icon: "assets/showcase/binding.png",
        command: () => {
            // this.displayTerminal = true;
        }
    },
    {
        label: 'App Store',
        tooltipOptions: {
            tooltipLabel: "App Store",
            tooltipPosition: 'top',
            positionLeft: 15,
            positionTop: -15
        },
        icon: "assets/showcase/binding.png",
        command: () => {
            // this.messageService.add({severity: 'error', summary: 'An unexpected error occurred while signing in.', detail: 'UNTRUSTED_CERT_TITLE'});
        }
    },
    {
        label: 'Safari',
        tooltipOptions: {
            tooltipLabel: "Safari",
            tooltipPosition: 'top',
            positionTop: -15,
            positionLeft: 15
        },
        icon: "assets/showcase/binding.png",
        command: () => {
            // this.messageService.add({severity: 'warn', summary: 'Safari has stopped working'});
        }
    },
    {
        label: 'Photos',
        tooltipOptions: {
            tooltipLabel: "Photos",
            tooltipPosition: 'top',
            positionTop: -15,
            positionLeft: 15
        },
        icon: "assets/showcase/binding.png",
        command: () => {
            // this.displayGalleria = true
        }
    },
    {
        label: 'GitHub',
        icon: "assets/showcase/binding.png",
    },
    {
        label: 'Trash',
        icon: "assets/showcase/binding.png",
        command: () => {
            // this.messageService.add({severity: 'info', summary: 'Empty Trash'});
        }
    }
];
    this.items = [
      {
        label: 'Kodambakkam',
        icon: 'pi pi-refresh', command: () => {
          this.showkodambakkamFunc('labour');
        }
      },
      {
        label: 'Trustpuram',
        icon: 'pi pi-times', command: () => {
          this.showTrustpuramFunc('labour');
        }
      },
      {
        label: 'Net-Calculation',
        icon: 'pi pi-external-link'
        , command: () => {
          this.netcalculateFunc();
        }
      },
      {
        label: 'House-Spends',
        icon: 'pi pi-upload', command: () => {
          this.housespendsFunc();
        }
      },


    ];



    // {
    //   label: 'Kodambakkam-Admin',
    //   icon: 'pi pi-slack', command: () => {
    //     this.showkodambakkamFunc('admin');
    //   }
    // },
    // {
    //   label: 'Trustpuram-Admin',
    //   icon: 'pi pi-paypal', command: () => {
    //     this.showTrustpuramFunc('admin');
    //   }
    // },


  }
  adminfunc(event: any) {
    console.log(event)
  }
  netcalculateFunc() {
    this.showCalculator = false;
    this.showTrustpuram = false;
    this.showkodambakkam = false;
    this.showNetCalculation = true;
    this.showHouseSpends = false;
  }
  housespendsFunc() {
    this.showCalculator = false;
    this.showTrustpuram = false;
    this.showkodambakkam = false;
    this.showNetCalculation = false;
    this.showHouseSpends = true;
  }
  adminKodambakkam: boolean = false;

  showkodambakkamFunc(event: any) {
    if (event === "admin") {
      console.log(event)
      this.adminKodambakkam = true
      this.showCalculator = false;
      this.showTrustpuram = false;
      this.showkodambakkam = true;
      this.showNetCalculation = false;
      this.showHouseSpends = false;


    }
    else {
      console.log(event)
      this.adminKodambakkam = false
      this.showCalculator = false;
      this.showTrustpuram = false;
      this.showkodambakkam = true;
      this.showNetCalculation = false;
      this.showHouseSpends = false;
    }

  }
  showTrustpuramFunc(event: any) {
    if (event === "admin") {
      console.log(event)
      this.adminTrustpuram = true
      this.showCalculator = false;
      this.showTrustpuram = true;
      this.showkodambakkam = false;
      this.showNetCalculation = false;
      this.showHouseSpends = false;
    }
    else {
      console.log(event)
      this.adminTrustpuram = false;
      this.showCalculator = false;
      this.showTrustpuram = true;
      this.showkodambakkam = false;
      this.showNetCalculation = false;
      this.showHouseSpends = false;
    }

  }
  showCalculatorFunc() {
    this.showCalculator = true;
    this.showTrustpuram = false;
    this.showkodambakkam = false;
    this.showNetCalculation = false;
    this.showHouseSpends = false;
  }
  adminUrl : any= this.service.adminUrl
  showAdminFunc(){
console.log(this.adminUrl)
  }
}

