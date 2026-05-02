"use client";

import { useState } from "react";

interface ItineraryItem {
  day: number;
  title: string;
  description: string;
}

interface ItineraryEditorProps {
  items: ItineraryItem[];
  onChange: (items: ItineraryItem[]) => void;
}

export default function ItineraryEditor({ items, onChange }: ItineraryEditorProps) {
  const [localItems, setLocalItems] = useState<ItineraryItem[]>(items || []);

  const handleAddDay = () => {
    const newDay = localItems.length > 0
      ? Math.max(...localItems.map(i => i.day)) + 1
      : 1;

    const newItem: ItineraryItem = { day: newDay, title: "", description: "" };
    const updated = [...localItems, newItem];
    setLocalItems(updated);
    onChange(updated);
  };

  const handleUpdateItem = (index: number, field: keyof ItineraryItem, value: any) => {
    const updated = [...localItems];
    updated[index] = { ...updated[index], [field]: value };
    setLocalItems(updated);
    onChange(updated);
  };

  const handleRemoveDay = (index: number) => {
    const updated = localItems.filter((_, i) => i !== index);
    setLocalItems(updated);
    onChange(updated);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-navy">Itinerary</h3>
        <button
          type="button"
          onClick={handleAddDay}
          className="bg-navy text-white px-3 py-1 rounded text-sm hover:opacity-90"
        >
          + Add Day
        </button>
      </div>

      {localItems.length === 0 ? (
        <p className="text-gray-500 text-sm">No days added yet</p>
      ) : (
        <div className="space-y-4">
          {localItems.map((item, index) => (
            <div
              key={index}
              className="border border-navy/20 rounded-lg p-4 bg-gray-50"
            >
              <div className="flex justify-between items-start mb-3">
                <h4 className="text-sm font-semibold text-navy">Day {item.day}</h4>
                <button
                  type="button"
                  onClick={() => handleRemoveDay(index)}
                  className="text-red-600 hover:text-red-700 text-sm"
                >
                  Remove
                </button>
              </div>

              <div className="grid gap-3">
                <div>
                  <label className="block text-xs font-medium text-navy mb-1">
                    Title
                  </label>
                  <input
                    type="text"
                    value={item.title}
                    onChange={(e) => handleUpdateItem(index, "title", e.target.value)}
                    placeholder="e.g., Arrival & Hotel Check-in"
                    className="w-full px-2 py-1 border border-navy/20 rounded text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-navy mb-1">
                    Description
                  </label>
                  <textarea
                    value={item.description}
                    onChange={(e) =>
                      handleUpdateItem(index, "description", e.target.value)
                    }
                    placeholder="Describe the day's activities..."
                    rows={2}
                    className="w-full px-2 py-1 border border-navy/20 rounded text-sm"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
