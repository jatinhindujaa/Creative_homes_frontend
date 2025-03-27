function ConfirmDelete({ onCloseModal, resourceName, onConfirm, disabled }) {
  return (
    <div className="w-full flex flex-col gap-4 p-4 bg-white rounded-lg shadow-lg">
      <h3 className="text-lg font-semibold">Delete {resourceName}</h3>
      <p className="text-gray-500">
        Are you sure you want to delete this {resourceName} permanently? This
        action cannot be undone.
      </p>

      <div className="flex justify-end gap-4">
        <button
          onClick={onCloseModal}
          disabled={disabled}
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Cancel
        </button>
        <button
          onClick={onConfirm}
          disabled={disabled}
          className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default ConfirmDelete;
