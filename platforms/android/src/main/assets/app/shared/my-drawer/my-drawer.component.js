"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
/* ***********************************************************
* Keep data that is displayed in your app drawer in the MyDrawer component class.
* Add new data objects that you want to display in the drawer here in the form of properties.
*************************************************************/
var MyDrawerComponent = (function () {
    function MyDrawerComponent(routerExtensions) {
        this.routerExtensions = routerExtensions;
    }
    /* ***********************************************************
    * Use the MyDrawerComponent "onInit" event handler to initialize the properties data values.
    * The navigationItems property is initialized here and is data bound to <ListView> in the MyDrawer view file.
    * Add, remove or edit navigationItems to change what is displayed in the app drawer list.
    *************************************************************/
    MyDrawerComponent.prototype.ngOnInit = function () {
        this._navigationItems = [
            {
                title: "Home",
                name: "home",
                route: "/home",
                icon: "\uf015"
            },
            {
                title: "Settings",
                name: "settings",
                route: "/settings",
                icon: "\uf013"
            }
        ];
    };
    Object.defineProperty(MyDrawerComponent.prototype, "navigationItems", {
        get: function () {
            return this._navigationItems;
        },
        enumerable: true,
        configurable: true
    });
    /* ***********************************************************
    * Use the "itemTap" event handler of the <ListView> component for handling list item taps.
    * The "itemTap" event handler of the app drawer <ListView> is used to navigate the app
    * based on the tapped navigationItem's route.
    *************************************************************/
    MyDrawerComponent.prototype.onNavigationItemTap = function (args) {
        var navigationItemView = args.view;
        var navigationItemRoute = navigationItemView.bindingContext.route;
        this.routerExtensions.navigate([navigationItemRoute], {
            transition: {
                name: "slide"
            }
        });
    };
    /* ***********************************************************
    * The "isPageSelected" function is bound to every navigation item on the <ListView>.
    * It is used to determine whether the item should have the "selected" class.
    * The "selected" class changes the styles of the item, so that you know which page you are on.
    *************************************************************/
    MyDrawerComponent.prototype.isPageSelected = function (pageTitle) {
        return pageTitle === this.selectedPage;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], MyDrawerComponent.prototype, "selectedPage", void 0);
    MyDrawerComponent = __decorate([
        core_1.Component({
            selector: "MyDrawer",
            moduleId: module.id,
            templateUrl: "./my-drawer.component.html",
            styleUrls: ["./my-drawer.component.css"]
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions])
    ], MyDrawerComponent);
    return MyDrawerComponent;
}());
exports.MyDrawerComponent = MyDrawerComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktZHJhd2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm15LWRyYXdlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUQ7QUFDekQsc0RBQStEO0FBRy9EOzs7OERBRzhEO0FBTzlEO0lBVUksMkJBQW9CLGdCQUFrQztRQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO0lBRXRELENBQUM7SUFFRDs7OztrRUFJOEQ7SUFDOUQsb0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxnQkFBZ0IsR0FBRztZQUNwQjtnQkFDSSxLQUFLLEVBQUUsTUFBTTtnQkFDYixJQUFJLEVBQUUsTUFBTTtnQkFDWixLQUFLLEVBQUUsT0FBTztnQkFDZCxJQUFJLEVBQUUsUUFBUTthQUNqQjtZQUNEO2dCQUNJLEtBQUssRUFBRSxVQUFVO2dCQUNqQixJQUFJLEVBQUUsVUFBVTtnQkFDaEIsS0FBSyxFQUFFLFdBQVc7Z0JBQ2xCLElBQUksRUFBRSxRQUFRO2FBQ2pCO1NBQ0osQ0FBQztJQUNOLENBQUM7SUFFRCxzQkFBSSw4Q0FBZTthQUFuQjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7UUFDakMsQ0FBQzs7O09BQUE7SUFFRDs7OztrRUFJOEQ7SUFDOUQsK0NBQW1CLEdBQW5CLFVBQW9CLElBQW1CO1FBQ25DLElBQU0sa0JBQWtCLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUNyQyxJQUFNLG1CQUFtQixHQUFHLGtCQUFrQixDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUM7UUFFcEUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLEVBQUU7WUFDbEQsVUFBVSxFQUFFO2dCQUNSLElBQUksRUFBRSxPQUFPO2FBQ2hCO1NBQ0osQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVEOzs7O2tFQUk4RDtJQUM5RCwwQ0FBYyxHQUFkLFVBQWUsU0FBaUI7UUFDNUIsTUFBTSxDQUFDLFNBQVMsS0FBSyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzNDLENBQUM7SUF6RFE7UUFBUixZQUFLLEVBQUU7OzJEQUFzQjtJQU5yQixpQkFBaUI7UUFON0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsNEJBQTRCO1lBQ3pDLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixDQUFDO1NBQzNDLENBQUM7eUNBV3dDLHlCQUFnQjtPQVY3QyxpQkFBaUIsQ0FnRTdCO0lBQUQsd0JBQUM7Q0FBQSxBQWhFRCxJQWdFQztBQWhFWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBJdGVtRXZlbnREYXRhIH0gZnJvbSBcInVpL2xpc3Qtdmlld1wiO1xyXG5cclxuLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuKiBLZWVwIGRhdGEgdGhhdCBpcyBkaXNwbGF5ZWQgaW4geW91ciBhcHAgZHJhd2VyIGluIHRoZSBNeURyYXdlciBjb21wb25lbnQgY2xhc3MuXHJcbiogQWRkIG5ldyBkYXRhIG9iamVjdHMgdGhhdCB5b3Ugd2FudCB0byBkaXNwbGF5IGluIHRoZSBkcmF3ZXIgaGVyZSBpbiB0aGUgZm9ybSBvZiBwcm9wZXJ0aWVzLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIk15RHJhd2VyXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9teS1kcmF3ZXIuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wiLi9teS1kcmF3ZXIuY29tcG9uZW50LmNzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXlEcmF3ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgICogVGhlIFwic2VsZWN0ZWRQYWdlXCIgaXMgYSBjb21wb25lbnQgaW5wdXQgcHJvcGVydHkuXHJcbiAgICAqIEl0IGlzIHVzZWQgdG8gcGFzcyB0aGUgY3VycmVudCBwYWdlIHRpdGxlIGZyb20gdGhlIGNvbnRhaW5pbmcgcGFnZSBjb21wb25lbnQuXHJcbiAgICAqIFlvdSBjYW4gY2hlY2sgaG93IGl0IGlzIHVzZWQgaW4gdGhlIFwiaXNQYWdlU2VsZWN0ZWRcIiBmdW5jdGlvbiBiZWxvdy5cclxuICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgICBASW5wdXQoKSBzZWxlY3RlZFBhZ2U6IHN0cmluZztcclxuXHJcbiAgICBwcml2YXRlIF9uYXZpZ2F0aW9uSXRlbXM6IEFycmF5PGFueT47XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICAqIFVzZSB0aGUgTXlEcmF3ZXJDb21wb25lbnQgXCJvbkluaXRcIiBldmVudCBoYW5kbGVyIHRvIGluaXRpYWxpemUgdGhlIHByb3BlcnRpZXMgZGF0YSB2YWx1ZXMuXHJcbiAgICAqIFRoZSBuYXZpZ2F0aW9uSXRlbXMgcHJvcGVydHkgaXMgaW5pdGlhbGl6ZWQgaGVyZSBhbmQgaXMgZGF0YSBib3VuZCB0byA8TGlzdFZpZXc+IGluIHRoZSBNeURyYXdlciB2aWV3IGZpbGUuXHJcbiAgICAqIEFkZCwgcmVtb3ZlIG9yIGVkaXQgbmF2aWdhdGlvbkl0ZW1zIHRvIGNoYW5nZSB3aGF0IGlzIGRpc3BsYXllZCBpbiB0aGUgYXBwIGRyYXdlciBsaXN0LlxyXG4gICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX25hdmlnYXRpb25JdGVtcyA9IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiSG9tZVwiLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJob21lXCIsXHJcbiAgICAgICAgICAgICAgICByb3V0ZTogXCIvaG9tZVwiLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogXCJcXHVmMDE1XCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiU2V0dGluZ3NcIixcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwic2V0dGluZ3NcIixcclxuICAgICAgICAgICAgICAgIHJvdXRlOiBcIi9zZXR0aW5nc1wiLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogXCJcXHVmMDEzXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF07XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG5hdmlnYXRpb25JdGVtcygpOiBBcnJheTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbmF2aWdhdGlvbkl0ZW1zO1xyXG4gICAgfVxyXG5cclxuICAgIC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICAqIFVzZSB0aGUgXCJpdGVtVGFwXCIgZXZlbnQgaGFuZGxlciBvZiB0aGUgPExpc3RWaWV3PiBjb21wb25lbnQgZm9yIGhhbmRsaW5nIGxpc3QgaXRlbSB0YXBzLlxyXG4gICAgKiBUaGUgXCJpdGVtVGFwXCIgZXZlbnQgaGFuZGxlciBvZiB0aGUgYXBwIGRyYXdlciA8TGlzdFZpZXc+IGlzIHVzZWQgdG8gbmF2aWdhdGUgdGhlIGFwcFxyXG4gICAgKiBiYXNlZCBvbiB0aGUgdGFwcGVkIG5hdmlnYXRpb25JdGVtJ3Mgcm91dGUuXHJcbiAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gICAgb25OYXZpZ2F0aW9uSXRlbVRhcChhcmdzOiBJdGVtRXZlbnREYXRhKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgbmF2aWdhdGlvbkl0ZW1WaWV3ID0gYXJncy52aWV3O1xyXG4gICAgICAgIGNvbnN0IG5hdmlnYXRpb25JdGVtUm91dGUgPSBuYXZpZ2F0aW9uSXRlbVZpZXcuYmluZGluZ0NvbnRleHQucm91dGU7XHJcblxyXG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbbmF2aWdhdGlvbkl0ZW1Sb3V0ZV0sIHtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJzbGlkZVwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAgKiBUaGUgXCJpc1BhZ2VTZWxlY3RlZFwiIGZ1bmN0aW9uIGlzIGJvdW5kIHRvIGV2ZXJ5IG5hdmlnYXRpb24gaXRlbSBvbiB0aGUgPExpc3RWaWV3Pi5cclxuICAgICogSXQgaXMgdXNlZCB0byBkZXRlcm1pbmUgd2hldGhlciB0aGUgaXRlbSBzaG91bGQgaGF2ZSB0aGUgXCJzZWxlY3RlZFwiIGNsYXNzLlxyXG4gICAgKiBUaGUgXCJzZWxlY3RlZFwiIGNsYXNzIGNoYW5nZXMgdGhlIHN0eWxlcyBvZiB0aGUgaXRlbSwgc28gdGhhdCB5b3Uga25vdyB3aGljaCBwYWdlIHlvdSBhcmUgb24uXHJcbiAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gICAgaXNQYWdlU2VsZWN0ZWQocGFnZVRpdGxlOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gcGFnZVRpdGxlID09PSB0aGlzLnNlbGVjdGVkUGFnZTtcclxuICAgIH1cclxufVxyXG4iXX0=