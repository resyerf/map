import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  public useLocation: [number, number] | undefined

  get isUserLocationReady():boolean{
    return !!this.useLocation
  }

  constructor() {
    this.getUserLocation();
  }

  public async getUserLocation(): Promise<[number,number]>{
    return new Promise((resolve,reject)=>{

      navigator.geolocation.getCurrentPosition(
        //(args)=>resolve([args.coords.longitude, args.coords.altitude!])
        ({coords})=>{
          this.useLocation = [coords.longitude, coords.altitude!];
          //resolve([coords.longitude, coords.altitude!]);
          resolve(this.useLocation)
        },
        (err)=>{
          console.log("ERROR")
          alert('ERROR CON LA GEOLOCALIZACION')
          reject();
        }
      );

    })
  }
}
