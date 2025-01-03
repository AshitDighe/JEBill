import { Injectable } from '@angular/core';

// Create a concrete class implementing SvgLoader
export abstract class SvgLoader {
  abstract loadIcon(): void;  // Define the method (assuming it's an abstract method)
}

@Injectable({
  providedIn: 'root',  // Provide the concrete implementation globally
})
export class ConcreteSvgLoader extends SvgLoader {
  loadIcon(): void {
    console.log('SVG Icon loaded successfully!');
    // Actual SVG loading logic can go here
  }
}
