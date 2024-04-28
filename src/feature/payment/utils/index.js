const correctionPaymentList = (data) => {
  const retunData = data.map((val, index) => ({
    id: val._id,
    key: index,
    paymentAmount: val.amount,
    date: val.created_at,
    sessionMode: val.mode,
    status: val.status,
  }));
  return retunData;
};

export { correctionPaymentList };
