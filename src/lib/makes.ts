export const MAKES = [
  "Acura", "Alfa Romeo", "AM General", "AMC", "Aston Martin", "Austin Healey", 
  "Audi", "Avanti Motors", "BMW", "Bricklin", "Bentley", "Bugatti", 
  "Buick", "Cadillac", "Chevrolet", "Chrysler", "Daihatsu", "Daewoo", 
  "Datsun", "Dodge", "Eagle", "Ferrari", "Fiat", "Freightliner", 
  "Genesis", "Geo", "Ford", "Fisker", "GMC", "Harley-Davidson", 
  "Hino", "Honda", "Hummer", "Hyundai", "Infiniti", "International", 
  "Isuzu", "Jaguar", "Jeep", "Kawasaki", "Kenworth", "Koenigsegg", 
  "Kia", "Lamborghini", "Land Rover", "Lexus", "Lincoln", "Lotus", 
  "Maserati", "Maybach", "Mazda", "McLaren", "Mercedes-Benz", "MG", 
  "Mercury", "Mini", "Mitsubishi", "Nissan", "Panoz", "Peterbilt", 
  "Plymouth", "Polestar", "Oldsmobile", "Pontiac", "Porsche", "RAM", 
  "Rolls-Royce", "Saleen", "Saab", "Saturn", "Scion", "Smart", 
  "Subaru", "Suzuki", "Tesla", "Toyota", "Triumph", "Volkswagen", 
  "Volvo", "Yamaha"
] as const;

export type Make = typeof MAKES[number];

export function getMakeBySlug(slug: string): string | undefined {
  return MAKES.find(
    (make) => make.toLowerCase().replace(/[^a-z0-9]+/g, '-') === slug
  );
}

export function getSlugByMake(make: string): string {
  return make.toLowerCase().replace(/[^a-z0-9]+/g, '-');
}
