const handleHttpError = (err) => {
  const errorCodeLst = [409, 422, 401];
  const statusCode = err.response?.data.statusCode;

  if (errorCodeLst.includes(statusCode)) {
    return err.response.data.message;
  }
  return 'Đã có lỗi xảy ra!';
};

export default handleHttpError;