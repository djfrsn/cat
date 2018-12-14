/*
  Catch Errors Handler
  Reference: https://github.com/wesbos/Learn-Node
  With async/await, you need some way to catch errors
  Instead of using try{} catch(e) {} in each controller, we wrap the function in
  catchErrors(), catch any errors they throw, and pass it along to our express middleware with next()
*/

export const catchErrors = fn => {
  return function(req, res, next) {
    return fn(req, res, next).catch(next);
  };
};
/*
  Development Error Handler

  In development we show good error messages so if we hit a syntax error or any other previously un-handled error, we can show good info on what happened
*/
export const developmentErrors = (err, req, res, next) => {
  err.stack = err.stack || '';
  const errorDetails = {
    message: err.message,
    status: err.status,
    stackHighlighted: err.stack.replace(
      /[a-z_-\d]+.js:\d+:\d+/gi,
      '<mark>$&</mark>'
    )
  };
  res.status(err.status || 500);
  res.json(errorDetails);
};

/*
  Production Error Handler

  No stacktraces are leaked to user
*/
export const productionErrors = (err, req, res, next) => {
  res.status(err.status || 500);
  res.send('Please try again');
};
