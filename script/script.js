var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Place = /** @class */ (function () {
    function Place(name, city, zipCode, address, imgTeaser, item, created) {
        this.imgTeaser = imgTeaser;
        this.name = name;
        this.city = city;
        this.zipCode = zipCode;
        this.address = address;
        this.created = created;
    }
    Place.prototype.displayCard = function () {
        return "<div class=\"col-md-4 mb-5\">\n        <div class=\"card h-100 \">\n          <img class=\"card-img-top one\" src=\"" + this.imgTeaser + "\" alt=\"\">\n          <div class=\"card-body\">\n            <h4 class=\"card-title\">" + this.name + "</h4>\n            <p class=\"card-text\">About:</p>\n            <ul class=\"card-text text-success\">\n                        <li>" + this.city + "</li>\n                        <li>" + this.address + "</li>\n                        <li>" + this.zipCode + "</li>\n                        <li>" + this.address + "</li>\n                        <li>Created: " + this.created + "</li>\n                    </ul>\n          <div class=\"card-footer\">\n            <a href=\"#\" class=\"btn btn-danger\">Find Out More</a>\n          </div>\n        </div>";
    };
    return Place;
}());
var Restaurant = /** @class */ (function (_super) {
    __extends(Restaurant, _super);
    function Restaurant(name, city, zipCode, address, imgTeaser, item, created, phone, type, web) {
        var _this = _super.call(this, name, city, zipCode, address, imgTeaser, item, created) || this;
        _this.phone = phone;
        _this.web = web;
        _this.type = type;
        return _this;
    }
    Restaurant.prototype.displayCard = function () {
        return "<div class=\"col-md-4 mb-5\">\n        <div class=\"card h-100 \">\n          <img class=\"card-img-top one\" src=\"" + this.imgTeaser + "\" alt=\"\">\n          <div class=\"card-body\">\n            <h4 class=\"card-title\">" + this.name + "</h4>\n            <p class=\"card-text\">About:</p>\n            <ul class=\"card-text text-success\">\n                        <li>" + this.city + "</li>\n                        <li>" + this.address + "</li>\n                        <li>" + this.zipCode + "</li>\n                        <li>" + this.address + "</li>\n                        <li> " + this.phone + "</li>\n               \t\t\t<li><a href=\"" + this.web + "\"> " + this.web + " </a></li>\n               \t\t\t<li> " + this.type + " restaurant</li>\n               \t\t\t<li>Created: " + this.created + "</li>\n                    </ul>\n          <div class=\"card-footer\">\n            <a href=\"#\" class=\"btn btn-danger\">Find Out More!</a>\n          </div>\n        </div>";
    };
    return Restaurant;
}(Place));
var Events = /** @class */ (function (_super) {
    __extends(Events, _super);
    function Events(name, city, zipCode, address, imgTeaser, item, created, web, data, time, ticket) {
        var _this = _super.call(this, name, city, zipCode, address, imgTeaser, item, created) || this;
        _this.data = data;
        _this.time = time;
        _this.web = web;
        _this.ticket = ticket;
        return _this;
    }
    Events.prototype.displayCard = function () {
        return "<div class=\"col-md-4 mb-5\">\n        <div class=\"card h-100 \">\n          <img class=\"card-img-top one\" src=\"" + this.imgTeaser + "\" alt=\"\">\n          <div class=\"card-body\">\n            <h4 class=\"card-title\">" + this.name + "</h4>\n            <p class=\"card-text\"></p>\n            <ul class=\"card-text text-success\">\n                        <li>" + this.city + "</li>\n                        <li>" + this.address + "</li>\n                        <li>" + this.zipCode + "</li>\n                        <li>" + this.address + "</li>\n                        <li><a href=\"" + this.web + "\"> " + this.web + " </a></li>\n              \t\t\t<li> " + this.data + "</li>\n              \t\t \t<li> " + this.time + "</li>\n               \t\t\t<li> " + this.ticket + "</li>\n               \t\t\t<li>Created: " + this.created + "</li>\n                    </ul>\n          <div class=\"card-footer\">\n            <a href=\"#\" class=\"btn btn-danger\">Find Out More!</a>\n          </div>\n        </div>";
    };
    return Events;
}(Place));
var lo1 = new Place("Belvedere Palace", "Vienna", 1030, " Prinz Eugen-Straße 27", "img/bel.jpg", "place", "19.10.2019 13:45");
var lo2 = new Place("Oper", "Vienna", 1010, "Opernring 2", "img/oper.jpg", "place", "19.10.2019 13:45");
var lo3 = new Place("Prater", "Vienna", 1020, "Praterstern", "img/prater.jpg", "place", "19.10.2019 13:45");
var lo4 = new Restaurant("Kolariks Luftburg", "Vienna", 1020, "Prater 28", "img/luft.jpg", "restaurant", "19.10.2019 13:45", " 0660 187 0909", "Austrian", "www.kolarik.at");
var lo5 = new Restaurant("Ebi", "Vienna", 1210, "Leopoldauer Str. 45-47", "img/o3.jpg", "restaurant", "19.10.2019 13:45", "01 2703838", "Japanese", "www.ebi-vienna.at");
var lo6 = new Restaurant("Teddy's American Diner", "Vienna", 1060, "Gumpendorfer Str. 63A", "img/teddy.jpg", "restaurant", "19.10.2019 13:45", "0 664 38 55 009", "American", "www.teddys-diner.com.");
var lo7 = new Events("World Press Photo", "Vienna", 1070, "Westbahnstraße 40", "img/word.jpg", "event", "19.10.2019 13:45", "www.westlicht.com", "So., 20.10.2019", " 11:00 - 19:00 Uhr ", "Free");
var lo8 = new Events("Mozart Konzert", "Vienna", 1130, "Schönbrunner Schloßstraße 47", "img/mozart.jpg", "event", "19.10.2019 13:45", "www.imagevienna.com", " 25.10.2019 ", "20:15", "45 €");
var show = [lo1, lo2, lo3, lo4, lo5, lo6, lo7, lo8];
for (var _i = 0, show_1 = show; _i < show_1.length; _i++) {
    var x = show_1[_i];
    document.getElementById("content").innerHTML += x.displayCard();
}
