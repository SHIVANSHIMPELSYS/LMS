import { Component } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent {
  map!: google.maps.Map;
  marker!: google.maps.Marker;
 
  ngOnInit() {
    this.initMap();
  }
 
  initMap() {
    const mapOptions: google.maps.MapOptions = {
      center: { lat: 51.505, lng: -0.09 },
      zoom: 13,
    };
    this.map = new google.maps.Map(document.getElementById('map') as HTMLElement, mapOptions);
  }
 
  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        this.map.setCenter({ lat, lng }); // Center the map on user's location
        // If a marker already exists, set its position, otherwise create a new one
        if (this.marker) {
          this.marker.setPosition({ lat, lng });
        } else {
          this.marker = new google.maps.Marker({
            position: { lat, lng },
            map: this.map,
            title: 'You are here!',
          });
        }
      }, () => {
        alert('Unable to retrieve your location.');
      });
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  }

}
