const HistoryItem = () => {
  return (
    <div className="px-2 py-4 pl-11">
      <div className="py-3 text-sm text-gray-300">04.Dec.2024</div>
      <div className="flex flex-col">
        <div className="text-sm text-gray-300">Transaction Type</div>
        <div className="text-lg">Stake</div>
      </div>
      <div className="flex flex-col">
        <div className="text-sm text-gray-300">Amount</div>
        <div className="text-lg">4000 Val</div>
      </div>
    </div>
  );
};

export default HistoryItem;
