export const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
  
    let errorCode = 500;
    let errorMessage = 'Internal server error';
  
    if (err.name === 'ValidationError') {
      errorCode = 400;
      errorMessage = err.message;
    } else if (err.name === 'CastError') {
      errorCode = 400;
      errorMessage = 'Invalid input data';
    }
  
    res.status(errorCode).json({
      errorCode,
      errorMessage
    });
  };
  
  