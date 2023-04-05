
export interface IPoint {
  x: number;
  y: number;
}

export class Random {

  public nextDouble (): number {
    return Math.random();
  }

  public intInRange (min: number, max: number): number {
    let range = Math.abs(max - min) + 1;
    return Math.floor((this.nextDouble() * range) + min);
  }

  public pointOnCircle(): IPoint {
    let angle = this.nextDouble() * 2 * Math.PI;
    return {
      x: Math.cos(angle),
      y: Math.sin(angle)
    }
  }

  // These are minor optimizations for the gaussian number generators
  private usePrevious:boolean = false;
  private y2: number = 0;

  // My old professor Dean Mathias shared this with us and asked us to credit him.  Thanks Dean
  // Gaussian number generation takes a mean, and a standard deviation
  public nextGaussian(mean: number, stdDev: number): number {
    if (this.usePrevious) {
      this.usePrevious = false;
      return mean + this.y2 * stdDev;
    }
    this.usePrevious = true;

    let x1 = 0;
    let x2 = 0;
    let y1 = 0;
    let z = 0;

    do {
      x1 = 2 * Math.random() - 1;
      x2 = 2 * Math.random() - 1;
      z = (x1 * x1) + (x2 * x2);
    } while (z >= 1);

    z = Math.sqrt((-2 * Math.log(z)) / z);
    y1 = x1 * z;
    this.y2 = x2 * z;

    return mean + y1 * stdDev;
  }
}
