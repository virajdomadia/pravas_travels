"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQEditorProps {
  items: FAQItem[];
  onChange: (items: FAQItem[]) => void;
}

export default function FAQEditor({ items, onChange }: FAQEditorProps) {
  const [localItems, setLocalItems] = useState<FAQItem[]>(items || []);

  const handleAddFAQ = () => {
    const newItem: FAQItem = { question: "", answer: "" };
    const updated = [...localItems, newItem];
    setLocalItems(updated);
    onChange(updated);
  };

  const handleUpdateItem = (index: number, field: keyof FAQItem, value: string) => {
    const updated = [...localItems];
    updated[index] = { ...updated[index], [field]: value };
    setLocalItems(updated);
    onChange(updated);
  };

  const handleRemoveFAQ = (index: number) => {
    const updated = localItems.filter((_, i) => i !== index);
    setLocalItems(updated);
    onChange(updated);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-navy">FAQ</h3>
        <button
          type="button"
          onClick={handleAddFAQ}
          className="bg-navy text-white px-3 py-1 rounded text-sm hover:opacity-90"
        >
          + Add FAQ
        </button>
      </div>

      {localItems.length === 0 ? (
        <p className="text-gray-500 text-sm">No FAQs added yet</p>
      ) : (
        <div className="space-y-4">
          {localItems.map((item, index) => (
            <div
              key={index}
              className="border border-navy/20 rounded-lg p-4 bg-gray-50"
            >
              <div className="flex justify-between items-start mb-3">
                <h4 className="text-sm font-semibold text-navy">
                  Question {index + 1}
                </h4>
                <button
                  type="button"
                  onClick={() => handleRemoveFAQ(index)}
                  className="text-red-600 hover:text-red-700 text-sm"
                >
                  Remove
                </button>
              </div>

              <div className="grid gap-3">
                <div>
                  <label className="block text-xs font-medium text-navy mb-1">
                    Question
                  </label>
                  <input
                    type="text"
                    value={item.question}
                    onChange={(e) => handleUpdateItem(index, "question", e.target.value)}
                    placeholder="e.g., Is this suitable for a honeymoon?"
                    className="w-full px-2 py-1 border border-navy/20 rounded text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-navy mb-1">
                    Answer
                  </label>
                  <textarea
                    value={item.answer}
                    onChange={(e) => handleUpdateItem(index, "answer", e.target.value)}
                    placeholder="Provide the answer..."
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
