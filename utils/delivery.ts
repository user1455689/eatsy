// utils/delivery.ts

export function calculateDistance(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
) {
  const toRad = (v: number) => (v * Math.PI) / 180;

  const R = 6371; // Earth radius in km
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);

  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) *
      Math.cos(toRad(lat2)) *
      Math.sin(dLon / 2) ** 2;

  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

/**
 * Delivery fee rules (example):
 * - <= 2 km → Rs. 50
 * - <= 5 km → Rs. 100
 * - > 5 km   → Rs. 150
 */
export function calculateDeliveryFee(distance: number) {
  if (distance <= 2) return 50;
  if (distance <= 3) return 100;
  return 150;
}
