import { useEffect, useState } from "react";

export const FloorPlanCategoriesInput = ({ value, onChange }) => {
  const [categories, setCategories] = useState(value || []);

  
  useEffect(() => {
    setCategories(value || []);
  }, [value]);

  const updateParent = (newCategories) => {
    setCategories(newCategories);
    onChange(newCategories);
  };

  const addCategory = () => {
    updateParent([...categories, { categoryName: "", floorPlans: [] }]);
  };

  const removeCategory = (catIndex) => {
    updateParent(categories.filter((_, i) => i !== catIndex));
  };

  const updateCategoryName = (catIndex, val) => {
    const newCategories = [...categories];
    newCategories[catIndex].categoryName = val;
    updateParent(newCategories);
  };

  const addFloorPlan = (catIndex) => {
    const newCategories = [...categories];
    newCategories[catIndex].floorPlans.push({
      beds: "",
      minSizeSqft: "",
      maxSizeSqft: "",
      icon: "",
      description: "",
    });
    updateParent(newCategories);
  };

  const removeFloorPlan = (catIndex, fpIndex) => {
    const newCategories = [...categories];
    newCategories[catIndex].floorPlans.splice(fpIndex, 1);
    updateParent(newCategories);
  };

  const updateFloorPlanField = (catIndex, fpIndex, field, val) => {
    const newCategories = [...categories];
    newCategories[catIndex].floorPlans[fpIndex][field] = val;
    updateParent(newCategories);
  };
  

  return (
    <div className="border p-4 rounded-md space-y-6">
      <h4 className="text-lg font-semibold mb-2">Floor Plan Categories</h4>
      {categories.map((cat, catIndex) => (
        <div
          key={cat._id || catIndex}
          className="border p-3 rounded-md bg-gray-50"
        >
          <div className="flex justify-between items-center mb-3">
            <input
              type="text"
              placeholder="Category Name"
              className="border px-3 py-1 rounded w-full max-w-xs"
              value={cat.categoryName}
              onChange={(e) => updateCategoryName(catIndex, e.target.value)}
              required
            />
            <button
              type="button"
              onClick={() => removeCategory(catIndex)}
              className="ml-4 text-red-600 font-bold"
            >
              Remove Category
            </button>
          </div>

          <div className="space-y-4">
            {cat.floorPlans.map((fp, fpIndex) => (
              <div
                key={fp._id || fpIndex}
                className="border p-3 rounded bg-white flex flex-wrap gap-4 items-end"
              >
                <input
                  type="number"
                  placeholder="Beds"
                  min="0"
                  value={fp.beds}
                  onChange={(e) =>
                    updateFloorPlanField(
                      catIndex,
                      fpIndex,
                      "beds",
                      e.target.value
                    )
                  }
                  className="border px-2 py-1 rounded w-24"
                  required
                />
                <input
                  type="number"
                  placeholder="Min Sqft"
                  min="0"
                  value={fp.minSizeSqft}
                  onChange={(e) =>
                    updateFloorPlanField(
                      catIndex,
                      fpIndex,
                      "minSizeSqft",
                      e.target.value
                    )
                  }
                  className="border px-2 py-1 rounded w-24"
                  required
                />
                <input
                  type="number"
                  placeholder="Max Sqft"
                  min="0"
                  value={fp.maxSizeSqft}
                  onChange={(e) =>
                    updateFloorPlanField(
                      catIndex,
                      fpIndex,
                      "maxSizeSqft",
                      e.target.value
                    )
                  }
                  className="border px-2 py-1 rounded w-24"
                  required
                />
                <input
                  type="text"
                  placeholder="Icon URL"
                  value={fp.icon}
                  onChange={(e) =>
                    updateFloorPlanField(
                      catIndex,
                      fpIndex,
                      "icon",
                      e.target.value
                    )
                  }
                  className="border px-2 py-1 rounded w-48"
                />
                <input
                  type="text"
                  placeholder="Description"
                  value={fp.description}
                  onChange={(e) =>
                    updateFloorPlanField(
                      catIndex,
                      fpIndex,
                      "description",
                      e.target.value
                    )
                  }
                  className="border px-2 py-1 rounded w-full max-w-md"
                />
                <button
                  type="button"
                  onClick={() => removeFloorPlan(catIndex, fpIndex)}
                  className="text-red-600 font-bold"
                >
                  Remove Floor Plan
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() => addFloorPlan(catIndex)}
              className="mt-2 px-3 py-1 bg-blue-600 text-white rounded"
            >
              + Add Floor Plan
            </button>
          </div>
        </div>
      ))}
      <button
        type="button"
        onClick={addCategory}
        className="px-4 py-2 bg-green-600 text-white rounded"
      >
        + Add Category
      </button>
    </div>
  );
};
