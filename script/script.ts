class Place{

	
    name: string;
    city: string; 
    zipCode: number;   
    address: string;  
    imgTeaser:string;
    item:string;
    created:string

    constructor(name, city, zipCode, address, imgTeaser,item,created) { 
        this.imgTeaser = imgTeaser;
        this.name = name;
        this.city = city;
        this.zipCode = zipCode;
        this.address = address;
        this.created=created;
   }
   displayCard() {

		return `<div class="col-md-4 mb-5">
        <div class="card h-100 ">
          <img class="card-img-top one" src="${this.imgTeaser}" alt="">
          <div class="card-body">
            <h4 class="card-title">${this.name}</h4>
            <p class="card-text">About:</p>
            <ul class="card-text text-success">
                        <li>${this.city}</li>
                        <li>${this.address}</li>
                        <li>${this.zipCode}</li>
                        <li>${this.address}</li>
                        <li>Created: ${this.created}</li>
                    </ul>
          <div class="card-footer">
            <a href="#" class="btn btn-danger">Find Out More</a>
          </div>
        </div>`;
	}
}


class Restaurant extends Place {
	phone: string;
	web: string;
	type:string;

	constructor(name, city, zipCode, address, imgTeaser,item, created, phone, type, web){
		super(name, city, zipCode, address, imgTeaser, item, created);

		this.phone= phone;
		this.web= web;
		this.type= type;
	}

	displayCard(){
		return `<div class="col-md-4 mb-5">
        <div class="card h-100 ">
          <img class="card-img-top one" src="${this.imgTeaser}" alt="">
          <div class="card-body">
            <h4 class="card-title">${this.name}</h4>
            <p class="card-text">About:</p>
            <ul class="card-text text-success">
                        <li>${this.city}</li>
                        <li>${this.address}</li>
                        <li>${this.zipCode}</li>
                        <li>${this.address}</li>
                        <li> ${this.phone}</li>
               			<li><a href="${this.web}"> ${this.web} </a></li>
               			<li> ${this.type} restaurant</li>
               			<li>Created: ${this.created}</li>
                    </ul>
          <div class="card-footer">
            <a href="#" class="btn btn-danger">Find Out More!</a>
          </div>
        </div>`;
	}
}


class Events extends Place {
	data:string;
	time:string;
	ticket:string;
	web:string;

	constructor(name, city, zipCode, address, imgTeaser,item,created, web, data, time, ticket,){
		super(name, city, zipCode, address, imgTeaser,item,created);

		this.data= data;
		this.time=time;
		this.web= web;
		this.ticket= ticket;
	}

	displayCard (){

		
				return `<div class="col-md-4 mb-5">
        <div class="card h-100 ">
          <img class="card-img-top one" src="${this.imgTeaser}" alt="">
          <div class="card-body">
            <h4 class="card-title">${this.name}</h4>
            <p class="card-text"></p>
            <ul class="card-text text-success">
                        <li>${this.city}</li>
                        <li>${this.address}</li>
                        <li>${this.zipCode}</li>
                        <li>${this.address}</li>
                        <li><a href="${this.web}"> ${this.web} </a></li>
              			<li> ${this.data}</li>
              		 	<li> ${this.time}</li>
               			<li> ${this.ticket}</li>
               			<li>Created: ${this.created}</li>
                    </ul>
          <div class="card-footer">
            <a href="#" class="btn btn-danger">Find Out More!</a>
          </div>
        </div>`;
	}

}



let lo1=new Place("Belvedere Palace", "Vienna", 1030, " Prinz Eugen-Straße 27", "img/bel.jpg","place", "19.10.2019 13:45");
let lo2=new Place("Oper", "Vienna", 1010, "Opernring 2", "img/oper.jpg","place", "19.10.2019 13:45" );
let lo3=new Place("Prater", "Vienna", 1020, "Praterstern", "img/prater.jpg","place", "19.10.2019 13:45" );

let lo4=new Restaurant("Kolariks Luftburg", "Vienna", 1020, "Prater 28", "img/luft.jpg","restaurant","19.10.2019 13:45", " 0660 187 0909" , "Austrian","www.kolarik.at");
let lo5=new Restaurant("Ebi", "Vienna", 1210, "Leopoldauer Str. 45-47", "img/o3.jpg","restaurant","19.10.2019 13:45", "01 2703838", "Japanese","www.ebi-vienna.at");
let lo6=new Restaurant("Teddy's American Diner", "Vienna", 1060 , "Gumpendorfer Str. 63A", "img/teddy.jpg","restaurant","19.10.2019 13:45", "0 664 38 55 009", "American","www.teddys-diner.com.");

let lo7=new Events("World Press Photo", "Vienna", 1070 , "Westbahnstraße 40", "img/word.jpg","event","19.10.2019 13:45","www.westlicht.com", "So., 20.10.2019", " 11:00 - 19:00 Uhr ", "Free");
let lo8=new Events("Mozart Konzert", "Vienna", 1130, "Schönbrunner Schloßstraße 47", "img/mozart.jpg","event", "19.10.2019 13:45", "www.imagevienna.com", " 25.10.2019 ", "20:15", "45 €" );

var show:Array<any>=[lo1,lo2,lo3,lo4,lo5,lo6,lo7,lo8];


for(let x of show){
	document.getElementById("content").innerHTML += x.displayCard();
}




