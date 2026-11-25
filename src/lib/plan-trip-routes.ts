export interface PopularRoute {
  from: string;
  to: string;
  duration: string;
  transport: string;
  note: string;
}

export const POPULAR_ROUTES: PopularRoute[] = [
  {
    from: "Kathmandu",
    to: "Pokhara",
    duration: "6–7 hrs by road · 25 min by flight",
    transport: "Tourist bus, private car, or flight",
    note: "Nepal's most popular route — lakes, mountains, and adventure hub.",
  },
  {
    from: "Pokhara",
    to: "Mustang",
    duration: "2 days via Jomsom (or flight to Jomsom)",
    transport: "Jeep, flight + jeep combo",
    note: "High-altitude desert landscapes and ancient Tibetan culture.",
  },
  {
    from: "Kathmandu",
    to: "Chitwan",
    duration: "5–6 hrs by road · 20 min by flight",
    transport: "Tourist bus or flight to Bharatpur",
    note: "Gateway to jungle safaris and Tharu heritage.",
  },
  {
    from: "Kathmandu",
    to: "Lumbini",
    duration: "8–9 hrs by road · 35 min by flight",
    transport: "Bus or flight to Bhairahawa",
    note: "Birthplace of Buddha — spiritual centerpiece of the Terai.",
  },
  {
    from: "Kathmandu",
    to: "Nagarkot",
    duration: "1.5–2 hrs",
    transport: "Private car or taxi",
    note: "Quick Himalayan sunrise escape from the capital.",
  },
  {
    from: "Pokhara",
    to: "Ghandruk",
    duration: "2 hrs drive + 3–4 hrs trek",
    transport: "Jeep to Nayapul, then foot",
    note: "Classic short trek with Annapurna panoramas.",
  },
];

export const ROUTE_DISTANCES = [
  { from: "Kathmandu", to: "Pokhara", road: "200 km", time: "6–7 hrs" },
  { from: "Kathmandu", to: "Chitwan", road: "175 km", time: "5–6 hrs" },
  { from: "Kathmandu", to: "Lumbini", road: "260 km", time: "8–9 hrs" },
  { from: "Pokhara", to: "Chitwan", road: "145 km", time: "4–5 hrs" },
  { from: "Kathmandu", to: "Nagarkot", road: "32 km", time: "1.5–2 hrs" },
  { from: "Kathmandu", to: "Bhaktapur", road: "15 km", time: "45 min" },
];
