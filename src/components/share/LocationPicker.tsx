"use client";

import { MapPin, Navigation } from "lucide-react";
import { useState } from "react";

interface LocationPickerProps {
  latitude: string;
  longitude: string;
  onLatitudeChange: (value: string) => void;
  onLongitudeChange: (value: string) => void;
}

export default function LocationPicker({
  latitude,
  longitude,
  onLatitudeChange,
  onLongitudeChange,
}: LocationPickerProps) {
  const [error, setError] = useState<string | null>(null);

  const handleUseMyLocation = () => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported in this browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        onLatitudeChange(position.coords.latitude.toFixed(6));
        onLongitudeChange(position.coords.longitude.toFixed(6));
        setError(null);
      },
      () => setError("Unable to get your location. Enter coordinates manually.")
    );
  };

  const lat = Number(latitude);
  const lng = Number(longitude);
  const hasValidCoords = Number.isFinite(lat) && Number.isFinite(lng);

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between gap-3">
        <label className="text-sm font-medium text-text-primary">
          <MapPin className="mr-1.5 inline h-4 w-4 text-primary-light" aria-hidden />
          Location
        </label>
        <button
          type="button"
          onClick={handleUseMyLocation}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary-light"
        >
          <Navigation className="h-4 w-4" aria-hidden />
          Use my location
        </button>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <input
          type="number"
          step="any"
          value={latitude}
          onChange={(event) => onLatitudeChange(event.target.value)}
          placeholder="Latitude"
          className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm outline-none ring-primary/20 transition focus:ring-2"
          required
        />
        <input
          type="number"
          step="any"
          value={longitude}
          onChange={(event) => onLongitudeChange(event.target.value)}
          placeholder="Longitude"
          className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm outline-none ring-primary/20 transition focus:ring-2"
          required
        />
      </div>

      {error && <p className="text-sm text-accent">{error}</p>}

      <div className="overflow-hidden rounded-xl border border-border bg-primary/5">
        {hasValidCoords ? (
          <iframe
            title="Selected location map"
            src={`https://www.openstreetmap.org/export/embed.html?bbox=${lng - 0.05}%2C${lat - 0.05}%2C${lng + 0.05}%2C${lat + 0.05}&layer=mapnik&marker=${lat}%2C${lng}`}
            className="h-48 w-full"
            loading="lazy"
          />
        ) : (
          <div className="flex h-48 items-center justify-center px-4 text-center text-sm text-text-muted">
            Enter coordinates or use your current location to preview the map.
          </div>
        )}
      </div>
    </div>
  );
}
