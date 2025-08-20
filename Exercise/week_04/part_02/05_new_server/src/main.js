// use request function to send a fake request to a server
const request = require("./request");

function checkPerformance(requestCount) {
  // YOUR CODE HERE
  let promises = [];
  let successTime = 0;
  let successCount = 0;
  let failureTime = 0;
  let failureCount = 0;
  let resultObject = {};
  for (let i = 1; i <= requestCount; i++) {
    promises.push(request());
  }

  return Promise.allSettled(promises).then((resultArr) => {
    resultArr.forEach((resultIndex) => {
      if (resultIndex.status === "fulfilled") {
        successTime += resultIndex.value;
        successCount++;
      } else if (resultIndex.status === "rejected") {
        failureTime += resultIndex.reason;
        failureCount++;
      }
    });
    if (successCount === 0) resultObject.successAverage = 0;
    else resultObject.successAverage = successTime / successCount;
    if (failureCount === 0) resultObject.failureAverage = 0;
    else resultObject.failureAverage = failureTime / failureCount;
    resultObject.performance = (successCount / requestCount) * 100;
    return resultObject;
  });
}

// checkPerformance(3).then((res) => console.log(res));

module.exports = checkPerformance;
